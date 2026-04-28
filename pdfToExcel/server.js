import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import multer from 'multer';
import ExcelJS from 'exceljs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Direct path to avoid buggy index.js in pdf-parse
const pdf = require('pdf-parse/lib/pdf-parse.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Ensure directories exist
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
if (!fs.existsSync('outputs')) fs.mkdirSync('outputs');



const app = express();
const PORT = process.env.PORT || 3000;

// CORS for React frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Root Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'PDF to Excel Converter',
        message: 'Welcome to the premium converter!',
        error: null
    });
});


const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        const filePath = req.file.path;

        // 📄 PDF read
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);

        // ✅ Delete uploaded PDF after processing
        fs.unlinkSync(filePath);

        const text = data.text;

        // 🎯 Helper function for cleaning and removing Hindi/Garbage
        const clean = (val) => {
            if (!val || val === "Not Found") return val;
            // 1. Remove Hindi characters (Unicode range for Devanagari)
            let res = val.replace(/[\u0900-\u097F]/g, '');
            // 2. Remove pipes and specific garbage strings
            res = res.replace(/[|]/g, '').trim();
            // 3. Fix PDF doubling artifact (e.g. "959232959232")
            if (res.length > 4 && /^\d+$/.test(res)) {
                const half = res.length / 2;
                if (Number.isInteger(half)) {
                    const firstHalf = res.substring(0, half);
                    const secondHalf = res.substring(half);
                    if (firstHalf === secondHalf) return firstHalf;
                }
            }
            // 4. Final trim and cleanup
            return res.replace(/\s+/g, ' ').trim();
        };

        const extract = (regex, source = text) => {
            const match = source.match(regex);
            if (match) {
                return clean(match[1]);
            }
            return "Not Found";
        };

        const getSection = (header, source = text) => {
            const parts = source.split(new RegExp(header, 'i'));
            return parts.length > 1 ? parts.pop() : "";
        };

        // Utility to style sheets
        const styleSheet = (sheet) => {
            // Header Row Styling
            const headerRow = sheet.getRow(1);
            headerRow.font = { bold: true, color: { argb: 'FFFFFF' }, size: 12 };
            headerRow.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '4F81BD' } // Clean Blue
            };
            headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
            
            // Adjust row height
            headerRow.height = 25;

            // Auto-width for columns
            sheet.columns.forEach(col => {
                col.width = 30;
                col.alignment = { wrapText: true, vertical: 'top' };
            });
        };

        // 🎯 Header Data
        const contactNumber = extract(/Contract\s*No\.?\s*:\s*([A-Z0-9-]+)/i);
        const contractGeneratedDate = extract(/Contract\s*Generated\s*Date\s*:\s*([0-9A-Za-z-]+)/i);
        const bidRaPbpNo = extract(/Bid\s*\/\s*RA\s*\/\s*PBP\s*No\.?\s*:\s*([A-Z0-9\/.]+)/i);
        const duration = extract(/Duration[\s\S]*?(\d+)/i);
        const amountOfContract = extract(/Total\s*Contract\s*Value[\s\S]*?(\d+)/i);

        // ✅ Validation
        if (contactNumber === "Not Found" && bidRaPbpNo === "Not Found") {
            throw new Error("Invalid PDF: Required keys (Contract No or Bid No) not found.");
        }

        const extractedData = {
            contactNumber,
            contractGeneratedDate,
            bidRaPbpNo,
            duration,
            amountOfContract,
        };

        // 📊 Excel create
        const workbook = new ExcelJS.Workbook();

        // ✅ Sheet 1 → Contract Data
        const mainSheet = workbook.addWorksheet("Contract Data");
        mainSheet.columns = [
            { header: "Contact Number", key: "contactNumber" },
            { header: "Contract Generated Date", key: "contractGeneratedDate" },
            { header: "Bid / RA / PBP No", key: "bidRaPbpNo" },
            { header: "Duration (Months)", key: "duration" },
            { header: "Amount of Contract", key: "amountOfContract" },
        ];
        mainSheet.addRow(extractedData);
        styleSheet(mainSheet);

        // ✅ Sheet 2 → Organisation Details
        const orgSection = getSection("Organisation Details");
        const organisationData = {
            type: extract(/Type\s*:\s*([^\n|]+)/i, orgSection),
            ministry: extract(/Ministry\s*:\s*([^\n|]+)/i, orgSection),
            department: extract(/Department\s*:\s*([^\n|]+)/i, orgSection),
            organisationName: extract(/Organisation\s*Name\s*:\s*([^\n|]+)/i, orgSection),
            officeZone: extract(/Office\s*Zone\s*:\s*([^\n|]+)/i, orgSection)
        };

        const orgSheet = workbook.addWorksheet("Organisation Details");
        orgSheet.columns = [
            { header: "Type", key: "type" },
            { header: "Ministry", key: "ministry" },
            { header: "Department", key: "department" },
            { header: "Organisation Name", key: "organisationName" },
            { header: "Office Zone", key: "officeZone" }
        ];
        orgSheet.addRow(organisationData);
        styleSheet(orgSheet);

        // ✅ Sheet 3 → Buyer Details
        const buyerSection = getSection("Buyer Details");
        const buyerData = {
            designation: extract(/Designation\s*:\s*([^\n|]+)/i, buyerSection),
            contactNo: extract(/Contact\s*No\.?\s*:\s*([^\n|]+)/i, buyerSection),
            emailId: extract(/Email\s*ID\s*:\s*([^\n|]+)/i, buyerSection),
            gstin: extract(/GSTIN\s*:\s*([^\n|]+)/i, buyerSection),
            address: extract(/Address\s*:\s*([\s\S]*?)(?=\n[^\n]*?(?:Financial|Paying|Consignee|$))/i, buyerSection)
        };

        const buyerSheet = workbook.addWorksheet("Buyer Details");
        buyerSheet.columns = [
            { header: "Designation", key: "designation" },
            { header: "Contact No.", key: "contactNo" },
            { header: "Email Id", key: "emailId" },
            { header: "GSTIN", key: "gstin" },
            { header: "Address", key: "address" }
        ];
        buyerSheet.addRow(buyerData);
        styleSheet(buyerSheet);

        // ✅ Sheet 4 → Financial Approval Details
        const financeSection = getSection("Financial Approval Detail");
        const financeData = {
            ifdConcurrence: extract(/IFD\s*Concurrence\s*:\s*(.*)/i, financeSection),
            designationOfAdministrativeApproval: extract(/Designation\s*of\s*Administrative\s*Approval\s*:\s*(.*)/i, financeSection),
            designationOfFinancialApproval: extract(/Designation\s*of\s*Financial\s*Approval\s*:\s*(.*)/i, financeSection),
        };

        const financeSheet = workbook.addWorksheet("Financial Approval Details");
        financeSheet.columns = [
            { header: "IFD Concurrence", key: "ifdConcurrence" },
            { header: "Designation of Administrative Approval", key: "designationOfAdministrativeApproval" },
            { header: "Designation of Financial Approval", key: "designationOfFinancialApproval" },
        ];
        financeSheet.addRow(financeData);
        styleSheet(financeSheet);

        // ✅ Sheet 5 → Paying Authority Details
        const payingSection = getSection("Paying Authority Details");
        const payingData = {
            role: extract(/Role\s*:\s*([^\n|]+)/i, payingSection),
            paymentMode: extract(/Payment\s*Mode\s*:\s*([^\n|]+)/i, payingSection),
            designation: extract(/Designation\s*:\s*([^\n|]+)/i, payingSection),
            emailId: extract(/Email\s*ID\s*:\s*([^\n|]+)/i, payingSection),
            gstin: extract(/GSTIN\s*:\s*([^\n|]+)/i, payingSection),
            address: extract(/Address\s*:\s*([\s\S]*?)(?=\n[^\n]*?(?:Consignee|Service|$))/i, payingSection)
        };

        const payingSheet = workbook.addWorksheet("Paying Authority Details");
        payingSheet.columns = [
            { header: "Role", key: "role" },
            { header: "Payment Mode", key: "paymentMode" },
            { header: "Designation", key: "designation" },
            { header: "Email Id", key: "emailId" },
            { header: "GSTIN", key: "gstin" },
            { header: "Address", key: "address" }
        ];
        payingSheet.addRow(payingData);
        styleSheet(payingSheet);

        // ✅ Sheet 6 → Consignee Details
        const consigneeSection = getSection("Consignee Details");
        const consigneeData = {
            contact: extract(/Contact\s*:\s*([^\n|]+)/i, consigneeSection),
            emailId: extract(/Email\s*ID\s*:\s*([^\n|]+)/i, consigneeSection),
            gstin: extract(/GSTIN\s*:\s*([^\n|]+)/i, consigneeSection),
            address: extract(/Address\s*:\s*([\s\S]*?)(?=\r?\n[^\n]*?(?:Monthly|Service|S\.No|$))/i, consigneeSection),
            // Look for the actual summary text starting with 'Monthly Basis'
            serviceDescription: extract(/(Monthly\s*Basis[\s\S]*?)(?=\n[^\n]*?(?:Service\s*Provider|Service\s*Details|$))/i, consigneeSection) || 
                                extract(/Service\s*Description\s*[|\s]*(?:1\s*)?(?:Contact[\s\S]*?)?([\s\S]*?)(?=\n[^\n]*?(?:Service\s*Provider|Service\s*Details|$))/i, consigneeSection)
        };

        const consigneeSheet = workbook.addWorksheet("Consignee Details");
        consigneeSheet.columns = [
            { header: "Contact", key: "contact" },
            { header: "Email Id", key: "emailId" },
            { header: "GSTIN", key: "gstin" },
            { header: "Address", key: "address" },
            { header: "Service Description", key: "serviceDescription" }
        ];
        consigneeSheet.addRow(consigneeData);
        styleSheet(consigneeSheet);

        // ✅ Sheet 7 → Service Provider Details
        const serviceProviderSection = getSection("Service Provider Details");
        const serviceProviderData = {
            gemSellerId: extract(/GeM\s*Seller\s*ID\s*:\s*([^\n|]+)/i, serviceProviderSection),
            companyName: extract(/Company\s*Name\s*:\s*([^\n|]+)/i, serviceProviderSection),
            contactNumber: extract(/Contact\s*No\.?\s*:\s*([^\n|]+)/i, serviceProviderSection),
            emailId: extract(/Email\s*ID\s*:\s*([^\n|]+)/i, serviceProviderSection),
            address: extract(/Address\s*:\s*([\s\S]*?)(?=\n[^\n]*?(?:MSME|$))/i, serviceProviderSection),
            msmeRegistrationNumber: extract(/MSME\s*Registration\s*number\s*:\s*([^\n|]+)/i, serviceProviderSection),
            gstin: extract(/GSTIN\s*:\s*([^\n|]+)/i, serviceProviderSection),
            msmeStatusAsVerifiedByBuyer: extract(/MSME\s*Status[\s\S]*?:\s*([^\n|]+)/i, serviceProviderSection),
            mseSocialCategory: extract(/MSE\s*Social\s*Category\s*:\s*([^\n|]+)/i, serviceProviderSection),
            mseGender: extract(/MSE\s*Gender\s*:\s*([^\n|]+)/i, serviceProviderSection)
        };

        const serviceProviderSheet = workbook.addWorksheet("Service Provider Details");
        serviceProviderSheet.columns = [
            { header: "GeM Seller ID", key: "gemSellerId" },
            { header: "Company Name", key: "companyName" },
            { header: "Contact Number", key: "contactNumber" },
            { header: "Email Id", key: "emailId" },
            { header: "Address", key: "address" },
            { header: "MSME Registration Number", key: "msmeRegistrationNumber" },
            { header: "GSTIN", key: "gstin" },
            { header: "MSME Status", key: "msmeStatusAsVerifiedByBuyer" },
            { header: "MSE Social Category", key: "mseSocialCategory" },
            { header: "MSE Gender", key: "mseGender" }
        ];
        serviceProviderSheet.addRow(serviceProviderData);
        styleSheet(serviceProviderSheet);

        // ✅ Sheet 8 → Service Details
        const serviceDetailsSection = getSection("Service Details");
        const serviceDetailsData = {
            serviceStartDate: extract(/Service\s*Start\s*Date.*?[:\s]+.*?\b([0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4})\b/i, serviceDetailsSection),
            serviceEndDate: extract(/Service\s*End\s*Date.*?[:\s]+.*?\b([0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4})\b/i, serviceDetailsSection),
            categoryName: extract(/Category\s*Name\s*:\s*([^\n|]+)/i, serviceDetailsSection),
            billingCycle: extract(/Billing\s*Cycle\s*:\s*([^\n|]+)/i, serviceDetailsSection),
            district: extract(/DistrictDistrict\s*([^\n|]+)/i, serviceDetailsSection),
            zipcode: extract(/ZipcodeZipcode\s*([^\n|]+)/i, serviceDetailsSection),
            vehicleType: extract(/Vehicle\s*TypeVehicle\s*Type\s*([^\n|]+)/i, serviceDetailsSection),
            typeOfCar: extract(/Type\s*of\s*car\s*\(.*?\)\s*Type\s*of\s*car\s*\(.*?\)\s*([\s\S]*?)(?:\r?\n[^\n]*?(?:\r?\n\r?\n|Usage|Description|$))/i, serviceDetailsSection)
        };

        const serviceDetailsSheet = workbook.addWorksheet("Service Details");
        serviceDetailsSheet.columns = [
            { header: "Service Start Date", key: "serviceStartDate" },
            { header: "Service End Date", key: "serviceEndDate" },
            { header: "Category Name", key: "categoryName" },
            { header: "Billing Cycle", key: "billingCycle" },
            { header: "District", key: "district" },
            { header: "Zipcode", key: "zipcode" },
            { header: "Vehicle Type", key: "vehicleType" },
            { header: "Type of car", key: "typeOfCar" }
        ];
        serviceDetailsSheet.addRow(serviceDetailsData);
        styleSheet(serviceDetailsSheet);

        const outputPath = `outputs/output-${Date.now()}.xlsx`;

        await workbook.xlsx.writeFile(outputPath);

        // 📥 send file and cleanup
        res.download(outputPath, (err) => {
            if (err) {
                console.error("Download Error:", err);
            }
            // ✅ Delete Excel file after download completes
            if (fs.existsSync(outputPath)) {
                fs.unlinkSync(outputPath);
            }
        });

    } catch (error) {
        console.error("Processing Error:", error.message);

        // cleanup on error if file still exists
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        // Render index with error message instead of simple res.send
        res.render('index', {
            title: 'PDF to Excel Converter',
            message: 'Welcome to the premium converter!',
            error: error.message
        });
    }


});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


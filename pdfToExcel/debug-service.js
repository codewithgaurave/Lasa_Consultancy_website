import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse/lib/pdf-parse.js');

const filePath = 'C:/Users/AJAY/Downloads/GEM-511687770079529-12092025.pdf';

async function testPdf() {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        const text = data.text;
        
        const serviceDetailsSection = text.split(/Service Details/i).pop();
        
        const extract = (regex, source = text) => {
            const match = source.match(regex);
            return match ? match[1].trim() : "Not Found";
        };

        const results = {
            serviceStartDate: extract(/Service\s*Start\s*Date.*?:\s*([0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4})/i, serviceDetailsSection),
            serviceEndDate: extract(/Service\s*End\s*Date.*?:\s*([0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4})/i, serviceDetailsSection),
            categoryName: extract(/Category\s*Name\s*:\s*([^\n|]+)/i, serviceDetailsSection),
            billingCycle: extract(/Billing\s*Cycle\s*:\s*([^\n|]+)/i, serviceDetailsSection),
            district: extract(/District\s*District\s*([^\n|]+)/i, serviceDetailsSection),
            zipcode: extract(/Zipcode\s*Zipcode\s*([^\n|]+)/i, serviceDetailsSection),
            vehicleType: extract(/Vehicle\s*Type\s*Vehicle\s*Type\s*([^\n|]+)/i, serviceDetailsSection),
            // Updated regex for Type of car
            typeOfCar: extract(/Type\s*of\s*car\s*\(.*?\)\s*Type\s*of\s*car\s*\(.*?\)\s*([\s\S]*?)(?:\r?\n[^\n]*?(?:\r?\n\r?\n|Usage|Description|$))/i, serviceDetailsSection)
        };
        console.log("Results:", results);

    } catch (error) {
        console.error("Error reading PDF:", error);
    }
}

testPdf();

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import UploadPDFPage from './pages/UploadPDFPage'
import ContactPage from './pages/ContactPage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import TrainingPage from './pages/TrainingPage'
import ConsultationPage from './pages/ConsultationPage'

const App = () => {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/upload-pdf" element={<UploadPDFPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/trainings" element={<TrainingPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
          <Footer />
          <FloatingButtons />
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App

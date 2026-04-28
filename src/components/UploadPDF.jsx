import { useState, useRef } from 'react'
import { Box, Heading, Text, Flex, Button, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import BACKEND_URL from '../config'

const MotionBox = motion(Box)

const UploadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const UploadPDF = () => {
  const { isDark } = useTheme()
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef()

  const handleFile = (file) => {
    if (file && file.type === 'application/pdf') {
      setFileName(file.name)
      setError('')
    } else {
      setError('Please select a valid PDF file.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = fileRef.current.files[0]
    if (!file) return setError('Please select a PDF file.')
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('pdf', file)
      const res = await fetch(`${BACKEND_URL}/upload`, { method: 'POST', body: formData })
      if (!res.ok) throw new Error('Conversion failed. Please check the PDF format.')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = file.name.replace('.pdf', '.xlsx')
      a.click()
      URL.revokeObjectURL(url)
      setFileName('')
      fileRef.current.value = ''
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box id="upload-pdf" bg={isDark ? 'gray.800' : 'gray.50'} py={{ base: 12, md: 16, lg: 20, xl: 24 }}>
      <Box maxW="1600px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" mb={{ base: 8, md: 10, lg: 12 }}>
          <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} bgGradient="linear(to-r, orange.900, orange.700, yellow.600)" bgClip="text" mb={6}>Lasa Consultants & Organizations</Heading>
          <Box w="24" h="1" bg="yellow.600" mx="auto" mb={6} />
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} maxW="3xl" mx="auto" px={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Securely upload your PDF contracts for intelligent data extraction and analysis.</Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          bg={isDark ? 'gray.700' : 'white'} borderRadius={{ base: '2xl', md: '3xl' }} shadow="2xl" p={{ base: 6, md: 8, lg: 10, xl: 12 }}>
          <form onSubmit={handleSubmit}>
            <Box
              as="label"
              htmlFor="pdf-home"
              border="2px dashed"
              borderColor={fileName ? 'orange.500' : isDark ? 'gray.600' : 'gray.300'}
              borderRadius="2xl"
              p={{ base: 8, md: 12, lg: 16, xl: 20 }}
              textAlign="center"
              display="block"
              _hover={{ borderColor: 'yellow.600', bg: isDark ? 'gray.600' : 'gray.50' }}
              transition="all 0.3s"
              cursor="pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]) }}
            >
              <Box mx="auto" mb={4} w="fit-content" p={4} borderRadius="full" bg={isDark ? 'gray.600' : 'gray.100'} color={isDark ? 'yellow.400' : 'orange.600'}>
                <UploadIcon />
              </Box>
              <Heading size={{ base: 'md', md: 'lg', lg: 'xl' }} mb={{ base: 4, md: 6 }} color={isDark ? 'white' : 'gray.800'}>
                {fileName || 'Select PDF Contract'}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} px={2} color={isDark ? 'gray.300' : 'gray.700'}>
                Drag and drop your file here, or <Text as="span" color="orange.600" fontWeight="bold" textDecoration="underline">click to browse</Text>
              </Text>
              <Flex justify="center" gap={{ base: 2, md: 3 }} fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" textTransform="uppercase" opacity="0.6" flexWrap="wrap" color={isDark ? 'gray.400' : 'gray.600'}>
                <Text>PDF</Text><Text>•</Text><Text>MAX 10MB</Text>
              </Flex>
              <input ref={fileRef} id="pdf-home" type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => handleFile(e.target.files[0])} />
            </Box>
            {error && <Text color="red.400" mt={4} textAlign="center" fontWeight="semibold">{error}</Text>}
            <Flex justify="center" mt={6}>
              <Button
                type="submit"
                isDisabled={!fileName || loading}
                bg="orange.600"
                color="white"
                size="lg"
                px={10}
                _hover={{ bg: 'orange.700' }}
                borderRadius="xl"
              >
                {loading ? <><Spinner size="sm" mr={2} /> Converting...</> : 'Convert to Excel'}
              </Button>
            </Flex>
          </form>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default UploadPDF

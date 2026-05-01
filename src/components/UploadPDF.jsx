import { useState, useRef } from 'react'
import { Box, Heading, Text, Flex, Button, Spinner, VStack, HStack, Icon } from '@chakra-ui/react'
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
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef()

  const handleFiles = (selected) => {
    const pdfs = Array.from(selected).filter(f => f.type === 'application/pdf')
    if (pdfs.length !== selected.length) setError('Sirf PDF files allowed hain.')
    else setError('')
    setFiles(prev => {
      const names = prev.map(f => f.name)
      return [...prev, ...pdfs.filter(f => !names.includes(f.name))]
    })
  }

  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!files.length) return setError('Koi PDF select nahi ki.')
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      files.forEach(f => formData.append('pdf', f))
      const res = await fetch(`${BACKEND_URL}/upload`, { method: 'POST', body: formData })
      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: 'Conversion failed. PDF format check karo.' }))
        throw new Error(errData.error || 'Conversion failed.')
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = files.length === 1 ? files[0].name.replace('.pdf', '.xlsx') : 'contracts.xlsx'
      a.click()
      URL.revokeObjectURL(url)
      setFiles([])
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
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          textAlign="center" mb={{ base: 8, md: 10, lg: 12 }}>
          <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} bgGradient="linear(to-r, orange.900, orange.700, yellow.600)" bgClip="text" mb={6}>Lasa Consultants & Organizations</Heading>
          <Box w="24" h="1" bg="yellow.600" mx="auto" mb={6} />
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} maxW="3xl" mx="auto" px={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Multiple PDF contracts upload karo — har PDF ka alag Excel generate hoga.</Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          bg={isDark ? 'gray.700' : 'white'} borderRadius={{ base: '2xl', md: '3xl' }} shadow="2xl" p={{ base: 6, md: 8, lg: 10, xl: 12 }}>
          <form onSubmit={handleSubmit}>
            <Box
              as="label" htmlFor="pdf-home"
              border="2px dashed"
              borderColor={files.length ? 'orange.500' : isDark ? 'gray.600' : 'gray.300'}
              borderRadius="2xl" p={{ base: 8, md: 10 }} textAlign="center" display="block"
              _hover={{ borderColor: 'yellow.600', bg: isDark ? 'gray.600' : 'gray.50' }}
              transition="all 0.3s" cursor="pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files) }}
            >
              <Box mx="auto" mb={4} w="fit-content" p={4} borderRadius="full" bg={isDark ? 'gray.600' : 'gray.100'} color={isDark ? 'yellow.400' : 'orange.600'}>
                <UploadIcon />
              </Box>
              <Heading size={{ base: 'md', md: 'lg' }} mb={3} color={isDark ? 'white' : 'gray.800'}>PDF Files Select Karo</Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} mb={3} color={isDark ? 'gray.300' : 'gray.700'}>
                Drag & drop karo ya <Text as="span" color="orange.600" fontWeight="bold" textDecoration="underline">click karo</Text>
              </Text>
              <Text fontSize="xs" opacity="0.6" color={isDark ? 'gray.400' : 'gray.500'}>Multiple PDFs select kar sakte ho • Max 10MB each</Text>
              <input ref={fileRef} id="pdf-home" type="file" accept=".pdf" multiple style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
            </Box>

            {files.length > 0 && (
              <VStack mt={4} align="stretch" spacing={2}>
                {files.map(f => (
                  <HStack key={f.name} justify="space-between" px={4} py={2}
                    bg={isDark ? 'gray.600' : 'gray.100'} borderRadius="lg">
                    <Text fontSize="sm" color={isDark ? 'white' : 'gray.800'} noOfLines={1}>📄 {f.name}</Text>
                    <Button size="xs" colorScheme="red" variant="ghost" onClick={() => removeFile(f.name)}>✕</Button>
                  </HStack>
                ))}
              </VStack>
            )}

            {error && <Text color="red.400" mt={4} textAlign="center" fontWeight="semibold">{error}</Text>}

            <Flex justify="center" mt={6}>
              <Button type="submit" isDisabled={!files.length || loading}
                bg="orange.600" color="white" size="lg" px={10}
                _hover={{ bg: 'orange.700' }} borderRadius="xl">
                {loading ? <><Spinner size="sm" mr={2} />Converting...</> : `Convert ${files.length > 0 ? `(${files.length} PDF)` : ''} to Excel`}
              </Button>
            </Flex>
          </form>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default UploadPDF

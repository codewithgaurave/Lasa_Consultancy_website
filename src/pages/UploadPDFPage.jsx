import { useState, useRef } from 'react'
import { Box, Heading, Text, Flex, Container, SimpleGrid, Button, Spinner, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import BACKEND_URL from '../config'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const UploadIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const UploadPDFPage = () => {
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
      if (!res.ok) throw new Error('Conversion failed. PDF format check karo.')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = files.length === 1 ? files[0].name.replace('.pdf', '.xlsx') : 'contracts.zip'
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
    <Box bg={isDark ? 'gray.900' : 'white'}>
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        bg="#111420" h="300px" display="flex" alignItems="center" justifyContent="center">
        <Box textAlign="center" px={4}>
          <MotionHeading initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} size="2xl" color="white" mb={4}>Upload PDF Contracts</MotionHeading>
          <MotionBox initial={{ width: 0 }} animate={{ width: '96px' }} transition={{ duration: 0.6, delay: 0.4 }} w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} fontSize="xl" color="gray.300">Multiple PDFs upload karo — har PDF ka alag Excel generate hoga</MotionText>
        </Box>
      </MotionBox>

      <Container maxW="1200px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 60, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          bg={isDark ? 'gray.800' : 'white'} borderRadius="3xl" shadow="2xl" p={{ base: 8, md: 12 }}>
          <form onSubmit={handleSubmit}>
            <Box
              as="label" htmlFor="pdf-page"
              border="2px dashed"
              borderColor={files.length ? 'orange.500' : isDark ? 'gray.600' : 'gray.300'}
              borderRadius="2xl" p={{ base: 12, md: 16 }} textAlign="center" display="block" cursor="pointer"
              _hover={{ borderColor: 'yellow.600', bg: isDark ? 'gray.700' : 'gray.50' }}
              transition="all 0.3s"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files) }}
            >
              <Box mx="auto" mb={6} w="fit-content" p={6} borderRadius="full" bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'yellow.400' : 'orange.600'}>
                <UploadIcon />
              </Box>
              <Heading size="xl" mb={4} color={isDark ? 'white' : 'gray.800'}>PDF Files Select Karo</Heading>
              <Text fontSize="lg" mb={4} color={isDark ? 'gray.300' : 'gray.700'}>
                Drag & drop karo ya <Text as="span" color="orange.600" fontWeight="bold" textDecoration="underline">click karo</Text>
              </Text>
              <Text fontSize="sm" opacity="0.6" color={isDark ? 'gray.400' : 'gray.500'}>Multiple PDFs select kar sakte ho • Max 10MB each</Text>
              <input ref={fileRef} id="pdf-page" type="file" accept=".pdf" multiple style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
            </Box>

            {files.length > 0 && (
              <VStack mt={6} align="stretch" spacing={2}>
                {files.map(f => (
                  <HStack key={f.name} justify="space-between" px={4} py={2}
                    bg={isDark ? 'gray.700' : 'gray.100'} borderRadius="lg">
                    <Text fontSize="sm" color={isDark ? 'white' : 'gray.800'} noOfLines={1}>📄 {f.name}</Text>
                    <Button size="xs" colorScheme="red" variant="ghost" onClick={() => removeFile(f.name)}>✕</Button>
                  </HStack>
                ))}
              </VStack>
            )}

            {error && <Text color="red.400" mt={4} textAlign="center" fontWeight="semibold">{error}</Text>}

            <Flex justify="center" mt={8}>
              <Button type="submit" isDisabled={!files.length || loading}
                bg="orange.600" color="white" size="lg" px={12}
                _hover={{ bg: 'orange.700' }} borderRadius="xl">
                {loading ? <><Spinner size="sm" mr={2} />Converting...</> : `Convert ${files.length > 0 ? `(${files.length} PDF)` : ''} to Excel`}
              </Button>
            </Flex>
          </form>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }}
          mt={12} p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg">
          <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Why Choose Our Platform?</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {['✓ Fast and accurate data extraction', '✓ Har PDF ka alag Excel file generate hoga', '✓ Multiple PDFs → ZIP mein download'].map((item, i) => (
              <MotionBox key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <Text fontWeight="semibold" color={isDark ? 'white' : 'gray.800'}>{item}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default UploadPDFPage

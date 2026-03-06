import { Box, Heading, Text, Flex, Container, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

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

  return (
    <Box bg={isDark ? 'gray.900' : 'white'}>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        bg="#111420" h="300px" display="flex" alignItems="center" justifyContent="center">
        <Box textAlign="center" px={4}>
          <MotionHeading
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            size="2xl" color="white" mb={4}>Upload PDF Contracts</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Securely upload your PDF contracts for intelligent data extraction and analysis</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1200px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          bg={isDark ? 'gray.800' : 'white'} borderRadius="3xl" shadow="2xl" p={{ base: 8, md: 12 }}>
          <MotionBox
            whileHover={{ borderColor: 'yellow.600', backgroundColor: isDark ? 'gray.700' : 'gray.50' }}
            transition={{ duration: 0.3 }}
            border="2px dashed" borderColor={isDark ? 'gray.600' : 'gray.300'} borderRadius="2xl" p={{ base: 12, md: 20 }} textAlign="center" cursor="pointer">
            <MotionBox
              initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              mx="auto" mb={6} w="fit-content" p={6} borderRadius="full" bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'yellow.400' : 'orange.600'}>
              <UploadIcon />
            </MotionBox>
            <MotionHeading
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Select PDF Contracts</MotionHeading>
            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              fontSize="lg" mb={6} color={isDark ? 'gray.300' : 'gray.700'}>
              Drag and drop your files here, or <Text as="span" color="orange.600" fontWeight="bold" textDecoration="underline">click to browse</Text>
            </MotionText>
            <Flex justify="center" gap={3} fontSize="sm" fontWeight="semibold" textTransform="uppercase" opacity="0.6" flexWrap="wrap" color={isDark ? 'gray.400' : 'gray.600'}>
              <Text>PDF</Text>
              <Text>•</Text>
              <Text>MAX 50MB</Text>
              <Text>•</Text>
              <Text>UP TO 5 FILES</Text>
            </Flex>
          </MotionBox>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          mt={12} p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg">
          <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Why Choose Our Platform?</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              '✓ Fast and accurate data extraction',
              '✓ Organized Excel output with multi-sheet support',
              '✓ Secure end-to-end background processing'
            ].map((item, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}>
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

import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

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
          <Box border="2px dashed" borderColor={isDark ? 'gray.600' : 'gray.300'} borderRadius="2xl" p={{ base: 8, md: 12, lg: 16, xl: 20 }} textAlign="center" _hover={{ borderColor: 'yellow.600', bg: isDark ? 'gray.600' : 'gray.50' }} transition="all 0.3s" cursor="pointer">
            <Box mx="auto" mb={4} w="fit-content" p={4} borderRadius="full" bg={isDark ? 'gray.600' : 'gray.100'} color={isDark ? 'yellow.400' : 'orange.600'}>
              <UploadIcon />
            </Box>
            <Heading size={{ base: 'md', md: 'lg', lg: 'xl' }} mb={{ base: 4, md: 6 }} color={isDark ? 'white' : 'gray.800'}>Select PDF Contracts</Heading>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} px={2} color={isDark ? 'gray.300' : 'gray.700'}>Drag and drop your files here, or <Text as="span" color="orange.600" fontWeight="bold" textDecoration="underline">click to browse</Text></Text>
            <Flex justify="center" gap={{ base: 2, md: 3 }} fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" textTransform="uppercase" opacity="0.6" flexWrap="wrap" color={isDark ? 'gray.400' : 'gray.600'}>
              <Text>PDF</Text>
              <Text>•</Text>
              <Text>MAX 50MB</Text>
              <Text>•</Text>
              <Text>UP TO 5 FILES</Text>
            </Flex>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default UploadPDF

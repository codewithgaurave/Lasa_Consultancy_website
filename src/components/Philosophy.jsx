import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)

const Philosophy = () => {
  const { isDark } = useTheme()
  
  return (
    <Box bg={isDark ? 'gray.800' : 'gray.50'} py={{ base: 12, md: 16, lg: 20, xl: 24 }}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" mb={{ base: 10, md: 14, lg: 16 }}>
          <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} bgGradient="linear(to-r, orange.900, orange.700, yellow.600)" bgClip="text" mb={6}>Our Philosophy</Heading>
          <Box w="24" h="1.5" bg="yellow.600" mx="auto" />
        </MotionBox>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 10, md: 12, lg: 16, xl: 20 }} align="center">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            flex="1">
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Client-centric advisory approach</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Lawful, ethical & compliant engagement</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Sector-focused operational understanding</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Skill-to-employment orientation</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Process-driven execution</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Transparency & accountability</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 6, md: 8 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Long-term value creation</Text>
            <Button as={RouterLink} to="/about" border="2px" borderColor="orange.600" color="orange.600" _hover={{ bg: 'orange.600', color: 'white', textDecoration: 'none' }} size={{ base: 'md', md: 'lg' }} px={{ xl: 8 }} cursor="pointer" transition="all 0.3s" textDecoration="none">Learn More →</Button>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            flex="1" h={{ base: '350px', md: '450px', lg: '550px', xl: '650px' }} position="relative" borderRadius="lg" overflow="hidden" shadow="xl">
            <Image src="/images/image_2.jpg" alt="Philosophy" objectFit="cover" w="full" h="full" />
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  )
}

export default Philosophy

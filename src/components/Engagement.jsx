import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)

const models = [
  'Monthly Retainer Model',
  'Project-Based Consultancy',
  'Milestone-Linked Billing',
  'Strategic Advisory Assignments',
  'Short-Term Bid, Election, Branding, Environmental & Training Engagements'
]

const Engagement = () => {
  const { isDark } = useTheme()
  
  return (
    <Box bg={isDark ? 'gray.900' : 'white'} py={{ base: 16, md: 20, lg: 24, xl: 28 }}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" mb={{ base: 10, md: 14, lg: 16 }}>
          <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} bgGradient="linear(to-r, orange.400, orange.700, yellow.300)" bgClip="text" mb={6}>Engagement Models</Heading>
          <Box w="24" h="1" bg="yellow.600" mx="auto" mb={6} />
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} maxW="4xl" mx="auto" px={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Flexible engagement options designed to match your needs and budget</Text>
        </MotionBox>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} spacing={{ base: 6, md: 8, lg: 10, xl: 12 }}>
          {models.map((model, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              p={{ base: 6, md: 8, lg: 10 }} bg={isDark ? 'gray.800' : 'white'} border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'} borderRadius="xl" _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }} cursor="pointer">
              <Heading size={{ base: 'sm', md: 'md' }} lineHeight="1.4" color={isDark ? 'white' : 'gray.800'}>{model}</Heading>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Engagement

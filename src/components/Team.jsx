import { Box, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)

const Team = () => {
  const { isDark } = useTheme()
  
  return (
    <Box bg={isDark ? 'gray.800' : 'gray.50'} py={{ base: 16, md: 20, lg: 24, xl: 28 }}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" mb={{ base: 10, md: 14, lg: 16 }}>
          <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} bgGradient="linear(to-r, orange.400, orange.700, yellow.300)" bgClip="text" mb={6}>Our Team</Heading>
          <Box w="24" h="1" bg="yellow.600" mx="auto" />
        </MotionBox>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, md: 12, lg: 16, xl: 20 }}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            p={{ base: 8, md: 10, lg: 12 }} bg={isDark ? 'gray.700' : 'white'} borderRadius="2xl" border="1px" borderColor={isDark ? 'gray.600' : 'gray.200'} shadow="lg">
            <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="orange.600" mb={1}>Founder & Principal Consultant</Text>
            <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb={{ base: 6, md: 8 }} color={isDark ? 'white' : 'gray.800'}>Mr. Sanjay Singh</Heading>
            <Text mb={{ base: 4, md: 6 }} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" color={isDark ? 'gray.300' : 'gray.700'}><Text as="span" fontWeight="semibold">Qualifications:</Text> B.Tech – Electrical | LL.B | AIBE Qualified | Human Rights Certification</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" color={isDark ? 'gray.300' : 'gray.700'}><Text as="span" fontWeight="semibold">Expertise:</Text> Infrastructure, Public Procurement, Healthcare Projects, Elections, IPR, Environmental Advisory & Skill Development</Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            p={{ base: 8, md: 10, lg: 12 }} bg={isDark ? 'gray.700' : 'white'} borderRadius="2xl" border="1px" borderColor={isDark ? 'gray.600' : 'gray.200'} shadow="lg">
            <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb={{ base: 6, md: 8 }} color={isDark ? 'white' : 'gray.800'}>Expert Network</Heading>
            <Text mb={{ base: 6, md: 8 }} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" color={isDark ? 'gray.300' : 'gray.700'}>Our extensive network of specialized professionals ensures comprehensive support across all domains:</Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 3, md: 4 }}>
              {['Legal', 'Taxation', 'Procurement', 'Healthcare', 'Election Strategy', 'IPR', 'Environmental', 'Training & Placement'].map((item, i) => (
                <Flex key={i} align="center" gap={2}>
                  <Box w="1.5" h="1.5" borderRadius="full" bg="blue.500" />
                  <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'}>{item}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </MotionBox>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Team

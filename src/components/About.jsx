import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const About = () => {
  const { isDark } = useTheme()
  
  return (
    <Box bg={isDark ? 'gray.900' : 'white'} py={{ base: 12, md: 16, lg: 20, xl: 24 }}>
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        textAlign="center" mb={{ base: 10, md: 14, lg: 16 }}>
        <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} bgGradient="linear(to-r, orange.100, orange.700, yellow.600)" bgClip="text" mb={6}>About Us</Heading>
      </MotionBox>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 10, md: 12, lg: 16, xl: 20 }} align="center">
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            flex="1">
            <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb={{ base: 4, md: 6 }} color={isDark ? 'white' : 'gray.800'}>Who We Are</Heading>
            <Box w="20" h="1" bg="yellow.600" mb={{ base: 6, md: 8 }} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Lasa Consultants & Organisation is a Jaipur-based integrated consultancy and professional services organisation delivering legal, business, procurement, governance, healthcare, intellectual property, environmental and skill-development solutions across India.</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 4, md: 6 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>We operate at the intersection of:<br />- Law & compliance<br />- Business & corporate strategy<br />- Public Procurement & GEM<br />- Governance & risk<br />- Healthcare & technology<br />- Intellectual property & innovation<br />- Environmental & sustainability<br />- Skill development & education</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ base: 6, md: 8 }} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>Our solutions are legally sound, commercially viable, operationally executable, ethically compliant and sector-specific.</Text>
            <Button border="2px" borderColor="orange.600" color="orange.600" _hover={{ bg: 'orange.600', color: 'white', transform: 'scale(1.05)' }} size={{ base: 'md', md: 'lg' }} px={{ xl: 8 }} cursor="pointer" transition="all 0.3s">Learn More →</Button>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            flex="1" h={{ base: '350px', md: '450px', lg: '550px', xl: '650px' }} position="relative" borderRadius="lg" overflow="hidden" shadow="xl">
            <Image src="/images/image.webp" alt="Team" objectFit="cover" w="full" h="full" />
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  )
}

export default About

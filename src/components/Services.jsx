import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)

const services = [
  { title: 'Strategic & Election Campaign', desc: 'Clear, actionable strategies that enable leadership teams to make informed decisions, navigate complexity, and achieve sustainable growth.' },
  { title: 'Branding & Promotion Consultancy', desc: 'Strengthening structures, processes, and leadership frameworks to improve efficiency, alignment, and execution across the organization.' },
  { title: 'Trademark & Intellectual Property (IPR) Advisory', desc: 'In-depth insights into market dynamics, competitive landscapes, and growth opportunities to support confident strategic planning.' },
  { title: 'Energy, Environment & Sustainability Advisory', desc: 'Identifying inefficiencies and implementing optimized workflows that enhance productivity, scalability, and operational resilience.' },
  { title: 'Hospital & Healthcare Advisory', desc: 'Strategic guidance for market entry, business expansion, diversification, and scaling initiatives aligned with long-term objectives.' },
  { title: 'Ambulance Services Advisory', desc: 'Developing leadership capabilities, governance practices, and decision-making frameworks that empower organizations to lead effectively.' },
  { title: 'Training Programs', desc: 'Designing and executing high-impact initiatives that strengthen competitive positioning and ensure long-term organizational longevity.' },
  { title: 'Hiring & Placement Services', desc: 'Comprehensive support for executing complex transactions and ensuring seamless post-merger integration to realize full synergy value.' }
]

const Services = () => {
  const { isDark } = useTheme()
  
  return (
    <Box bg={isDark ? 'gray.900' : 'white'} py={{ base: 16, md: 20, lg: 24, xl: 28 }}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          textAlign="center" mb={{ base: 10, md: 14, lg: 16 }}>
          <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} bgGradient="linear(to-r, orange.400, orange.700, yellow.300)" bgClip="text" mb={6}>Our Services And Practices</Heading>
          <Box w="20" h="1" bg="yellow.600" mx="auto" mb={6} />
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} maxW="4xl" mx="auto" px={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>At Lasa Consultants & Organizations, we partner with businesses at every stage of growth to provide strategic clarity, operational strength, and long-term value creation.</Text>
        </MotionBox>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={{ base: 6, md: 8, lg: 10, xl: 12 }} mb={{ base: 10, md: 14 }}>
          {services.map((service, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
              p={{ base: 6, md: 8, lg: 10 }} bg={isDark ? 'gray.800' : 'white'} borderRadius="lg" shadow="md" cursor="pointer" border={isDark ? '1px solid' : 'none'} borderColor={isDark ? 'gray.700' : 'transparent'}>
              <Heading size={{ base: 'sm', md: 'md' }} mb={{ base: 3, md: 4 }} _hover={{ color: 'orange.600' }} color={isDark ? 'white' : 'gray.800'} transition="color 0.3s">{service.title}</Heading>
              <Text color={isDark ? 'gray.400' : 'gray.600'} fontSize={{ base: 'xs', md: 'sm' }} lineHeight="1.7">{service.desc}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
        <MotionBox
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center">
          <Button border="2px" borderColor="orange.600" color="orange.600" _hover={{ bg: 'orange.600', color: 'white', transform: 'scale(1.1)' }} size={{ base: 'md', md: 'lg' }} px={{ xl: 8 }} cursor="pointer" transition="all 0.3s">Learn More →</Button>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default Services

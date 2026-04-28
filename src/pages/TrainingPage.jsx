import { Box, Heading, Text, SimpleGrid, Container, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

const TrainingPage = () => {
  const { isDark } = useTheme()

  const features = [
    { icon: '📚', title: 'Industry-aligned curriculum' },
    { icon: '🎯', title: 'Practical skill development' },
    { icon: '👨🏫', title: 'Expert-led workshops' },
    { icon: '🌐', title: 'Cross-sector employability' }
  ]

  const programs = [
    { icon: '⚖️', title: 'Legal & Compliance Training' },
    { icon: '💼', title: 'Corporate & Business Training' },
    { icon: '🏥', title: 'Facility, Infrastructure & Healthcare Training' },
    { icon: '🗳️', title: 'Elections, Branding, IPR & Environment Modules' },
    { icon: '🎓', title: 'Personal & Professional Development' }
  ]

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
            size="2xl" color="white" mb={4}>Education, Training, Hiring & Placement Academy</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Bridging the gap between education and industry requirements</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1400px" py={20}>
        
        {/* Academy Overview */}
        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={16}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Academy Overview</Heading>
          <Text fontSize="lg" mb={8} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
            The LASA Academy bridges the gap between education, employability and industry requirements across legal, corporate, procurement, healthcare, infrastructure, election, IPR and environmental sectors.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {features.map((item, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                p={6} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" textAlign="center" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'} cursor="pointer">
                <Text fontSize="3xl" mb={3}>{item.icon}</Text>
                <Text fontWeight="semibold" color={isDark ? 'white' : 'gray.800'}>{item.title}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Training Programs */}
        <MotionBox
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={16}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Training Programs</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {programs.map((program, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, x: -60, rotateY: 45 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                p={6} bg={isDark ? 'gray.800' : 'white'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'} shadow="md" cursor="pointer">
                <Text fontSize="2xl" mb={3}>{program.icon}</Text>
                <Text fontSize="lg" fontWeight="semibold" color={isDark ? 'white' : 'gray.800'}>{program.title}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Hiring & Placement */}
        <MotionBox
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          p={10} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
          <Heading size="lg" mb={4} color={isDark ? 'white' : 'gray.800'}>Hiring & Placement Services</Heading>
          <Text fontSize="sm" fontStyle="italic" color={isDark ? 'gray.400' : 'gray.600'} mb={6}>
            *Placement facilitation only. No employment guarantee.
          </Text>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bgGradient="linear(to-r, orange.600, orange.700)" color="white" size="lg" mb={8} cursor="pointer" _hover={{ bgGradient: 'linear(to-r, orange.700, orange.800)' }}>
            Apply for Placement
          </MotionButton>
          
          <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Key Opportunities</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {[
              'Industry-oriented placements',
              'Legal, compliance, procurement & operations roles',
              'Healthcare, EMS & infrastructure roles',
              'Corporate hiring & manpower sourcing'
            ].map((item, i) => (
              <MotionText
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
            ))}
          </SimpleGrid>
        </MotionBox>

      </Container>
    </Box>
  )
}

export default TrainingPage

import { Box, Heading, Text, SimpleGrid, Container, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const ServicesPage = () => {
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
            size="2xl" color="white" mb={4}>Services & Practice Areas</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Expert consultancy across legal, election management, IPR, and infrastructure sectors.</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1400px" py={20}>
        
        {/* Strategic & Election Campaign */}
        <MotionBox
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={20}>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={12} mb={8}>
            <Box flex="1">
              <Heading size="xl" mb={4} color={isDark ? 'white' : 'gray.800'}>Strategic & Election Campaign</Heading>
              <Heading size="md" mb={4} color="orange.600">Branding & Promotion Consultancy</Heading>
              <Text fontSize="md" color={isDark ? 'gray.400' : 'gray.600'} fontStyle="italic">
                Consulting & management support only. No political representation or solicitation.
              </Text>
            </Box>
            <Box flex="1">
              <Heading size="lg" mb={4} color={isDark ? 'white' : 'gray.800'}>Elections Covered</Heading>
              <Text fontSize="md" lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
                Bar Councils, Trade Bodies, Chambers of Commerce, Cooperative Societies, Professional Councils, Associations, Unions, Federations, NGOs & Registered Societies.
              </Text>
            </Box>
          </Flex>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
            <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Key Services</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
              {[
                'Election strategy & roadmap planning',
                'Stakeholder & voter data research',
                'Booth / unit / district-wise planning',
                'Budget planning & fund utilisation tracking',
                'Compliance-driven campaign execution',
                'Campaign branding, creatives & digital outreach',
                'Event, meeting & rally coordination',
                'Influencer & opinion-leader mapping'
              ].map((item, i) => (
                <MotionText
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  fontSize="sm" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
              ))}
            </SimpleGrid>
          </MotionBox>
        </MotionBox>

        {/* Trademark & IPR Advisory */}
        <MotionBox
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={20}>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={12} mb={8}>
            <Box flex="1">
              <Heading size="xl" mb={4} color={isDark ? 'white' : 'gray.800'}>Trademark & Intellectual Property (IPR) Advisory</Heading>
              <Text fontSize="md" color={isDark ? 'gray.400' : 'gray.600'} fontStyle="italic">
                Documentation & coordination support only. Litigation through authorised professionals.
              </Text>
            </Box>
          </Flex>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
            <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Key Services</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
              {[
                'Trademark search & classification advisory',
                'Trademark registration & renewal coordination',
                'Reply drafting for objections & oppositions',
                'Copyright registration advisory',
                'IP assignment & licensing documentation',
                'Brand protection strategy (non-litigation)'
              ].map((item, i) => (
                <MotionText
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  fontSize="sm" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
              ))}
            </SimpleGrid>
          </MotionBox>
        </MotionBox>

        {/* Energy, Environment & Sustainability */}
        <MotionBox
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={20}>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={12} mb={8}>
            <Box flex="1">
              <Heading size="xl" mb={4} color={isDark ? 'white' : 'gray.800'}>Energy, Environment & Sustainability Advisory</Heading>
              <Heading size="md" mb={4} color="orange.600">Sectors:</Heading>
              <Text fontSize="md" lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
                Industries, Hospitals, Infrastructure, Commercial Buildings, Government & Facility Projects.
              </Text>
            </Box>
          </Flex>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
            <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Key Services</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
              {[
                'Energy audit coordination',
                'Water audit & conservation advisory',
                'Air & pollution compliance advisory',
                'PCB compliance, CTE / CTO documentation',
                'Environmental Impact documentation support',
                'ESG & sustainability advisory'
              ].map((item, i) => (
                <MotionText
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  fontSize="sm" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
              ))}
            </SimpleGrid>
          </MotionBox>
        </MotionBox>

        {/* Hospital & Healthcare */}
        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          mb={20}>
          <Heading size="xl" mb={8} color={isDark ? 'white' : 'gray.800'}>Hospital, Healthcare & Ambulance Services Advisory</Heading>
          
          <MotionBox
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            mb={12}>
            <Heading size="lg" mb={6} color={isDark ? 'white' : 'gray.800'}>Hospital & Healthcare</Heading>
            <Box p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                {[
                  'Hospital registration & licensing advisory',
                  'Clinical Establishments Act compliance',
                  'Fire, biomedical waste & pollution compliance',
                  'NABH / NABL documentation support (non-certifying)',
                  'Hospital SOPs & medico-legal formats',
                  'Healthcare GST & statutory compliance coordination'
                ].map((item, i) => (
                  <MotionText
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    fontSize="sm" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
                ))}
              </SimpleGrid>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <Heading size="lg" mb={6} color={isDark ? 'white' : 'gray.800'}>Ambulance & EMS</Heading>
            <Box p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                {[
                  'Ambulance registration & permit advisory',
                  'Motor Vehicles Act & EMS compliance research',
                  'State, PSU & NHM ambulance tender advisory',
                  'GeM & e-procurement support for EMS',
                  'SLA, penalty & contract compliance review'
                ].map((item, i) => (
                  <MotionText
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    fontSize="sm" color={isDark ? 'gray.300' : 'gray.700'}>• {item}</MotionText>
                ))}
              </SimpleGrid>
            </Box>
          </MotionBox>
        </MotionBox>

      </Container>
    </Box>
  )
}

export default ServicesPage

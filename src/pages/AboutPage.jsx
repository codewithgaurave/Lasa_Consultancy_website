import { Box, Heading, Text, SimpleGrid, Container, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const AboutPage = () => {
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
            size="2xl" color="white" mb={4}>LASA CONSULTANTS & ORGANISATION</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Integrated Legal, Business, Strategic, Healthcare, Environmental & Skill Development Advisory</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1400px" py={20}>
        <MotionBox
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={16}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Who We Are</Heading>
          <Text fontSize="lg" mb={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
            Lasa Consultants & Organisation is a Jaipur-based integrated consultancy and professional services organisation delivering legal, business, procurement, governance, healthcare, intellectual property, environmental and skill-development solutions across India.
          </Text>
          <Text fontSize="lg" mb={4} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
            LASA Consultants & Organisation delivers compliance-driven legal research, business consultancy, public procurement and GeM advisory, tender & bid support, infrastructure and healthcare project advisory, election campaign management with branding & promotions, intellectual property compliance, environmental & sustainability advisory, and industry-oriented education, training & placement solutions for individuals, startups, MSMEs, corporates, institutions, healthcare providers and government-linked projects across India.
          </Text>
          <Text fontSize="lg" lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
            Our solutions are legally sound, commercially viable, operationally executable, ethically compliant and sector-specific.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          mb={16}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>We operate at the intersection of:</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {[
              'Law & compliance',
              'Business & corporate strategy',
              'Public procurement & GeM',
              'Infrastructure & technical projects',
              'Healthcare & emergency services',
              'Elections, campaigns, branding & promotions',
              'Trademark & intellectual property protection',
              'Energy, environment & sustainability compliance',
              'Education, training & workforce development'
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

        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          mb={16}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Why Choose LASA</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {[
              '10+ years of multidisciplinary experience',
              'Startup, MSME, enterprise & healthcare-focused advisory',
              'Public procurement, GeM & tender expertise',
              'Hospital, ambulance & EMS compliance support',
              'Election campaigns, branding & promotion consultancy',
              'Trademark, IPR & regulatory compliance support',
              'Energy, water, air & environmental compliance advisory',
              'Ethics-driven, non-litigation consultancy model',
              'Industry-aligned training & placement ecosystem',
              'Pan-India senior expert & consultant network',
              'Transparent, scalable & retainer-friendly engagement models'
            ].map((item, i) => (
              <MotionText
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>✓ {item}</MotionText>
            ))}
          </SimpleGrid>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}>
          <Heading size="xl" mb={6} color={isDark ? 'white' : 'gray.800'}>Core Practice Areas</Heading>
          <Text fontSize="lg" mb={6} color={isDark ? 'gray.300' : 'gray.700'}>
            A quick view of our specialized services designed to drive growth and compliance.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {[
              'Startup & Corporate Advisory',
              'Taxation, GST & ITR Services',
              'Tender, Bid & Procurement Advisory',
              'GeM & e-Procurement Consultancy',
              'Infrastructure & Project Advisory',
              'Hospital, Healthcare & Ambulance Advisory',
              'Election Campaign & Branding',
              'Trademark & IPR Advisory',
              'Energy & Sustainability Advisory',
              'Compliance, Risk & Governance',
              'Education & Training Academy'
            ].map((service, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                p={6} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'} cursor="pointer">
                <Text fontWeight="semibold" color={isDark ? 'white' : 'gray.800'}>{service}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default AboutPage

import { Box, Heading, Text, Input, Textarea, Button, Container, SimpleGrid, Select } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import { useState } from 'react'
import Calendar from '../components/Calendar'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

const ConsultationPage = () => {
  const { isDark } = useTheme()
  const [service, setService] = useState('')
  const [consultant, setConsultant] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)

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
            size="2xl" color="white" mb={4}>Schedule a Consultation</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Book your expert consultation session with LASA</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1200px" py={20}>
        
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          mb={12}>
          <Heading size="lg" mb={4} textAlign="center" color={isDark ? 'white' : 'gray.800'}>Why Schedule a Consultation?</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
            {[
              { title: 'Expert Guidance', desc: 'Get advice from experienced professionals across multiple domains' },
              { title: 'Tailored Solutions', desc: 'Customized strategies for your specific business needs' },
              { title: 'Compliance Focus', desc: 'Ensure legal and regulatory compliance in all operations' }
            ].map((item, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                p={6} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg" textAlign="center" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'} cursor="pointer">
                <Heading size="md" mb={3} color={isDark ? 'white' : 'gray.800'}>{item.title}</Heading>
                <Text fontSize="sm" color={isDark ? 'gray.400' : 'gray.600'}>{item.desc}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Consultation Form */}
        <MotionBox
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          bg={isDark ? 'gray.800' : 'white'} p={{ base: 8, md: 12 }} borderRadius="lg" shadow="2xl" border="1px" borderColor={isDark ? 'gray.700' : 'gray.200'}>
          <Heading size="lg" mb={8} color={isDark ? 'white' : 'gray.800'} textAlign="center">Book a Session</Heading>
          
          <Box as="form">
            <Box mb={6}>
              <Text fontSize="sm" fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'} mb={2}>Full Name*</Text>
              <Input required bg={isDark ? 'gray.700' : 'white'} borderColor={isDark ? 'gray.600' : 'gray.300'} _focus={{ borderColor: 'orange.600' }} />
            </Box>

            <Box mb={6}>
              <Text fontSize="sm" fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'} mb={2}>Mobile Number*</Text>
              <Input required type="tel" bg={isDark ? 'gray.700' : 'white'} borderColor={isDark ? 'gray.600' : 'gray.300'} _focus={{ borderColor: 'orange.600' }} />
            </Box>

            <Box mb={6}>
              <Text fontSize="sm" fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'} mb={2}>Choose Service</Text>
              <Select value={service} onChange={(e) => setService(e.target.value)} bg={isDark ? 'gray.700' : 'white'} borderColor={isDark ? 'gray.600' : 'gray.300'} _focus={{ borderColor: 'orange.600' }}>
                <option value="">Select a service type</option>
                <option value="campaign">Strategic & Election Campaign Branding & Promotion Consultancy</option>
                <option value="ipr">Trademark & Intellectual Property (IPR) Advisory</option>
                <option value="energy">Energy, Environment & Sustainability Advisory</option>
                <option value="healthcare">Hospital, Healthcare & Ambulance Services Advisory</option>
              </Select>
            </Box>

            <Box mb={6}>
              <Text fontSize="sm" fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'} mb={2}>Choose Consultant</Text>
              <Select value={consultant} onChange={(e) => setConsultant(e.target.value)} bg={isDark ? 'gray.700' : 'white'} borderColor={isDark ? 'gray.600' : 'gray.300'} _focus={{ borderColor: 'orange.600' }}>
                <option value="">Select expert consultant</option>
                <option value="sanjay">Mr. Sanjay Singh — Senior Strategy Consultant</option>
              </Select>
            </Box>

            <Box mb={8}>
              <Text fontSize="sm" fontWeight="medium" color={isDark ? 'gray.300' : 'gray.700'} mb={2}>Select Date</Text>
              {selectedDate && (
                <Text fontSize="sm" color="orange.600" mb={2}>
                  Selected: {selectedDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </Text>
              )}
              <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} isDark={isDark} />
            </Box>

            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              w="full" bgGradient="linear(to-r, orange.600, orange.700)" color="white" size="lg" cursor="pointer" _hover={{ bgGradient: 'linear(to-r, orange.700, orange.800)' }}>
              Continue →
            </MotionButton>
          </Box>
        </MotionBox>

      </Container>
    </Box>
  )
}

export default ConsultationPage

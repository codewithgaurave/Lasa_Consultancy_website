import { Box, Heading, Text, Input, Textarea, Button, Flex, Container, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

const ContactPage = () => {
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
            size="2xl" color="white" mb={4}>Contact Us</MotionHeading>
          <MotionBox
            initial={{ width: 0 }}
            animate={{ width: '96px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            fontSize="xl" color="gray.300">Get in touch with our team for consultancy and support</MotionText>
        </Box>
      </MotionBox>

      {/* Content Section */}
      <Container maxW="1400px" py={20}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={16}>
          {/* Contact Info */}
          <MotionBox
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            flex="1">
            <Heading size="xl" mb={8} color={isDark ? 'white' : 'gray.800'}>Reach Out</Heading>
            <Text fontSize="lg" mb={8} lineHeight="1.8" color={isDark ? 'gray.300' : 'gray.700'}>
              Ready to partner with Lasa for your legal talent and consulting needs? Contact us today to explore how we can support your growth and success.
            </Text>
            
            <Box mb={8}>
              <Heading size="md" mb={4} color={isDark ? 'white' : 'gray.800'}>Contact Information</Heading>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                mb={4}>
                <Text fontWeight="semibold" color={isDark ? 'gray.300' : 'gray.700'}>Email:</Text>
                <Text color="orange.600">lasainfra@hotmail.com</Text>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                mb={4}>
                <Text fontWeight="semibold" color={isDark ? 'gray.300' : 'gray.700'}>Phone:</Text>
                <Text color="orange.600">+91-9694919394</Text>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <Text fontWeight="semibold" color={isDark ? 'gray.300' : 'gray.700'}>Address:</Text>
                <Text color={isDark ? 'gray.300' : 'gray.700'}>Jaipur, Rajasthan – 302026</Text>
              </MotionBox>
            </Box>
          </MotionBox>

          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: 80, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            flex="1" bg="#111420" p={{ base: 8, md: 12 }} borderRadius="lg" shadow="2xl">
            <Heading size="lg" color="white" mb={8}>Send us a message</Heading>
            <Box as="form" color="white">
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>Organization Name*</Text>
                <Input variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} />
              </Box>
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>Email Address*</Text>
                <Input type="email" variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} />
              </Box>
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>Phone Number</Text>
                <Input type="tel" variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} />
              </Box>
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>Subject*</Text>
                <Input variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} />
              </Box>
              <Box mb={8}>
                <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>Message*</Text>
                <Textarea variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} rows={4} />
              </Box>
              <MotionButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                w="full" bg="#d4f995" color="black" _hover={{ bg: '#c2e884' }} size="lg" cursor="pointer">Send Message →</MotionButton>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactPage

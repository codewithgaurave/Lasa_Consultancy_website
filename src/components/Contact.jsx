import { Box, Heading, Text, Input, Textarea, Button, Flex, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import { useState } from 'react'
import { createContact } from '../apis/contacts'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const Contact = () => {
  const { isDark } = useTheme()
  const toast = useToast()
  const [formData, setFormData] = useState({
    organizationName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createContact(formData)
      toast({ title: 'Message sent successfully!', status: 'success', duration: 3000 })
      setFormData({ organizationName: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast({ title: 'Failed to send message', description: error.response?.data?.message || 'Please try again', status: 'error', duration: 3000 })
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <Box id="contact-us" bg={isDark ? 'gray.900' : 'white'} py={{ base: 16, md: 20, lg: 24, xl: 32 }}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 12, lg: 16, xl: 24 }} align="start">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            maxW="2xl" flex="1">
            <Heading size={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={{ base: 8, md: 10, lg: 12 }} color={isDark ? 'white' : 'gray.800'}>Reach Out</Heading>
            <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontWeight="light" lineHeight="1.6" color={isDark ? 'gray.300' : 'gray.700'} mb={{ base: 8, md: 10 }}>Ready to partner with Lasa for your legal talent and consulting needs? Contact us today to explore how we can support your growth and success.</Text>
            
            <Box mb={6}>
              <Text fontSize="sm" color={isDark ? 'gray.500' : 'gray.500'} mb={1}>EMAIL</Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" color={isDark ? 'orange.400' : 'orange.600'}>lasainfra@hotmail.com</Text>
            </Box>
            
            <Box>
              <Text fontSize="sm" color={isDark ? 'gray.500' : 'gray.500'} mb={1}>PHONE</Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" color={isDark ? 'orange.400' : 'orange.600'}>+91-9694919394</Text>
            </Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            bg="#111420" p={{ base: 8, md: 10, lg: 12, xl: 14 }} borderRadius="sm" shadow="2xl" flex="1" w="full" maxW="2xl">
            <Heading size={{ base: 'lg', md: 'xl' }} color="white" mb={{ base: 8, md: 10, lg: 12 }}>Law firm</Heading>
            <Box as="form" color="white" onSubmit={handleSubmit}>
              <Box mb={{ base: 6, md: 8 }}>
                <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="gray.400" mb={2}>Organization Name*</Text>
                <Input required value={formData.organizationName} onChange={(e) => setFormData({...formData, organizationName: e.target.value})} variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} size={{ base: 'md', lg: 'lg' }} />
              </Box>
              <Box mb={{ base: 6, md: 8 }}>
                <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="gray.400" mb={2}>Email Address*</Text>
                <Input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} size={{ base: 'md', lg: 'lg' }} />
              </Box>
              <Box mb={{ base: 6, md: 8 }}>
                <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="gray.400" mb={2}>Subject*</Text>
                <Input required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} size={{ base: 'md', lg: 'lg' }} />
              </Box>
              <Box mb={{ base: 6, md: 8 }}>
                <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="gray.400" mb={2}>Message</Text>
                <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} variant="flushed" borderColor="gray.700" _focus={{ borderColor: 'white' }} rows={1} size={{ base: 'md', lg: 'lg' }} />
              </Box>
              <Button type="submit" isLoading={loading} w="full" bg="#d4f995" color="black" _hover={{ bg: '#c2e884' }} size={{ base: 'md', md: 'lg' }} fontSize={{ xl: 'lg' }} cursor="pointer">Send message →</Button>
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  )
}

export default Contact

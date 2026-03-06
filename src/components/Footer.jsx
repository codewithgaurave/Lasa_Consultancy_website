import { Box, Flex, Heading, Text, Input, Button, Link, SimpleGrid } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" bg="#111420" color="white">
      <Box borderBottom="1px" borderColor="gray.700">
        <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }} py={{ base: 10, md: 12, lg: 14 }}>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={{ base: 6, md: 8 }}>
            <Box textAlign={{ base: 'center', md: 'left' }} flex="1">
              <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb={{ base: 2, md: 3 }}>Subscribe To Our Newsletter</Heading>
              <Text color="gray.300" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Stay ahead with expert insights on the latest industry trends.</Text>
            </Box>
            <Flex gap={{ base: 3, md: 4 }} w={{ base: 'full', md: 'auto' }} direction={{ base: 'column', sm: 'row' }} maxW={{ md: '600px' }}>
              <Input placeholder="Your Email" bg="white" color="gray.900" w={{ base: 'full', sm: '320px', lg: '400px' }} size={{ base: 'md', lg: 'lg' }} />
              <Button bg="white" color="gray.900" _hover={{ bg: 'yellow.600', color: 'white' }} w={{ base: 'full', sm: 'auto' }} size={{ base: 'md', lg: 'lg' }} px={{ lg: 8 }}>Subscribe</Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12, '2xl': 16 }} py={{ base: 10, md: 12, lg: 14 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 8, md: 10, lg: 12 }}>
          <Box>
            <video src="/media/lasa-logo3.webm" style={{ height: '80px' }} autoPlay muted loop playsInline />
            <Heading size={{ base: 'sm', md: 'md', lg: 'lg' }} bgGradient="linear(to-r, red.500, red.700, yellow.500)" bgClip="text" mb={4}>Lasa Consultants & Organisations</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.300" mb={2}>lasainfra@hotmail.com</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.300" mb={2}>+91-9694919394</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.300">Jaipur, Rajasthan – 302026</Text>
          </Box>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={{ base: 4, md: 5 }} textTransform="uppercase">Quick Links</Heading>
            <Flex direction="column" gap={{ base: 2, md: 3 }} fontSize={{ base: 'sm', md: 'md' }} color="gray.300">
              <Link href="/" _hover={{ color: 'yellow.400' }}>Home</Link>
              <Link href="/about" _hover={{ color: 'yellow.400' }}>About Us</Link>
              <Link href="/services" _hover={{ color: 'yellow.400' }}>Our Services</Link>
              <Link href="/trainings" _hover={{ color: 'yellow.400' }}>Training & Academy</Link>
            </Flex>
          </Box>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={{ base: 4, md: 5 }} textTransform="uppercase">Resources</Heading>
            <Flex direction="column" gap={{ base: 2, md: 3 }} fontSize={{ base: 'sm', md: 'md' }} color="gray.300">
              <Link href="/consultation" _hover={{ color: 'yellow.400' }}>Schedule Consultation</Link>
              <Link href="/blogs" _hover={{ color: 'yellow.400' }}>Insights & Blogs</Link>
              <Link href="/#contact-us" _hover={{ color: 'yellow.400' }}>Contact Us</Link>
              <Link href="#" _hover={{ color: 'yellow.400' }}>Privacy Policy</Link>
            </Flex>
          </Box>
          <Box>
            <Heading size={{ base: 'sm', md: 'md' }} mb={{ base: 4, md: 5 }} textTransform="uppercase">Our Location</Heading>
            <Box borderRadius="lg" overflow="hidden" h="200px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973753655!2d75.65046970978641!3d26.88514450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box borderTop="1px" borderColor="gray.700">
        <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12 }} py={{ base: 6, md: 8 }} textAlign="center">
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400">© 2026 Lasa Consultants & Organizations. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer

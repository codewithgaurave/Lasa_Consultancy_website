import { useState } from 'react'
import { Box, Flex, Button, Link, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from '@chakra-ui/react'
import { useTheme } from '../ThemeContext'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isDark, setIsDark } = useTheme()
  
  return (
    <Box bg="#111420" position="sticky" top="0" zIndex="50" borderBottom="1px solid #d97706">
      <Flex maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12 }} justify="space-between" align="center" h={{ base: '16', md: '20' }}>
        <Link href="/" flexShrink={0}>
          <video src="/media/lasa-logo3.webm" style={{ height: '60px' }} autoPlay muted loop playsInline />
        </Link>
        <Flex display={{ base: 'none', lg: 'flex' }} gap={{ lg: 6, xl: 8 }} align="center">
          <Link href="/" color="white" fontSize={{ lg: 'md', xl: 'lg' }} _hover={{ color: 'yellow.400' }}>Home</Link>
          <Link href="/about" color="white" fontSize={{ lg: 'md', xl: 'lg' }} _hover={{ color: 'yellow.400' }}>About Us</Link>
          <Link href="/services" color="white" fontSize={{ lg: 'md', xl: 'lg' }} _hover={{ color: 'yellow.400' }}>Our Services</Link>
          <Link href="/upload-pdf" color="white" fontSize={{ lg: 'md', xl: 'lg' }} _hover={{ color: 'yellow.400' }}>Upload PDF</Link>
          <Link href="/contact" color="white" fontSize={{ lg: 'md', xl: 'lg' }} _hover={{ color: 'yellow.400' }}>Contact Us</Link>
        </Flex>
        <Flex align="center" gap={{ base: 2, md: 3 }} zIndex="10">
          <IconButton 
            icon={isDark ? <SunIcon /> : <MoonIcon />} 
            onClick={() => setIsDark(!isDark)} 
            variant="ghost" 
            color="yellow.300" 
            _hover={{ bg: 'whiteAlpha.200' }}
            aria-label="Toggle theme" 
            size={{ base: 'sm', md: 'md' }}
            cursor="pointer"
          />
          <Button display={{ base: 'none', md: 'flex' }} bgGradient="linear(to-r, orange.600, orange.700)" color="white" size={{ lg: 'sm', xl: 'md' }} _hover={{ bgGradient: 'linear(to-r, orange.700, orange.800)', color: 'white' }} as="a" href="/blogs" cursor="pointer">
            GET INSIGHTS
          </Button>
          <IconButton display={{ base: 'flex', lg: 'none' }} icon={<MenuIcon />} onClick={onOpen} variant="ghost" color="white" aria-label="Menu" />
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#111420">
          <DrawerCloseButton color="white" />
          <DrawerBody pt={20}>
            <VStack spacing={6} align="stretch">
              <Link href="/" color="white" fontSize="lg" onClick={onClose} _hover={{ textDecoration: 'none', color: 'yellow.400' }} textDecoration="none">Home</Link>
              <Link href="/about" color="white" fontSize="lg" onClick={onClose} _hover={{ textDecoration: 'none', color: 'yellow.400' }} textDecoration="none">About Us</Link>
              <Link href="/services" color="white" fontSize="lg" onClick={onClose} _hover={{ textDecoration: 'none', color: 'yellow.400' }} textDecoration="none">Our Services</Link>
              <Link href="/upload-pdf" color="white" fontSize="lg" onClick={onClose} _hover={{ textDecoration: 'none', color: 'yellow.400' }} textDecoration="none">Upload PDF</Link>
              <Link href="/contact" color="white" fontSize="lg" onClick={onClose} _hover={{ textDecoration: 'none', color: 'yellow.400' }} textDecoration="none">Contact Us</Link>
              <Button bgGradient="linear(to-r, orange.600, orange.700)" color="white" onClick={onClose} as="a" href="/blogs" _hover={{ bgGradient: 'linear(to-r, orange.700, orange.800)' }}>GET INSIGHTS</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header

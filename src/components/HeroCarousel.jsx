import { useState, useEffect } from 'react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)

const slides = [
  '/images/image.jpg',
  '/images/image_3.jpg',
  '/images/image_1.jpg'
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Box position="relative" w="full" h={{ base: '400px', md: '500px', lg: '600px' }} overflow="hidden">
      {slides.map((slide, index) => (
        <MotionBox
          key={index}
          position="absolute"
          inset="0"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          bgImage={slide}
          bgSize="cover"
          bgPosition="center center"
          bgRepeat="no-repeat"
        >
          <Box position="absolute" inset="0" bg="blackAlpha.700" />
          <Flex direction="column" align="center" justify="center" h="full" textAlign="center" px={{ base: 4, md: 8, lg: 12, xl: 16 }} color="white" maxW="1920px" mx="auto" position="relative" zIndex="10">
            <MotionHeading
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              size={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }} mb={{ base: 4, md: 6, lg: 8 }} maxW="5xl" lineHeight="1.2" color="white" fontWeight="bold">LASA CONSULTANTS & ORGANISATION</MotionHeading>
            <MotionText
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }} maxW="4xl" mb={{ base: 6, md: 8, lg: 10 }} lineHeight="1.5" color="white" fontWeight="medium">Integrated Legal, Business, Strategic, Healthcare, Environmental & Skill Development Advisory</MotionText>
            <MotionFlex
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: current === index ? 1 : 0, scale: current === index ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              gap={{ base: 3, md: 4, lg: 5 }} wrap="wrap" justify="center" direction={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }} px={{ base: 4, sm: 0 }} maxW="1200px">
              <Button as={RouterLink} to="/consultation" bgGradient="linear(to-r, orange.600, orange.700)" color="white" size={{ base: 'md', md: 'lg', xl: 'lg' }} px={{ xl: 8 }} w={{ base: 'full', sm: 'auto' }} _hover={{ bgGradient: 'linear(to-r, orange.600, orange.700)', transform: 'scale(1.05)', textDecoration: 'none', color: 'white' }} transition="all 0.3s" textDecoration="none">Schedule Consultation</Button>
              <Button as={RouterLink} to="/services" bgGradient="linear(to-r, orange.600, orange.700)" color="white" size={{ base: 'md', md: 'lg', xl: 'lg' }} px={{ xl: 8 }} w={{ base: 'full', sm: 'auto' }} _hover={{ bgGradient: 'linear(to-r, orange.600, orange.700)', transform: 'scale(1.05)', textDecoration: 'none', color: 'white' }} transition="all 0.3s" textDecoration="none">Explore Services</Button>
              <Button as={RouterLink} to="/trainings" bgGradient="linear(to-r, orange.600, orange.700)" color="white" size={{ base: 'md', md: 'lg', xl: 'lg' }} px={{ xl: 8 }} w={{ base: 'full', sm: 'auto' }} _hover={{ bgGradient: 'linear(to-r, orange.600, orange.700)', transform: 'scale(1.05)', textDecoration: 'none', color: 'white' }} transition="all 0.3s" textDecoration="none">Training Programs</Button>
            </MotionFlex>
          </Flex>
        </MotionBox>
      ))}
      <Flex position="absolute" bottom={{ base: 6, md: 8, lg: 10 }} left="50%" transform="translateX(-50%)" gap={{ base: 2, md: 3 }} zIndex="20">
        {slides.map((_, index) => (
          <Box
            key={index}
            w={current === index ? { base: '6', md: '8', lg: '10' } : { base: '2.5', md: '3' }}
            h={{ base: '2.5', md: '3' }}
            borderRadius="full"
            bg={current === index ? 'orange.600' : 'whiteAlpha.600'}
            cursor="pointer"
            onClick={() => setCurrent(index)}
            transition="all 0.3s"
          />
        ))}
      </Flex>
    </Box>
  )
}

export default HeroCarousel

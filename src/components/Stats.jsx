import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const Stats = () => {
  const { isDark } = useTheme()
  
  return (
    <Box py={{ base: 4, md: 6, lg: 8 }} bg={isDark ? 'gray.800' : 'gray.50'}>
      <Box maxW="1920px" mx="auto" px={{ base: 4, md: 6, lg: 8, xl: 12 }}>
        <MotionBox
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          bg={isDark ? 'gray.700' : 'white'} borderRadius={{ base: '2xl', md: '3xl' }} shadow="2xl" p={{ base: 6, md: 8, lg: 10, xl: 12 }} transform={{ base: 'translateY(-24px)', md: 'translateY(-48px)' }} mb={{ base: '-24px', md: '-48px' }}>
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 10, lg: 12, xl: 16 }} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              flex="1" position="relative">
              <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} color="#800020" fontFamily="Georgia, serif" mb={{ base: 2, md: 3, lg: 4 }}>11+ Core Domains</Heading>
              <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} fontWeight="medium" textTransform="uppercase" color={isDark ? 'gray.400' : 'gray.500'}>Integrated Practice Areas</Text>
              <Box display={{ base: 'none', md: 'block' }} position="absolute" right="0" top="50%" transform="translateY(-50%)" h="60%" w="1px" bg={isDark ? 'gray.600' : 'gray.300'} />
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              flex="1" position="relative">
              <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} color="#800020" fontFamily="Georgia, serif" mb={{ base: 2, md: 3, lg: 4 }}>Pan-India</Heading>
              <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} fontWeight="medium" textTransform="uppercase" color={isDark ? 'gray.400' : 'gray.500'}>Expert & Consultant Network</Text>
              <Box display={{ base: 'none', md: 'block' }} position="absolute" right="0" top="50%" transform="translateY(-50%)" h="60%" w="1px" bg={isDark ? 'gray.600' : 'gray.300'} />
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              flex="1">
              <Heading size={{ base: 'lg', md: 'xl', lg: '2xl' }} color="#800020" fontFamily="Georgia, serif" mb={{ base: 2, md: 3, lg: 4 }}>10+ Years</Heading>
              <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} fontWeight="medium" textTransform="uppercase" color={isDark ? 'gray.400' : 'gray.500'}>Multidisciplinary Advisory Experience</Text>
            </MotionBox>
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default Stats

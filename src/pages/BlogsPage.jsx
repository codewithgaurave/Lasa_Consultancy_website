import { Box, Heading, Text, SimpleGrid, Container, Badge, Flex } from '@chakra-ui/react'
import { useTheme } from '../ThemeContext'

const blogs = [
  { emoji: '🚀', badge: 'Latest', category: 'LASA Insights', time: '5 min read', title: 'Startup & Corporate Compliance Guides', desc: 'Essential guides for navigating the complex regulatory landscape for startups and corporates in India.' },
  { emoji: '💼', badge: 'Popular', category: 'LASA Insights', time: '7 min read', title: 'GeM & Tender Strategies', desc: 'Winning strategies for Government e-Marketplace bidding and public procurement tenders.' },
  { emoji: '🗳️', badge: 'Trending', category: 'LASA Insights', time: '6 min read', title: 'Election Campaigns & Branding Insights', desc: 'Data-driven insights into modern election management, voter psychology, and political branding.' },
  { emoji: '®️', badge: 'New', category: 'LASA Insights', time: '4 min read', title: 'Trademark & IP Compliance Updates', desc: 'Stay ahead with the latest updates on trademark registration, copyright laws, and IP protection.' },
  { emoji: '🌿', badge: 'Featured', category: 'LASA Insights', time: '8 min read', title: 'Energy, Environment & ESG Articles', desc: 'Expert analysis on environmental compliance, sustainability audits, and ESG reporting standards.' },
  { emoji: '🚑', badge: 'Latest', category: 'LASA Insights', time: '5 min read', title: 'Hospital & Ambulance Compliance Updates', desc: 'Critical compliance checklists for healthcare providers, hospitals, and ambulance service operators.' },
  { emoji: '🎓', badge: 'Guide', category: 'LASA Insights', time: '6 min read', title: 'Training & Career Development Articles', desc: 'Career advice, skill development tips, and industry trends for students and professionals.' }
]

const BlogsPage = () => {
  const { isDark } = useTheme()

  return (
    <Box bg={isDark ? 'gray.900' : 'white'}>
      {/* Hero Section */}
      <Box bg="#111420" h="300px" display="flex" alignItems="center" justifyContent="center">
        <Box textAlign="center" px={4}>
          <Heading size="2xl" color="white" mb={4}>INSIGHTS & BLOGS</Heading>
          <Box w="24" h="1" bg="yellow.600" mx="auto" mb={4} />
          <Text fontSize="xl" color="gray.300">Expert perspectives on law, business, governance, and compliance.</Text>
        </Box>
      </Box>

      {/* Content Section */}
      <Container maxW="1400px" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogs.map((blog, i) => (
            <Box 
              key={i} 
              p={6} 
              bg={isDark ? 'gray.800' : 'white'} 
              borderRadius="lg" 
              border="1px" 
              borderColor={isDark ? 'gray.700' : 'gray.200'} 
              shadow="md"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="3xl">{blog.emoji}</Text>
                <Badge colorScheme="orange" fontSize="xs">{blog.badge}</Badge>
              </Flex>
              <Text fontSize="xs" color={isDark ? 'gray.400' : 'gray.500'} mb={2}>{blog.category}</Text>
              <Text fontSize="xs" color={isDark ? 'gray.500' : 'gray.400'} mb={3}>{blog.time}</Text>
              <Heading size="md" mb={3} color={isDark ? 'white' : 'gray.800'}>{blog.title}</Heading>
              <Text fontSize="sm" color={isDark ? 'gray.400' : 'gray.600'} mb={4}>{blog.desc}</Text>
              <Text fontSize="sm" color="orange.600" fontWeight="semibold">read article →</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={16} p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg">
          <Text fontSize="lg" color={isDark ? 'gray.300' : 'gray.700'}>
            More in-depth articles and case studies coming soon.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default BlogsPage

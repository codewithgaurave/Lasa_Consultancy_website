import { Box, Heading, Text, SimpleGrid, Container, Badge, Flex, Image, Spinner } from '@chakra-ui/react'
import { useTheme } from '../ThemeContext'
import { useState, useEffect } from 'react'
import { getBlogs } from '../apis/blogs'
import { useNavigate } from 'react-router-dom'

const BlogsPage = () => {
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs(1, 20)
        setBlogs(data.blogs || [])
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

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
        {loading ? (
          <Flex justify="center" align="center" minH="400px">
            <Spinner size="xl" color="orange.500" />
          </Flex>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {blogs.map((blog) => (
                <Box 
                  key={blog._id} 
                  bg={isDark ? 'gray.800' : 'white'} 
                  borderRadius="lg" 
                  border="1px" 
                  borderColor={isDark ? 'gray.700' : 'gray.200'} 
                  shadow="md"
                  _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                  cursor="pointer"
                  overflow="hidden"
                  onClick={() => navigate(`/blogs/${blog.slug}`)}
                >
                  <Image src={blog.thumbnailImage} alt={blog.title} h="200px" w="full" objectFit="cover" />
                  <Box p={6}>
                    <Flex justify="space-between" align="center" mb={3}>
                      <Text fontSize="xs" color={isDark ? 'gray.400' : 'gray.500'}>{blog.category}</Text>
                      {blog.isFeatured && <Badge colorScheme="orange" fontSize="xs">Featured</Badge>}
                    </Flex>
                    <Text fontSize="xs" color={isDark ? 'gray.500' : 'gray.400'} mb={3}>{blog.readTime}</Text>
                    <Heading size="md" mb={3} color={isDark ? 'white' : 'gray.800'} noOfLines={2}>{blog.title}</Heading>
                    <Text fontSize="sm" color={isDark ? 'gray.400' : 'gray.600'} mb={4} noOfLines={3}>{blog.shortDescription}</Text>
                    <Flex justify="space-between" align="center">
                      <Text fontSize="sm" color="orange.600" fontWeight="semibold">read article →</Text>
                      <Text fontSize="xs" color={isDark ? 'gray.500' : 'gray.400'}>{blog.views} views</Text>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
            {blogs.length === 0 && (
              <Box textAlign="center" mt={16} p={8} bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="lg">
                <Text fontSize="lg" color={isDark ? 'gray.300' : 'gray.700'}>No blogs available yet.</Text>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  )
}

export default BlogsPage

import { Box, Heading, Text, Container, Image, Flex, Badge, Spinner, Button } from '@chakra-ui/react'
import { useTheme } from '../ThemeContext'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBlogBySlug } from '../apis/blogs'
import { AiOutlineEye } from 'react-icons/ai'

const BlogDetailPage = () => {
  const { isDark } = useTheme()
  const { slug } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogBySlug(slug)
        setBlog(data.blog)
      } catch (error) {
        navigate('/blogs')
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <Box bg={isDark ? 'gray.900' : 'white'} minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="orange.500" />
      </Box>
    )
  }

  return (
    <Box bg={isDark ? 'gray.900' : 'white'} minH="100vh">
      <Box bg="#111420" pt={24} pb={12}>
        <Container maxW="1200px">
          <Button onClick={() => navigate('/blogs')} mb={6} variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.200' }}>
            ← Back to Blogs
          </Button>
          <Flex gap={3} mb={4} flexWrap="wrap">
            <Badge colorScheme="orange">{blog.category}</Badge>
            {blog.isFeatured && <Badge colorScheme="yellow">Featured</Badge>}
          </Flex>
          <Heading size="2xl" color="white" mb={4}>{blog.title}</Heading>
          <Flex gap={6} color="gray.400" fontSize="sm" flexWrap="wrap">
            <Text>{blog.authorName}</Text>
            <Text>{new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
            <Text>{blog.readTime}</Text>
            <Flex align="center" gap={1}><AiOutlineEye /> {blog.views}</Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="900px" py={12}>
        <Image src={blog.coverImage || blog.thumbnailImage} alt={blog.title} w="full" h="400px" objectFit="cover" borderRadius="lg" mb={8} />
        
        <Box 
          dangerouslySetInnerHTML={{ __html: blog.content }} 
          color={isDark ? 'gray.300' : 'gray.700'}
          fontSize="lg"
          lineHeight="1.8"
          sx={{
            'p': { mb: 4 },
            'h1, h2, h3': { color: isDark ? 'white' : 'gray.800', mt: 6, mb: 4 },
            'ul, ol': { ml: 6, mb: 4 },
            'img': { borderRadius: 'lg', my: 6 }
          }}
        />

        <Flex gap={2} mt={8} flexWrap="wrap">
          {blog.tags?.map((tag, i) => (
            <Badge key={i} colorScheme="gray">{tag}</Badge>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default BlogDetailPage

import { useState } from 'react'
import { Box, Grid, Text, Button, Flex } from '@chakra-ui/react'

const Calendar = ({ selectedDate, onDateSelect, isDark }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth)

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))

  const isToday = (day) => {
    const today = new Date()
    return day === today.getDate() && currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()
  }

  const isSelected = (day) => {
    if (!selectedDate) return false
    return day === selectedDate.getDate() && currentMonth.getMonth() === selectedDate.getMonth() && currentMonth.getFullYear() === selectedDate.getFullYear()
  }

  return (
    <Box bg={isDark ? 'gray.700' : 'white'} border="1px" borderColor={isDark ? 'gray.600' : 'gray.300'} borderRadius="lg" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Button size="sm" onClick={prevMonth}>←</Button>
        <Text fontWeight="bold" color={isDark ? 'white' : 'gray.800'}>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</Text>
        <Button size="sm" onClick={nextMonth}>→</Button>
      </Flex>

      <Grid templateColumns="repeat(7, 1fr)" gap={1} mb={2}>
        {daysOfWeek.map(day => (
          <Text key={day} textAlign="center" fontSize="xs" fontWeight="bold" color={isDark ? 'gray.400' : 'gray.600'}>{day}</Text>
        ))}
      </Grid>

      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        {Array.from({ length: firstDay }).map((_, i) => <Box key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          return (
            <Box
              key={day}
              p={2}
              textAlign="center"
              cursor="pointer"
              borderRadius="md"
              bg={isSelected(day) ? 'orange.600' : isToday(day) ? (isDark ? 'gray.600' : 'gray.200') : 'transparent'}
              color={isSelected(day) ? 'white' : (isDark ? 'white' : 'gray.800')}
              _hover={{ bg: isSelected(day) ? 'orange.700' : (isDark ? 'gray.600' : 'gray.100') }}
              onClick={() => onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
            >
              <Text fontSize="sm">{day}</Text>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Calendar

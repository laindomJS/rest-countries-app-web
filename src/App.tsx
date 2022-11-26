import { Box } from '@chakra-ui/react';
import { Navbar } from './components/navbar/Navbar';

export const App = () => {
  return (
    <Box as="main" w="100%" h="100vh">
      <Navbar />
    </Box>
  )
}

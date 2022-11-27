import { Box, useColorModeValue } from '@chakra-ui/react';
import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/Container';
import { CountryContextProvider } from './context/CountryContext';

export const App = () => {

  const bg = useColorModeValue('light.very-light-gray', 'dark.very-dark-blue');

  return (
    <Box as="main" w="100%" h="100%" bgColor={bg}>
      <Navbar />
        <CountryContextProvider>
          <Container />
        </CountryContextProvider>
    </Box>
  )
}

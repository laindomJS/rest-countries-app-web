import { Box, Grid, GridItem, Heading, useColorModeValue, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
	
  const color = useColorModeValue('light.very-dark-blue', 'dark.white');
  
  return (
		<Box as='main' w='100%' h='100vh'>

			<Grid as='section' placeContent='center' alignContent='center' h="100%">

				<GridItem display="flex" alignItems="center" justifyContent="center" flexDirection="column">
					<Heading as="h1" fontSize={{base:'35px', lg:"45px"}} color={color} textAlign="center">The page you search not exists!</Heading>
					<Link to="/">
            <Button mt=".6rem" w="140px" mx="auto">Go to Home</Button>
          </Link>
				</GridItem>

			</Grid>

		</Box>
	)
}

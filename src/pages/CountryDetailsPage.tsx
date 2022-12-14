import { Box, Button, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useLoaderData } from 'react-router-dom';
import { CountryT } from '../types/Country';
import { Navbar } from '../components/navbar/Navbar';
import { CountryDetails } from '../components/details/CountryDetails';

export const CountryDetailsPage = () => {
	const [country]: CountryT | any = useLoaderData();
	const bg = useColorModeValue('light.very-light-gray', 'dark.very-dark-blue');

	return (
		<Box w='100%' h='100vh' bgColor={bg}>
			<Navbar />

			<Box
				as='main'
				w='100%'
				h={{ base: '100%', lg: '80%' }}
				position='relative'>

				<Link to='/'>
					<Button
						leftIcon={<ArrowBackIcon />}
						w='120px'
						marginLeft={{ base: '2rem', lg: '3rem' }}
						marginTop='2.4rem'
						boxShadow='md'>
						Back
					</Button>
				</Link>

				<Flex
					as='section'
					px={{ base: '1.3rem', lg: '3rem' }}
					w='100%'
					h={{ base: '100%', lg: '90%' }}
					align='center'
					experimental_spaceX={{ base: '1rem', lg: '8rem' }}
					flexDir={{ base: 'column', lg: 'row' }}
					mt={{ base: '2rem', lg: '0' }}>
					<Box as='picture' w={{ base: '90%', lg: '40%' }}>
						<Image src={country.flags.svg} alt={country.name.common} />
					</Box>
					<CountryDetails {...country} />
				</Flex>

			</Box>
		</Box>
	)
}

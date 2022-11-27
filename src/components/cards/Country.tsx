import { CountryT } from '../../types/Country';
import {
	GridItem,
	Image,
	Box,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export const Country = (country: CountryT) => {
	const bg = useColorModeValue('white', 'dark.dark-blue');

	return (
		<GridItem
			as='article'
			w='280px'
			h='fit-content'
			borderRadius='12px'
			boxShadow='md'
			mb='1.5rem'
			bgColor={bg}> 

			<Image
				src={country.flags.png}
				alt={country.name.common}
				borderTopRadius='12px'
				w='100%'
				h='180px' />

			<Box py='2rem' px='1.5rem' textAlign='left'>
				<Heading as='h2' fontSize='23px'>
					{country.name.common}
				</Heading>

				<Box mt='1rem'>
					<Text fontSize='15px' mb='.2rem'>
						Population: {country.population.toLocaleString()}
					</Text>
					<Text fontSize='15px' mb='.2rem'>
						Region: {country.region}
					</Text>
					<Text fontSize='15px' mb='.2rem'>
						Capital: {country.capital}
					</Text>
				</Box>

			</Box>

		</GridItem>
	)
}

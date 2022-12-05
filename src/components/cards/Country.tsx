import { CountryT } from '../../types/Country';
import {
	GridItem,
	Image,
	Box,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Country = (country: CountryT) => {
	const bg = useColorModeValue('white', 'dark.dark-blue');

	return (
		<GridItem
			as={motion.article}
			initial={{ opacity: 0 }}
			w='280px'
			h='fit-content'
			borderRadius='6px'
			boxShadow='md'
			mb='1.5rem'
			transition='.3s ease'
			whileInView={{ opacity: 1 }}
			cursor='pointer'
			_hover={{ transform: 'scale(0.9)'}}
			bgColor={bg}>
				
			<Image
				src={country.flags.png}
				alt={country.name.common}
				borderTopRadius='6px'
				w='100%'
				h='180px' />

			<Box py='2rem' px='1.5rem' textAlign='left'>

				<Heading as='h2' fontSize='20px'>
					{country.name.common}
				</Heading>

				<Box mt='1rem'>
					<Text fontSize='14px' mb='.2rem'>
						<b>Population:</b> {country.population.toLocaleString()}
					</Text>
					<Text fontSize='14px' mb='.2rem'>
						<b>Region:</b> {country.region}
					</Text>
					<Text fontSize='14px' mb='.2rem'>
						<b>Capital:</b> {country.capital}
					</Text>
				</Box>

			</Box>

		</GridItem>
	)
}

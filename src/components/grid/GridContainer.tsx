import { Grid } from '@chakra-ui/react';
import { ListOfCards } from '../cards/ListOfCards';

export const GridContainer = (): JSX.Element => {
	return (
		<Grid
			mt='3rem'
			as='section'
			w='100%'
			h='100%'
			px={{ base: '1rem', lg: '3rem' }}
			templateColumns={{ base: 'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
			alignItems='center'
			gap='15px'
			position="relative">
			<ListOfCards />
		</Grid>
	)
}

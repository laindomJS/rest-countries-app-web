import { Grid } from '@chakra-ui/react';
import { ListOfCards } from '../cards/ListOfCards';

export const GridContainer = (): JSX.Element => {
	return (
		<Grid
			w='100%'
			h='100%'
			templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
			gap='15px'
			position="relative">
			<ListOfCards />
		</Grid>
	)
}

import { Box } from '@chakra-ui/react';
import { GridContainer } from './grid/GridContainer';

export const Container = (): JSX.Element => {
	return (
		<Box
			as='section'
			w='100%'
			h='100%'
			px={{ base: '1rem', lg: '3rem' }}
			mt='3rem'>
			<GridContainer />
		</Box>
	)
}

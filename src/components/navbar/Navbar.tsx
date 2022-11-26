import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { ToggleTheme } from './ToggleTheme';

export const Navbar = (): JSX.Element => {
	const bg = useColorModeValue('white', 'dark.dark-blue');

	return (
		<Flex
			as='nav'
			w='100%'
			h='2rem'
			px={{ base: '1rem', lg: '4rem' }}
			py='2.5rem'
			alignItems='center'
			justifyContent='space-between'
			bgColor={bg}
			boxShadow='md'>
			
      <Heading as='h1' fontSize={{ base: '16px', lg: '24px' }}>
				Where in the World?
			</Heading>

			<ToggleTheme />
		</Flex>
	)
}

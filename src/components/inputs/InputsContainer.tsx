import { Flex } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { RegionSelect } from './RegionSelect';

export const InputsContainer = (): JSX.Element => {
	return (
		<Flex
			w='full'
			my='3rem'
			px={{ base:'1.2rem', lg: '3rem' }}
			alignItems={{base:'flex-start', lg:'center'}}
			justifyContent='space-between'
			flexDir={{ base:'column', lg:'row' }}
			experimental_spaceY={{ base:'.6rem', lg:'0' }}>
			<SearchInput />
			<RegionSelect />
		</Flex>
	)
}

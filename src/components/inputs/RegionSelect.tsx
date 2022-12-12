import { useContext } from 'react';
import { CountryCtx } from '../../context/CountryContext';
import { Select, useColorModeValue } from '@chakra-ui/react';

export const RegionSelect = (): JSX.Element => {
	const bg = useColorModeValue('white', 'dark.dark-blue');
	const color = useColorModeValue('light.very-dark-blue', 'white');

	const { handleRegionName } = useContext(CountryCtx);

	return (
		<Select
			placeholder='Filter by Region'
			_placeholder={{ color }}
			bgColor={bg}
			w='210px'
			h='45px'
			border='none'
      fontSize='14px'
			boxShadow='md'
			onChange={handleRegionName}
			_hover={{ cursor: 'pointer' }}
			ml={{ base:'0', lg:'0' }}>
			<option value='africa'>Africa</option>
			<option value='americas'>America</option>
			<option value='asia'>Asia</option>
			<option value='europe'>Europe</option>
			<option value='oceania'>Oceania</option>
		</Select>
	)
}

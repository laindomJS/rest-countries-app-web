import {
	InputGroup,
	InputLeftElement,
	Input,
	useColorModeValue,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { CountryCtx } from '../../context/CountryContext';
import { useContext } from 'react';

export const SearchInput = (): JSX.Element => {
	
  const { handleChangeName } = useContext(CountryCtx);
  
  const bg = useColorModeValue('white', 'dark.dark-blue');
  const color = useColorModeValue('light.dark-gray', 'light.very-light-gray');

	return (
		<InputGroup w='450px'>
      
			<InputLeftElement
				pointerEvents='none'
				fontSize='1.2em'
				children={<Search2Icon />} />

			<Input
				variant='filled'
				bgColor={bg}
				boxShadow='md'
				type='text'
				placeholder='Search a Country...'
				_placeholder={{ fontSize:'14px', fontWeight: 'bold', color: color }}
        w='full'
				h='45px' 
        onChange={handleChangeName} />

		</InputGroup>
	)
}

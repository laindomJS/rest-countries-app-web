import { useContext } from 'react';
import { CountryCtx } from '../../context/CountryContext';
import { Spinner } from '@chakra-ui/react';
import { Country } from './Country';
import uuid from 'react-uuid';

export const ListOfCards = () => {
	const { countries } = useContext(CountryCtx);

	return (
		<>
			{countries.length < 1 ? (
				<Spinner colorScheme='facebook' mx='auto' mt='2rem' size='lg' />
			) : (
				countries.map((country) => <Country key={uuid()} {...country} />)
			)}
		</>
	)
}

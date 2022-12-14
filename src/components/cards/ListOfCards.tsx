import { useContext } from 'react';
import { CountryCtx } from '../../context/CountryContext';
import { Spinner } from '@chakra-ui/react';
import { Country } from './Country';
import uuid from 'react-uuid';

export const ListOfCards = () => {
	const { filteredCountries, loading } = useContext(CountryCtx);

	return (
		<>
			{loading ? (
				<Spinner
					position='absolute'
					colorScheme='facebook'
					left='50%'
					top='10%'
					size='lg' />
			) : (
				filteredCountries.map((country) => (
					<Country key={uuid()} {...country} />
				))
			)}
		</>
	)
}

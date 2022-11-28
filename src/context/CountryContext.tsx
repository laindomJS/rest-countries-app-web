import { createContext, useState, useEffect } from 'react';
import { getAllCountries } from '../services/getAllCountries';
import { CountryT } from '../types/Country';
import { CountryContext, Props } from '../types/CountryContext';

const defaultState = {
	countries: [],
	loading: true,
}

export const CountryCtx = createContext<CountryContext>(defaultState);

export const CountryContextProvider: React.FC<Props> = ({ children }) => {
	const [countries, setCountries] = useState<CountryT[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getAllCountries()
			.then(data => {
				setCountries(data);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, [])

	return (
		<CountryCtx.Provider value={{ countries, loading }}>
      {children}
    </CountryCtx.Provider>
	)
}

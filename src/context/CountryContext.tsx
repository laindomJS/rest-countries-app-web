import { createContext, useState, useEffect } from 'react';
import { getAllCountries } from '../services/getAllCountries';
import { CountryT } from '../types/Country';
import { CountryContext, Props } from '../types/CountryContext';

const defaultState = {
	filteredCountries: [],
	loading: true,
	handleChangeName : () => {},
	handleRegionName: () => {},
}

export const CountryCtx = createContext<CountryContext>(defaultState);

export const CountryContextProvider: React.FC<Props> = ({ children }) => {
	const [countries, setCountries] = useState<CountryT[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [countryName, setCountryName] = useState<string>('');
	const [regionName, setRegionName] = useState<string>('');

	useEffect(() => {
		getAllCountries()
			.then(data => {
				setCountries(data);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, [])

	const handleChangeName = (e:any):void => {
		setCountryName(e.target.value);
	}

	const handleRegionName = (e:any):void => {
		setRegionName(e.target.value);
	}

	let filteredCountries = countries.filter((country) => (country.name.common.toLowerCase().includes(countryName.toLowerCase())) && country.region.toLowerCase().includes(regionName.toLowerCase()));

	return (
		<CountryCtx.Provider value={{ filteredCountries, loading, handleChangeName, handleRegionName }}>
      {children}
    </CountryCtx.Provider>
	)
}

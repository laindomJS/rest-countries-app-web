import { CountryT } from "../types/Country";

export async function getCountryByName(country:string | undefined):Promise<CountryT> {
	const URL_API = `https://restcountries.com/v3.1/name/${country}`;
	return await fetch(URL_API)
		.then(response => {
			if(!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json();
		})
}
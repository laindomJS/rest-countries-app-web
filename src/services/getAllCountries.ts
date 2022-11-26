import { CountryT } from "../types/Country";

export const getAllCountries = async ():Promise<CountryT[]> => {
  const API_URL = 'https://restcountries.com/v3.1/all';

  const res = await fetch(API_URL);
  const data:CountryT[] = await res.json();
  if(!Array.isArray(data)) {
    throw new Error('The data is not an country array!');
  }
  return data;
}
import { useState, useEffect } from "react"
import { CountryT } from "../types/Country";

// set an state with the name of the borders with cca3 code
export const useGetCountryNames = (country:CountryT) => {
  
  const [countryNames, setCountryNames] = useState<CountryT[]>([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`)
      .then(res => res.json())
      .then(data => setCountryNames(data))
      .catch(err => console.log(err));
  }, [country])

  return countryNames;

}
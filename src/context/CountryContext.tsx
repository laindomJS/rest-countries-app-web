import { createContext, useState, useEffect } from "react";
import { getAllCountries } from "../services/getAllCountries";
import { CountryT } from "../types/Country";
import { CountryContext, Props } from "../types/CountryContext";

const defaultState = {
  countries: [],
}

export const CountryCtx = createContext<CountryContext>(defaultState);

export const CountryContextProvider: React.FC<Props> = ({ children }) => {

  const [countries, setCountries] = useState<CountryT[]>([]);

  useEffect(() => {
    getAllCountries().then(data => setCountries(data)).catch(err => console.error(err));
  }, [])

  return (
    <CountryCtx.Provider value={{countries}}>
      {children}
    </CountryCtx.Provider>
  )
}
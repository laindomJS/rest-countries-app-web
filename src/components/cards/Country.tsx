import { CountryT } from "../../types/Country";

export const Country = (country:CountryT) => {
  return (
    <h1>{country.name.common}</h1>
  )
}
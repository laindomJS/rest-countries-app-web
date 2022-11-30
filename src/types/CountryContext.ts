import { CountryT } from "./Country"

export type CountryContext = {
  filteredCountries: CountryT[],
  loading: boolean,
  handleChangeName: any,
}
export type Props = {
  children: React.ReactNode;
}
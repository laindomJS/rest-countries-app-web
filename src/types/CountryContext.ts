import { CountryT } from "./Country"

export type CountryContext = {
  countries: CountryT[],
  loading: boolean,
}
export type Props = {
  children: React.ReactNode;
}
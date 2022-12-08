import { getCountryByName } from "../services/getCountryByName";

export const getCountry = async ({ params }:any) => {
  return getCountryByName(params.countryName);
}
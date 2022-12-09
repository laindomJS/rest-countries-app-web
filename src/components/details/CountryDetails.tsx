import { Box, Grid, Heading, GridItem, Text } from "@chakra-ui/react";
import { CountryT } from "../../types/Country";

export const CountryDetails = (country:CountryT):JSX.Element => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" alignContent="center">

      <GridItem>
        <Heading fontSize="30px">{country.name.common}</Heading>
        <Box mt=".8rem">
          <Text my=".6rem">Native Name: {country.name.common}</Text>
          <Text my=".6rem">Population: {country.population}</Text>
          <Text my=".6rem">Region: {country.region}</Text>
          <Text my=".6rem">Sub Region: {country.subregion}</Text>
          <Text my=".6rem">Capital: {!country.capital ? 'This country not have capital' : country.capital}</Text>
        </Box>
      </GridItem>

      <GridItem mt="2.4rem">
        <Text my=".6rem">Top Level Domain: {country.tld}</Text>
        <Text my=".6rem">Population: {Object.values(country.currencies).map((currencie) => currencie.name).join(', ')}</Text>
        <Text my=".6rem">Languages: {Object.values(country.languages).map((language) => language).join(', ')}</Text>
      </GridItem>

    </Grid>
  )
}
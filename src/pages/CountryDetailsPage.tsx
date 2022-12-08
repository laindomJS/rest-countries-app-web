import { Box } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export const CountryDetailsPage = () => {

  const country:any = useLoaderData();
  console.log(country);

  return (
    <Box>
      <h1>{country[0].name.common}</h1>
    </Box>
  )
}
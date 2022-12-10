import { Box, Grid, Heading, GridItem, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { CountryT } from '../../types/Country';
import { useGetCountryNames } from '../../hooks/useGetCountryNames';

export const CountryDetails = (country: CountryT): JSX.Element => {

  const countryNames = useGetCountryNames(country);
  const bg = useColorModeValue('white', 'dark.dark-blue');

	return (
		<Box>

			<Grid templateColumns='repeat(2, 1fr)' alignContent='center'>
				<GridItem>
					<Heading fontSize='30px'>{country.name.common}</Heading>
					<Box mt='.8rem'>
						<Text my='.6rem'> <b>Native Name:</b> {country.name.common}</Text>
						<Text my='.6rem'> <b>Population:</b> {country.population.toLocaleString()}</Text>
						<Text my='.6rem'> <b>Region:</b> {country.region}</Text>
						<Text my='.6rem'> <b>Sub Region:</b> {country.subregion}</Text>
						<Text my='.6rem'> <b>Capital:</b>{' '} {!country.capital ? 'This country not have capital' : country.capital}
						</Text>
					</Box>
				</GridItem>

				<GridItem mt='2.4rem'>
					<Text my='.6rem'><b>Top Level Domain:</b> {country.tld}</Text>
					
          <Text my='.6rem'>
						<b>Currencies:</b>{' '}
						{Object.values(country.currencies)
							.map((currencie) => currencie.name)
							.join(', ')}
					</Text>
					
          <Text my='.6rem'>
						<b>Languages:</b>{' '}
						{Object.values(country.languages)
							.map((language) => language)
							.join(', ')}
					</Text>
				</GridItem>
			</Grid>

      <Box mt="2rem">
        <Text>
          <b>Border Countries:</b>
          {!country.borders ? (
            'This country not have borders'
          ) : (
            countryNames.map(c => (
              <Link to={`/country/${c.name.common}`} key={uuid()}>
                <Button
                  as={motion.button}
                  m=".5rem"
                  w="fit-content"
                  h="35px"
                  bgColor={bg}
                  borderRadius="0px"
                  boxShadow="lg"
                  transition=".1s ease"
                  whileHover={{ scale: 0.9 }}>
                  {c.name.common}
                </Button>
              </Link>
            ))
          )}
        </Text>
      </Box>

		</Box>
	)
}

import { useContext } from 'react';
import { CountryCtx } from '../../context/CountryContext';
import { Spinner } from '@chakra-ui/react';
import { Country } from './Country';

export const ListOfCards = () => {

  const { countries } = useContext(CountryCtx);

  return (
    <>
      {
        countries.length < 1
        ? (<Spinner />)
        : (
          countries.map(country => <Country {...country} />)
        )
      }
    </>
  )
}
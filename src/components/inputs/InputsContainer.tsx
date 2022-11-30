import { Flex } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';

export const InputsContainer = ():JSX.Element => {
  return (
    <Flex w="full" my="3rem" px={{lg:"3rem"}} alignItems='center' justifyContent='space-between'>
      <SearchInput />
    </Flex>
  )
}
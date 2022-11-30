import { Flex } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { RegionSelect } from './RegionSelect';

export const InputsContainer = ():JSX.Element => {
  return (
    <Flex w="full" my="3rem" px={{lg:"3rem"}} alignItems='center' justifyContent='space-between'>
      <SearchInput />
      <RegionSelect />
    </Flex>
  )
}
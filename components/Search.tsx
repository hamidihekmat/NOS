import { ChangeEvent, useState } from 'react';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useDebounce } from 'use-debounce';
import { SearchResults } from './SearchResults';
// Icons
import { MagnifyingGlass } from 'phosphor-react';
// SWR
import useSWR from 'swr';
import { searchMedia } from '../api/plex';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery] = useDebounce(query, 500);
  const { data } = useSWR(
    debounceQuery,
    () => (debounceQuery ? searchMedia(debounceQuery) : null),
    { refreshInterval: 0 }
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value.trim());
  };

  return (
    <StyledInputGroup
      size="md"
      borderRadius="lg"
      border="1px solid var(--border-color)"
      maxWidth="20rem"
      position="relative"
    >
      <InputLeftElement
        pointerEvents="none"
        children={<MagnifyingGlass color="var(--primary-color)" size={20} />}
      />
      <Input
        type="Search"
        border="none"
        placeholder="Search..."
        _focus={{ outline: 'none' }}
        _active={{ outline: 'none' }}
        onChange={handleChange}
      />
      {data && (
        <Box
          position="absolute"
          top="100%"
          left="50%"
          marginTop=".5rem"
          transform="translateX(-50%)"
          width="100%"
          bg="var(--bg-primary)"
          border="1px solid var(--border-color)"
          boxShadow="var(--dropdown-shadow)"
          zIndex="99"
          borderRadius="xl"
        >
          <SearchResults data={data} />
        </Box>
      )}
    </StyledInputGroup>
  );
};

const StyledInputGroup = styled(InputGroup)`
  @media (max-width: 768px) {
    width: 11rem;
    min-min-width: 11rem;
  }
`;

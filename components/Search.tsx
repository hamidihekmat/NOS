import { ChangeEvent, useState } from 'react';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useDebounce } from 'use-debounce';
import { SearchResults } from './SearchResults';
import { css } from '@emotion/react';

// Icons
import { MagnifyingGlass } from 'phosphor-react';
// SWR
import useSWR from 'swr';
import { searchMedia } from '../api/plex';
import { scrollStore } from '../store/scrollStore';

export const Search = () => {
  const scroll = scrollStore((state) => state.scroll);
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
      borderRadius="2xl"
      border="1px solid var(--border-color)"
      maxWidth="20rem"
      position="relative"
      overflow="hidden"
      opacity="0.8"
    >
      <InputLeftElement
        pointerEvents="none"
        children={<MagnifyingGlass color="var(--primary-color)" size={20} />}
      />
      <Input
        type="Search"
        border="none"
        fontWeight="bold"
        placeholder="Search..."
        _focus={{ outline: 'none' }}
        _active={{ outline: 'none' }}
        onChange={handleChange}
      />
      {data && (
        <Box
          position="fixed"
          left="50%"
          marginTop=".5rem"
          transform="translateX(-50%)"
          width="30vw"
          mt="3.4rem"
          minW="250px"
          zIndex="99"
          boxShadow="2xl"
          css={css`
            background: ${scroll
              ? `rgba(51, 51, 51, 0.8)`
              : `var(--bg-primary)`};
            backdrop-filter: blur(35px);
            -webkit-font-smoothing: antialiased;
            border: 2px solid transparent;
            transition: all ease 300ms;
          `}
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

import { ChangeEvent, useState } from 'react';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useDebounce } from 'use-debounce';
import { SearchResults } from './SearchResults';
import { css } from '@emotion/react';

import { MagnifyingGlass } from 'phosphor-react';

import useSWR from 'swr';
import { searchMedia } from '../api/tmdb';
import { scrollStore } from '../store/scrollStore';

export const Search = () => {
  const scroll = scrollStore((state) => state.scroll);
  const [query, setQuery] = useState('');
  const [debounceQuery] = useDebounce(query, 500);
  const { data } = useSWR(debounceQuery, () => searchMedia(debounceQuery), {
    refreshInterval: 0,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value.trim());
  };
  return (
    <Box position="relative" as="form">
      <StyledInputGroup
        size="md"
        borderRadius="2xl"
        border="1px solid var(--border-color)"
        overflow="hidden"
        opacity="0.8"
        width="20vw"
      >
        <InputLeftElement
          children={<MagnifyingGlass color="var(--primary-color)" size={20} />}
        />
        <Input
          type="Search"
          border="none"
          placeholder="Search..."
          onChange={handleChange}
        />
      </StyledInputGroup>
      {data && (
        <Box
          position="absolute"
          left="50%"
          top="1rem"
          marginTop="2.5rem"
          width="20vw"
          maxWidth="20vw"
          minW="300px"
          zIndex="99"
          boxShadow="2xl"
          css={css`
            background: ${scroll
              ? `rgba(51, 51, 51, 0.8)`
              : `var(--bg-primary)`};
            backdrop-filter: blur(35px);
            -webkit-backdrop-filter: blur(35);
            transform: translateX(-50%);
            -webkit-font-smoothing: antialiased;
            border: 2px solid transparent;
            transition: all ease 300ms;
          `}
          borderRadius="xl"
        >
          <SearchResults data={data} />
        </Box>
      )}
    </Box>
  );
};

const StyledInputGroup = styled(InputGroup)`
  @media (max-width: 768px) {
    width: 11rem;
    min-min-width: 11rem;
  }
`;

import { useState } from 'react';
// Menu
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Text,
  Box,
} from '@chakra-ui/react';

import styled from '@emotion/styled';
// Utils
import { FilterOption } from '../utils/filter';
// Api
import useSWR from 'swr';
import { fetchFilters } from '../api/plex';
// Store
import { optionsStore } from '../store/moviesOptions';

export const FilterItem = ({
  option,
  setFilter,
}: {
  option: FilterOption;
  setFilter: (event: string) => void;
}) => {
  const [options, setOptions] = optionsStore((state) => [
    state.options,
    state.setOptions,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const { data, error } = useSWR(
    () => (isOpen ? `/filter/${option.value}` : null),
    () => fetchFilters(option.value),
    { revalidateOnFocus: false, refreshInterval: 0 }
  );

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledMenuItem>
      <Menu
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        placement="right-start"
        closeOnSelect={false}
        isLazy
        preventOverflow
      >
        <MenuButton
          as={Box}
          bg="none"
          _hover={{ opacity: 1 }}
          _active={{ opacity: 1 }}
          textAlign="start"
          width="100%"
        >
          {option.name}
        </MenuButton>
        <MenuList
          ml=".5rem"
          zIndex="99"
          bg="var(--bg-primary)"
          boxShadow="var(--dropdown-shadow)"
          border="1px solid var(--border-color)"
          color="hsla(0,0%,100%,.7)"
          maxH="90vh"
          overflow="scroll"
        >
          {data ? (
            <MenuOptionGroup
              title={option.name}
              type="radio"
              onChange={(event) => {
                setFilter(
                  `${option.name} - ${
                    data.Directory.find((directory) => directory.key === event)
                      ?.title
                  }`
                );
                setOptions({
                  ...options,
                  filter: {
                    name: option.value,
                    key: event as string,
                  },
                });
              }}
            >
              {data.Directory.map((directory) => (
                <MenuItemOption
                  as="a"
                  _hover={{ background: 'var(--bg-secondary)' }}
                  key={directory.key}
                  value={directory.key}
                >
                  {directory.title}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          ) : (
            <MenuOptionGroup title={option.name} type="radio">
              <Text>Loading...</Text>
            </MenuOptionGroup>
          )}
        </MenuList>
      </Menu>
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled(MenuItem)`
  :hover {
    background: var(--bg-secondary);
  }
  :focus {
    background: var(--bg-secondary);
  }
`;

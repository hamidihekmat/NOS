import { useState } from 'react';
// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import { CaretRight, CaretUp, CaretDown } from 'phosphor-react';
// Components

export const FilterMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu isLazy closeOnSelect={false}>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        as={Button}
        rightIcon={isOpen ? <CaretDown /> : <CaretUp />}
        bg="var(--bg-primary)"
        _hover={{ opacity: 1 }}
        _active={{ opacity: 1 }}
      >
        Filter
      </MenuButton>
      <MenuList
        zIndex="99"
        bg="var(--bg-primary)"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
      >
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Genre</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Year</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Decade</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Director</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Actor</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Writer</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Producer</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Country</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack width="100%" justifyContent="space-between">
            <Text fontWeight="bold">Studio</Text>
            <CaretRight />
          </HStack>
        </StyledMenuItem>
      </MenuList>
    </Menu>
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

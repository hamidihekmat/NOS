import { VStack, IconButton, Text, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import { HomeIcon } from '../SVG/_HomeIcon';
import { MoviesIcon } from '../SVG/_MoviesIcon';
import { TVIcon } from '../SVG/_TVIcon';
// Store
import { navStore } from '../store/navStore';

export const Nav = () => {
  const nav = navStore((state) => state.nav);
  return (
    <StyledVStack
      nav={nav ? nav : undefined}
      spacing="3"
      alignItems="flex-start"
    >
      <NavItem>
        <StyledIconButton
          maxW="3rem"
          aria-label="Home"
          icon={<HomeIcon color="var(--primary-color)" size={32} />}
        />
        {nav && (
          <Text fontWeight="bold" fontSize="xl">
            Home
          </Text>
        )}
      </NavItem>
      <NavItem>
        <StyledIconButton
          maxW="3rem"
          aria-label="Home"
          icon={<MoviesIcon color="var(--primary-color)" size={32} />}
        />
        {nav && (
          <Text fontWeight="bold" fontSize="xl">
            Movies
          </Text>
        )}
      </NavItem>
      <NavItem>
        <StyledIconButton
          maxW="3rem"
          aria-label="Home"
          icon={<TVIcon color="var(--primary-color)" size={32} />}
        />
        {nav && (
          <Text fontWeight="bold" fontSize="xl">
            TV Shows
          </Text>
        )}
      </NavItem>
    </StyledVStack>
  );
};

interface StyledVStackProp {
  nav: boolean | undefined;
}

const StyledVStack = styled(VStack)<StyledVStackProp>`
  background: var(--bg-primary);
  min-height: calc(100vh - 3.75rem);
  height: calc(100vh - 3.75rem);
  width: ${({ nav }) => (nav ? '12rem' : '4.25rem')};
`;

const StyledIconButton = styled(IconButton)`
  background: none;
  width: 100%;
  border-radius: 0;
  :hover {
    background: transparent;
  }
`;

const NavItem = styled(Box)`
  display: flex;
  padding: 0.5rem;
  padding-left: 1rem;
  width: 100%;
  cursor: pointer;
  align-items: center;
  :hover {
    background: var(--bg-secondary);
  }
`;

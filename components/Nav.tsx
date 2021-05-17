import { VStack, IconButton, Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import { HomeIcon } from '../SVG/_HomeIcon';
import { MoviesIcon } from '../SVG/_MoviesIcon';
import { TVIcon } from '../SVG/_TVIcon';

export const Nav = () => {
  return (
    <StyledVStack spacing="3">
      <Tooltip label="Home" fontSize="md" placement="right-start">
        <StyledIconButton
          aria-label="Home"
          icon={<HomeIcon color="var(--primary-color)" size={32} />}
        />
      </Tooltip>
      <Tooltip label="Movies" fontSize="md" placement="right-start">
        <StyledIconButton
          aria-label="Movies"
          icon={<MoviesIcon color="var(--primary-color)" size={32} />}
        />
      </Tooltip>
      <Tooltip label="TV Shows" fontSize="md" placement="right-start">
        <StyledIconButton
          aria-label="TV Shows"
          icon={<TVIcon color="var(--primary-color)" size={32} />}
        />
      </Tooltip>
    </StyledVStack>
  );
};

export const StyledVStack = styled(VStack)`
  background: var(--bg-primary);
  min-height: calc(100vh - 3.75rem);
  height: calc(100vh - 3.75rem);
  width: 5rem;
`;

export const StyledIconButton = styled(IconButton)`
  background: none;
  width: 100%;
  border-radius: 0;
  :hover {
    background: var(--bg-canvas);
  }
`;

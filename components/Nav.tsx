import { VStack, IconButton, Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import { House, VideoCamera, Monitor } from 'phosphor-react';
export const Nav = () => {
  return (
    <StyledVStack spacing="3">
      <Tooltip label="Home" fontSize="md" placement="right-start">
        <StyledIconButton
          aria-label="Home"
          icon={<House color="var(--font-color)" size={32} />}
        />
      </Tooltip>
      <Tooltip label="Movies" fontSize="md" placement="right-start">
        <StyledIconButton
          bg="none"
          _hover={{ background: 'none' }}
          aria-label="Movies"
          icon={<VideoCamera color="var(--font-color)" size={32} />}
        />
      </Tooltip>
      <Tooltip label="TV Shows" fontSize="md" placement="right-start">
        <StyledIconButton
          bg="none"
          _hover={{ background: 'none' }}
          aria-label="TV Shows"
          icon={<Monitor color="var(--font-color)" size={32} />}
        />
      </Tooltip>
    </StyledVStack>
  );
};

const StyledVStack = styled(VStack)`
  background: var(--bg-primary);
  min-height: calc(100vh - 3.75rem);
  height: calc(100vh - 3.75rem);
  width: 3.75rem;
`;

const StyledIconButton = styled(IconButton)`
  background: none;
  width: 100%;
  border-radius: 0;
  :hover {
    background: var(--bg-canvas);
  }
`;

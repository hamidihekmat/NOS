import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import { MagnifyingGlass } from 'phosphor-react';

export const Search = () => {
  return (
    <StyledInputGroup
      size="md"
      borderRadius="lg"
      border="1px solid var(--border-color)"
      maxWidth="20rem"
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
      />
    </StyledInputGroup>
  );
};

const StyledInputGroup = styled(InputGroup)`
  @media (max-width: 768px) {
    width: 11rem;
  }
`;

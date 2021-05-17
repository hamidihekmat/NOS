import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
// Icons
import { MagnifyingGlass } from 'phosphor-react';

export const Search = () => {
  return (
    <InputGroup
      size="md"
      borderRadius="lg"
      border="1px solid var(--border-color)"
      width="16rem"
    >
      <InputLeftElement
        pointerEvents="none"
        children={<MagnifyingGlass size={20} />}
      />
      <Input
        type="Search"
        border="none"
        placeholder="Search..."
        _focus={{ outline: 'none' }}
        _active={{ outline: 'none' }}
      />
    </InputGroup>
  );
};

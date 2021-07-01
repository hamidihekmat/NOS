import { useState } from 'react';
// Menu
import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';

// Icons
import { CaretUp, CaretDown } from 'phosphor-react';
import { FilterOptions } from '../utils/filter';
// Components
import { FilterItem } from './FilterItem';

export const FilterMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  return (
    <Menu isLazy closeOnSelect={false}>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        borderRadius="0"
        as={Button}
        rightIcon={isOpen ? <CaretUp /> : <CaretDown />}
        bg="var(--bg-primary)"
        _hover={{ opacity: 1 }}
        _active={{ opacity: 1 }}
        p=".5rem 1rem"
      >
        {`Filter - ${filter}`}
      </MenuButton>
      <MenuList
        zIndex="99"
        bg="var(--bg-primary)"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
      >
        {FilterOptions.map((option) => (
          <FilterItem setFilter={setFilter} key={option.id} option={option} />
        ))}
      </MenuList>
    </Menu>
  );
};

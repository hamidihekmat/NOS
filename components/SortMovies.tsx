import { useState } from 'react';
// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
// Icons
import { CaretDown } from 'phosphor-react';
// Utils
import { SortOptions, OrderOptions } from '../utils/sort';
// Store
import { optionsStore } from '../store/moviesOptions';

export const SortMovies = () => {
  const [options, setOptions] = optionsStore((state) => [
    state.options,
    state.setOptions,
  ]);
  const [sortOption, setSortOption] = useState<string | undefined>(
    SortOptions[2].name
  );

  // Order select handle
  const handleOrderSelect = (event) => {
    const option = OrderOptions[event];
    setOptions({ ...options, order: option.value });
  };

  // Sorting select handle
  const handleSortSelect = (event) => {
    const option = SortOptions.find((option) => option.value === event);
    setSortOption(option?.name);
    setOptions({ ...options, sort: '' });
  };

  return (
    <Menu isLazy closeOnSelect={false}>
      <MenuButton
        borderRadius="0"
        as={Button}
        rightIcon={<CaretDown />}
        bg="var(--bg-primary)"
        _hover={{ opacity: 1 }}
        _active={{ opacity: 1 }}
      >
        Sort - {sortOption}
      </MenuButton>
      <MenuList
        zIndex="99"
        bg="var(--bg-primary)"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
      >
        <MenuOptionGroup
          defaultValue={OrderOptions.asc.value}
          title="Order"
          type="radio"
          onChange={(event) => handleOrderSelect(event)}
        >
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={OrderOptions.asc.value}
          >
            {OrderOptions.asc.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={OrderOptions.desc.value}
          >
            {OrderOptions.desc.name}
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          defaultValue={SortOptions[2].value}
          title="Sort"
          type="radio"
          onChange={(event) => handleSortSelect(event)}
        >
          {SortOptions.map((option) => (
            <MenuItemOption
              _hover={{ background: 'var(--bg-secondary)' }}
              value={option.value}
              key={option.id}
            >
              {option.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

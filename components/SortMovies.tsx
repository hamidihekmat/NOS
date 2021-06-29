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
// Components

// Interfaces
import { SortOptions, OrderOptions } from '../interfaces/sort.interface';

export const SortMovies = () => {
  return (
    <Menu isLazy closeOnSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<CaretDown />}
        bg="var(--bg-primary)"
        _hover={{ opacity: 1 }}
        _active={{ opacity: 1 }}
      >
        Release Date
      </MenuButton>
      <MenuList
        zIndex="99"
        bg="var(--bg-primary)"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
      >
        <MenuOptionGroup
          defaultValue={OrderOptions.ascending.value}
          title="Order"
          type="radio"
        >
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={OrderOptions.ascending.value}
          >
            {OrderOptions.ascending.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={OrderOptions.descending.value}
          >
            {OrderOptions.descending.name}
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          defaultValue={SortOptions.release.value}
          title="Sort"
          type="radio"
        >
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.title.value}
          >
            {SortOptions.title.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.year.value}
          >
            {SortOptions.year.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.release.value}
          >
            {SortOptions.release.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.criticRating.value}
          >
            {SortOptions.criticRating.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.audienceRating.value}
          >
            {SortOptions.audienceRating.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.rating.value}
          >
            {SortOptions.rating.name}
          </MenuItemOption>
          <MenuItemOption
            _hover={{ background: 'var(--bg-secondary)' }}
            value={SortOptions.dateAdded.value}
          >
            {SortOptions.dateAdded.name}
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

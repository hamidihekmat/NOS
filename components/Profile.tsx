import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// Icons
import {
  GearSix,
  Heart,
  Clock,
  Command,
  SignOut,
  Question,
  UserCircle,
} from 'phosphor-react';
import { scrollStore } from '../store/scrollStore';

export const Profile = () => {
  const scroll = scrollStore((state) => state.scroll);
  return (
    <Menu isLazy placement="bottom-start">
      <MenuButton
        aria-label="profile"
        icon={<UserCircle color="var(--border-color)" size={38} />}
        as={IconButton}
        cursor="pointer"
        bg="none"
        _hover={{ opacity: 1 }}
        _active={{ opacity: 1 }}
      />
      <MenuList
        zIndex="99"
        boxShadow="2xl"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
        css={css`
          background: ${scroll ? `rgba(51, 51, 51, 0.8)` : `var(--bg-primary)`};
          backdrop-filter: blur(35px);
          -webkit-backdrop-filter: blur(35);
          opacity: ${scroll ? `0.8` : `1`};
          -webkit-font-smoothing: antialiased;
          border: 2px solid transparent;
        `}
      >
        <StyledMenuItem>
          <HStack>
            <GearSix size={20} />
            <Text fontWeight="bold">Settings</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack>
            <Heart size={20} />
            <Text fontWeight="bold">Favourites</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack>
            <Clock size={20} />
            <Text fontWeight="bold">Watch Later</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack>
            <Command size={20} />
            <Text fontWeight="bold">Shortcuts</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem>
          <HStack>
            <Question size={20} />
            <Text fontWeight="bold">Help</Text>
          </HStack>
        </StyledMenuItem>
        <Divider color="var(--font-color)" />
        <StyledMenuItem>
          <HStack>
            <SignOut size={20} />
            <Text fontWeight="bold">Sign Out</Text>
          </HStack>
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};

const StyledMenuItem = styled(MenuItem)`
  :hover {
    background: (var(--hover));
  }
  :focus {
    background: var(--hover);
  }
`;

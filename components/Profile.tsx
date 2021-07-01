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

export const Profile = () => {
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
        bg="var(--bg-primary)"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
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
            <Text fontWeight="bold">Favouites</Text>
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
    background: var(--bg-canvas);
  }
  :focus {
    background: var(--bg-canvas);
  }
`;

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  HStack,
  Text,
  Divider,
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
} from 'phosphor-react';

export const Profile = () => {
  return (
    <Menu isLazy placement="bottom-start">
      <MenuButton
        name="vkarmic"
        src="https://i.pinimg.com/736x/f0/34/58/f034583d34bd2bd5e52732a7ecc96669.jpg"
        as={Avatar}
        cursor="pointer"
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
    background: var(--bg-secondary);
  }
  :focus {
    background: var(--bg-secondary);
  }
`;

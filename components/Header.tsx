import { Box, Text, IconButton, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Profile } from './Profile';
import { Search } from './Search';
import { List } from 'phosphor-react';
// Store
import { navStore } from '../store/navStore';

export const Header = () => {
  const toggle = navStore((state) => state.toggle);

  return (
    <Box
      display="flex"
      alignItems="center"
      height="3.75rem"
      bg="var(--bg-primary)"
      justifyContent="space-between"
      color="#FFFFFF"
      px="1.5rem"
    >
      <HStack>
        <StyledIconButton
          aria-label="Navigation"
          onClick={toggle}
          bg="transparent"
          _hover={{ background: 'transparent' }}
          _focus={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          transform="translateX(-0.5rem)"
          icon={<List color="var(--primary-color)" size={32} />}
        />

        <Text
          transform="translateX(-0.5rem)"
          color="var(--bg-secondary)"
          fontSize="2xl"
          fontWeight="bold"
        >
          NOS
        </Text>
      </HStack>
      <Search />
      <Profile />
    </Box>
  );
};

const StyledIconButton = styled(IconButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;

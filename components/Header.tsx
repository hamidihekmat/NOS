import { Box, Text, IconButton, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Profile } from './Profile';
import { Search } from './Search';
import { List } from 'phosphor-react';
// Store
import { navStore } from '../store/navStore';
import { css } from '@emotion/react';
import { scrollStore } from '../store/scrollStore';

export const Header = () => {
  const toggle = navStore((state) => state.toggle);
  const scroll = scrollStore((state) => state.scroll);
  return (
    <Box
      display="flex"
      alignItems="center"
      height="3.75rem"
      justifyContent="space-between"
      color="#FFFFFF"
      px="1.5rem"
      width="100vw"
      pos="fixed"
      py="0"
      zIndex="99"
    >
      {/* Glass */}
      <Box
        width="100vw"
        pos="absolute"
        right="0"
        height="3.75rem"
        css={css`
          background: ${scroll ? `rgba(51, 51, 51, 0.8)` : `var(--bg-primary)`};
          backdrop-filter: blur(35px);
          opacity: ${scroll ? `0.8` : `1`};
          -webkit-font-smoothing: antialiased;
          border: 2px solid transparent;
          transition: all ease 300ms;
        `}
      />
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
          fontWeight="extrabold"
          fontStyle="italic"
          as="a"
          href="/"
          cursor="pointer"
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

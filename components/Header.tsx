import {
  Box,
  Text,
  IconButton,
  HStack,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Profile } from './Profile';
import { Search } from './Search';
import { List } from 'phosphor-react';
// Store
import { navStore } from '../store/navStore';

export const Header = () => {
  const toggle = navStore((state) => state.toggle);
  const [isLargerThan370] = useMediaQuery('(min-width: 374px)');

  return (
    <StyledHeader
      display="flex"
      alignItems="center"
      height="3.75rem"
      bg="var(--bg-primary)"
      justifyContent="space-between"
      color="#FFFFFF"
      px="1.5rem"
    >
      <HStack>
        {isLargerThan370 && (
          <Tooltip label="Expand" fontSize="sm" placement="bottom">
            <IconButton
              aria-label="Home"
              onClick={toggle}
              bg="transparent"
              _hover={{ background: 'transparent' }}
              _focus={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
              transform="translateX(-1.5rem)"
              icon={<List color="var(--primary-color)" size={32} />}
            />
          </Tooltip>
        )}

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
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)`
  @media (min-width: 320px) {
    padding: 0rem 1rem 0rem 1rem 0;
  }
`;

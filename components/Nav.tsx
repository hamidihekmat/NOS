import { VStack, IconButton, Text, Box, Fade } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
// Icons
import { HomeIcon } from '../svg/_HomeIcon';
import { MoviesIcon } from '../svg/_MoviesIcon';
import { TVIcon } from '../svg/_TVIcon';
import { SearchIcon } from '../svg/_SearchIcon';
// Store
import { navStore } from '../store/navStore';
import { scrollStore } from '../store/scrollStore';

export const Nav = () => {
  const router = useRouter();
  const nav = navStore((state) => state.nav);
  const scroll = scrollStore((state) => state.scroll);
  return (
    <StyledVStack
      mt="3.75rem"
      nav={nav ? 'enabled' : 'disabled'}
      spacing="1"
      alignItems="center"
      css={css`
        background: ${scroll ? `rgba(51, 51, 51, 0.8)` : `var(--bg-primary)`};
        backdrop-filter: blur(35px);
        -webkit-font-smoothing: antialiased;
        border: 2px solid transparent;
        transition: all ease 300ms;
      `}
    >
      <NavItem borderRadius="xl" as="a" href="/" aspath={router.asPath}>
        <StyledIconButton
          maxW="3rem"
          aria-label="Home"
          as="div"
          _focus={{ outline: 'none' }}
          icon={<HomeIcon color="var(--primary-color)" size={32} />}
        />
        <Fade in={nav}>
          <Text fontWeight="bold" fontSize="large">
            Home
          </Text>
        </Fade>
      </NavItem>
      <NavItem borderRadius="xl" as="a" href="/movies" aspath={router.asPath}>
        <StyledIconButton
          maxW="3rem"
          aria-label="Movies"
          as="div"
          _focus={{ outline: 'none' }}
          icon={<MoviesIcon color="var(--primary-color)" size={32} />}
        />
        <Fade in={nav}>
          <Text fontWeight="bold" fontSize="large">
            Movies
          </Text>
        </Fade>
      </NavItem>
      <NavItem borderRadius="xl" as="a" href="/shows" aspath={router.asPath}>
        <StyledIconButton
          maxW="3rem"
          aria-label="TV Shows"
          as="div"
          _focus={{ outline: 'none' }}
          icon={<TVIcon color="var(--primary-color)" size={32} />}
        />
        <Fade in={nav}>
          <Text fontWeight="bold" fontSize="large">
            Shows
          </Text>
        </Fade>
      </NavItem>
      <NavItem borderRadius="xl" as="button" aspath={router.asPath}>
        <StyledIconButton
          maxW="3rem"
          aria-label="Search"
          as="div"
          _focus={{ outline: 'none' }}
          icon={<SearchIcon color="var(--primary-color)" size={32} />}
        />
        <Fade in={nav}>
          <Text fontWeight="bold" fontSize="large">
            Search
          </Text>
        </Fade>
      </NavItem>
    </StyledVStack>
  );
};

const StyledVStack = styled(VStack)<{ nav: string }>`
  min-height: calc(100vh - 3.75rem);
  height: calc(100vh - 3.75rem);
  width: ${(props) => (props.nav === 'enabled' ? css`12rem` : css`4.25rem`)};
`;

const StyledIconButton = styled(IconButton)`
  background: none;
  width: 100%;
  border-radius: 0;
  :hover {
    background: transparent;
  }
  svg {
    stroke: #2196f3 !important;
  }
`;

const NavItem = styled(Box)<{ aspath: string }>`
  display: flex;
  padding: 0.5rem;
  background: ${(props) =>
    `/${props.aspath.split('/')[1]}` === props.href
      ? css`var(--bg-canvas)`
      : css`transparent`};
  padding-left: 0.8rem;
  width: 90%;
  cursor: pointer;
  align-items: center;

  :hover {
    ${(props) =>
      `/${props.aspath.split('/')[1]}` !== props.href &&
      css`
        background: var(--hover);
      `}
  }
`;

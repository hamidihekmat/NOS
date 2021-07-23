import {
  VStack,
  IconButton,
  Text,
  Box,
  Fade,
  useMediaQuery,
} from '@chakra-ui/react';
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
// react
import { useEffect, useState } from 'react';

export const Nav = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [showNav, setShowNav] = useState(true);
  const router = useRouter();
  const nav = navStore((state) => state.nav);
  const scroll = scrollStore((state) => state.scroll);
  useEffect(() => {
    if (router.asPath.split('/').includes('watch') && isMobile) {
      setShowNav(false);
    }
  }, [isMobile, router.asPath]);

  return (
    <>
      {showNav && (
        <StyledVStack
          mt="3.75rem"
          nav={nav ? 'enabled' : 'disabled'}
          spacing="1"
          alignItems="center"
          css={css`
            background: ${scroll
              ? `rgba(51, 51, 51, 0.8)`
              : `var(--bg-primary)`};
          `}
        >
          <NavItem borderRadius="xl" as="a" href="/" aspath={router.asPath}>
            <StyledIconButton
              maxW="3rem"
              aria-label="Home"
              as="div"
              _focus={{ outline: 'none' }}
              icon={<HomeIcon href="/" size={32} />}
            />
            <Fade in={nav}>
              <Text fontWeight="bold" fontSize="large">
                Home
              </Text>
            </Fade>
          </NavItem>
          <NavItem
            borderRadius="xl"
            as="a"
            href="/movie"
            aspath={router.asPath}
          >
            <StyledIconButton
              maxW="3rem"
              aria-label="Movies"
              as="div"
              _focus={{ outline: 'none' }}
              icon={<MoviesIcon href="/movie" size={32} />}
            />
            <Fade in={nav}>
              <Text fontWeight="bold" fontSize="large">
                Movies
              </Text>
            </Fade>
          </NavItem>
          <NavItem borderRadius="xl" as="a" href="/show" aspath={router.asPath}>
            <StyledIconButton
              maxW="3rem"
              aria-label="TV Shows"
              as="div"
              _focus={{ outline: 'none' }}
              icon={<TVIcon href="/show" size={32} />}
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
              icon={<SearchIcon size={32} />}
            />
            <Fade in={nav}>
              <Text fontWeight="bold" fontSize="large">
                Search
              </Text>
            </Fade>
          </NavItem>
        </StyledVStack>
      )}
    </>
  );
};

const StyledVStack = styled(VStack)<{ nav: string }>`
  min-height: calc(100vh - 3.75rem);
  height: calc(100vh - 3.75rem);
  width: ${(props) => (props.nav === 'enabled' ? css`12rem` : css`4.25rem`)};
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: row;
    height: 3.75rem;
    min-height: 3.75rem;
    width: 100vw;
    bottom: 0;
    z-index: 99999;
  }
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
  @media (max-width: 768px) {
    justify-content: center;
    border-radius: 0;
    padding: 0;
    height: 100% !important;
    margin: 0 important!;
    background: transparent;
    :hover {
      background: transparent;
    }
  }
`;

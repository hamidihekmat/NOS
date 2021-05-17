import { ChakraProvider, Box, useDisclosure } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
import { NavDrawer } from '../components/NavDrawer';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <GlobalStyle />
      <Header onOpen={onOpen} />
      <Box display="flex">
        <NavDrawer isOpen={isOpen} onClose={onClose} />
        <Nav />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

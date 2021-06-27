import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
import { useEffect } from 'react';
import { isMobile, isChromium, isFirefox, isSafari } from 'react-device-detect';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      'serviceWorker' in navigator &&
      isChromium &&
      !isFirefox &&
      !isSafari &&
      !isMobile
    ) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
        console.log('Loaded Successfully');
      });
    }
  }, []);
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Header />
      <Box display="flex">
        <Nav />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

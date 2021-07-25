import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
import { Discord } from '../components/Discord';
import React, { useEffect } from 'react';
import { isChrome, isEdgeChromium } from 'react-device-detect';
// Router
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname.split('/');
  useEffect(() => {
    if (isChrome || isEdgeChromium) {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
              console.log(
                `Service worker registration successful with scope: ${registration}`
              );
            },
            (error) => {
              console.log(`Service worker registration failed: ${error}`);
            }
          );
        });
      }
    }
  }, []);
  return (
    <>
      <Head>
        {/* <script src="/anti-debug.js"></script> */}
        <title>NOS - Stream Movies & Shows</title>
      </Head>
      <ChakraProvider resetCSS>
        <GlobalStyle />
        <Header />
        {!currentPath.includes('watch') && <Discord />}
        <Box display="flex">
          <Nav />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
// import { Discord } from '../components/Discord';
import React from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NOS - Stream Movies & Shows</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#202838" />
      </Head>
      <ChakraProvider resetCSS>
        <GlobalStyle />
        <Header />
        {/* {!currentPath.includes('watch') && <Discord />} */}
        <Box display="flex">
          <Nav />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

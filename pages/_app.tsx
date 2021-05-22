import { Fragment } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <GlobalStyle />
          <Header />
          <Box display="flex">
            <Nav />
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </QueryClientProvider>
    </Fragment>
  );
}

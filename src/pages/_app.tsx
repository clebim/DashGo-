import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContext';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/reactQuery/queryClient';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme} >
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

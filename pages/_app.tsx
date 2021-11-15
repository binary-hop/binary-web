import '@fontsource/barlow/700.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/300.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

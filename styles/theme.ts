import { ChakraProviderProps } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/react';

const colors: ChakraProviderProps['theme'] = {
  background: '#09333F',
  green: '#6ED629',
  blue: {
    900: '#498BFC',
    100: '#D3EDEA',
  },
};

export const theme = extendTheme({ colors });

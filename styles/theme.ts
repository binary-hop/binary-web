import { ChakraProviderProps } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const colors: ChakraProviderProps['theme'] = {
  background: '#09333F',
  green: '#6ED629',
  blue: {
    900: '#498BFC',
    100: '#D3EDEA',
  },
};

export const theme = extendTheme({ colors, breakpoints });

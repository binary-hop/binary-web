import "@fontsource/barlow/700.css"
import "@fontsource/barlow/600.css"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/300.css"

import type { AppProps } from 'next/app'
import { ChakraProvider, ChakraProviderProps, extendTheme } from "@chakra-ui/react"

const colors: ChakraProviderProps['theme'] = {
  background: "#09333F",
  green: "#6ED629",
  blue: {
    900: "#498BFC",
    100: "#D3EDEA"
  }
}

const theme = extendTheme({ colors })


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

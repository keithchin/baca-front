'use-client'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app';
import { Link } from '@chakra-ui/next-js'

export function Page() {
  return (
    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
  )
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Page />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
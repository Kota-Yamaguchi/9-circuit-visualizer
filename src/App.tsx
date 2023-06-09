
import { ChakraProvider } from '@chakra-ui/react'
import { Index } from '.'

export function App() {
    return (
        <ChakraProvider>
            <Index />
        </ChakraProvider>
    )
}
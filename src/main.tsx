import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Box, ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box w="full" h="full">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
)

import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import { routerConfig } from '../../router';

import '../../styles/global.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routerConfig} />
    </ChakraProvider>
  );
}

export default App;

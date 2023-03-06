import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import { routerConfig } from '../../router';

import '../../styles/global.css';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={routerConfig} />
    </ChakraProvider>
  );
}

export default App;

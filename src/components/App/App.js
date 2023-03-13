
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { RouterProvider } from 'react-router-dom';

import { routerConfig } from '../../router';

import '../../styles/global.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <RouterProvider router={routerConfig} />
    </ThemeProvider>
  );
}

export default App;

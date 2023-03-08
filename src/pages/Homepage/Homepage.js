import React from 'react';
import { Text, Button } from '@chakra-ui/react';

import { Page } from '../../components';
import { Intro } from './components';
import { Products } from './components';
import { Features } from './components';

const Homepage = () => (
  <Page
    align='center'
    justify='center'
  >
    <Intro />
    <Products />
    <Features />
    
  </Page>
);

export default Homepage;

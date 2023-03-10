import React from 'react';
import { Text, Button } from '@chakra-ui/react';

import { Page } from '../../components';
import { Intro } from './components';
import { Products } from './components';
import { Features } from './components';
import { Optimize } from './components';
import { MoreReasons } from './components';
import { CustomersFeedback } from './components';

const Homepage = () => (
  <Page
    align='center'
    justify='center'
  >
    <Intro />
    <Products />
    <Features />
    <Optimize />
    <MoreReasons />
    <CustomersFeedback />
    
  </Page>
);

export default Homepage;

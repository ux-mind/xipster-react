import React from 'react';
import { Text, Button } from '@chakra-ui/react';

import { Page } from '../../components';
import {
  Intro,
  Products,
  Features,
  Optimize,
  MoreReasons,
  CustomersFeedback,
  ReadyToGrow
} from './components';

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
    <ReadyToGrow />
    
  </Page>
);

export default Homepage;

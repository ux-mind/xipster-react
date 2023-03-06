import React from 'react';
import { Text, Button } from '@chakra-ui/react';

import { Page } from '../../components';

const Homepage = () => (
  <Page
    height='100vh'
    align='center'
    justify='center'
  >
    <Text
      fontSize='24px'
      lineHeight='30px'
    >
      Homepage
    </Text>

    <Button
      marginTop='20px'
      color='red'
    >
      Chakra Button
    </Button>
  </Page>
);

export default Homepage;

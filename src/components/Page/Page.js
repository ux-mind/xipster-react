import React from 'react';
import { Flex } from '@chakra-ui/react';
import { default as Header } from '../Header';
import { default as Footer } from '../Footer';

const Page = ({ children, ...rest }) => (
  <>
  <Header />
  <Flex
    overflowX='hidden'
    direction='column'
    {...rest}
  >
    {children}
  </Flex>
  <Footer />
  </>
);

export default Page;

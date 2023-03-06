import React from 'react';
import { Flex } from '@chakra-ui/react';

const Page = ({ children, ...rest }) => (
  <Flex
    width='100vw'
    minWidth='300px'
    overflowX='hidden'
    direction='column'
    {...rest}
  >
    {/*header*/}

    {children}

    {/*footer*/}
  </Flex>
);

export default Page;

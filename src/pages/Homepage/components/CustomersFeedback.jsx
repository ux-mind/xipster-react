import {
  Box,
  Flex,
  Heading,
  Text,
  Image
} from '@chakra-ui/core';
import { ReactElement } from 'react';

import customer_1 from '../../../images/customer-1.png';
import customer_2 from '../../../images/customer-2.png';
import customer_3 from '../../../images/customer-3.png';

const Card = ({ name, description, logo, date }) => {
  return (
    <Box
      position='relative'
      maxW={"full"}
      w={'full'}
      borderWidth="1px"
      borderRadius="20px"
      borderColor="#ECECEC"
      overflow="hidden"
      p={{ base: '32px 24px 24px', md: '32px 24px 24px' }}>
      <Box align={{ base: 'left', md: 'center' }}>
        <Image
          top='32px'
          left='23px'
          position='absolute'
          src={logo}
          alt=""
          w={"100%"}
          maxW={{ base: '120px', md: '122px' }}/>
        <Box mt={{ base: '80px', md: '80px' }}>
          <Text
            maxW={"800px"}
            fontSize={{ base: '14px', md: '16px' }}
            lineHeight={'140%'}
            fontWeight={500}>
            {description}
          </Text>
          <Box mt={"58px"}>
            <Box
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"124%"}
              color={"#3722DA"}
              textTransform={"uppercase"}
              fontFamily="Garnet Medium"
            >
              {name}
            </Box>
            <Box
              mt={"8px"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"140%"}
              color={"#6C6C6C"}>
              {date}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const CustomersFeedback = () => {
  return (
    <Box w={"100%"}>

      <Box ml='auto' mr='auto'  w={"100%"} maxW={'1278px'} py={0} px={{ base: "24px", xl: 0 }}>
        <Heading fontFamily="Garnet Medium" textAlign={"center"} fontSize={{ base: '24px', md: '36px' }} fontWeight={'500'} lineHeight={"131%"}>
          What Our Customers Think About Us
        </Heading>

        <Flex mt={{ base: '24px', md: '40px' }} gridGap={{ base: '17px', md: '24px' }} justify="center" direction={{ base: 'column', xl: 'row' }}>
          <Card
            logo={customer_1}
            description={
              "Today’s customers are looking for frictionless customer engagement. Connecting with customers in their preferred communication channel — by text — is key in creating, stronger more profitable customer relationships and staying ahead of the competition."
            }
            name={'Shopify'}
            date={'16 December 2022'}
          />
          <Card
            logo={customer_2}
            description={
              "Today’s customers are looking for frictionless customer engagement. Connecting with customers in their preferred communication channel — by text — is key in creating, stronger more profitable customer relationships and staying ahead of the competition."
            }
            name={'Glossier'}
            date={'16 December 2022'}
          />
          <Card
            logo={customer_3}
            description={
              "Today’s customers are looking for frictionless customer engagement. Connecting with customers in their preferred communication channel — by text — is key in creating, stronger more profitable customer relationships and staying ahead of the competition."
            }
            name={'Bearpaw'}
            date={'16 December 2022'}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default CustomersFeedback;
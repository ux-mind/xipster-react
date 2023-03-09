import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import product_1 from '../../../images/product-1.svg';
import product_2 from '../../../images/product-2.svg';
import product_3 from '../../../images/product-3.svg';
import arrow_right from '../../../images/arrow-right.svg';
import product_dialog from '../../../images/product-dialog.svg';

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={"full"}
      w={'full'}
      borderWidth="1px"
      borderRadius="20px"
      borderColor="#ECECEC"
      overflow="hidden"
      p={{ base: '24px 16px', md: '46px' }}>
      <Box align={{ base: 'left', md: 'center' }}>
        <Image w={{ base: '45px', md: '60px' }} h={{ base: '45px', md: '60px' }} src={icon} alt="" />
        <Box mt={{ base: '12px', md: '24px' }}>
          <Heading
            fontWeight={500}
            textTransform={"uppercase"}
            fontSize={{ base: '18px', md: '20px' }}>
            {heading}
          </Heading>
          <Text
            maxW={"361px"}
            mt={{ base: '4px', md: '8px' }}
            fontSize={{ base: '14px', md: '16px' }}
            lineHeight={'22px'}
            fontWeight={500}>
            {description}
          </Text>
        </Box>
        <Button
          border={'1.5px solid #4838E4'}
          borderRadius={'12px'}
          p={{ base: '5px 24px', md: '7px 24px' }}
          mt={{ base: '56px', md: '40px' }}
          variant={'link'}
          color={'#4838E4'}
          size={'sm'}
          fontSize={"16px"}
          fontWeight={600}
          _hover={{
            textDecoration: 'none',
        }}>
          Learn more
          <Image
            src={arrow_right}
            alt=""
            ml={'8px'}
          />
        </Button>
      </Box>
    </Box>
  );
};

const Products = () => {
  return (
    <Box py={{ base: '120px', md: '150px' }} w={"100%"}>

      <Container w={"100%"} maxW={'1278px'} py={0} px={{ base: "24px", xl: 0 }}>
        <Stack spacing={{ base: '9px', md: '16px' }} textAlign={'center'}>
          <Heading fontSize={{ base: '24px', md: '36px' }} fontWeight={{ base: '500px', md: '400px' }}>
            2 Powerful Products in One
          </Heading>
          <Text color={'#232426'} fontSize={{ base: '16px', md: '18px' }}>
            Unleash the power of personalized efficiency with two cutting-edge products seamlessly integrated into one powerful solution
          </Text>
        </Stack>

        <Flex mt={{ base: '24px', md: '40px' }} gridGap={{ base: '20px', md: '24px' }} justify="center" direction={{ base: 'column', md: 'row' }}>
          <Card
            icon={product_1}
            heading={'Payments'}
            description={
              'Request and collect secure payments in seconds'
            }
            href={'#'}
          />
          <Card
            icon={product_2}
            heading={'Communication'}
            description={
              'Connect with customers in their preferred channel'
            }
            href={'#'}
          />
        </Flex>

        <Stack
            spacing={0}
            align={'center'}
            pt={{ base: '120px', md: '150px' }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={"space-between"}>
            <Flex
              mt={{ base: '40px', md: '0' }}
              order={{ base: '2', md: '1' }}
              bg={'#F7F7F7'}
              borderRadius={'30px'}
              width={'100%'}
              height={{ base: 'auto', xl: '425px' }}
              maxW={'627px'}
              p={'43px 72px'}>
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  maxWidth={"627px"}
                  src={product_dialog}
                />
            </Flex>
            <Box
              mt={{ base: '0', md: '0' }}
              order={{ base: '1', md: '2' }}
              flex={1}
              maxW={"522px"}
              pl={{ base: '0', md: '25px', xl: '0' }}
              pr={{ base: '0', xl: '52px' }}
              minW={{ base: '0', sm: '350px' }}
            >
              <Heading
                lineHeight={{ base: '30px', md: '45px' }}
                fontWeight={500}
                fontSize={{ base: '24px', md: '36px' }}>
                <Text as={'span'} color={'#20201D'} textTransform={'uppercase'}>
                  Best-in-class Customer Experience
                </Text>
              </Heading>
              <Box
                color={'#232426'}
                mt={{ base: '8px', md: '16px' }}
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight={500}
                maxW={"425px"}>
                Today’s customers are looking for frictionless customer engagement. Connecting with customers in their preferred communication 
                channel — by text — is key in creating, stronger more profitable customer relationships and staying ahead of the competition.
              </Box>
            </Box>
          </Stack>
      </Container>
    </Box>
  );
}

export default Products;
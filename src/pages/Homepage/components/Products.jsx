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
      p={"24px"}>
      <Box align={'start'}>
        <Image src={icon} alt="" />
        <Box mt={"24px"}>
          <Heading
            fontWeight={500}
            textTransform={"uppercase"}
            fontSize={"20px"}>
            {heading}
          </Heading>
          <Text
            mt={"8px"}
            fontSize={'16px'}
            lineHeight={'22px'}
            fontWeight={500}>
            {description}
          </Text>
        </Box>
        <Button
        border={'1.5px solid #4838E4'}
        borderRadius={'12px'}
        p={'7px 24px'}
        mt={'80px'}
        variant={'link'}
        color={'#4838E4'}
        size={'sm'}
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
    <Box py={"150px"}>

      <Container maxW={'1278px'} p={0}>
        <Stack spacing={"16px"} textAlign={'center'}>
          <Heading fontSize={"36px"} fontWeight={'400px'}>
            3 Powerful Products in One
          </Heading>
          <Text color={'#232426'} fontSize={"18px"}>
            Unleash the power of personalized efficiency with two cutting-edge products seamlessly integrated into one powerful solution
          </Text>
        </Stack>

        <Flex mt="40px" gridGap={"24px"} justify="center">
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
          <Card
            icon={product_3}
            heading={'B2B'}
            description={
              'The fastest and easiest way for businesses to pay and get paid'
            }
            href={'#'}
          />
        </Flex>

        <Stack
            align={'center'}
            py={"150px"}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={"space-between"}>
            <Flex
              bg={'#F7F7F7'}
              borderRadius={'30px'}
              width={'100%'}
              height={'425px'}
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
            <Box flex={1} maxW={"522px"} pr={"52px"}>
              <Heading
                lineHeight={"45px"}
                fontWeight={500}
                fontSize={{ base: '36px', sm: '36px', lg: '36px' }}>
                <Text as={'span'} color={'#20201D'} textTransform={'uppercase'}>
                  Best-in-class Customer&nbsp;Experience
                </Text>
              </Heading>
              <Box
                color={'#232426'}
                mt={'16px'}
                fontSize="18px"
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
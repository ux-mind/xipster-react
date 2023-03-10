import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import list_icon from '../../../images/list-icon.svg';
import reasons_image from '../../../images/reasons-image.svg';

const ListElement = ({text, title, lastElem}) => {
  return (
    <ListItem display={"flex"} alignItems="start" pr={{ base: 0, md: "24px" }} pb={!lastElem ? { base: "32px", md: "48px" } : 0}>
      <Image
        alt=""
        src={list_icon}
        w={{ base: '45px', md: '50px' }}
        h={{ base: '45px', md: '50px' }}
      />
      <Box ml={{ base: '16px', md: '24px' }}>
        <Heading
          lineHeight={"25px"}
          textTransform={'uppercase'}
          fontWeight={500}
          fontSize={{ base: '18px', md: '20px' }}>
          {title}
        </Heading>
        <Text
          maxW={"420px"}
          lineHeight={"22px"}
          mt={"6px"}
          fontSize={'16px'}
          fontWeight={500}
          as={'div'}
          color={'#20201D'}>
          {text}
        </Text>
      </Box>
    </ListItem>
  );
}

const listItems = [
  {
    title: "Frictionless",
    text: "Minimizing friction at every turn within the buyer journey"
  },
  {
    title: "Secure Payments",
    text: "Elevating your security and protecting you against chargebacks from fraudulent credit card transactions with 3D Secure 2.0"
  },
  {
    title: "Reduce Day Sales Outstanding",
    text: "Increasing customer engagement and responses to payment requests by 85%"
  }
];

const MoreReasons = () => {
  return (
    <Box pb={{ base: '100px', md: '150px' }} w={"100%"}>

      <Container w={"100%"} maxW={'1278px'} py={0} px={{ base: "24px", xl: 0 }}>
        <Stack spacing={{ base: '9px', md: '16px' }} textAlign={'center'}>
          <Heading fontSize={{ base: '24px', md: '36px' }} fontWeight={{ base: '500px', md: '500px' }}>
            More Reasons To Get Xipster
          </Heading>
        </Stack>

        <Stack
            spacing={0}
            align={'center'}
            pt={{ base: '24px', md: '40px' }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={"space-between"}>
            <Flex
              mt={{ base: '32px', md: '0' }}
              order={{ base: '2', md: '1' }}
              bg={'#F7F7F7'}
              borderRadius={'30px'}
              width={'100%'}
              height={{ base: 'auto', xl: '425px' }}
              maxW={'624px'}
              p={{ base: '23px 40px', md: '45px 81px' }}>
                <Image
                  alt={''}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  maxWidth={"627px"}
                  src={reasons_image}
                />
            </Flex>
            <Box
              order={{ base: '1', md: '2' }}
              flex={1}
              maxW={"522px"}
              pl={{ base: '0', md: '25px', xl: '0' }}
              minW={{ base: '0', sm: '350px' }}
            >
              <UnorderedList ml={0}>
                {listItems.map((elem, i) => {
                  let lastElem = false;
                  if (i+1 === listItems.length) {
                    lastElem = true;
                  }
                  return <ListElement key={'list-item-' + i} title={elem.title} text={elem.text} lastElem={lastElem} />
                })}
              </UnorderedList>
            </Box>
          </Stack>
      </Container>
    </Box>
  );
}

export default MoreReasons;
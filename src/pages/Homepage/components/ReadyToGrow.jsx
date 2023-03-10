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

import ready_to_grow_bg from '../../../images/ready-to-grow-bg.svg';
import arrow_right from '../../../images/arrow-right.svg';

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

const ReadyToGrow = () => {
  return (
    <Box pt={{ base: '120px', md: '150px' }} pb={{ base: '100px', md: '150px' }} w='100%'>

      <Container w='100%' maxW='1278px' py={0} px={{ base: '24px', xl: 0 }}>

        <Box
          overflow='hidden'
          position='relative'
          bg='linear-gradient(174.91deg, #7B70EC -215.51%, #3722DA 143.79%)'
          borderRadius='20px'
          spacing={0}
          align='center'
          py={{ base: '40px', md: '87px' }}
          px={{ base: '16px', md: '24px' }}>
            <Image
              alt=''
              src={ready_to_grow_bg}
              position='absolute'
              left={{ base: '-83px', md: '-78px' }}
              bottom={{ base: '-74px', md: '-103px' }}
            />
            <Box>
              <Heading
                lineHeight='131%'
                fontWeight={500}
                fontSize={{ base: '24px', md: '36px' }}>
                <Text as='span' color='white'>
                  Ready to grow with Xipster?
                </Text>
              </Heading>
              <Box
                color='white'
                mt={{ base: '8px', md: '16px' }}
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight={500}>
                Empower your business with the payments and communication platform that drives future-proof growth.
              </Box>
            </Box>
            <Flex 
              ml='auto'
              mr='auto'
              mt='40px'
              width='max-content'
              direction={{ base: 'column', md: 'row' }}
            >
              <Button
                h='50px'
                w='168px'
                mr={{ base: 0, md: '23px' }}
                mb={{ base: '12px', md: 0 }}
                height='50px'
                px='33px'
                as='a'
                display='inline-flex'
                fontSize='18px'
                fontWeight={600}
                color='#232426'
                bg='white'
                href='#'
                border='1.5px'
                borderStyle='solid'
                borderRadius='12px'
                borderColor='white'
                _hover={{
                  bg: 'none',
                  color: 'white',
                }}>
                Get Xipster
              </Button>
              <Button
                h='50px'
                w='168px'
                as='a'
                display='inline-flex'
                fontSize='18px'
                fontWeight={600}
                color='white'
                href='#'
                bg='none'
                border='1.5px'
                borderStyle='solid'
                borderRadius='12px'
                borderColor='white'
                _hover={{
                  bg: 'white',
                  color: '#232426',
                }}>
                See Pricing
              </Button>
            </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default ReadyToGrow;
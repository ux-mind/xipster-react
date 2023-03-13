import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image
} from '@chakra-ui/core';
import { ReactElement } from 'react';

import ready_to_grow_bg from '../../../images/ready-to-grow-bg.svg';

const ReadyToGrow = () => {
  return (
    <Box pt={{ base: '120px', md: '150px' }} pb={{ base: '100px', md: '150px' }} w='100%'>

      <Box w='100%' maxW='1278px' ml='auto' mr='auto' py={0} px={{ base: '24px', xl: 0 }}>

        <Box
          overflow='hidden'
          position='relative'
          sx={{
            background: 'red',
          }}
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
                textAlign='center'
                lineHeight='131%'
                fontWeight={500}
                fontSize={{ base: '24px', md: '36px' }}>
                <Text fontFamily="Garnet Medium" as='span' color='white'>
                  Ready to grow with Xipster?
                </Text>
              </Heading>
              <Box
                textAlign='center'
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
                  bg: 'rgba(255, 255, 255, 0.01)',
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
      </Box>
    </Box>
  );
}

export default ReadyToGrow;
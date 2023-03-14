import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/core';

  import home_hero from '../../../images/home-hero.svg';
  
  const Intro = () => {
    return (
      <Box
        w={'100%'}
        bg={"#F7F7F7"}>
        <Box ml='auto' mr='auto'  maxW={'1278px'} py={0}  px={{ base: "24px", xl: 0 }}>
          <Stack
            align={'center'}
            py={{ base: '56px', lg: '93px' }}
            direction={{ base: 'column', md: 'row' }}>
            <Box flex={1} >
              <Heading
                lineHeight={{ base: '37px', lg: '59px' }}
                fontWeight={500}
                fontSize={{ base: '28px', lg: '45px' }}>
                <Text as={'span'} color={'#232426'} fontFamily="Garnet Medium">
                  All-in-One Payments and Communications solution to grow your business
                </Text>
              </Heading>
              <Box
                color={'#232426'}
                mt={{ base: '11px', lg: '16px' }}
                lineHeight={{ base: '22px', lg: '25px' }}
                fontSize={{ base: '16px', lg: '18px' }}>
                Build, automate, and personalize customer experiences in all of your communications,
                including payments, text marketing, B2B, and more, with Xipster
              </Box>
              <Button
                mt={{ base: '31px', lg: '40px' }}
                bg={'#4838E4'}
                borderRadius={"12px"}
                color={"white"}
                w={"168px"}
                h={{ base: '50px', lg: '55px' }}
                fontWeight={600}
                fontSize={{ base: '16px', lg: '18px' }}
                _hover={{ background: '#6A5EE6' }}>
                Get Xipster
              </Button>
            </Box>
            <Flex
              pl={{ base: '0', md: '15px' }}
              pt={{ base: '56px', md: '0' }}
              flex={1}
              justify={{ base: 'center', md: 'end' }}
              align={'center'}
              position={'relative'}
              w={'full'}>
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  maxWidth={{ base: '327px', md: '563px' }}
                  src={home_hero}
                />
            </Flex>
          </Stack>
        </Box>
      </Box>
    );
  }
  
  export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };

  export default Intro;
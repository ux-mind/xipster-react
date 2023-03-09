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
    Image,
  } from '@chakra-ui/react';
import { ReactElement } from 'react';

import feature from '../../../images/feature.svg';
import arrow_right_white from '../../../images/arrow-right-white.svg';


const Tab = ({ text }) => {
    return (
        <Button
            height={{ base: '40px', md: '50px' }}
            px={{ base: '12px', md: '24px' }}
            as={'a'}
            display={'inline-flex'}
            fontSize={{ base: '14px', md: '18px' }}
            fontWeight={{ base: 600, md: 500 }}
            color={'white'}
            href={'#'}
            bg={"none"}
            border={"1.5px"}
            borderStyle={"solid"}
            borderRadius={{ base: '25px', md: '30px' }}
            borderColor={"white"}
            _hover={{
                bg: 'white',
                color: '#232426',
            }}>
            {text}
        </Button>
    );
};

const Features = () => {
    return (
        <Box p={{ base: "64px 0 70px", xl: "71px 0 76px" }} bg={"#20201D"} w={"100%"} color={"white"}>
        <Container maxW={'1278px'} py={0}  px={{ base: "24px", xl: 0 }}>
            <Heading fontSize={{ base: '24px', md: '36px' }} fontWeight={'500px'} textAlign={"center"}>
                Powerful features of Xipster
            </Heading>

            <Flex mt={{ base: '32px', md: '40px' }} gridGap={{ base: '12px', md: '16px' }} justify="left" flexWrap={"wrap"}>
                <Tab text={"Card on File"} />
                <Tab text={"Partial Payments"} />
                <Tab text={"Connect Your Team"} />
                <Tab text={"Multi-Location View"} />
                <Tab text={"Account Updater"} />
                <Tab text={"Text Marketing"} />
                <Tab text={"Accounting & Integration"} />
                <Tab text={"Quotes & Estimates"} />
                <Tab text={"Loyalty"} />
                <Tab text={"B2B"} />
            </Flex>

            <Stack
                spacing={0}
                align={'center'}
                mt={"56px"}
                direction={{ base: 'column', md: 'row' }}
                justifyContent={"space-between"}>
                <Box
                    flex={1}
                    maxW={"522px"}
                    minW={{ base: '0', sm: '350px' }}
                    pr={{ base: '0', md: '52px' }}
                    pb={{ base: '32px', md: '0' }}
                >
                    <Heading
                        lineHeight={{ base: '30px', md: '47px' }}
                        fontWeight={500}
                        fontSize={{ base: '24px', md: '36px' }}>
                        <Text as={'span'} color={'#EDEDED'}>
                        Card on File
                        </Text>
                    </Heading>
                    <Box
                        color={'#EDEDED'}
                        mt={{ base: '8px', md: '16px' }}
                        fontSize="16px"
                        fontWeight={500}
                        maxW={"410px"}>
                        Securely save customer card on file for future business
                    </Box>
                    <Button
                        fontSize={{ base: '16px', md: '16px' }}
                        fontWeight={600}
                        border={'1.5px solid white'}
                        borderRadius={'12px'}
                        p={{ base: '3.5px 22px', md: '7px 22px' }}
                        mt={{ base: '24px', md: '40px' }}
                        variant={'link'}
                        color={'white'}
                        size={'sm'}
                        _hover={{
                        textDecoration: 'none',
                    }}>
                        Learn more
                        <Image
                            src={arrow_right_white}
                            alt=""
                            ml={'8px'}
                        />
                    </Button>
                </Box>
                <Flex
                bg={'#323233'}
                borderRadius={'30px'}
                width={'100%'}
                height={{ base: "222px", md: "300px", xl: '350px' }}
                maxW={'627px'}
                p={{ base: "10px 10px", md: "21px 36px", xl: '43px 72px' }}>
                    <Image
                    alt={'Feature Image'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={feature}
                    />
                </Flex>
            </Stack>
        </Container>
        </Box>
    );
}

export default Features;
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
            height={"50px"}
            px={"24px"}
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'18px'}
            fontWeight={500}
            color={'white'}
            href={'#'}
            bg={"none"}
            border={"1.5px"}
            borderStyle={"solid"}
            borderRadius={"30px"}
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
        <Box p={"71px 0 76px"} bg={"#20201D"} w={"100%"} color={"white"}>
        <Container maxW={'1278px'} p={0}>
            <Heading fontSize={"36px"} fontWeight={'400px'} textAlign={"center"}>
                Powerful features of Xipster
            </Heading>

            <Flex mt="40px" gridGap={"16px"} justify="left" flexWrap={"wrap"}>
                <Tab text={"Card on File"} />
                <Tab text={"Partial Payments"} />
                <Tab text={"Connect Your Team"} />
                <Tab text={"Multi-Location View"} />
                <Tab text={"Account Updater"} />
                <Tab text={"Text Marketing"} />
                <Tab text={"Accounting & Integration"} />
                <Tab text={"Quotes & Estimates"} />
                <Tab text={"Loyalty"} />
                <Tab text={"EFT"} />
            </Flex>

            <Stack
                align={'center'}
                mt={"56px"}
                direction={{ base: 'column', md: 'row' }}
                justifyContent={"space-between"}>
                <Box flex={1} maxW={"522px"} pr={"52px"}>
                    <Heading
                        lineHeight={"47px"}
                        fontWeight={500}
                        fontSize={{ base: '36px', sm: '36px', lg: '36px' }}>
                        <Text as={'span'} color={'#EDEDED'}>
                        Card on File
                        </Text>
                    </Heading>
                    <Box
                        color={'#EDEDED'}
                        mt={'16px'}
                        fontSize="16px"
                        fontWeight={500}
                        maxW={"410px"}>
                        Securely save customer card on file for future business
                    </Box>
                    <Button
                        border={'1.5px solid white'}
                        borderRadius={'12px'}
                        p={'7px 24px'}
                        mt={'40px'}
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
                height={'425px'}
                maxW={'627px'}
                p={'43px 72px'}>
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
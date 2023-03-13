import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
    Image,
  } from '@chakra-ui/core';
import { ReactElement, useState } from 'react';

import features_1 from '../../../images/features-1.svg';
import features_2 from '../../../images/features-2.svg';
import features_3 from '../../../images/features-3.svg';
import features_4 from '../../../images/features-4.svg';
import features_5 from '../../../images/features-5.svg';
import features_6 from '../../../images/features-6.svg';
import features_7 from '../../../images/features-7.svg';
import features_8 from '../../../images/features-8.svg';
import features_9 from '../../../images/features-9.svg';
import features_10 from '../../../images/features-10.svg';
import arrow_right_white from '../../../images/arrow-right-white.svg';


const Tab = ({ text, active, handleTabClick }) => {
    return (
        <Button
            id={text}
            onClick={handleTabClick}
            height={{ base: '40px', md: '50px' }}
            px={{ base: '12px', md: '24px' }}
            as={'a'}
            display={'inline-flex'}
            fontSize={{ base: '14px', md: '18px' }}
            fontWeight={{ base: 600, md: 500 }}
            color={active ? '#232426' : 'white'}
            href={'#'}
            bg={active ? 'white' : "none"}
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

const tabs = [
    {
        title: "Card on File",
        description: "Securely save customer card on file for future business",
        image: features_1
    },
    {
        title: "Connect Your Team",
        description: "Internal Team Chat allows all team members to communicate with a click of a button",
        image: features_2
    },
    {
        title: "Quotes & Estimates",
        description: "In seconds, send professional, branded estimates with video to customers on their mobile device",
        image: features_3
    },
    {
        title: "Partial Payments",
        description: "Allow your customers to make partial payments. You set the minimum payment amount",
        image: features_4
    },
    {
        title: "Text Marketing",
        description: "Start any conversation to engage your customers with a Call to Action. For example, appointment reminders",
        image: features_5
    },
    {
        title: "Account Updater",
        description: "Automatically updates subscription customer card data",
        image: features_6
    },
    {
        title: "Accounting & Integration",
        description: "Make sending and reconciling payments a breeze by connecting to your accounting software like Xero or Quickbooks.",
        image: features_7
    },
    {
        title: "B2B",
        description: "The fastest and easiest way for businesses to pay and get paid",
        image: features_8
    },
    {
        title: "Multi-Location View",
        description: "Easily see and compare all location activity and performance at a glance",
        image: features_9
    },
    {
        title: "Loyalty",
        description: "Increase customer loyalty and customer retention with Loyalty Reward Dollars",
        image: features_10
    },
];

const Features = () => {
    const [activeTab, setActiveTab] = useState("Card on File");
    const [activeDescription, setActiveDescription] = useState("Securely save customer card on file for future business");
    const [activeImage, setActiveImage] = useState(features_1);
    const handleTabClick = (e) => {
        e.preventDefault();
        const tab = tabs.find(tab => tab.title === e.target.id);
        setActiveTab(tab.title);
        setActiveDescription(tab.description);
        setActiveImage(tab.image);
    }
    return (
        <Box p={{ base: "64px 0 70px", xl: "71px 0 76px" }} bg={"#20201D"} w={"100%"} color={"white"}>
        <Box ml='auto' mr='auto'  maxW={'1278px'} py={0}  px={{ base: "24px", xl: 0 }}>
            <Heading fontFamily="Tiempos Headline" fontSize={{ base: '24px', md: '36px' }} fontWeight={'500px'} textAlign={"center"}>
                Powerful features of Xipster
            </Heading>
            <Flex mt={{ base: '32px', md: '40px' }} gridGap={{ base: '12px', md: '16px' }} justify="left" flexWrap={"wrap"}>
                {tabs.map((tab, i) => {
                    let active = false;
                    if (activeTab === tab.title) {
                        active = true;
                    }
                    return (
                        <Tab handleTabClick={handleTabClick} key={'features-tab-' + i} text={tab.title} active={active} />
                    )
                })}
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
                        <Text as={'span'} color={'#EDEDED'} fontFamily="Garnet Medium">
                        {activeTab}
                        </Text>
                    </Heading>
                    <Box
                        color={'#EDEDED'}
                        mt={{ base: '8px', md: '16px' }}
                        fontSize="16px"
                        fontWeight={500}
                        maxW={"410px"}>
                        {activeDescription}
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
                    src={activeImage}
                    />
                </Flex>
            </Stack>
        </Box>
        </Box>
    );
}

export default Features;
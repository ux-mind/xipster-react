import {
    Box,
    Button,
    Container,
    Heading,
    Grid,
    GridItem,
    Text,
    Image
  } from '@chakra-ui/react';
import { ReactElement } from 'react';

import logo_card from '../../../images/card-logo.svg';
import optimize_1 from '../../../images/optimize-1.png';
import optimize_2 from '../../../images/optimize-2.png';
import optimize_3 from '../../../images/optimize-3.png';
import optimize_4 from '../../../images/optimize-4.png';
import optimize_5 from '../../../images/optimize-5.png';
import optimize_6 from '../../../images/optimize-6.png';


const Card = ({ image, title, text }) => {
    return (
        <GridItem w='100%' h='100%'>
            <Box
                w={"100%"}
                h={{ base: "182px", md: "227px" }}
                bg='#F7F7F7'
                pt={{ base: "14px", md: "17px" }}
                borderRadius={"25px 25px 0 0"}
            >
                <Box
                    w={{ base: "213px", md: "267px" }}
                    h={{ base: "213px", md: "264px" }}
                    bg={"white"}
                    boxShadow={"0px 4px 9px rgba(0, 0, 0, 0.15)"}
                    borderRadius={"15px"}
                    ml={"auto"}
                    mr={"auto"}
                    pt={{ base: "10px", md: "13px" }}
                >
                    <Image
                        w={{ base: "27px", md: "33px" }}
                        h={{ base: "27px", md: "33px" }}
                        alt={""}
                        src={logo_card}
                        m={"0 auto"}/>
                    <Box
                        w={{ base: "178px", md: "223px" }}
                        h={"1px"}
                        bg={"#CCCCCC"}
                        m={{ base: "7px auto 0", md: "8px auto 0" }}
                    />
                    <Box
                        alt={""}
                        mt={{ base: "19px", md: "23px" }}
                        ml={"auto"}
                        mr={"auto"}
                        w={{ base: "178px", md: "223px" }}
                        h={{ base: "132px", md: "165px" }}
                        bg={"url(" + image + ")"}
                        backgroundSize="cover"
                    />
                </Box>
            </Box>
            <Heading
                fontSize={{ base: '20px', md: '20px' }}
                fontWeight={'500px'}
                textAlign={"center"}
                mt={{ base: "70px", md: "85px" }}>
                {title}
            </Heading>
            <Text fontSize={{ base: '16px', md: '16px' }} mt={"8px"} textAlign={"center"}>
                {text}
            </Text>
        </GridItem>
    );
};

const cards = [
    {
        image: optimize_1,
        title: "Easy To Operate",
        text: "Simple & easy to use. Our intuitive design & user experience was built with you, the merchant, in mind"
    },
    {
        image: optimize_2,
        title: "Easy For Customers",
        text: "Xipster allows you to send payment links with invoice overlay by text and/or email"
    },
    {
        image: optimize_3,
        title: "Collect Payments From Anywhere",
        text: "Works on desktop or on any mobile device with our responsive & powerful cloud-based web software"
    },
    {
        image: optimize_4,
        title: "Grow",
        text: "Increase ROI’s. Reduce DSO with and engage with customers on the channel that delivers lightening fast responses"
    },
    {
        image: optimize_5,
        title: "Pay & Get Paid Faster",
        text: "Reduce nonpayment with better engagement"
    },
    {
        image: optimize_6,
        title: "B2B Payments",
        text: "Accounts Receivables and Accounts Payables capabilities"
    },
];

const Optimize = () => {
    return (
        <Box p={{ base: "120px 0 120px", md: "150px 0 150px" }} w={"100%"} color={"#232426"}>
        <Container maxW={'1278px'} py={0}  px={{ base: "24px", xl: 0 }}>
            <Heading fontSize={{ base: '24px', md: '36px' }} fontWeight={'500px'} textAlign={"center"}>
                Optimize Profitability & Operate on a Higher Level
            </Heading>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
                columnGap={"24px"}
                rowGap={"64px"}
                mt={"40px"}
            >
                {cards.map((card, i) => {
                    return <Card key={i} image={card.image} title={card.title} text={card.text} />
                })}
            </Grid>
        </Container>
        </Box>
    );
}

export default Optimize;
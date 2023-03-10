import React from 'react';
import logo from '../../images/logo.svg';
import footer_facbook from '../../images/footer-facebook.svg';
import footer_instagram from '../../images/footer-instagram.svg';
import footer_linkedin from '../../images/footer-linkedin.svg';
import footer_twitter from '../../images/footer-twitter.svg';

import {
  Box,
  Flex,
  Link,
  Container,
  Image,
  Heading,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

const SocialBlock = ({mobile}) => {
  return (
    <Box mt={{ base: "32px", xl: "56px" }} display={mobile ? { base: "block", xl: "none" } : { base: "none", xl: "block" }}>
      <Flex>
        {SOCIAL_ITEMS.map((item, i) => {
          let lastElem = false;
          if (i+1 === SOCIAL_ITEMS.length) {
            lastElem = true;
          }
          return (
            <Link
            key={'footer-social-link-' + i}
            mr={!lastElem ? '24px' : 0}
            flexShrink={0}
            as='a'
            href={item.href}>
            <Image
              src={item.image}
              alt=''
              w={{ base: "28px", md: "28px"}}
              h={{ base: "28px", md: "28px"}}
            />
          </Link>
          );
        })}
      </Flex>
    </Box>
  )
}

const Footer = () => {

  return (
    <Box
      bg='#232426'
      pt={{ base: "32px", xl: "90px" }}
      pb={{ base: "54px", xl: "160px" }}>
      <Container maxW='1278px' px={{ base: "24px", xl: 0 }}>
        <Flex
          align='center'>
          <Flex flex={{ base: 1 }} justify='start' direction={{ base: 'column', xl: 'row' }}>
            <Box w='fit-content'>
              <Link
                flexShrink={0}
                as='a'
                href='/'>
                <Image
                  src={logo}
                  alt='logo'
                  w={{ base: "129px", md: "168px"}}
                />
              </Link>
              <SocialBlock mobile={false}/>
            </Box>
            <Flex
              display={{ base: 'grid', xl: 'flex' }}
              gridTemplateColumns='auto auto'
              gridRowGap={{ base: '31px', xl: '0' }}
              gridColumnGap={{ base: '56px', xl: '0' }}
              ml={{ base: 0, xl: 'auto' }}
              maxW={{ base: '327px', xl: '952px' }}
              mt={{ base: '32px', xl: '8px' }}>
              {NAV_ITEMS.map((item, i) => {
                let lastElem = false;
                if (i+1 === NAV_ITEMS.length) {
                  lastElem = true;
                }
                return (
                  <Box key={'footer-nav-item' + i} mr={!lastElem ? { base: "0px", md: "83px" } : 0}>
                    <Heading fontFamily="Garnet Medium" color='#FFFEFE' fontSize={{ base: '18px', md: '18px' }} fontWeight='500' lineHeight='131%'>
                      {item.label}
                    </Heading>
                    <UnorderedList ml={0} mt='24px' maxW='148px' w='max-content'>
                      {item.children.map((child, j) => {
                        let lastElem = false;
                        if (j+1 === item.children.length) {
                          lastElem = true;
                        }
                        return (
                          <ListItem
                            key={'footer-nav-child' + j}
                            color='#D0D0D0'
                            display='flex'
                            alignItems='start'
                            pb={!lastElem ? { base: "16px", md: "16px" } : 0}>
                            <Link
                              as={"a"}
                              href={"/"}
                              _hover={{
                                textDecoration: 'none',
                              }}
                            >
                              {child.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </UnorderedList>
                  </Box>
                );
              })}
            </Flex>
            <SocialBlock mobile={true}/>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const SOCIAL_ITEMS = [
  {
    image: footer_facbook,
    href: '#'
  },
  {
    image: footer_instagram,
    href: '#'
  },
  {
    image: footer_linkedin,
    href: '#'
  },
  {
    image: footer_twitter,
    href: '#'
  }
];

const NAV_ITEMS = [
  {
    label: 'Product',
    children: [
      {
        title: 'Payment',
        href: '#'
      },
      {
        title: 'Communication',
        href: '#'
      },
      {
        title: 'B2B',
        href: '#'
      }
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        title: 'Blog',
        href: '#'
      },
      {
        title: 'Contact Sales',
        href: '#'
      }
    ],
  },
  {
    label: 'Partners',
    children: [
      {
        title: 'Become a Partner',
        href: '#'
      },
      {
        title: 'Integrations',
        href: '#'
      },
      {
        title: 'Portal Developer',
        href: '#'
      }
    ],
  },
  {
    label: 'Company',
    children: [
      {
        title: 'Contact',
        href: '#'
      },
      {
        title: 'Careers',
        href: '#'
      },
      {
        title: 'Press',
        href: '#'
      },
      {
        title: 'Partners',
        href: '#'
      },
      {
        title: 'Loyalty',
        href: '#'
      },
      {
        title: 'Legal',
        href: '#'
      }
    ],
  },
  {
    label: 'Head Quarters',
    children: [
      {
        title: '1425 Cornwall Rd Oakville ON',
        href: '#'
      }
    ],
  },
];

export default Footer;
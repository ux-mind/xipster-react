import React from 'react';
import logo from '../../images/logo.svg';
import world from '../../images/world.svg';
import burger from '../../images/burger.svg';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={'#232426'}
      py={{ base: "21px", xl: "24px" }}>
      <Container maxW={'1278px'} px={{ base: "24px", xl: 0 }}>
        <Flex
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={ 'start' }>
            <Link
              flexShrink={0}
              as={"a"}
              href={"/"}>
              <Image
                src={logo}
                alt="logo"
                w={{ base: "129px", md: "168px"}}
              />
            </Link>

            <Flex display={{ base: 'none', xl: 'flex' }} ml={"74px"}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            justifyContent={ 'end' }
            ml={{ base: -2 }}
            display={{ base: 'flex', xl: 'none' }}>
            <IconButton
              /*onClick={onToggle}*/
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <Image src={burger} alt="" w={"28px"} h={"28px"} />
              }
              h={"auto"}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{
                bg: 'none'
              }}
            />
          </Flex>

          <Stack
            display={{ base: 'none', xl: 'flex' }}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Link
              as={"a"}
              href={"/"}
              display={"flex"}
              alignItems={"center"}>
              <img src={world} alt="world" />
            </Link>
            <Button
              height={"50px"}
              px={"33px"}
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'16px'}
              fontWeight={600}
              color={'white'}
              href={'#'}
              bg={"none"}
              border={"1.5px"}
              borderStyle={"solid"}
              borderRadius={"12px"}
              borderColor={"white"}
              _hover={{
                bg: 'white',
                color: '#232426',
              }}>
              Sign In
            </Button>
            <Button
              height={"50px"}
              px={"33px"}
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'16px'}
              fontWeight={600}
              color={'#232426'}
              bg={'white'}
              href={'#'}
              border={"1.5px"}
              borderStyle={"solid"}
              borderRadius={"12px"}
              borderColor={"white"}
              _hover={{
                bg: 'none',
                color: 'white',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'white';

  return (
    <Stack direction={'row'} spacing={'40px'}>
      {NAV_ITEMS.map((navItem) => (
        <Flex align="center" justify="center" key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Product',
    href: '#',
  },
  {
    label: 'Solutions',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Resources',
    href: '#',
  },
  {
    label: 'Customer Support',
    href: '#',
  },
];

export default Header;

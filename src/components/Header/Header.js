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
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/core';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={'#232426'}
      py={{ base: "21px", xl: "24px" }}>
      <Box maxW={'1278px'} ml='auto' mr='auto' px={{ base: "24px", xl: 0 }}>
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
            <Link
              as={"a"}
              href={"/"}
              display={"flex"}
              alignItems={"center"}>
              <Image src={burger} alt="" w={"28px"} h={"28px"} />
            </Link>
          </Flex>

          <Flex
            display={{ base: 'none', xl: 'flex' }}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}>
            <Link
              mr='24px'
              as={"a"}
              href={"/"}
              display={"flex"}
              alignItems={"center"}>
              <img src={world} alt="world" />
            </Link>
            <Button
              mr='24px'
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
                bg: '#292929',
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
                background: '#E4E4E4',
              }}>
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'white';

  return (
    <Flex direction={'row'} spacing={'40px'}>
      {NAV_ITEMS.map((navItem, i) => {
        let lastElem = false;
        if (i+1 === NAV_ITEMS.lenght) {
          lastElem = true;
        }
        return (
        <Flex align="center" justify="center" key={navItem.label} mr={!lastElem ? '40px' : 0}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: '#8A7BF0'
                }}
                >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Flex>
        )
      })}
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack
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
          fontWeight={600}>
          {label}
        </Text>
        {children && (
          <Icon
            /* as={ChevronDownIcon} */
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
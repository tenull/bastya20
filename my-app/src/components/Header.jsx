import { useState, useEffect } from 'react';
import { Box, Flex, HStack, Text, IconButton, Container, Button, Link, } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { Link as ReactLink } from 'react-router-dom';
import {
    useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    VStack,

} from '@chakra-ui/react';
import {
    CloseIcon,
    HamburgerIcon,
    ChevronDownIcon
} from '@chakra-ui/icons';
import HoverMenu from './Hovermenu.jsx'

const NAV = [
    //{ name: "RÓLUNK", route: "/rolunk" },
    { name: "MISSZIÓNK", route: "/misszionk" },
    {
        name: "ALAPSZOLGÁLTATÁS",
        children: [
            { name: "Idősek / Demens idősek nappali ellátása", route: "/alapellatas/demens-nappali" },
            { name: "Kihívással élők nappali ellátása", route: "/alapellatas/kihivassal-elok-nappali" },
            { name: "Támogató szolgáltatás", route: "/alapellatas/tamogato-szolgaltatas" },
        ],
    },
    {
        name: "SZAKOSÍTOTT ELLÁTÁS",
        children: [
            { name: "Bástya Idősotthon", route: "/szakositott/bastya-idosotthon" },
            { name: "Forrás Idősotthon", route: "/szakositott/forras-idosotthon" },
        ],
    },

    { 
        name: "GALÉRIA", route: "/galeria" ,
         children: [
            { name: "Nappali ellátás", route: "/galeria/nappali" },
            { name: "Idősotthon", route: "/galeria/bastya" }
        ],
    },
    { name: "DOKUMENTUMOK", route: "/formanyomtatvanyok" },
    { name: "KAPCSOLAT", route: "/kapcsolat" },
];


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const handleTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            bg={scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent'}
            px={{ base: '0', md: '0' }}
            position='fixed'
            w='100%'
            top='0'
            zIndex='sticky'
            transition='background-color 0.3s'
        >
            <Container maxW='container.xl' >
                <Flex position='relative' h='20' alignItems='center' justifyContent='space-between'>
                    <HStack spacing='8' alignItems='center'>
                        {/* <Image top='0px' position='absolute' width='230px' height='120px' src='../images/bastyalogo2.png'/> */}
                        <div style={{
                            display: 'flex', minWidth: '90px',
                            // paddingLeft: '50px'
                        }}>
                            <Box as={ReactLink} onClick={handleTopScroll} to='/' position='relative' right={39} left={{ base: '-12', md: '-65px' }} mt={3} alignItems="center" display="flex" flexDirection="column">

                                <svg width="220" height="150" viewBox="0 0 170 150">
                                    <defs>
                                        <path
                                            id="wave"
                                            d="M 50 75 Q 100 60 150 75 Q 200 90 250 75 Q 300 60 350 75"
                                            fill="transparent"
                                        />
                                    </defs>
                                    <text fill="white" fontSize="28" fontWeight="bold">
                                        <textPath href="#wave">
                                            BÁSTYA
                                        </textPath>
                                    </text>
                                </svg>
                                <Text w='150px' textAlign='center' top='72px' lineHeight='normal' left='52px' position='absolute' as="b" fontSize="10px" alignItems="center" color="white">
                                    REFORMÁTUS
                                </Text>
                                <Text w='150px' textAlign='center' top='84px' lineHeight='normal' left='52px' position='absolute' as="b" fontSize="7px" alignItems="center" color="white">
                                    SZOCIÁLIS SZOLGÁLTATÓ KÖZPONT
                                </Text>
                            </Box>

                        </div>
                    </HStack>
                    <Flex h='16' alignItems='center' justifyContent='space-between'>
                        <HStack as='nav' spacing='4' display={{ base: 'none', lg: 'flex' }}>
                            <div style={{
                                display: 'flex', minWidth: '90px',
                                // paddingRight: '150px'
                            }}>
                                {NAV.map((item) => {
                                    if (!item.children) {
                                        return (
                                            <NavLink route={item.route} key={item.route}>
                                                <Text fontSize={{base:'16',md:'14',lg:'14'}} display="flex" alignItems="center" fontWeight="medium">
                                                    {item.name}
                                                </Text>
                                            </NavLink>
                                        );
                                    }

                                    return (
                                        <HoverMenu
                                            key={item.name}
                                            label={item.name}
                                            items={item.children}
                                            handleTopScroll={handleTopScroll}
                                        />
                                    );
                                })}


                                <Button
                                    left='35px'
                                    as={Link}
                                    href="tel:+36301449427"
                                    _focus={{
                                        textDecoration: 'none'
                                    }}
                                    bg="transparent"
                                    border='2px'
                                    _hover={{
                                        color: 'yellow.400',
                                        textDecoration: 'none'
                                    }}
                                    display="flex"
                                    px={3}
                                    py={1}
                                    alignItems="center"
                                    color="white"
                                    fontWeight="medium"
                                >
                                    +36/30-144-9427
                                </Button>

                            </div>

                        </HStack>
                        {isOpen ? null : (<Box rounded='5px' border='2px solid white' padding={2} cursor='pointer' display={{ base: 'block', lg: 'none' }}>
                            <HamburgerIcon color='white' fontSize={25} onClick={onOpen} />
                        </Box>)}
                    </Flex>
                </Flex>
             <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: "full", md: "md" }}>
  <DrawerOverlay />
  <DrawerContent bg="rgba(0, 0, 0, 0.7)">
    <DrawerHeader display="flex" justifyContent="flex-end">
      <Box
        border="2px solid white"
        rounded="5px"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        w="45px"
        _hover={{ color: "yellow.400" }}
      >
        <IconButton
          icon={<CloseIcon color="white" fontSize={20} />}
          onClick={onClose}
          bg="transparent"
          _hover={{ color: "yellow.400" }}
          _focus={{ boxShadow: "none", backgroundColor: "transparent" }}
        />
      </Box>
    </DrawerHeader>

    {/* ✅ EGYSÉGES KÖZÉPRE IGAZÍTOTT MENÜ */}
    <VStack align="center" spacing={2} px={6} pb={10}>
      {NAV.map((item) => {
        // sima link
        if (!item.children) {
          return (
            <Link
              key={item.route}
              as={ReactLink}
              to={item.route}
              onClick={() => {
                handleTopScroll();
                onClose();
              }}
              color="white"
              w="100%"
              textAlign="center"
              py={3}
              rounded="md"
              _hover={{
                color: "yellow.400",
                bg: "whiteAlpha.100",
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          );
        }

        // accordion (középre igazítva)
        return (
          <Accordion allowToggle w="100%" key={item.name}>
            <AccordionItem border="none" w="100%">
              <AccordionButton
                w="100%"
                justifyContent="center"
                py={3}
                px={0}
                _hover={{ color: "yellow.400" }}
                _focus={{ boxShadow: "none" }}
              >
                <HStack spacing={2}>
                  <Text color="white" fontWeight="medium">
                    {item.name}
                  </Text>
                  <ChevronDownIcon color="white" />
                </HStack>
              </AccordionButton>

              <AccordionPanel pb={2} px={0}>
                <VStack align="center" spacing={1}>
                  {item.children.map((child) => (
                    <Link
                      key={child.route}
                      as={ReactLink}
                      to={child.route}
                      onClick={() => {
                        handleTopScroll();
                        onClose();
                      }}
                      color="whiteAlpha.900"
                      _hover={{
                        color: "yellow.400",
                        bg: "whiteAlpha.100",
                        textDecoration: "none",
                      }}
                      py={2}
                      px={3}
                      rounded="md"
                      textAlign="center"
                      w="100%"
                      maxW="320px"
                    >
                      {child.name}
                    </Link>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </VStack>
  </DrawerContent>
</Drawer>

            </Container>
        </Box>
    );
}

export default Header;

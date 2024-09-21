import React, { useState, useEffect } from 'react';
import { Box, Flex, HStack, Text, IconButton, Container, Button, Link,Image } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { Link as ReactLink } from 'react-router-dom';
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerFooter } from '@chakra-ui/react';
import {
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons';
const Links = [
    { name: 'RÓLUNK', route: '/rolunk' },
    { name: 'SZOLGÁLTATÁSAINK', route: '/szolgaltatasaink' },
    { name: 'GALÉRIA', route: '/galeria' },
    { name: 'DOKUMENTUMOK', route: '/formanyomtatvanyok' },
    { name: 'KAPCSOLAT', route: '/kapcsolat' },
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
            <Container maxW='container.lg' >
                <Flex position='relative' h='20' alignItems='center' justifyContent='space-between'>
                    <HStack spacing='8' alignItems='center'>
                        {/* <Image top='0px' position='absolute' width='230px' height='120px' src='../images/bastyalogo2.png'/> */}
                        <div style={{
                            display: 'flex', minWidth: '90px',
                            // paddingLeft: '50px'
                        }}>
                            <Box as={ReactLink} onClick={handleTopScroll} to='/' position='relative' right={39} left={{base:'-12',md:'-65px'}} mt={3} alignItems="center" display="flex" flexDirection="column">
                            
                                <svg width="220"  height="150" viewBox="0 0 170 150">
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
                                <Text top='75px' left='90px' position='absolute' as="b" fontSize="10px" alignItems="center" color="white">
                                    IDŐSOTTHON
                                </Text>
                            </Box>

                        </div>
                    </HStack>
                    <Flex h='16' alignItems='center' justifyContent='space-between'>
                        <HStack as='nav' spacing='4' display={{ base: 'none', md: 'flex' }}>
                            <div style={{
                                display: 'flex', minWidth: '90px',
                                // paddingRight: '150px'
                            }}>
                                {Links.map((link) => (
                                    <NavLink
                                        route={link.route}
                                        key={link.route}
                                    >
                                        <Text display='flex' alignItems='center' fontWeight='medium'>
                                            {link.name}
                                        </Text>
                                    </NavLink>
                                ))}

                                <Button
                                    left='35px'
                                    as={Link}
                                    href="tel:+36301628381"
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
                                    +36/30-162-8381
                                </Button>

                            </div>

                        </HStack>
                        {isOpen ? null : (<Box rounded='5px' border='2px solid white' padding={2} cursor='pointer' display={{ base: 'block', md: 'none' }}>
                            <HamburgerIcon color='white' fontSize={25} onClick={onOpen} />
                        </Box>)}
                    </Flex>
                </Flex>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'full', md: 'md' }}>
                    <DrawerOverlay />
                    <DrawerContent bg="rgba(0, 0, 0, 0.7)">
                        <DrawerHeader display='flex' justifyContent='flex-end'>
                            <Box
                                border='2px solid white'
                                rounded='5px' 
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="center"
                                w="45px"
                                _hover={{
                                    color: 'yellow.400'
                                }}
                            >
                                <IconButton
                                    icon={<CloseIcon color='white' fontSize={20} />}
                                    onClick={onClose}
                                    bg='transparent'
                                    _hover={{
                                        color: 'yellow.400'
                                    }}
                                    _focus={{
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent'
                                    }}
                                />
                            </Box>
                        </DrawerHeader>

                        {Links.map((link) => (
                            <NavLink
                                route={link.route}
                                key={link.route}
                            >
                                <Text display='flex' alignItems='center' fontWeight='medium' onClick={onClose}>
                                    {link.name}
                                </Text>
                            </NavLink>
                        ))}
                    </DrawerContent>
                </Drawer>
            </Container>
        </Box>
    );
}

export default Header;

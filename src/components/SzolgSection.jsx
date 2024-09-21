import { Box, Button } from "@chakra-ui/react";
import CaptionCarousel from "../components/CarouselLandingScreen";
import { Image, Text, Stack, Flex, Container, Icon } from '@chakra-ui/react'
import Contacts from "../components/Contacts";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const SzolgSection = () => {
    return (
        <Container maxW='container.lg' display='flex' flexDirection='column' justifyContent='center'>
            <Flex data-aos="zoom-in-up" mb={5} justifyContent='center'>
                <Text textAlign='center' fontFamily='Montserrat,Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>IDŐSEK GONDOZÁSA</Text>
            </Flex>
            <Flex justifyContent='center'>
                <Text >
                    Intézményünk alapvetően az arra rászorultak hotelszintű gondozásával, ápolásával foglalkozik.
                </Text>
            </Flex>
            <Flex my={5} justifyContent='center'>
                <Text textAlign='center' >
                    2 ellátási részlegre bontva látjuk el az önellátásra képes illetve a súlyosabb betegségben szenvedő lakóinkat (állapotváltozás esetén az ellátásban átjárást teszünk lehetővé).
                </Text>
            </Flex>
            <Flex
                justify={{ base: 'center', md: 'space-between' }}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems='center'
                flexWrap={{ base: 'nowrap', md: 'wrap' }}
                width='100%'
                marginBottom='20px'
            >
                {/* 24 órás nővérszolgálat */}
                <Stack
                    data-aos="fade-right"
                    spacing='4'
                    w="250px"
                    h='320px'
                    display='flex'
                    align='center'
                    justify='center'
                    rounded='10px'
                    p='20px'
                    position='relative'
                    _hover={{ '> img': { transform: 'scale(1.10)', transitionDuration: '0.3s' } }} 
                >
                    <Image
                        src='/images/nurse1.png'
                        width='107px'
                        height='107px'
                        position='absolute'
                        top='-15%'
                        transition="transform 0.3s ease-in-out" 
                    />
                    <Text
                        fontSize='xl'
                        fontFamily='Montserrat, Sans-serif'
                        textTransform='uppercase'
                        fontWeight='bold'
                        textAlign='center'
                    >
                        24 órás <br /> nővérszolgálat
                    </Text>
                    <Text textAlign='justify'>
                        Biztonság és állandó felügyelet éjjel-nappal, szakképzett ápolókkal.
                    </Text>
                    <Button
                        as={Link}
                        to='/szolgaltatasaink'
                        _focus={{ textDecoration: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                        bg="transparent"
                        width='250px'
                        border='2px'
                        _hover={{ color: 'yellow.400', textDecoration: 'none' }}
                        _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                        sx={{
                            '> svg': { transition: 'transform 0.3s ease-in-out' },
                            '&:hover > svg': { transform: 'translateX(5px)' }
                        }}
                        display="flex"
                        px={3}
                        py={1}
                        alignItems="center"
                        color="black"
                        fontWeight="medium"
                    >
                        BŐVEBBEN
                        <BiRightArrowAlt fontSize='25px' />
                    </Button>
                </Stack>


                {/* Rendszeres orvosi ellenőrzés */}
                <Stack
                    my={{ base: '25px', md: '25px' }}
                    mx={{ base: '25px', md: '25px' }}
                    spacing='4'
                    w="300px"
                    h='320px'
                    align='center'
                    justify='center'
                    rounded='10px'
                    p='20px'
                    position='relative'
                    _hover={{ '> img': { transform: 'scale(1.10)', transitionDuration: '0.3s' } }}         
                >
                    <Image
                        transition="transform 0.3s ease-in-out" 
                        src='/images/stethoscope.png' width='107px' height='107px' position='absolute' top='-15%' />
                    <Text fontFamily='Montserrat, Sans-serif' fontSize='xl' textTransform='uppercase' fontWeight='bold' textAlign='center'>Rendszeres <br /> orvosi ellenőrzés</Text>
                    <Text textAlign='justify'>Hetente két alkalommal orvosi vizit, háziorvosi és pszichiátriai szakorvosi felügyelet.</Text>
                    <Button
                        as={Link}
                        to='/szolgaltatasaink'
                        _focus={{ textDecoration: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                        bg="transparent"
                        width='250px'
                        border='2px'
                        _hover={{ color: 'yellow.400', textDecoration: 'none' }}
                        _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                        sx={{
                            '> svg': { transition: 'transform 0.3s ease-in-out' },
                            '&:hover > svg': { transform: 'translateX(5px)' }
                        }}
                        display="flex"
                        px={3}
                        py={1}
                        alignItems="center"
                        color="black"
                        fontWeight="medium"
                    >
                        BŐVEBBEN
                        <BiRightArrowAlt fontSize='25px' />
                    </Button>
                </Stack>

                {/* Napi ötszöri étkezés */}
                <Stack
                    data-aos="fade-left"
                    spacing='4'
                    w="300px"
                    h='320px'
                    align='center'
                    justify='center'
                    rounded='10px'
                    p='20px'
                    position='relative'
                    _hover={{ '> img': { transform: 'scale(1.10)', transitionDuration: '0.3s' } }} 
                >
                    <Image
                       transition="transform 0.3s ease-in-out" 
                        src='/images/cutlery.png' display='flex' width='107px' height='107px' position='absolute' top='-15%' />
                    <Text fontSize='xl' textAlign='center' fontFamily='Montserrat, Sans-serif' textTransform='uppercase' fontWeight='bold'>Napi ötszöri étkezés, <br /> diétás lehetőséggel</Text>
                    <Text textAlign='ju'>Ízletes, egészséges és változatos étrend, az egyéni igényekhez igazítva.</Text>
                    <Button
                        as={Link}
                        to='/szolgaltatasaink'
                        _focus={{ textDecoration: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                        bg="transparent"
                        width='250px'
                        border='2px'
                        _hover={{ color: 'yellow.400', textDecoration: 'none' }}
                        _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                        sx={{
                            '> svg': { transition: 'transform 0.3s ease-in-out' },
                            '&:hover > svg': { transform: 'translateX(5px)' }
                        }}
                        display="flex"
                        px={3}
                        py={1}
                        alignItems="center"
                        color="black"
                        fontWeight="medium"
                    >
                        BŐVEBBEN
                        <BiRightArrowAlt fontSize='25px' />
                    </Button>
                </Stack>
            </Flex>
        </Container>

    );
}

export default SzolgSection;
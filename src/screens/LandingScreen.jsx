import { Box, Button } from "@chakra-ui/react";
import CaptionCarousel from "../components/CarouselLandingScreen";
import { Image, Text, Stack, Flex, Container, Icon } from '@chakra-ui/react'
import Contacts from "../components/Contacts";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import SzolgSection from "../components/SzolgSection";
import { useEffect } from "react";
import AOS from 'aos';
const LandingScreen = () => {

    useEffect(() => {
        AOS.init({
            duration: 700, 
            once: false,    
        });
        AOS.refresh(); 
    }, []);

    return (
        <div>
            <CaptionCarousel />
            <SzolgSection />
            <Container maxW='container.lg' justifyContent='space-evenly'>
                <Flex data-aos="zoom-in-up" mb={5} justifyContent='center'>
                    <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>OTTHONUNK</Text>
                </Flex>
                <Flex justify="space-evenly" wrap="wrap" pt={5} gap={4}>
                    <Box position='relative' width={{ base: "100%", md: "50%" }} mb={4}>
                        <Box display={{ base: 'none', lg: 'block' }} position='absolute' rounded='5px' zIndex='-1' right='35px' top='-35px' width='496px' height='550px' border='7px solid' borderColor='yellow.400' data-aos="zoom-in-left" ></Box>
                        <Stack spacing={2} align="center">
                            <Image
                                data-aos="flip-left"
                                src="/images/healthcare.webp"
                                alt="Image 1"
                                rounded='5px'
                                width={{ base: "350px", lg: "500px" }}
                                height={{ base: "300px", lg: "550px" }}
                                objectFit="cover"
                            />
                            <Text fontSize={{ base: 'sm', md: 'lg' }} textAlign="justify">
                                A Csurgó vendégház jól felszerelt,- 4 kétágyas szobával és egyterű nappali-konyha-étkezővel rendelkezik. Minden szobához külön fürdőszoba tartozik, melyből 2 szoba pótágyazható. Vendégházunk mellett egy külön bejáratú 2+1 fős apartman is a vendégek rendelkezésére áll. A vendégház és apartman egyben és külön-külön is foglalható. Akár születésnapi hétvégét tartana, akár egy romantikus kiruccanást, vagy egy baráti összejövetelt- vendégházunk gondoskodik az Önök kényelméről.
                            </Text>
                        </Stack>
                    </Box>

                    <Box
                        position="relative"
                        width={{ base: "100%", md: "47%" }}
                        maxW="500px"

                    >
                        <Stack spacing={2} align="center">
                            <Text
                                fontSize={{ base: 'sm', md: 'lg' }}
                                textAlign="justify"
                                maxW="450px"
                            >
                                Farkasgyepű, a nyugalom szigete
                                2022 augusztusában nyílt, panorámás, medencével ellátott vendégházunk a szubalpin klímájáról jellegzetes Farkasgyepűn található. Pár km-en belül vízesés, tavak és erdei ösvények kínálnak a kirándulni vágyók részére mesés úti célt , melyek tökéletesen alkalmasak arra, hogy Ön elvonuljon a város zajától, és kikapcsolódjon.
                            </Text>
                            <Box
                                display={{ base: 'none', lg: 'block' }}
                                position='absolute'
                                zIndex='-1'
                                left='35px'
                                bottom='35px'
                                width='466px'
                                height='550px'
                                border='7px solid'
                                borderColor='yellow.400'
                                data-aos="zoom-in-right"
                                rounded='5px'
                            >
                            </Box>

                            <Image
                                data-aos="flip-right"
                                src="/images/nursingold.jpg"
                                alt="Image 2"
                                width={{ base: "350px", lg: "500px" }}
                                height={{ base: "300px", lg: "550px" }}
                                objectFit="cover"
                                rounded='5px'
                            />
                        </Stack>
                    </Box>
                </Flex>
                <Box mb={10} display='flex' justifyContent='flex-end'>
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
                        mt={{base:'5',md:'0'}}
                        px={3}
                        py={1}
                        alignItems="center"
                        color="black"
                        fontWeight="medium"
                    >
                        BŐVEBBEN
                        <BiRightArrowAlt fontSize='25px' />
                    </Button>
                </Box>

            </Container>
        </div>
    );
}

export default LandingScreen;
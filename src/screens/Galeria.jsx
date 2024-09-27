import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Heading,
    Image,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { imageData } from "../imageData";
import { foglalkozasData } from "../foglalkozasData";
import AOS from 'aos';
import { FaArrowLeft, FaArrowRight, FaPlay, FaExpand, FaExpandArrowsAlt } from 'react-icons/fa';
import { MdOutlineSmartDisplay, MdOutlinePausePresentation } from "react-icons/md";
import { LuArrowRightSquare, LuArrowLeftSquare } from "react-icons/lu";
import { useMediaQuery } from "@chakra-ui/react";


const Galeria = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [actualData, setActualData] = useState({});
    const [carouselStyle, setCarouselStyle] = useState({});
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const iconSize = isMobile ? 50 : 80;
    const fontSizezz = isMobile ? '35px' : '35px'

    const handleShow = (item) => {
        setActualData(item);
        onOpen();
    };

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setCarouselStyle({ height: "400px", width: "330px", objectFit: "contain" });
            } else {
                setCarouselStyle({ height: "500px", width: "460px", objectFit: "contain" });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/virag2.jpg)`}
            >
                <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>Galéria</Text>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontSize={{ base: 'md', md: 'lg' }}>Betekintést nyerhet az idősek mindennapjaiba.</Text>
                </Container>
            </Box>

            <Box >
                <Box>
                    <Container maxW='container.lg' rounded="md" mt={2} pt={2} pb={3} textAlign="center">
                        <Heading as="p" size="lg" mt={5} mb={4}>
                            <Flex data-aos="zoom-in-up" my={10} justifyContent='center'>
                                <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>PROGRAMOK</Text>
                            </Flex>
                        </Heading>
                        <Flex data-aos="fade-up" wrap="wrap" justifyContent="center">
                            {imageData.map((item) => (
                                <Box
                                    p={2}
                                    key={item.title}
                                    mt={3}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    overflow="hidden"
                                    position="relative"
                                >
                                    <Text fontSize="xl" fontWeight='bold' textAlign="center" mb={2}>
                                        {item.title}
                                    </Text>
                                    <Box
                                        cursor="pointer"
                                        onClick={() => handleShow(item)}
                                        overflow="hidden"
                                        borderRadius="md"
                                        position="relative"
                                        width="300px"
                                        height="300px"
                                        _hover={{
                                            img: {
                                                transform: 'scale(1.05)',
                                                filter: 'brightness(1.1)'
                                            }
                                        }}
                                    >
                                        <Image
                                            src={`${item.mainimage}?w=300&h=300&fit=crop&auto=format`}
                                            alt={item.title}
                                            objectFit="cover"
                                            objectPosition="top"
                                            boxSize="100%"
                                            transition="transform 0.3s ease, filter 0.3s ease"
                                            filter="brightness(1)"
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Flex>

                    </Container>

                    <Box bg="#F3F8FC">
                        <Container maxW='container.lg' rounded="md" mt={5} pt={3} pb={10} textAlign="center">
                            <Heading as="p" size="lg" mt={5} mb={4}>
                                <Flex data-aos="zoom-in-up" my={10} justifyContent='center'>
                                    <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>FOGLALKOZÁSOK</Text>
                                </Flex>
                            </Heading>
                            <Flex data-aos="fade-up" wrap="wrap" justifyContent='center'>
                                {foglalkozasData.map((item) => (
                                    <Box
                                        p={2}
                                        key={item.title}
                                        className="col-lg-4"
                                        mt={3}
                                        display='flex'
                                        flexDirection='column'
                                        justifyContent='center'
                                        alignItems="center"
                                    >
                                        <Text fontSize="lg" fontWeight='bold' textAlign="center" mb={2}>
                                            {item.title}
                                        </Text>
                                        <Box
                                            cursor="pointer"
                                            onClick={() => handleShow(item)}
                                            overflow="hidden"
                                            borderRadius="md"
                                            position="relative"
                                            width="300px"
                                            height="300px"
                                            _hover={{
                                                img: {
                                                    transform: 'scale(1.05)',
                                                    filter: 'brightness(1.1)'
                                                }
                                            }}
                                        >
                                            <Box className="img-container-zoom" overflow="hidden" borderRadius="md">
                                                <Image
                                                    src={`${item.mainimage}?w=164&h=164&fit=crop&auto=format`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    boxSize="300px"
                                                    objectFit="cover"
                                                    objectPosition="top"
                                                    transition="transform 0.3s ease, filter 0.3s ease"
                                                    filter="brightness(1)"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                        </Container>
                    </Box>

                    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                        <ModalOverlay />
                        <ModalContent display='flex' justifyContent='center' height={{ base: '480px', md: '780px' }} width={{ base: '370px', md: '880px' }}>
                            <ModalHeader textAlign="center">{actualData.title}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody d="flex" justifyContent="center" height={{ base: '370px', md: '600px' }} width={{ base: '370px', md: '880px' }}>
                                <Carousel
                                    className="carousel-custom"
                                    images={
                                        actualData.images &&
                                        Object.keys(actualData.images).map((key) => ({
                                            src: actualData.images[key],
                                        }))
                                    }
                                    startIndex={0}
                                    leftIcon={<LuArrowLeftSquare color="rgb(236, 201, 75)" style={{ position: 'relative', left: '15px' }} size={iconSize} />}
                                    rightIcon={<LuArrowRightSquare color="rgb(236, 201, 75)" style={{ position: 'relative', right: '15px' }} size={iconSize} />}
                                    playIcon={<MdOutlineSmartDisplay color="rgb(236, 201, 75)" style={{ position: 'relative', left: '15px' }} size={iconSize} />}
                                    pauseIcon={<MdOutlinePausePresentation color='rgb(236, 201, 75)' style={{ position: 'relative', left: '15px' }} size={iconSize} />}
                                    expandIcon={<FaExpandArrowsAlt color="rgb(236, 201, 75)" size={iconSize} />}

                                    style={{ height: '100%', width: '100%', fontSize: isMobile ? '25px' : '35px', fill: 'white' }}
                                />
                            </ModalBody>

                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
};

export default Galeria;

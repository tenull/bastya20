import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Button
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useState } from 'react'
export default function CaptionCarousel() {
    const [slider, setSlider] = React.useState(null)
    const [currentSlide, setCurrentSlide] = useState(0);
    const MotionBox = motion(Box);
    const top = useBreakpointValue({ base: '30px', md: '3%' })
    const side = useBreakpointValue({ base: '30px', md: '40px' })
    const sideButton = useBreakpointValue({
        base: '5%',
        sm: '5%',
        md: 'calc(50% - 420px)', // Center alignment calculation based on container size
        lg: 'calc(50% - 470px)' // Adjust based on larger container
    });

    const topButton = useBreakpointValue({ base: '70px', md: '250px' })
    const slidesToShow = useBreakpointValue({ base: 1, md: 1 })

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex); 
        }
    }

    const cards = [
        {
            image: '/images/kep2.jpg',
            header: 'ÜDVÖZÖLJÜK A  TISZALÖKI  ',
            text: `BÁSTYA`,
            text2: `IDŐSOTTHON`,
            bottom: 'OLDALÁN'
        },
        {
            image: '/images/mulatozas.jpg',
            text: `BÁSTYA`,
            text2: `IDŐSOTTHON`,
        },
        {
            image: '/images/idosotthon5.jpg',
            header: 'ÜDVÖZÖLJÜK A  TISZALÖKI  ',
            text: `BÁSTYA`,
            text2: `IDŐSOTTHON`,
            bottom: 'OLDALÁN'
        },
    ];

    return (
        <Box position={'relative'}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            {/* <IconButton
                aria-label="left-arrow"
                backgroundColor="transparent"
                border="2px solid"
                position="absolute"
                _focus={{
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
                _hover={{
                    color: 'yellow.400',
                }}
                color="white"
                right="88px"
                bottom={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                backgroundColor="transparent"
                border="2px solid"
                color="white"
                position="absolute"
                _focus={{
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
                _hover={{
                    color: 'yellow.400',
                }}
                right={side}
                bottom={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton> */}
            <Button
                position="absolute"
                left={sideButton}
                bottom={topButton}
                zIndex={10}
                as={Link}
                to='/szolgaltatasaink'
                _focus={{
                    textDecoration: 'none',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                }}
                bg="transparent"
                width={{base:'180px',md:'250px'}}
                border='2px'
                _hover={{
                    color: 'yellow.400',
                    textDecoration: 'none',
                }}
                _active={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}
                sx={{
                    '> svg': {
                        transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover > svg': {
                        transform: 'translateX(5px)',
                    },
                }}
                display="flex"
                px={3}
                py={1}
                alignItems="center"
                color="white"
                fontWeight="medium"
                fontSize={{base:'14px',md:'16px'}}
            >
                TUDJ MEG TÖBBET
                <BiRightArrowAlt fontSize='25px' />
            </Button>

            <Box overflow="hidden"> 
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {Array.isArray(cards) &&
                    cards.map((card, index) => (
                        <Box
                        key={`${currentSlide}-${index}`}
                        position="relative"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        overflow="hidden"
                        width="100%"
                        height="100%"
                    >
                       <MotionBox
                        position="absolute" // Különálló elemként viselkedik
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(${card.image})`}
                        animate={{ scale: [1, 1.03] }} 
                        transition={{ duration: 4, ease: 'easeInOut', loop: Infinity }}
                        zIndex={1} // A háttér alá helyezi
                    />
                            <Container maxW="container.lg" position="relative">
                                <Stack
                                zIndex={2}
                                    position='relative'
                                    spacing={3}
                                    display='flex'
                                    justifyContent='center'
                                    maxW='cointainer.lg'
                                    height={{ base: '400px', md: '900px' }}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    padding="20px"
                                    rounded="10px">
                                    <Text
                                        top='25px'
                                        position='relative'
                                        fontFamily='Kaushan Script,cursive'
                                        fontWeight='bold'
                                        fontSize={{
                                            base: 'lg',
                                            md: '2xl',
                                        }}
                                        color="white">
                                        {card.header}
                                    </Text>
                                    <Text
                                        fontFamily='Kaushan Script,cursive'
                                        fontWeight='900'
                                        fontSize={{
                                            base: '4xl',
                                            lg: '7xl',
                                        }}

                                        color="white">
                                        {card.text}
                                    </Text>
                                    <Text
                                        position='relative'
                                        top={{ base: '-20px', md: '-40px' }}
                                        fontFamily='Kaushan Script,cursive'
                                        fontWeight='900'
                                        fontSize={{
                                            base: '4xl',
                                            lg: '7xl',
                                        }}
                                        color="white">
                                        {card.text2}
                                    </Text>
                                    <Text
                                        bottom={{base:'40px',md:'60px'}}
                                        position='relative'
                                        fontWeight='bold'
                                        fontFamily='Kaushan Script,cursive'
                                        fontSize={{
                                            base: 'lg',
                                            md: '2xl',
                                        }}
                                        color="white">
                                        {card.bottom}
                                    </Text>


                                </Stack>
                            </Container>
                       
                        </Box>

                    ))}

            </Slider>
            </Box>
            <Box
                position='absolute'
                bottom={-1}
                width='100%'
                height='auto'
                zIndex={1}
            >
                <svg
                    id="wave"

                    style={{ transform: 'rotate(0deg)', transition: '0.3s', pointerEvents: 'none' }}
                    viewBox="0 0 1440 490"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,441L80,441C160,441,320,441,480,416.5C640,392,800,343,960,285.8C1120,229,1280,163,1440,187.8C1600,212,1760,327,1920,310.3C2080,294,2240,147,2400,81.7C2560,16,2720,33,2880,98C3040,163,3200,278,3360,302.2C3520,327,3680,261,3840,196C4000,131,4160,65,4320,73.5C4480,82,4640,163,4800,187.8C4960,212,5120,180,5280,212.3C5440,245,5600,343,5760,318.5C5920,294,6080,147,6240,114.3C6400,82,6560,163,6720,236.8C6880,310,7040,376,7200,367.5C7360,359,7520,278,7680,236.8C7840,196,8000,196,8160,171.5C8320,147,8480,98,8640,73.5C8800,49,8960,49,9120,49C9280,49,9440,49,9600,40.8C9760,33,9920,16,10080,32.7C10240,49,10400,98,10560,171.5C10720,245,10880,343,11040,334.8C11200,327,11360,212,11440,155.2L11520,98L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
                    />
                </svg>
            </Box>
        </Box>
    )
}

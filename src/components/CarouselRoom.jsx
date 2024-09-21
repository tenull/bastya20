import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Container,
    useBreakpointValue,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const CarouselRoom = () => {
    const slidesToShow = useBreakpointValue({ base: 1, md: 1 });

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    const cards = [
        { image: '/images/szoba1.jpg', title: 'Egy ágyas szoba' },
        { image: '/images/szoba2.jpg', title: 'Egy ágyas szoba' },
        { image: '/images/szoba3.jpg', title: 'Egy ágyas szoba' },
    ];

    const cards2 = [
        { image: '/images/szoba1.jpg', title: 'Két ágyas szoba' },
        { image: '/images/szoba2.jpg', title: 'Két ágyas szoba' },
        { image: '/images/szoba3.jpg', title: 'Két ágyas szoba' },
    ];
    const cards3 = [
        { image: '/images/szoba1.jpg', title: 'Három ágyas szoba' },
        { image: '/images/szoba2.jpg', title: 'Három ágyas szoba' },
        { image: '/images/szoba3.jpg', title: 'Három ágyas szoba' },
    ];
    const cards4 = [
        { image: '/images/szoba1.jpg', title: 'Négy ágyas szoba' },
        { image: '/images/szoba2.jpg', title: 'Négy ágyas szoba' },
        { image: '/images/szoba3.jpg', title: 'Négy ágyas szoba' },
    ];

    return (
        <Box position={'relative'} maxW="100%" px={4}>
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
            <style>
                {`
                .slick-dots {
                position: relative ;
                margin-bottom: 20px;
                margin-top: -70px
                }
                 @media (max-width: 766px) {
            .slick-dots {
            position: relative ;
              margin-bottom: 15px;
              margin-top: 5px
            }
          }
                `}
            </style>

            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                {/* First slider */}
                <Box flex="1" maxW={{ base: '100%', md: '48%' }} mb={4}>
                    <Slider
                        sx={{
                            '.slick-dots': {
                                position: 'relative',
                                marginBottom: { base: '20px', md: '10px' },
                                marginTop: '-70px',
                            },
                        }}
                        {...settings}>
                        {cards.map((card, index) => (
                            <Box
                                data-aos="fade-right"
                                key={index}
                                height={{ base: '400px', md: '550px' }}
                                backgroundPosition="bottom"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    size="container.lg"
                                    height={{ base: '200px', md: '250px' }}
                                    position="relative"
                                >
                                    <Stack
                                        spacing={3}
                                        w={'full'}
                                        maxW={'lg'}
                                        height={{ base: '400px', md: '500px' }}
                                        textAlign="center"
                                        backgroundColor="green.400"
                                        backgroundImage={`url(${card.image})`}
                                        backgroundPosition="center"
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        rounded="10px"
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Heading
                                            roundedTop="5px"
                                            py={5}
                                            bg="rgba(0, 0, 0, 0.7)"
                                            display={'flex'}
                                            justifyContent="center"
                                            alignItems="flex-end"
                                            fontSize={{ base: 'md', md: 'md', lg: 'lg' }}
                                            color="white"
                                        >
                                            {card.title}
                                        </Heading>
                                    </Stack>
                                </Container>
                            </Box>
                        ))}
                    </Slider>
                </Box>

                {/* Second slider */}
                <Box data-aos="fade-left" flex="1" maxW={{ base: '100%', md: '48%' }} mb={4}>
                    <Slider {...settings}>
                        {cards2.map((card, index) => (
                            <Box
                                key={index}
                                height={{ base: '400px', md: '550px' }}
                                backgroundPosition="bottom"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    size="container.lg"
                                    height={{ base: '200px', md: '250px' }}
                                    position="relative"
                                >
                                    <Stack
                                        spacing={3}
                                        w={'full'}
                                        maxW={'lg'}
                                        height={{ base: '400px', md: '500px' }}
                                        textAlign="center"
                                        backgroundColor="blue.400"
                                        backgroundImage={`url(${card.image})`}
                                        backgroundPosition="center"
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        rounded="10px"
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Heading
                                            roundedTop="5px"
                                            py={5}
                                            bg="rgba(0, 0, 0, 0.7)"
                                            display={'flex'}
                                            justifyContent="center"
                                            alignItems="flex-end"
                                            fontSize={{ base: 'md', md: 'md', lg: 'lg' }}
                                            color="white"
                                        >
                                            {card.title}
                                        </Heading>
                                    </Stack>
                                </Container>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>

            {/* Second row of sliders */}
            <Box  display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Box data-aos="fade-right" flex="1" maxW={{ base: '100%', md: '48%' }} mb={4}>
                    <Slider {...settings}>
                        {cards3.map((card, index) => (
                            <Box
                                key={index}
                                height={{ base: '400px', md: '550px' }}
                                backgroundPosition="bottom"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    size="container.lg"
                                    height={{ base: '200px', md: '250px' }}
                                    position="relative"
                                >
                                    <Stack
                                        spacing={3}
                                        w={'full'}
                                        maxW={'lg'}
                                        height={{ base: '400px', md: '500px' }}
                                        textAlign="center"
                                        backgroundColor="green.400"
                                        backgroundImage={`url(${card.image})`}
                                        backgroundPosition="center"
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        rounded="10px"
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Heading
                                            roundedTop="5px"
                                            py={5}
                                            bg="rgba(0, 0, 0, 0.7)"
                                            display={'flex'}
                                            justifyContent="center"
                                            alignItems="flex-end"
                                            fontSize={{ base: 'md', md: 'md', lg: 'lg' }}
                                            color="white"
                                        >
                                            {card.title}
                                        </Heading>
                                    </Stack>
                                </Container>
                            </Box>
                        ))}
                    </Slider>
                </Box>

                <Box data-aos="fade-left" flex="1" maxW={{ base: '100%', md: '48%' }} mb={4}>
                    <Slider {...settings}>
                        {cards4.map((card, index) => (
                            <Box
                                key={index}
                                height={{ base: '400px', md: '550px' }}
                                backgroundPosition="bottom"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    size="container.lg"
                                    height={{ base: '200px', md: '250px' }}
                                    position="relative"
                                >
                                    <Stack
                                        spacing={3}
                                        w={'full'}
                                        maxW={'lg'}
                                        height={{ base: '400px', md: '500px' }}
                                        textAlign="center"
                                        backgroundColor="blue.400"
                                        backgroundImage={`url(${card.image})`}
                                        backgroundPosition="center"
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        rounded="10px"
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <Heading
                                            roundedTop="5px"
                                            py={5}
                                            bg="rgba(0, 0, 0, 0.7)"
                                            display={'flex'}
                                            justifyContent="center"
                                            alignItems="flex-end"
                                            fontSize={{ base: 'md', md: 'md', lg: 'lg' }}
                                            color="white"
                                        >
                                            {card.title}
                                        </Heading>
                                    </Stack>
                                </Container>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default CarouselRoom;

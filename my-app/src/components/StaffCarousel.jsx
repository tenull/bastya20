import React from "react";
import Slider from "react-slick";
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import MotionInView from "./MotionView";

function StaffCard({ role, names }) {
    return (
        <Box px={2}>
            <Box
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="2xl"
                p={6}
                boxShadow="sm"
                h="150px"
                textAlign="center"
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                
                <Box>
                    <Text lineHeight='normal' fontWeight="900" fontSize="lg">
                        {role}
                    </Text>

                    <Box w="70px" h="3px" bg="yellow.400" rounded="full" mx="auto" my={3} />
                </Box>


                <Stack spacing={1} align="center">
                    {names.map((n) => (
                        <Text key={n} fontSize="lg" color="gray.700">
                            {n}
                        </Text>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default function StaffCarousel({ staff, title = "Kapcsolattartók" }) {
    const [slider, setSlider] = React.useState(null);
    const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 450,
        slidesToShow: slidesToShow || 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <Box py={{ base: 8, md: 10 }}>
            <Container maxW="container.lg" position="relative">
                <MotionInView y={10}>
                    <Heading
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="900"
                        textAlign="center"
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        {title}
                       <Box mt={2} w="90px" h="4px" bg="yellow.400" rounded="full" /> 
                    </Heading>
                    
                </MotionInView>

                {/* Nyilak */}
                <IconButton
                    aria-label="previous"
                    onClick={() => slider?.slickPrev()}
                    icon={<BiLeftArrowAlt size="28px" />}
                    position="absolute"
                    left={{ base: 2, md: -6 }}
                    top="55%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="xl"
                    boxShadow="sm"
                    _hover={{ borderColor: "yellow.400" }}
                />

                <IconButton
                    aria-label="next"
                    onClick={() => slider?.slickNext()}
                    icon={<BiRightArrowAlt size="28px" />}
                    position="absolute"
                    right={{ base: 2, md: -6 }}
                    top="55%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="xl"
                    boxShadow="sm"
                    _hover={{ borderColor: "yellow.400" }}
                />

                <Box mt={6}>
                    <Slider {...settings} ref={(s) => setSlider(s)}>
                        {staff.map((s) => (
                            <StaffCard key={s.role} role={s.role} names={s.names} />
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

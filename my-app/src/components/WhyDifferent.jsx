import {
    Box,
    Container,
    SimpleGrid,
    Heading,
    Text,
    Stack,
    Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import MotionInView from "../components/MotionView";
import CarouselBastya from "./CarouselBastya";

const handleTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function WhyDifferent() {
    return (
        <Box py={{ base: 10, md: 10 }} bg="white">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">

                    <MotionInView delay={0.1}>
                        <Stack spacing={5}>
                            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                                Mit nyújt a Bástya?
                            </Heading>

                            <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

                            <Text color="gray.600" lineHeight="1.7">
                                Integrált intézményünk egymásra épülő ellátásaival válaszol az eltérő élethelyzetekre.
                            </Text>

                            <Stack spacing={2}>
                                {[
                                    "Több ellátási formát egy központban",
                                    "Átjárhatóságot az ellátások között",
                                    "Folyamatos szakmai felügyeletet",
                                    "Hitélet biztosítását",
                                    "Családias közösséget",
                                    "Gondoskodó, szeretetteljes légkört"
                                ].map((item) => (
                                    <Text key={item} fontWeight="500">
                                        • {item}
                                    </Text>
                                ))}
                            </Stack>
                            <Button
                                as={RouterLink}
                                to="/szolgaltatasaink"
                                alignSelf="flex-start"
                                bg="transparent"
                                border="2px solid"
                                borderColor="yellow.400"
                                color="black"
                                rightIcon={<BiRightArrowAlt />}
                                onClick={handleTopScroll}
                                _hover={{ color: "yellow.500" }}
                                _active={{ backgroundColor: "transparent", boxShadow: "none" }}
                                _focus={{ boxShadow: "none", backgroundColor: "transparent" }}
                                sx={{
                                    ".chakra-button__icon": {
                                        transition: "transform 0.3s ease-in-out",
                                    },
                                    "&:hover .chakra-button__icon": {
                                        transform: "translateX(6px)",
                                    },
                                }}
                            >
                                Szolgáltatásaink
                            </Button>

                        </Stack>
                    </MotionInView>
                    <Box
                        position='relative'
                        top={{ base: '0', md: '-50px' }}
                        zIndex={{ base: 0, md: 4 }}
                    >
                        {/* <Image
                            src="/images/kep2.jpg"
                            alt="Bástya Szociális Szolgáltató Központ"
                            w="100%"
                            h={{ base: "260px", md: "420px" }}
                            objectFit="cover"
                        /> */}
                        <CarouselBastya />
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

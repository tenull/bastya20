import {
    Box,
    Container,
    Heading,
    Text,
    Link,
    SimpleGrid,
    useBreakpointValue,
} from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";
import MotionInView from "./MotionView";

function ContactCard({ icon: IconComp, title, children }) {
    const iconSize = useBreakpointValue({ base: 34, md: 38 });

    return (
        <Box
            role="group"
            bg="gray.700"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            rounded="2xl"
            p={{ base: 6, md: 8 }}
            textAlign="center"
            position="relative"
            boxShadow="sm"
            transition="all 0.2s ease"
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            minH={{ base: "200px", md: "200px" }}
        >
            {/* ikon badge felül középen */}
            <Box
                bg="yellow.400"
                rounded="xl"
                p={2}
                position="absolute"
                top="-22px"
                left="50%"
                transform="translateX(-50%)"
                display="grid"
                placeItems="center"
                borderWidth="1px"
                borderColor="yellow.400"
            >
                <Box as={IconComp} color="white" fontSize={`${iconSize}px`} />
            </Box>

            <Heading as="h3" fontSize="xl" fontWeight="900" mt={4} mb={3}>
                {title}
            </Heading>

            <Box w="90px" h="3px" bg="yellow.400" rounded="full" mx="auto" mb={4} />

            <Box color="whiteAlpha.900" lineHeight="1.7">
                {children}
            </Box>
        </Box>
    );
}

export default function Contacts() {
    return (
        <Box position='relative' bg="gray.800" color="white" >
            <Container maxW="container.xl">
                <MotionInView y={12} scale={0.99}>
                    {/* egy "panel" érzés */}
                    <Box
                        rounded="3xl"
                    >
                        <SimpleGrid position='relative' top='-50px' columns={{ base: 1, md: 3 }} spacing={6}>
                            <ContactCard icon={MdLocationOn} title="Cím">
                                <Text color='yellow.400' fontWeight='bold'>Bástya idősotthon</Text>
                                <Text>4450, Tiszalök, Hősök tere 7/a</Text>
                                <Text color='yellow.400' fontWeight='bold'>Forrás idősotthon</Text>
                                <Text>4450, Tiszalök, Kossuth utca 41.</Text>
                                <Text color='yellow.400' fontWeight='bold'>Nappali ellátás</Text>
                                <Text>4450, Tiszalök, Damjanich utca 24.</Text>
                            </ContactCard>

                            <ContactCard icon={MdPhone} title="Telefonszám">
                                <Text color='yellow.400' fontWeight='bold'>Bástya idősotthon</Text>
                                <Link
                                    href="tel:+36301628381"
                                    color=""
                                    
                                    _hover={{ textDecoration: "none", color: "yellow.400" }}
                                >
                                    +36/30-162-8381
                                </Link>
                                  <Text color='yellow.400' fontWeight='bold'>Nappali ellátás</Text>
                                <Link
                                    href="tel:+36309009539"
                                    color=""
                                    
                                    _hover={{ textDecoration: "none", color: "yellow.400" }}
                                >
                                    +36/30-900-9539
                                </Link>
                                  <Text color='yellow.400' fontWeight='bold'>Szolgálati telefonszám</Text>
                                <Link
                                    href="tel:+36301449427"
                                    color=""
                                    
                                    _hover={{ textDecoration: "none", color: "yellow.400" }}
                                >
                                    +36/30-144-9427
                                </Link>
                            </ContactCard>

                            <ContactCard icon={MdAccessTime} title="Ügyfélfogadás">
                                <Text color='yellow.400' fontWeight='bold'>Helyszín</Text>
                                <Text>4450, Tiszalök, Hősök tere 7/a</Text>
                               
                                <Text color='yellow.400' fontWeight='bold'>Időpont</Text>
                                <Text>Hétfőtől – Csütörtökig 9:00 – 15:00</Text>
                                <Text>Péntek 9:00 – 13:30</Text>
                                <Text textColor='yellow.400' fontWeight='bold'>Előre egyeztetéssel!</Text>
                            </ContactCard>
                        </SimpleGrid>
                    </Box>
                </MotionInView>
            </Container>
        </Box>
    );
}

import { Image, Text, Stack, Flex, Container, Box } from '@chakra-ui/react'
import CarouselRoom from './CarouselRoom';

const Szobak = () => {
    return (
        <Container mt={5} maxW='container.lg'>
            <Box data-aos="zoom-in-up">
                <Text
                    textAlign='center'
                    fontFamily='Montserrat, Sans-serif'
                    fontWeight='900'
                    mb={5}
                    fontSize='5xl'
                    color='gray.700'
                    textShadow="2px 2px #E2E8F0"
                >
                    SZOBÁK
                </Text>

            </Box>
            <Box py={5}>
                <Text>
                    A lakókat két emeleten helyezzük el 1, 2, 3, 4 ágyas szobákban, lift rendelkezésre áll.
                </Text>
                <Text>
                    Minden szobához saját és akadálymentes fürdőszoba tartozik.
                </Text>
            </Box>

            <Box>
                <CarouselRoom />
            </Box>
        </Container>
    );
}

export default Szobak;
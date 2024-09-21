import { Image, Text, Stack, Flex, Container, Box } from '@chakra-ui/react'

const Foglalkozasok = () => {
    return (
        <Container maxW='container.lg'>
        <Box>
            <Box data-aos="zoom-in-up">
                <Text textAlign='center'fontFamily='Montserrat, Sans-serif' fontWeight='900' mb={5} fontSize='4xl'>FOGLALKOZASOK</Text>
            </Box>
            <Box>
                <Text>
                Szemléletünk szerint fontos, hogy egymás korlátait elfogadjuk; türelemmel segítsük és támogassuk az arra rászoruló személyt. Ezen túlmenően gondozottjaink adherenciája és képességei alapján igyekszünk, fejlesztő foglalkozások által, egy elfogadható életminőséget biztosítani.
                </Text>
                <Text>
                Évente több alkalommal speciális hétvégi, ünnepi mulatsággal szórakoztatjuk a közösséget, úgymint kerti sütögetés, zenés est, show műsor vagy vetélkedők.
                </Text>
                <Text>
                A lakók sokszor kiveszik részüket a közösségi munkákból is, mely csökkenti a haszontalanság érzetét.
                </Text>
                <Text>
                Terhelhetőséghez, igényekhez mérten próbálunk mindenkit bevonni a közös programokba és ‘team building’ jelleggel egymáshoz jó viszonyba kapcsolni, ezzel is csökkentve a szeparációs szorongást.
                </Text>
            </Box>
        </Box>
        </Container>
    );
}

export default Foglalkozasok;
import { Box, Container, Text } from "@chakra-ui/react";
import { TiArrowBack } from "react-icons/ti";
const Rendelkezes = () => {
    return (
        <Container mt={10} mb='100px' maxW='container.lg'>
            <Box display='flex' alignItems='center' flexDirection='column'>
                <Text fontSize='3xl' textAlign='center' fontWeight='bold' fontFamily='Montserrat,sans-serif'>
                    Állunk rendelkezésére továbbiakban személyesen, telefonon egyeztetett időpontban!
                </Text>
                <Box data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <TiArrowBack fontSize='150px' color='#ECC94B' style={{ rotate: '270deg' }} />
                </Box>
            </Box>
        </Container>
    );
}

export default Rendelkezes;
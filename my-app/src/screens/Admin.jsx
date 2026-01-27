import { Box, Text, Flex,Container } from '@chakra-ui/react';


const Admin = () => {
    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/falevel.jpg)`}
            >
                <Container display='flex' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>ADMIN</Text>
                </Container>
            </Box>
            <Box mt={10} mx="auto" maxW="container.lg">
                <Flex my={10} justifyContent='center'>
                    <Text data-aos="zoom-in-up" textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>BEMUTATKOZÁS</Text>
                </Flex>
            </Box>
        </Box>
    );
}

export default Admin;
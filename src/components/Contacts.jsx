import React from 'react';
import { Box, Heading, Text, Flex, Link, useBreakpointValue,Container } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';

const Contacts = () => {
    const iconSize = useBreakpointValue({ base: '40px', md: '50px' }); 

    return (
        <Flex position='relative' bg='gray.800' color='white' direction="column" align="center" >
            <Container data-aos="zoom-out-up" rounded='5px' bg='gray.600' position='relative' top='-50px'  px={0} display='flex' flexWrap='wrap' maxW='container.lg' wrap="wrap" spacing={4} justifyContent={{base:'center',md:'space-between'}}>
           
                <Box position='relative' textAlign="center" p={10} maxW="300px" >
                    <Box bg='yellow.400' rounded='5px' p={2} position='absolute' top={-8} left='40%' textAlign='center' mb={3}>
                        <MdLocationOn color='white' size={iconSize} />
                    </Box>
                    <Heading as="h2" size="lg" mb={5} pb={5} >Otthonunk</Heading>
                    <Box borderBottom="1px solid"  borderBottomColor="gray.300" width="100px" margin="0 auto" mt={-5} />
                    <Text pt={5}>4450, Tiszalök, Hősök tere 7/a</Text>
                </Box>

              
                <Box position='relative' textAlign="center" p={10} maxW="300px" >
                    <Box bg='yellow.400' rounded='5px' p={2} position='absolute' top={-8} left='40%' textAlign='center' mb={3}>
                        <MdPhone color='white' size={iconSize} />
                    </Box>
                    <Heading as="h2" size="lg" mb={3} pb={5}>Telefonszám</Heading>
                    <Box borderBottom="1px solid"  borderBottomColor="gray.300" width="100px" margin="0 auto" mt={-5} />
                    <Text pt={5} mb={0}>Szolgálati telefonszám</Text>
                    <Link _focus={{textDecoration:'none'}} _hover={{textDecoration:'none'}} href="tel:+36301628381" textDecoration='none'>
                        +36/30-162-8381
                    </Link>
                </Box>

           
                <Box position='relative' textAlign="center" p={10} maxW="300px" >
                    <Box bg='yellow.400' rounded='5px' p={2} position='absolute' top={-8} left='40%' textAlign='center' mb={3}>
                        <MdAccessTime color='white'  size={iconSize} />
                    </Box>
                    <Heading as="h2" size="lg" mb={3} pb={5}>Ügyfélfogadás</Heading>
                    <Box borderBottom="1px solid"  borderBottomColor="gray.300" width="100px" margin="0 auto" mt={-5} />
                    <Text pt={5} mb={0}>Hétfőtől-Csütörtökig 9-15</Text>
                    <Text>Péntek 9-13:30</Text>
                </Box>
            </Container>
        </Flex>
    );
};

export default Contacts;

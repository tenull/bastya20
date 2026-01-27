import { useParams } from "react-router-dom";
import { Box,Flex, Container, Heading, Text, Image, } from "@chakra-ui/react";
import { hirekData } from "../hirekData";

export default function HirDetail() {
    const { id } = useParams();
    const hir = hirekData.find((item) => item.id === id);

    if (!hir) {
        return <Text>Hír nem található.</Text>;
    }

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
                <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>{hir.header}</Text>
                    <Heading color='white' mb={4}>HÍREK</Heading>
                </Container>
            </Box>
            <Box mt={10} mx="auto" maxW="container.lg">
                {/* <Flex my={10} justifyContent='center'>
                <Text data-aos="zoom-in-up" textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>{hir.date}</Text>
                    <Text data-aos="zoom-in-up" textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>{hir.header}</Text>
                </Flex> */}
                <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: 'center' }} mb={6} px={4}>
                    <Image
                        src={hir.image}
                        alt=""
                        maxW="300px"
                        data-aos="flip-left"
                        mr={{ base: 0, md: 4 }}
                        mb={{ base: 4, md: 0 }}
                        borderRadius="md"
                        objectFit="cover"
                        float={{ base: "none", md: "left" }}
                    />
                    <Text textAlign='justify'>
                       {hir.description}
                    </Text>
                </Flex>

                <Flex direction={{ base: "column-reverse", md: "row" }} alignItems={{ base: 'center' }} mb={6} px={4}>
                    <Text textAlign='justify'>
                       {hir.description}
                    </Text>
                    <Image
                        src={hir.image2}
                        alt=""
                        maxW="300px"
                        data-aos="flip-left"
                        ml={{ base: 0, md: 4 }}
                        mb={{ base: 4, md: 0 }}
                        borderRadius="md"
                        objectFit="cover"
                        float={{ base: "none", md: "right" }}
                    />
                </Flex>

                <Text textAlign='justify' pb='10' px={4}>
                   {hir.description3}
                </Text>
            </Box>
        </Box>
    );
}

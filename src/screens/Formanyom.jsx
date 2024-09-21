import { Box, Heading, Text, Flex, Icon, Link, useBreakpointValue, Container, Image } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import Counter from '../components/Counter';
import { useEffect } from "react";
import AOS from 'aos';

const Formanyomtatvanyok = () => {

    
    useEffect(() => {
        AOS.init({
            duration: 700, 
            once: false,    
        });
        AOS.refresh(); 
    }, []);


    const downloadLinks = [
        { title: 'Kérelem', description: 'az idősek otthona, mint a személyes gondozást nyújtó szociális ellátás igénybevételéhez', link: 'downLoad' },
        { title: 'Egészségi állapotra vonatkozó igazolás', description: '(a háziorvos, kezelőorvos, vagy kórházi kezelés esetén a kórházi osztályos orvos tölti ki)', link: 'downLoad2' },
        { title: 'Értékelő adatlap', description: '', link: 'downLoad3' },
        { title: 'Megállapodás', description: 'A Magyarországi Református Egyház missziójának egyik alapvető lényegi eleme a szenvedő embertárs segítése, melynek eszköze a szeretetszolgálat. Ennek jegyében fő feladatunknak tartjuk a rászoruló ember humanitárius segítését, ellátását. Az alábbi megállapodás ebben a szellemben kerül megkötésre.', link: 'downLoad4' }
    ];

    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition='center'
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/virag3.jpg)`}
            >
                <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>DOKUMENTUMOK</Text>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' textAlign='center' fontSize={{ base: 'md', md: 'lg' }}>Intézményünk jelentkezéséhez szükséges dokumentumok</Text>
                </Container>
            </Box>
            <Container maxW='container.lg'>
                <Flex my={10} justifyContent='center'>
                    <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>ELÉRHETŐ SZOBÁK</Text>
                </Flex>
                <Flex wrap='wrap' justify="space-evenly" align="center" p={5}>
                    <Box
                        width='400px'
                        borderRight={{ base: '0px', md: '1px solid' }}
                        borderRightColor={{ base: 'transparent', md: 'gray.200' }}
                        textAlign="center"
                    >
                        <Text fontFamily='Montserrat, Sans-serif' textTransform='uppercase' fontWeight='900' fontSize="xl">Szabad Férőhelyek</Text>
                        <Counter startValue={11} endValue={0} duration={2} />
                    </Box>
                    <Box width='400px' textAlign="center">
                        <Text fontFamily='Montserrat, Sans-serif' textTransform='uppercase' fontWeight='900' fontSize="xl">Várólistán szereplők</Text>
                        <Counter endValue={30} duration={3} showPlus={true} />
                    </Box>
                    {/* <Box textAlign="center">
                    <Text fontSize="xl">Átlagosan Gyermelyinél töltött évek</Text>
                    <Counter endValue={17} duration={4} />
                </Box> */}
                </Flex>
            </Container>
            <Flex my={10} justifyContent='center'>
                <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>DOKUMENTUMOK</Text>
            </Flex>
            <Container maxW="container.lg" py={5}>
                {downloadLinks.map((item, index) => (
                    <Box
                    data-aos="fade-up"
                        key={index}
                        mb={5}
                        borderBottom="1px"
                        borderColor="gray.200"
                        py={5}
                        _hover={{
                            bg: 'gray.200',
                        }}
                    >
                        <Flex wrap="wrap" align="center">
                            <Box flex="1" minW="280px">
                                <Text fontFamily='Montserrat, Sans-serif' textTransform='uppercase' fontWeight='900' fontSize={{ base: 'md', md: 'lg' }}>{item.title}</Text>
                                {item.description && <Text fontSize="md" textAlign='justify'>{item.description}</Text>}
                            </Box>
                            <Box as={Link} href={item.link} flex="1" height='140px' textAlign="end" display='flex' justifyContent='flex-end' alignItems='center'>
                                <Link href={item.link} isExternal>
                                    <Icon fontSize='25px' as={DownloadIcon} w={10} h={10} color="black" />
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Container>
        </Box>

    );
}

export default Formanyomtatvanyok;
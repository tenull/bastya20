import React, { useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Input,
    Link,
    Text,
    Textarea,
    VStack
} from '@chakra-ui/react';
import { PhoneIcon,TimeIcon } from '@chakra-ui/icons';
import { LocationOn, Mail } from '@mui/icons-material';
import { useEffect } from "react";
import AOS from 'aos';


const Kapcsolat = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitFailed, setSubmitFailed] = useState(false);
    const [submitSuccessful, setSubmitSuccessful] = useState(false);

    const [firstNameIsInvalid, setFirstNameIsInvalid] = useState(false);
    const [lastNameIsInvalid, setLastNameIsInvalid] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [phoneIsInvalid, setPhoneIsInvalid] = useState(false);
    const [messageIsInvalid, setMessageIsInvalid] = useState(false);

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );


    useEffect(() => {
        AOS.init({
            duration: 700, 
            once: false,    
        });
        AOS.refresh(); 
    }, []);


    const isValid = () => {
        if (firstName.length < 2) setFirstNameIsInvalid(true);
        else setFirstNameIsInvalid(false);

        if (lastName.length < 2) setLastNameIsInvalid(true);
        else setLastNameIsInvalid(false);

        if (phone.length < 6) setPhoneIsInvalid(true);
        else setPhoneIsInvalid(false);

        if (!emailRegex.test(email)) setEmailIsInvalid(true);
        else setEmailIsInvalid(false);

        if (message.length < 2 || message.length > 100) setMessageIsInvalid(true);
        else setMessageIsInvalid(false);

        return (
            firstName.length > 1 &&
            lastName.length > 1 &&
            emailRegex.test(email) &&
            message.length < 101
        );
    };

    const handeSubmit = async (e) => {
        e.preventDefault();

        if (isValid()) {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
            };

            try {
                const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    // Sikeres küldés
                    setFirstName('');
                    setLastName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                    setSubmitSuccessful(true);
                    setSubmitFailed(false);
                } else {
                    // Hibás válasz a szervertől
                    setSubmitSuccessful(false);
                    setSubmitFailed(true);
                }
            } catch (error) {
                console.error('Email küldési hiba:', error);
                setSubmitFailed(true);
            }
        } else {
            setSubmitFailed(true);
        }
    };


    const mapContainerStyle = {
        width: '90%',
        height: '700px',
    };
    const mapContainerStyleMobile = {
        width: '100%',
        height: '400px',
    };

    const center = { lat: 48.02184, lng: 21.38115 };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyB8ZVOSmtLY1o_dL6GAwku8uIT1JrzshuA',
    });

    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition="center"

                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/virag.jpg)`}
            >
                <Container display='flex'  flexDirection='column' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text  color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '4xl', md: '6xl' }}>Kapcsolat</Text>
                    <Text fontSize={{base:'sm',md:'lg'}} mb={5} textAlign='center' color='white'>
                        Otthonaink szolgáltatásai, illetve elhelyezési lehetőségek kapcsán
                        felmerülő kérdéseire szívesen válaszolunk! <br /> <Link _focus={{textDecoration:'none'}} _hover={{textDecoration:'none'}} href="tel:+36301628381" textDecoration='none'>
                        +36/30-162-8381
                    </Link>
                    </Text>
                </Container>
            </Box>
            <Box py={5} mt={5}>
                <Container mb={5} maxW='container.lg'>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Text fontSize='2xl' fontFamily='Montserrat, Sans-serif' fontWeight='900'>Intézményvezető</Text>
                        <Text fontSize='xl'>Kiss-Csáki Beatrix</Text>
                    </Box>
                </Container>
                <Container mb={5} display='flex' flexWrap='wrap' justifyContent='space-around' maxW='container.lg'>
                    <Box mb={{base:'5',md:'0'}} data-aos="fade-right" display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Text textAlign='center' fontSize='2xl' fontFamily='Montserrat, Sans-serif' fontWeight='900'>Intézményvezető-helyettes</Text>
                        <Text fontSize='xl'>Pallay Zsófia</Text>
                    </Box>
                    <Box data-aos="fade-left" display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Text fontSize='2xl' fontFamily='Montserrat, Sans-serif' fontWeight='900'>Intézmény ápoló</Text>
                        <Text fontSize='xl'>Koleszár Ferenc</Text>
                    </Box>
                </Container>
                <Container maxW="container.lg" display='flex' flexWrap='wrap' justifyContent={{base:'center',md:'space-between'}}>
                    <VStack pt={{base:'0',md:'5'}} align="start" spacing={2} mb={5}>
                        <Text fontSize='sm'>Otthonunk címe</Text>
                        <Text fontSize="lg" display='flex' alignItems='center'>
                            <Icon as={LocationOn} me={2}/> Tiszalök, 4450 Hősök tere 7/a.
                        </Text>
                        <Text fontSize='sm'>Ügyfélfogadás</Text>
                        <Text fontSize="lg" display='flex' alignItems='center'>
                            <Icon as={TimeIcon} me={2}/> 
                            <Box>
                            Hétfőtől - Csütörtökig 9 - 15 <br />
                             Péntek 9 - 13:30
                             </Box>
                        </Text>
                        <Text fontSize='sm'>Kapcsolat</Text>
                        <Link href="tel:+36301628381" _hover={{ color: 'yellow.400' }} display='flex' alignItems='center'>
                            <Icon as={PhoneIcon}me={2}/> +36 30-162-8381
                        </Link>
                        <Link href="mailto:bastyaidosotthon@gmail.com" _hover={{ color: 'yellow.400' }} display='flex' alignItems='center'>
                            <Icon as={Mail} me={2}/> bastyaidosotthon@gmail.com
                        </Link>
                    </VStack>
                    {/* <Flex justifyContent="space-around" wrap="wrap" mb={5}>
                        <Box textAlign="center" mb={3}>
                            <Text fontSize="2xl">Intézményvezető</Text>
                            <Text>Kiss-Csáki Beatrix</Text>
                        </Box>
                        <Box textAlign="center" mb={3}>
                            <Text fontSize="2xl">Intézményvezető-helyettes</Text>
                            <Text>Pallay Zsófia</Text>
                        </Box>
                        <Box textAlign="center" mb={3}>
                            <Text fontSize="2xl">Intézmény ápoló</Text>
                            <Text>Koleszár Ferenc</Text>
                        </Box>
                    </Flex> */}

                    <Box py={5} px={3} >
                        <form onSubmit={handeSubmit}>
                            <Text fontSize="lg" textAlign="justify" mb={5}>
                                Amennyiben bármilyen kérdése van, vegye fel velünk a kapcsolatot!
                            </Text>
                            {submitSuccessful ? (
                                <Box textAlign="center" mb={5}>
                                    <Box color="green.500">Az üzenetét elküldtük!</Box>
                                </Box>
                            ) : (
                                submitFailed && (
                                    <Box textAlign="center" mb={5}>
                                        <Box color="red.500">Az üzenetét nem tudtuk elküldeni!</Box>
                                    </Box>
                                )
                            )}
                            <VStack spacing={4} align="stretch" mb={5}>
                                <Flex>
                                    <Box flex="1" mr={2}>
                                        <Input
                                            placeholder="Vezetéknév*"
                                            value={lastName}
                                            _focus={{
                                                borderColor:'yellow.400'
                                            }}
                                            onChange={(e) => setLastName(e.target.value)}
                                            isInvalid={lastNameIsInvalid}
                                        />
                                        {lastNameIsInvalid && <Text color="red.500" fontSize="sm">*Legalább két karaktert</Text>}
                                    </Box>
                                    <Box flex="1" ml={2}>
                                        <Input
                                            placeholder="Keresztnév*"
                                            value={firstName}
                                            _focus={{
                                                borderColor:'yellow.400'
                                            }}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            isInvalid={firstNameIsInvalid}
                                        />
                                        {firstNameIsInvalid && <Text color="red.500" fontSize="sm">*Legalább két karaktert</Text>}
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box flex="1" mr={2}>
                                        <Input
                                           _focus={{
                                            borderColor:'yellow.400'
                                        }}
                                            placeholder="E-mail cím*"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            isInvalid={emailIsInvalid}
                                        />
                                        {emailIsInvalid && <Text color="red.500" fontSize="sm">*Rossz e-mail formátum</Text>}
                                    </Box>
                                    <Box flex="1" ml={2}>
                                        <Input
                                            placeholder="Telefonszám*"
                                            _focus={{
                                                borderColor:'yellow.400'
                                            }}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            isInvalid={phoneIsInvalid}
                                        />
                                        {phoneIsInvalid && <Text color="red.500" fontSize="sm">*Legalább hat karaktert</Text>}
                                    </Box>
                                </Flex>
                                <Textarea
                                    _focus={{
                                            borderColor:'yellow.400'
                                        }}
                                    placeholder="Üzenet*"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    isInvalid={messageIsInvalid}
                                    height='250px'
                                />
                                {messageIsInvalid && <Text color="red.500" fontSize="sm">*Minimum 2 és maximum 100 karaktert</Text>}
                                <Button
                                    type="submit"
                                    width='100%'
                                    bg="yellow.400"
                                    color="white"
                                    _hover={{ bg: "yellow.500" }}
                                    rounded='0'
                                    alignSelf="center"
                                >
                                    Küldés
                                </Button>

                            </VStack>
                        </form>
                    </Box>

                </Container>
                <Box display={{ base: 'none', md: 'block' }} mb={5}>
                    {isLoaded && (
                        <Flex justifyContent="center">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={17}
                            />
                        </Flex>
                    )}
                </Box>
                <Box display={{ base: 'block', md: 'none' }} mb={5}>
                    {isLoaded && (
                        <Flex justifyContent="center">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyleMobile}
                                center={center}
                                zoom={17}
                            />
                        </Flex>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Kapcsolat;
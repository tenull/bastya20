import { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
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
    VStack,
    useToast,
    Breadcrumb,
    BreadcrumbItem,
} from "@chakra-ui/react";
import { PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MotionInView from "../components/MotionView";
import { Link as ReactLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import StaffCarousel from "../components/StaffCarousel";
import { Marker } from "@react-google-maps/api";

const Kapcsolat = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [submitFailed, setSubmitFailed] = useState(false);
    const [submitSuccessful, setSubmitSuccessful] = useState(false);

    const [firstNameIsInvalid, setFirstNameIsInvalid] = useState(false);
    const [lastNameIsInvalid, setLastNameIsInvalid] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [phoneIsInvalid, setPhoneIsInvalid] = useState(false);
    const [messageIsInvalid, setMessageIsInvalid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();
    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const isValid = () => {
        const firstOk = firstName.trim().length >= 2;
        const lastOk = lastName.trim().length >= 2;
        const phoneOk = phone.trim().length >= 6;
        const emailOk = emailRegex.test(email.trim());
        const msgOk = message.trim().length >= 2 && message.trim().length <= 1000; // <- 1000

        setFirstNameIsInvalid(!firstOk);
        setLastNameIsInvalid(!lastOk);
        setPhoneIsInvalid(!phoneOk);
        setEmailIsInvalid(!emailOk);
        setMessageIsInvalid(!msgOk);

        return firstOk && lastOk && phoneOk && emailOk && msgOk;
    };

    const handeSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setSubmitFailed(false);
        setSubmitSuccessful(false);

        if (!isValid()) {
            toast({
                title: "Hibás kitöltés",
                description: "Kérlek ellenőrizd a pirossal jelölt mezőket.",
                status: "error",
                duration: 3500,
                isClosable: true,
                position: "top",
            });
            setSubmitFailed(true);
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("https://www.refbastya.hu/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, phone, message }),
            });

            if (!res.ok) {
                let errText = "Az üzenetet nem tudtuk elküldeni.";
                try {
                    const data = await res.json();
                    if (data?.error) errText = data.error;
                } catch (_) { }

                toast({
                    title: "Sikertelen küldés",
                    description: errText,
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top",
                });

                setSubmitSuccessful(false);
                setSubmitFailed(true);
                return;
            }

            // siker
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setMessage("");
            // toast({
            //     title: "Sikeres küldés",
            //     description: "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.",
            //     status: "success",
            //     duration: 3500,
            //     isClosable: true,
            //     position: "top",
            // });

            setSubmitSuccessful(true);
            setSubmitFailed(false);
        } catch (error) {
            console.error("Email küldési hiba:", error);

            toast({
                title: "Hálózati hiba",
                description: "Nem sikerült kapcsolódni a szerverhez. Próbáld újra később.",
                status: "error",
                duration: 4500,
                isClosable: true,
                position: "top",
            });

            setSubmitFailed(true);
        } finally {
            setIsSubmitting(false);
        }
    };


    const locations = [
        {
            title: "Bástya Idősek Otthona",
            address: "4450 Tiszalök, Hősök tere 7/a",
            position: { lat: 48.021240, lng: 21.380936 },
        },
        {
            title: "Forrás Idősek Otthona",
            address: "4450 Tiszalök, Kossuth utca 41.",
            position: { lat: 48.0193179, lng: 21.3774749 },
        },
        {
            title: "Nappali Ellátás",
            address: "4450 Tiszalök, Damjanich utca 24.",
            position: { lat: 48.0094679, lng: 21.3796366 },
        },
    ];


    const onLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach((loc) => bounds.extend(loc.position));
        map.fitBounds(bounds);
    };


    const staff = [
        { role: "Intézményvezető", names: ["Kiss-Csáki Beatrix"] },
        { role: "Intézményvezető-helyettes, intézményi lelkész", names: ["Nagy-Pallay Zsófia"] },
        { role: "Szakmai vezető", names: ["Kiss Attila"] },
        { role: "Vezető ápoló", names: ["Kola Mónika"] },
        { role: "Részlegvezető ápoló", names: ["Tóth Henrietta Mónika"] },
        { role: "Részlegvezető ápoló", names: ["Ónodi Anita"] },
        { role: "Vezető gondozónő", names: ["Petróné Szabó Gabriella"] },
        { role: "Vezető gondozónő", names: ["Kiss Krisztina"] },
    ];

    return (
        <Box>
            <Box
                w="full"
                h={{ base: "450px", md: "550px" }}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(/images/virag.jpg)`}
            >
                <Container
                    maxW="container.xl"
                    h={{ base: "450px", md: "550px" }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"

                >
                    <Box
                        p={10}
                        borderRadius='15'
                        backgroundColor='black'
                        opacity='0.6'
                    //backgroundImage={`linear-gradient(100deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.10) 85%),`}
                    >
                        <MotionInView y={12}>
                            <Heading
                                color="white" fontWeight="900" fontSize={{ base: "4xl", md: "6xl" }}>
                                KAPCSOLAT
                            </Heading>
                        </MotionInView>

                        <MotionInView y={12} delay={0.06}>
                            <Text fontSize={{ base: "sm", md: "lg" }} mb={5} color="whiteAlpha.900">
                                Szolgáltatásokkal, elhelyezéssel kapcsolatban felmerülő
                                kérdésekre az alábbi elérhetőségeken válaszolunk!
                            </Text>
                        </MotionInView></Box>
                </Container>
            </Box>
            <Container maxW="container.xl">
                <Breadcrumb
                    ms={2}
                    mt={3}
                    fontSize={{ base: "xs", md: "sm" }}
                    spacing={{ base: "3px", md: "8px" }}
                    separator={<ChevronRightIcon color="gray.400" />}
                >
                    <BreadcrumbItem>
                        <ReactLink to="/">Főoldal</ReactLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <Text>Kapcsolat</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>

            <Box py={{ base: 8, md: 12 }}>
                <Container maxW="container.xl">
                    <StaffCarousel staff={staff} title="VEZETŐSÉG" />
                    <Flex
                        py={{ base: 8, md: 12 }}
                        gap={{ base: 8, md: 10 }}
                        wrap="wrap"
                        justify="space-between"
                        align="flex-start"
                    >
                        <MotionInView x={-18} y={10}>
                            <VStack align="start" spacing={6} w={{ base: "100%", md: "420px" }}>
                                <Text fontSize="sm" color="gray.600">
                                    Intézményeink
                                </Text>
                                <Box>
                                    <Text fontWeight="900">Bástya Idősotthon</Text>
                                    <Text display="flex" alignItems="center" gap={2}>
                                        <Icon as={FaLocationDot} /> 4450 Tiszalök, Hősök tere 7/a
                                    </Text>
                                    <Link href="tel:+36301449427" display="flex" alignItems="center" gap={2} _hover={{ color: "yellow.400" }}>
                                        <Icon as={PhoneIcon} /> +36 30 162 8381
                                    </Link>
                                    <Link href="mailto:bastyaidosotthon@gmail.com" display="flex" alignItems="center" gap={2} _hover={{ color: "yellow.400" }}>
                                        <Icon as={IoIosMail} /> bastyaidosotthon@gmail.com
                                    </Link>
                                </Box>
                                <Box>
                                    <Text fontWeight="900">Forrás Idősotthon</Text>
                                    <Text display="flex" alignItems="center" gap={2}>
                                        <Icon as={FaLocationDot} /> 4450 Tiszalök, Kossuth utca 41.
                                    </Text>
                                    <Link href="tel:+36301449427" display="flex" alignItems="center" gap={2} _hover={{ color: "yellow.400" }}>
                                        <Icon as={PhoneIcon} /> +36 30 144 9427
                                    </Link>
                                </Box>
                                <Box>
                                    <Text fontWeight="900">Nappali ellátás</Text>
                                    <Text display="flex" alignItems="center" gap={2}>
                                        <Icon as={FaLocationDot} /> 4450 Tiszalök, Damjanich utca 24.
                                    </Text>
                                      <Link href="tel:+36309009539" display="flex" alignItems="center" gap={2} _hover={{ color: "yellow.400" }}>
                                        <Icon as={PhoneIcon} /> +36 30 900 9539
                                    </Link>
                                    <Link href="mailto:bastya.nappali@gmail.com" display="flex" alignItems="center" gap={2} _hover={{ color: "yellow.400" }}>
                                        <Icon as={IoIosMail} /> bastya.nappali@gmail.com
                                    </Link>
                                </Box>
                                <Box w="100%" h="1px" bg="gray.200" />
                                <Box>
                                    <Text fontSize="sm" color="gray.600">
                                        Ügyfélfogadás
                                    </Text>
                                    <Text display="flex" alignItems="flex-start" gap={2}>
                                        <Icon as={TimeIcon} mt="2px" />
                                        <Box>
                                            Hétfő – Csütörtök: 9:00 – 15:00 <br />
                                            Péntek: 9:00 – 13:30
                                        </Box>
                                    </Text>
                                </Box>

                            </VStack>
                        </MotionInView>

                        <MotionInView x={18} y={10}>
                            <Box w={{ base: "100%", md: "520px" }}>
                                <form onSubmit={handeSubmit}>
                                    <Text fontSize="lg" textAlign="justify" mb={5}>
                                        Amennyiben bármilyen kérdése van, vegye fel velünk a kapcsolatot!
                                    </Text>

                                    {submitSuccessful ? (
                                        <Box textAlign="center" mb={5} color="green.500">
                                            Az üzenetét elküldtük!
                                        </Box>
                                    ) : submitFailed ? (
                                        <Box textAlign="center" mb={5} color="red.500">
                                            Az üzenetét nem tudtuk elküldeni!
                                        </Box>
                                    ) : null}

                                    <VStack spacing={4} align="stretch">
                                        <Flex gap={4} wrap="wrap">
                                            <Box flex="1" minW="220px">
                                                <Input
                                                    placeholder="Vezetéknév*"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    isInvalid={lastNameIsInvalid}
                                                    _focus={{ borderColor: "yellow.400" }}
                                                />
                                                {lastNameIsInvalid && (
                                                    <Text color="red.500" fontSize="sm">
                                                        *Legalább két karaktert
                                                    </Text>
                                                )}
                                            </Box>
                                            <Box flex="1" minW="220px">
                                                <Input
                                                    placeholder="Keresztnév*"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    isInvalid={firstNameIsInvalid}
                                                    _focus={{ borderColor: "yellow.400" }}
                                                />
                                                {firstNameIsInvalid && (
                                                    <Text color="red.500" fontSize="sm">
                                                        *Legalább két karaktert
                                                    </Text>
                                                )}
                                            </Box>
                                        </Flex>

                                        <Flex gap={4} wrap="wrap">
                                            <Box flex="1" minW="220px">
                                                <Input
                                                    placeholder="E-mail cím*"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    isInvalid={emailIsInvalid}
                                                    _focus={{ borderColor: "yellow.400" }}
                                                />
                                                {emailIsInvalid && (
                                                    <Text color="red.500" fontSize="sm">
                                                        *Rossz e-mail formátum
                                                    </Text>
                                                )}
                                            </Box>
                                            <Box flex="1" minW="220px">
                                                <Input
                                                    placeholder="Telefonszám*"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    isInvalid={phoneIsInvalid}
                                                    _focus={{ borderColor: "yellow.400" }}
                                                />
                                                {phoneIsInvalid && (
                                                    <Text color="red.500" fontSize="sm">
                                                        *Legalább hat karaktert
                                                    </Text>
                                                )}
                                            </Box>
                                        </Flex>

                                        <Box>
                                            <Textarea
                                                placeholder="Üzenet*"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                isInvalid={messageIsInvalid}
                                                h="220px"
                                                _focus={{ borderColor: "yellow.400" }}
                                            />
                                            {messageIsInvalid && (
                                                <Text color="red.500" fontSize="sm">
                                                    *Minimum 2 és maximum 1000 karaktert
                                                </Text>
                                            )}
                                        </Box>

                                        <Button
                                            type="submit"
                                            width="100%"
                                            bg="yellow.400"
                                            color="black"
                                            _hover={{ bg: "yellow.500" }}
                                            isLoading={isSubmitting}
                                            loadingText="Küldés..."
                                            isDisabled={isSubmitting}
                                        >
                                            Küldés
                                        </Button>

                                    </VStack>
                                </form>
                            </Box>
                        </MotionInView>
                    </Flex>
                    <MotionInView y={12} delay={0.05}>
                        <Box mt={{ base: 10, md: 14 }}>
                            <Box
                                rounded="2xl"
                                overflow="hidden"
                                borderWidth="1px"
                                borderColor="gray.200"
                                h={{ base: "360px", md: "560px" }}
                            >

                                <GoogleMap
                                    mapContainerStyle={{ width: "100%", height: "100%" }}
                                    center={locations[0].position}
                                    zoom={16}
                                    onLoad={onLoad}
                                    options={{
                                        disableDefaultUI: true,
                                        zoomControl: true,
                                    }}
                                >
                                    {locations.map((loc, i) => (
                                        <Marker
                                            key={i}
                                            position={loc.position}
                                            title={`${loc.title}\n${loc.address}`}
                                        />
                                    ))}
                                </GoogleMap>

                            </Box>
                        </Box>
                    </MotionInView>
                </Container>
            </Box>
        </Box>
    );
};

export default Kapcsolat;

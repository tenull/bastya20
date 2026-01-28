import {
    Box,
    Container,
    Heading,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    Stack,
    SimpleGrid,
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const Misszio = () => {
    return (
        <Box>
            <Box

                w="full"
                h={{ base: "450px", md: "550px" }}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(/images/virag2.jpg)`}
            >
                <Container
                    maxW="container.lg"
                    h={{ base: "450px", md: "550px" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Box
                        w='100%'
                        p={10}
                        borderRadius='15'
                        backgroundColor='black'
                        opacity='0.6'
                    //backgroundImage={`linear-gradient(100deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.10) 85%),`}
                    >
                        <MotionInView y={12}>
                            <Heading textTransform='uppercase' color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
                                Missziónk
                            </Heading>
                        </MotionInView>
                    </Box>
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
                        <Text>Missziónk</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <Box py={{ base: 10, md: 14 }} bg="gray.50">
                <Container maxW="container.xl">
                    <Box
                        bg="white"
                        borderWidth="1px"
                        borderColor="gray.200"
                        rounded="3xl"
                        p={{ base: 6, md: 10 }}
                        boxShadow="sm"
                    >
                        <Stack spacing={4} textAlign="center" align="center" mb={{ base: 8, md: 10 }}>
                            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                                Bástya Református Szociális Szolgáltató Központ
                            </Heading>

                            <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

                            <Text maxW="70ch" color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                                Küldetésünk, hogy{" "}
                                <Box as="span" fontWeight="900">
                                    bástyaként
                                </Box>{" "}
                                álljunk a rászorulók mellett, és{" "}
                                <Box as="span" fontWeight="900">
                                    forrásként
                                </Box>{" "}
                                fakasszuk fel a reménység, a méltóság és a szeretet élő vizét.
                            </Text>
                        </Stack>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={{ base: 8, md: 10 }}>
                            <Box
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                rounded="2xl"
                                p={6}
                            >
                                <Heading textAlign='center' fontSize="xl" fontWeight="900" mb={2}>
                                    Erős bástya
                                </Heading>
                                <Text textAlign='center' color="gray.700" lineHeight="1.8">
                                    Védelmet és biztonságot nyújtunk a kiszolgáltatottságban, szeretetteljes,
                                    emberközeli gondoskodással.
                                </Text>
                            </Box>

                            <Box
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                rounded="2xl"
                                p={6}
                            >
                                <Heading textAlign='center' fontSize="xl" fontWeight="900" mb={2}>
                                    Tiszta forrás
                                </Heading>
                                <Text textAlign='center' color="gray.700" lineHeight="1.8">
                                    Az együttérzés, a gondoskodás és az isteni irgalom “forrása” szeretnénk lenni,
                                    amely reményt és méltóságot ad.
                                </Text>
                            </Box>
                        </SimpleGrid>
                        <Stack spacing={5} maxW="85ch" mx="auto" color="gray.800" lineHeight="1.9" fontSize={{ base: "md", md: "lg" }}>
                            <Text textAlign='justify'>
                                A <b>Bástya Református Szociális Szolgáltató Központ</b>  missziója, hogy a református egyház
                                diakóniai elhívásának jegyében – Krisztus szeretetéből merítve – bástyaként álljon a
                                rászorulók mellett, és forrásként fakassza fel a reménység, a méltóság és a szeretet
                                élő vizét azok számára, akik testi-lelki terheket hordoznak.
                            </Text>

                            <Text textAlign='justify'>
                                Intézményünk egyszerre kíván <b>erős bástya</b> lenni – amely védelmet és biztonságot nyújt a
                                kiszolgáltatottságban –, és <b>tiszta forrás</b>, melyből az együttérzés, a gondoskodás és az
                                Isteni irgalom fakad. Hisszük, hogy a szociális szolgálat nem pusztán szakmai feladat,
                                hanem szent küldetés, amelyben Isten kegyelme és az emberi odaadás találkozik.
                            </Text>

                            <Text textAlign='justify'>
                                Krisztus példáját követve törekszünk arra, hogy mindenkit – kortól, állapottól vagy
                                háttértől függetlenül – a teremtettségében rejlő méltósággal és szeretettel fogadjunk.
                                Az idősek, a fogyatékkal élők, a betegséggel küzdők életének támogatása számunkra nem
                                csupán segítségnyújtás, hanem a hitből fakadó tanúságtétel.
                            </Text>

                            <Text textAlign='justify'>
                                Munkánk gyökere és forrása Isten igéje, célja pedig az, hogy minden szolgáltatásunkon
                                keresztül érzékelhetővé váljon a mennyei szeretet valósága:{" "}
                                <Box as="span" fontWeight="900">
                                    van bástya az élet viharaiban, és van forrás a szomjazó lelkeknek.
                                </Box>
                            </Text>
                        </Stack>
                        <Box
                            mt={{ base: 10, md: 12 }}
                            bg="gray.900"
                            color="white"
                            rounded="2xl"
                            p={{ base: 6, md: 8 }}
                        >
                            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900" textAlign="center">
                                „Az Úr az én kősziklám, váram és megmentőm.”
                            </Text>
                            <Text textAlign="center" mt={2} color="whiteAlpha.800">
                                Zsoltárok 18,3
                            </Text>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
};

export default Misszio;

import {
  Box,
  Container,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  Flex,
  LinkBox,
  LinkOverlay,
  Icon
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const relatedDocs = [
  {
    title: "Kérelem",
    description:
      "Az idősek, demensek nappali ellátása, mint a személyes gondoskodást nyújtó szociális ellátás igénybevételéhez",
    link: "/images/dokumentum/nappali/fogykerelem.docx",
  },
];


const DemensNappali = () => {
  return (
    <Box>
      {/* HERO */}
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
              <Heading color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
                DEMENS IDŐSEK NAPPALI ELLÁTÁSA
              </Heading>
            </MotionInView>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumb */}
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
            <Text>Demens Idősek Nappali Ellátása</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Box py={{ base: 10, md: 14 }} bg="gray.50">
        <Container maxW="container.xl">
          {/* LEAD */}
          <MotionInView y={10}>
            <Box
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              rounded="3xl"
              p={{ base: 6, md: 10 }}
              boxShadow="sm"
            >
              <Stack spacing={4}>
                <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="900">
                  Demens idősek nappali ellátása
                </Heading>

                <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

                <Text color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                  A szolgáltatást saját otthonukban élő idős személyek vehetik igénybe. Napközbeni
                  tartózkodást, étkezést, társas kapcsolatokat és az alapvető higiéniai szükségletek
                  biztosítását nyújtjuk, a szükségletekhez és az egyéni állapothoz igazítva.
                </Text>
              </Stack>
            </Box>
          </MotionInView>

          {/* KINEK AJÁNLOTT + CÉLUNK */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
            <MotionInView y={10}>
              <Box bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="sm">
                <Heading fontSize="lg" fontWeight="900" mb={3}>
                  Kinek ajánlott?
                </Heading>
                <List spacing={2} color="gray.700" lineHeight="1.8">
                  <ListItem>• Saját otthonukban élő, demencia kórképpel élő személyeknek.</ListItem>
                  <ListItem>• Akik szociális és mentális támogatásra szorulnak.</ListItem>
                  <ListItem>• Akik önmaguk ellátására részben képesek, de felügyeletre szorulhatnak.</ListItem>
                  <ListItem>• Akiknek fontos a közösség és a biztonság napközben.</ListItem>
                </List>
              </Box>
            </MotionInView>

            <MotionInView y={10} delay={0.05}>
              <Box bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="sm">
                <Heading fontSize="lg" fontWeight="900" mb={3}>
                  Célunk
                </Heading>
                <List spacing={2} color="gray.700" lineHeight="1.8">
                  <ListItem>• Az izoláció csökkentése, életminőség megőrzése és javítása.</ListItem>
                  <ListItem>• Biztonságos, tevékeny napközbeni jelenlét biztosítása.</ListItem>
                  <ListItem>• Az állapotromlás késleltetésének támogatása.</ListItem>
                  <ListItem>• Hogy az ellátott minél tovább saját otthonában élhessen.</ListItem>
                </List>
              </Box>
            </MotionInView>
          </SimpleGrid>

          {/* NAPI TEVÉKENYSÉGEK */}
          <MotionInView y={10}>
            <Box
              mt={8}
              bg="white"
              rounded="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={6}
              boxShadow="sm"
            >
              <Heading fontSize="lg" fontWeight="900" mb={3}>
                Napi tevékenységek
              </Heading>

              <Text color="gray.700" lineHeight="1.8">
                Szabadidő szervezett eltöltése céljából a napi tevékenységek között például:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4} color="gray.700">
                {[
                  "Közös éneklés",
                  "Áhítatok",
                  "Napi sajtó olvasása",
                  "Aktuális hírek közös megbeszélése",
                  "Fejlesztőfoglalkozások",
                  "Vetélkedő, játékos foglalkozások",
                ].map((t) => (
                  <Text key={t}>• {t}</Text>
                ))}
              </SimpleGrid>
            </Box>
          </MotionInView>

          {/* AMIT NYÚJT */}
          <MotionInView y={10}>
            <Box
              mt={8}
              bg="white"
              rounded="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={6}
              boxShadow="sm"
            >
              <Heading fontSize="lg" fontWeight="900" mb={3}>
                Amit nyújt
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mt={4}>
                {[
                  "Tanácsadás",
                  "Készségfejlesztés",
                  "Segítségnyújtás",
                  "Esetkezelés",
                  "Felügyelet (napközben, hétköznapokon)",
                  "Gondozás",
                ].map((s) => (
                  <Box
                    key={s}
                    bg="gray.50"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="xl"
                    p={4}
                    textAlign="center"
                    fontWeight="700"
                  >
                    {s}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </MotionInView>

          {/* JOGOSULTSÁG / SZAKVÉLEMÉNY */}
          <MotionInView y={10}>
            <Box
              mt={8}
              bg="gray.900"
              color="white"
              rounded="2xl"
              p={{ base: 6, md: 8 }}
            >
              <Heading fontSize="lg" fontWeight="900">
                Fontos információ
              </Heading>
              <Text mt={2} color="whiteAlpha.900" lineHeight="1.8">
                A demens személyek nappali ellátása a Pszichiátriai/Neurológiai Szakkollégium által
                befogadott demencia centrum szakvéleményével rendelkező személyek számára vehető igénybe.
              </Text>
            </Box>
          </MotionInView>

          <MotionInView y={10}>
            <Box
              mt={8}
              bg="white"
              rounded="2xl"
              borderWidth="1px"
              borderColor="gray.200"
              p={6}
              boxShadow="sm"
            >
              <Heading fontSize="lg" fontWeight="900" mb={3}>
                Kapcsolódó dokumentumok
              </Heading>

              <Stack spacing={4} mt={4}>
                {relatedDocs.map((doc, index) => {
                  const isPdf = doc.link.toLowerCase().endsWith(".pdf");
                  const isDoc =
                    doc.link.toLowerCase().endsWith(".doc") ||
                    doc.link.toLowerCase().endsWith(".docx");

                  return (
                    <LinkBox
                      key={doc.link}
                      as="article"
                      role="group"
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.200"
                      rounded="xl"
                      p={{ base: 4, md: 5 }}
                      _hover={{ boxShadow: "md", transform: "translateY(-1px)" }}
                      transition="all 0.2s ease"
                    >
                      <Flex align="center" gap={4}>
                        <Box flex="1" minW={0}>
                          <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="900">
                            <LinkOverlay
                              href={doc.link}
                              target={isPdf ? "_blank" : undefined}
                              rel={isPdf ? "noreferrer" : undefined}
                              download={isDoc ? true : undefined}
                            >
                              {doc.title}
                            </LinkOverlay>
                          </Heading>
                          {doc.description ? (
                            <Text mt={2} color="gray.700" noOfLines={2}>
                              {doc.description}
                            </Text>
                          ) : null}
                        </Box>

                        <Box
                          w="48px"
                          h="48px"
                          rounded="xl"
                          borderWidth="1px"
                          borderColor="gray.200"
                          display="grid"
                          placeItems="center"
                          _groupHover={{ borderColor: "yellow.400" }}
                        >
                          <Icon as={DownloadIcon} boxSize={6} />
                        </Box>
                      </Flex>
                    </LinkBox>
                  );
                })}
              </Stack>
            </Box>
          </MotionInView>
        </Container>
      </Box>
    </Box>
  );
};

export default DemensNappali;

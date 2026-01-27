import {
  Box,
  Container,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Stack,
  SimpleGrid,
  Icon,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import Counter from "../components/Counter";
import { DownloadIcon } from "@chakra-ui/icons";

const relatedDocs = [
  {
            title: "Kérelem",
            description:
                "Az idősek otthona, mint személyes gondozást nyújtó szociális ellátás igénybevételéhez.",
            link: "/images/dokumentum/kerelem.pdf",
        },
        {
            title: "Egészségi állapotra vonatkozó igazolás",
            description:
                "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
            link: "/images/dokumentum/egeszsegi_igazolas.pdf",
        },
        {
            title: "Értékelő adatlap",
            description: "",
            link: "/images/dokumentum/ertekelo_adatlap.pdf",
        },
        {
            title: "Megállapodás",
            description:
                "A megállapodás a Magyarországi Református Egyház szeretetszolgálati küldetésének szellemében kerül megkötésre.",
            link: "/images/dokumentum/megallapodas.docx",
        },
];

const BastyaIdos = () => {
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
              <Heading color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
                BÁSTYA IDŐSOTTHON
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
            <Text>BÁSTYA IDŐSOTTHON</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Box py={{ base: 10, md: 12 }}>
        <Container maxW="container.lg">
          <MotionInView variant="zoom-up">
            <Text textAlign="center" fontWeight="900" fontSize={{ base: "2xl", md: "4xl" }}>
              ELÉRHETŐ SZOBÁK
            </Text>
          </MotionInView>

          <Flex
            mt={8}
            gap={6}
            wrap="wrap"
            justify="center"
            align="stretch"
          >
            <Box
              w={{ base: "100%", md: "420px" }}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              rounded="2xl"
              p={6}
              textAlign="center"
              boxShadow="sm"
            >
              <Text textTransform="uppercase" fontWeight="900" fontSize="lg">
                Szabad férőhelyek
              </Text>
              <Counter startValue={11} endValue={0} duration={2} />
            </Box>

            <Box
              w={{ base: "100%", md: "420px" }}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              rounded="2xl"
              p={6}
              textAlign="center"
              boxShadow="sm"
            >
              <Text textTransform="uppercase" fontWeight="900" fontSize="lg">
                Várólistán szereplők
              </Text>
              <Counter endValue={30} duration={3} showPlus={true} />
            </Box>
          </Flex>
        </Container>
      </Box>
      {/* BÁSTYA IDŐSOTTHON – BEMUTATÁS */}
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
            {/* Cím + csík */}
            <Stack spacing={3} textAlign="center" align="center" mb={{ base: 8, md: 10 }}>
              <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                Bástya Idősotthon
              </Heading>
              <Box w="90px" h="4px" bg="yellow.400" rounded="full" />
              <Text color="gray.700" maxW="75ch" lineHeight="1.8">
                Intézményünk bentlakásos ellátás keretében <b>34 fő</b> számára biztosít gondoskodást
                biztonságos, akadálymentesített környezetben.
              </Text>
            </Stack>

            {/* Gyors tények */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={{ base: 8, md: 10 }}>
              {[
                { k: "Férőhely", v: "34 fő" },
                { k: "Elhelyezkedés", v: "4450, Tiszalök Hősök tere 7/a" },
                { k: "Akadálymentesítés", v: "Rámpa, lift" },
              ].map((x) => (
                <Box
                  key={x.k}
                  bg="gray.50"
                  borderWidth="1px"
                  borderColor="gray.200"
                  rounded="2xl"
                  p={5}
                  textAlign="center"
                >
                  <Text fontWeight="900">{x.k}</Text>
                  <Text color="gray.700">{x.v}</Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Tagolt szöveg */}
            <Stack spacing={5} color="gray.800" lineHeight="1.9" fontSize={{ base: "md", md: "lg" }} maxW="90ch" mx="auto">
              <Text>
                Az Idősek Otthona elhelyezésére szolgáló épület tömegközlekedési eszközzel jól
                megközelíthető. Az épület két szintes, lifttel rendelkező, akadálymentesített.
              </Text>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Lakószobák elhelyezkedése
                </Heading>
                <Text>
                  A földszinten 1 db kétágyas és 3 db háromágyas lakószoba található, így{" "}
                  <b>14 fő</b> számára biztosítunk kényelmes elhelyezést. Az emeleti szinten 3 db
                  egyágyas és 10 db kétágyas lakószoba található.
                </Text>
                <Text mt={2}>
                  A lakók elhelyezése egy-, két-, illetve háromágyas szobákban történik, tekintettel
                  fizikai és pszichés állapotukra, szociális kapcsolataikra és speciális szükségleteikre.
                  A házaspárok közös szobában történő elhelyezését – igény szerint – biztosítjuk.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Közösségi terek és foglalkozások
                </Heading>
                <Text>
                  A közösségi élet színtereit szintenként 1 db társalgó biztosítja. A szuterén szinten
                  foglalkoztatók, tornaszoba, teázó és vetítésre alkalmas közösségi helyiség található.
                </Text>
                <Text mt={2}>
                  A földszinten helyezkedik el az ebédlő és a melegítőkonyha.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Egészségügyi és gondozási háttér
                </Heading>
                <Text>
                  Intézményünk rendelkezik jól felszerelt orvosi és nővérszobával, betegszobával,
                  valamint öltözővel. Az intézmény mosodával is rendelkezik. A bútorzat és a
                  berendezési tárgyak az ellátottak életkori sajátosságaihoz és egészségi állapotához
                  igazodnak.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Kültéri környezet
                </Heading>
                <Text>
                  Az intézmény parkosított udvarral rendelkezik, amely alkalmas az aktív szabadidő
                  eltöltésére, kertészkedésre (virágos kert és magaságyás), valamint pihenésre.
                </Text>
              </Box>

              <Box bg="gray.900" color="white" rounded="2xl" p={{ base: 5, md: 7 }}>
                <Text fontWeight="900" fontSize={{ base: "md", md: "lg" }}>
                  Az idősotthonok célja
                </Text>
                <Text mt={2} color="whiteAlpha.900">
                  Biztonságos, egészségügyi és szociális szempontból megfelelő környezetet biztosítani
                  azok számára, akik otthonukban már nem képesek önálló életvitelre. Szolgáltatásaink
                  része az étkezés, higiéniai segítség, orvosi és ápolási felügyelet, valamint közösségi
                  programok.
                </Text>
              </Box>
           
            </Stack>
          </Box>
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

export default BastyaIdos;

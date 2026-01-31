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
  LinkBox,
  LinkOverlay,
  Icon,
  List,
  ListItem
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { DownloadIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import Counter from "../components/Counter";

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

const ForrasIdos = () => {
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
                FORRÁS IDŐSOTTHON
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
          <BreadcrumbItem>
            <ReactLink to="/szakositott">Szakosított ellátás</ReactLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Text>Forrás Idősotthon</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      {/* <Box py={{ base: 10, md: 12 }}>
        <Container maxW="container.lg">
            <MotionInView variant="zoom-up">
                     <Box display='flex' flexDirection='column' alignItems='center'>
                       <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                       ELÉRHETŐ SZOBÁK
                     </Heading>
                      <Box w="90px" h="4px" bg="yellow.400" rounded="full" /> 
                     </Box>
                    
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
              <Counter endValue={20} duration={2} />
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
      </Box> */}
      {/* <Box py={{ base: 10, md: 14 }} bg="gray.50">
        <Container maxW="container.xl" textAlign='justify'>
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="3xl"
            p={{ base: 6, md: 10 }}
            boxShadow="sm"
          >
            <Stack spacing={3} textAlign="center" align="center" mb={{ base: 8, md: 10 }}>
              <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                Forrás Idősotthon
              </Heading>
              <Box w="90px" h="4px" bg="yellow.400" rounded="full" />
              <Text color="gray.700" maxW="75ch" lineHeight="1.8">
                Intézményünk bentlakásos ellátás keretében <b>25 fő</b> számára biztosít gondoskodást
                Tiszalök város ikonikus, történelmi épületében.
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={{ base: 8, md: 10 }}>
              {[
                { k: "Férőhely", v: "25 fő" },
                { k: "Elhelyezkedés", v: "4450, Tiszalök, Kossuth utca 41." },
                { k: "Akadálymentesítés", v: "Rámpa, földszintes épület" },
                { k: "Ellátási terület", v: "Országos" },
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
            <Stack
              spacing={5}
              color="gray.800"
              lineHeight="1.9"
              fontSize={{ base: "md", md: "lg" }}
              maxW="90ch"
              mx="auto"
            >
              <Text>
                A Forrás Idősotthon Tiszalök város ikonikus épületében, a volt Gazdabíróság épületében
                működik. A város központjától mindössze 400 méterre, tömegközlekedési eszközzel
                jól megközelíthető helyen található. Az épület földszintes és akadálymentesített.
              </Text>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Lakószobák elrendezése
                </Heading>
                <Text>
                  Az L alakú intézményben 6 db egyágyas, 6 db kétágyas, 1 db háromágyas és
                  1 db négyágyas lakószoba található. A lakók elhelyezése az egyéni fizikai,
                  pszichés állapot, fogyatékosság mértéke és speciális szükségletek figyelembevételével történik.
                </Text>
                <Text mt={2}>
                  A házaspárok közös szobában történő elhelyezését – igény szerint – biztosítjuk.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Közösségi terek
                </Heading>
                <Text>
                  A közösségi élet színtereit egy nagy társalgó–foglalkoztató biztosítja, amely
                  egyben az ebédlő funkcióját is betölti. Emellett több olvasó-, teázó- és
                  beszélgető sarok segíti a nyugodt, családias légkör kialakítását.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Egészségügyi háttér
                </Heading>
                <Text>
                  Intézményünk szakmailag felkészült, elhivatott munkatársakkal biztosítja az ellátást. Csapatunk tagjai szakképzett ápolók, gondozók és egészségügyi szakemberek, akik megfelelő végzettséggel és több éves tapasztalattal rendelkeznek.

                  Kiemelten fontos számunkra a folyamatos szakmai fejlődés, ezért munkatársaink rendszeresen részt vesznek továbbképzéseken és szakmai programokon. Munkánk során a biztonság, a szakmaiság és az emberközpontú szemlélet áll a középpontban.

                  Lakóink számára 24 órás felügyeletet és gondoskodást biztosítunk, figyelembe véve egyéni szükségleteiket és egészségi állapotukat.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight="900" mb={2}>
                  Kültéri környezet
                </Heading>
                <Text>
                  A parkosított udvar lehetőséget biztosít az aktív szabadidő eltöltésére,
                  kertészkedésre és a pihenésre, hozzájárulva az ellátottak testi-lelki jóllétéhez.
                </Text>
              </Box>
              <MotionInView y={10} delay={0.05}>
                <Box bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="sm">
                  <Heading fontSize="lg" fontWeight="900" mb={3}>
                    Idősotthon szolgáltatásai:
                  </Heading>
                  <List spacing={2} color="gray.700" lineHeight="1.8">
                    <ListItem>• 24 órás felügyelet</ListItem>
                    <ListItem>• Orvosi ellátás</ListItem>
                    <ListItem>• Gyógyszerelés felügyelete, adagolása</ListItem>
                    <ListItem>• Szakápolás</ListItem>
                    <ListItem>• Demens ellátás</ListItem>
                    <ListItem>• Személyes higiénés segítségnyújtás</ListItem>
                    <ListItem>• Napi ötszöri étkeztetés</ListItem>
                    <ListItem>• Mentális támogatás</ListItem>
                    <ListItem>• Hitéleti alkalmak</ListItem>
                    <ListItem>• Lelkigondozás</ListItem>
                    <ListItem>• Gyógytorna</ListItem>
                    <ListItem>• Terápiás foglalkozásokk</ListItem>

                  </List>
                </Box>
              </MotionInView>
              <Box bg="gray.900" color="white" rounded="2xl" p={{ base: 5, md: 7 }}>
                <Text fontWeight="900" fontSize={{ base: "md", md: "lg" }}>
                  Az idősotthoni ellátás célja
                </Text>
                <Text mt={2} color="whiteAlpha.900">
                  Biztonságos, egészségügyi és szociális szempontból megfelelő környezetet biztosítani
                  azok számára, akik otthonukban már nem képesek önálló életvitelre. Az ellátást
                  szakképzett ápolók, gondozók, orvosok és gyógytornászok végzik, segítve az idősek
                  fizikai és lelki jóllétének megőrzését.
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
      </Box> */}
      <Box py={{ base: 10, md: 14 }}>
        <Container maxW="container.xl">
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="sm"
            textAlign="center"
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="900">
              Forrás idősotthon hamarosan nyit
            </Heading>
            <Text mt={3} color="gray.700">
              Dolgozunk rajta — hamarosan elérhető lesz a Forrás idősotthon bemutatása.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ForrasIdos;

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
  Icon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";

const relatedDocs = [
  {
    title: "Kérelem",
    description: "Támogató szolgálat igénybe vételéhez",
    link: "/images/dokumentum/nappali/tamogatoszolgalatkerelem .docx",
  },
  {
    title: "Megállapodás",
    description: "Támogató szolgálat.",
    link: "/images/dokumentum/nappali/megallapodastamogatoszolgalat.docx",
  },
  {
    title: "Egészségi állapotra vonatkozó igazolás",
    description:
      "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
    link: "/images/dokumentum/egeszsegi_igazolas.pdf",
  },

];

const TamogatoSzolg = () => {
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
                TÁMOGATÓ SZOLGÁLTATÁS
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
          <BreadcrumbItem>
            <ReactLink to="/alapszolgaltatas">Alapszolgáltatás</ReactLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Text>Támogató szolgáltatás</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Box py={{ base: 10, md: 14 }} bg="gray.50" textAlign='justify'>
        <Container maxW="container.xl">
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
                  Támogató szolgálat
                </Heading>

                <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

                <Text color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                  A támogató szolgálat célja, hogy a fogyatékossággal élő személyek számára
                  elérhetővé tegye a mindennapi tevékenységekhez kapcsolódó segítségnyújtási formákat,
                  amelyek lehetővé teszik az önálló, emberhez méltó életvitelt saját lakókörnyezetben,
                  és a társadalmi életben való aktív részvételt.
                </Text>
              </Stack>
               <SimpleGrid columns={{ base: 1, md: 1}} spacing={4} mt={5} mb={{ base: 0, md: 0 }}>
              {[
          
      
                { k: "Ellátási terület", v: "Tiszalök, Tiszaeszlár, Tiszavasvári, Tiszadada, Tiszadob" },
              ].map((x) => (
                <Box
                  key={x.k}
                  bg="gray.50"
                  borderWidth="1px"
                  borderColor="gray.200"
                  rounded="2xl"
                  p={5}
                  textAlign="center"
                  lineHeight='normal'
                >
                  <Text fontWeight="900">{x.k}</Text>
                  <Text mt={3}  color="gray.700">{x.v}</Text>
                </Box>
              ))}
            </SimpleGrid>
            </Box>
          </MotionInView>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
            <MotionInView y={10}>
              <Box bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="sm">
                <Heading fontSize="lg" fontWeight="900" mb={3}>
                  Mit tesz lehetővé?
                </Heading>
                <List spacing={2} color="gray.700" lineHeight="1.8">
                  <ListItem>• Önálló életvitelt saját lakókörnyezetben.</ListItem>
                  <ListItem>• A társadalmi életben való aktív részvételt.</ListItem>
                  <ListItem>• Esélyegyenlőség, integráció és autonómia erősítését.</ListItem>
                </List>
              </Box>
            </MotionInView>

            <MotionInView y={10} delay={0.05}>
              <Box bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="sm">
                <Heading fontSize="lg" fontWeight="900" mb={3}>
                  Alapelveink
                </Heading>
                <Text color="gray.700" lineHeight="1.8">
                  Olyan professzionális segítséget nyújtani, amely a fogyatékos emberek teljes jogú
                  és egyenértékű társadalmi részvételét támogatja – függetlenül a fogyatékosság típusától
                  és mértékétől, az ellátott nemétől, kulturális hátterétől, korától vagy lakóhelyétől.
                </Text>
              </Box>
            </MotionInView>
          </SimpleGrid>
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

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
                {["Személyi segítés", "Szállítás", "Információs szolgáltatás"].map((s) => (
                  <Box
                    key={s}
                    borderWidth="1px"
                    rounded="xl"
                    p={5}
                    textAlign="center"
                    fontWeight="800"
                  >
                    {s}
                  </Box>
                ))}
              </SimpleGrid>
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
                Kiegészítő támogatások
              </Heading>

              <List spacing={2} color="gray.700" lineHeight="1.8">
                <ListItem>
                  • Az általános egészségi állapotnak és a fogyatékosság jellegének megfelelő
                  egészségügyi-szociális ellátásokhoz, valamint a fejlesztő tevékenységhez való hozzájutás
                  személyi és eszközfeltételeinek biztosítása.
                </ListItem>
                <ListItem>
                  • Információnyújtás, ügyintézés, tanácsadás, és a tanácsadást követően a társadalmi
                  beilleszkedést segítő szolgáltatásokhoz való hozzájutás támogatása.
                </ListItem>
              </List>
            </Box>
          </MotionInView>
                 <MotionInView y={10}>
                      <Box
                        mt={8}
                        bg="gray.900"
                        color="white"
                        rounded="2xl"
                        p={{ base: 6, md: 8 }}
                      >
                        <Heading fontSize="lg" fontWeight="900">
                          Fontos információ az igénybevételhez!
                        </Heading>
                        <Text mt={2} display='flex' color="whiteAlpha.900" lineHeight="1.8">
                        A kérelem és az egészségi állapotra vonatkozó igazolás mellé csatolni kell a{" "} <Text ms='1' me={1} fontWeight='900'> {" "}fogyatékosságot megállapító</Text> dokumentumot.
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

export default TamogatoSzolg;

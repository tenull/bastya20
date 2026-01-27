import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Breadcrumb,
  BreadcrumbItem
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { Link as ReactLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Rolunk = () => {
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
          <MotionInView y={12}>
            <Heading color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
              RÓLUNK
            </Heading>
          </MotionInView>
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
            <Text>Rólunk</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      {/* BEMUTATKOZÁS */}
      <Box py={{ base: 10, md: 14 }}>
        <Container maxW="container.xl">
          <Stack spacing={4} align="center" textAlign="center">
            <MotionInView y={12}>
              <Stack align='center' textAlign='center'>
                             <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                            BEMUTATKOZÁS
                        </Heading>
                          <Box w="90px" h="4px" bg="yellow.400" rounded="full" />  
                        </Stack>
            </MotionInView>
          </Stack>

          {/* 1. blokk — kép BAL (float), szöveg körbefolyik */}
          <MotionInView y={10}>
            <Box
              mt={{ base: 8, md: 12 }}
              px={{ base: 0, md: 2 }}
              sx={{
                "&::after": {
                  content: '""',
                  display: "block",
                  clear: "both",
                },
              }}
            >
              <MotionInView x={-18} y={8}>
                <Image
                  src="/images/idosotthon3.jpg"
                  alt=""
                  rounded="2xl"
                  objectFit="cover"
                  // mobilon blokk, desktopon float
                  float={{ base: "none", md: "left" }}
                  w={{ base: "100%", md: "340px" }}
                  maxH={{ base: "320px", md: "340px" }}
                  mr={{ base: 0, md: 6 }}
                  mb={{ base: 4, md: 3 }}
                />
              </MotionInView>

              <Text lineHeight="1.8" color="gray.700" textAlign="justify">
                A település neve a méretére utal. A XIII. század közepén a szabolcsi
                várispánság birtoka, de a tatárjáráskor elpusztul. Az 1332. évi pápai
                tizedjegyzékben mint templomos hely szerepel, erről azonban nem történik
                említés. 1459-ben Egyházasnagyfalu néven említik. 1556-ban mintegy 350
                lakosa lehetett. Ez idő tájt érhette el a reformáció, melynek népe birtokába
                vette a középkori templomot. Ez a templom a későbbiek során rommá lett,
                1699. évi templomösszeírásban sem szerepel, és egy régi feljegyzés szerint
                “az Erdő alatt a két Morotva között a régi templom fundámentumából kiásott-
                mintegy 14 öl kő, melyek között találtatott a Cathedra alatt lévő faragott
                kő is.” Az újkori egyház megalakulásának dátuma 1670, de még több, mint
                100 évig semmit nem tudunk az egyház történetéről. Az 1779. évi visitatio
                szerint a faluban templom nincs, csak egy ima- és iskolaterem sárból és
                vesszőből, valamint harangláb. 1788. június 3-án tette le a templomépítő
                főkurátor, Bónis László az új templom alapkövét a délkeleti oldal alá...
              </Text>
            </Box>
          </MotionInView>

          {/* 2. blokk — kép JOBB (float), szöveg körbefolyik */}
          <MotionInView y={10}>
            <Box
              mt={{ base: 10, md: 14 }}
              px={{ base: 0, md: 2 }}
              sx={{
                "&::after": {
                  content: '""',
                  display: "block",
                  clear: "both",
                },
              }}
            >
              <MotionInView x={18} y={8}>
                <Image
                  src="/images/idosotthon4.jpg"
                  alt=""
                  rounded="2xl"
                  objectFit="cover"
                  float={{ base: "none", md: "right" }}
                  w={{ base: "100%", md: "340px" }}
                  maxH={{ base: "320px", md: "340px" }}
                  ml={{ base: 0, md: 6 }}
                  mb={{ base: 4, md: 3 }}
                />
              </MotionInView>

              <Text lineHeight="1.8" color="gray.700" textAlign="justify">
                1788. június 3-án tette le a templomépítő főkurátor, Bónis László férfi és
                női atyafiainak jelenlétében az új templom alapkövét a délkeleti oldal alá.
                Tervét készítette Szabolcs vármegye hites ingenierje, Sézty András. A templom
                1789 szeptemberére lett készen. Felhasználtak hozzá, “114 öl terméskövet,
                141 ezer téglát, 24 400 fa zsindelyt...” A templomot 1856-ban, 1876-ban és
                különösen az 1888. évi nagy árvíz után állították helyre...
              </Text>
            </Box>
          </MotionInView>

          {/* Záró szöveg */}
          <MotionInView y={12}>
            <Text
              mt={{ base: 10, md: 14 }}
              lineHeight="1.8"
              color="gray.700"
              textAlign="justify"
            >
              A kelet – nyugati tengelyű templom keleti homlokzata torony nélküli, háromszögű
              oromzattal záródik... Forrás: Váradi József: Tiszántúl Református Templomai
            </Text>
          </MotionInView>

          {/* YouTube (reszponzív 16:9) */}
          <MotionInView y={12} delay={0.04}>
            <Box maxW="900px" mx="auto" mt={{ base: 10, md: 12 }}>
              <Box position="relative" w="100%" pt="56.25%" rounded="2xl" overflow="hidden">
                <Box
                  as="iframe"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  src="https://www.youtube.com/embed/2ixYV8p_GT4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            </Box>
          </MotionInView>
        </Container>
      </Box>

      {/* FEJLESZTÉSEINK */}
      <Box py={{ base: 10, md: 14 }} bg="gray.50">
        <Container maxW="container.xl">
          <Stack spacing={4} align="center" textAlign="center">
            <MotionInView y={12}>
                <Stack align='center' textAlign='center'>
                             <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                            FEJLESZTÉSEINK
                        </Heading>
                          <Box w="90px" h="4px" bg="yellow.400" rounded="full" />  
                        </Stack>
            </MotionInView>
          </Stack>

          <MotionInView y={12} delay={0.04}>
            <Text
              mt={{ base: 8, md: 10 }}
              lineHeight="1.8"
              color="gray.700"
              textAlign="justify"
            >
              ...szöveg...
            </Text>
          </MotionInView>
        </Container>
      </Box>
    </Box>
  );
};

export default Rolunk;

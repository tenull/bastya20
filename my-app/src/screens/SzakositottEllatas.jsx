import {
  Box,
  Container,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Stack,
  SimpleGrid,
  Button
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const handleTopScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const cards = [
  {
    title: "Bástya Idősotthon",
    desc: "Bentlakásos ellátás, teljes körű gondozás, ápolás és közösségi élet biztonságos környezetben.",
    to: "/szakositott/bastya-idosotthon",
  },
  {
    title: "Forrás Idősotthon",
    desc: "Nyugodt, akadálymentes környezet, személyre szabott ellátás és gondoskodás Tiszalökön.",
    to: "/szakositott/forras-idosotthon",
  },
];


const SzakositottEllatas = () => {
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
          <MotionInView y={12}>
            <Heading color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
              SZAKOSÍTOTT ELLÁTÁS
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
            <Text>Szakosított Ellátás</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Box py={{ base: 10, md: 14 }} bg="gray.50">
        <Container maxW="container.xl">
          <Stack spacing={4} textAlign="center" align="center" mb={{ base: 8, md: 10 }}>
            <MotionInView y={10}>
              <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                Szakosított ellátások
              </Heading>
            </MotionInView>

            <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

            <MotionInView y={10} delay={0.05}>
              <Text maxW="75ch" color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                Szakosított ellátásaink azok számára nyújtanak teljes körű, bentlakásos gondoskodást,
                akik egészségi állapotuk vagy élethelyzetük miatt már nem képesek önálló életvitelre.
                Ismerje meg idősotthonainkat:
              </Text>
            </MotionInView>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {cards.map((c, i) => (
              <MotionInView key={c.to} delay={i * 0.06} y={12}>
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  rounded="2xl"
                  p={{ base: 6, md: 8 }}
                  boxShadow="sm"
                  transition="all 0.2s ease"
                  _hover={{
                    borderColor: "yellow.400",
                    boxShadow: "md",
                    transform: "translateY(-2px)",
                  }}
                  h="100%"
                >
                  <Stack spacing={4} h="100%" justify="space-between">
                    <Box>
                      <Heading fontSize="xl" fontWeight="900">
                        {c.title}
                      </Heading>
                      <Text mt={2} color="gray.700" lineHeight="1.7">
                        {c.desc}
                      </Text>
                    </Box>

                    <Button
                      as={ReactLink}
                      to={c.to}
                      variant="outline"
                      borderColor="yellow.400"
                      color="black"
                      fontWeight="900"
                      rightIcon={<BiRightArrowAlt />}
                      sx={{
                        ".chakra-button__icon": {
                          transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover .chakra-button__icon": {
                          transform: "translateX(6px)",
                        },
                      }}
                      _hover={{ bg: "yellow.50" }}
                      alignSelf="flex-start"
                      onClick={handleTopScroll}
                    >
                      Részletek
                    </Button>
                  </Stack>
                </Box>
              </MotionInView>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default SzakositottEllatas;

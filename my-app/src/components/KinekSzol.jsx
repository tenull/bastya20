import { Box, Container, Heading, Text, SimpleGrid, Stack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MotionInView from "../components/MotionView";

const cards = [
  {
    title: "Idős hozzátartozóknak",
    desc: "Bentlakásos ellátás és biztonságos környezet — intézményeink bemutatása.",
    to: "/szakositott/bastya-idosotthon",
    cta: "Intézményeink",
  },
  {
    title: "Nappali ellátást keresőknek",
    desc: "Demens idősek és fogyatékossággal élők nappali ellátása — támogató szolgáltatás.",
    to: "/alapellatas/demens",
    cta: "Alapellátás",
  },
  {
    title: "Kérdése van? Segítünk!",
    desc: "Nem biztos benne, melyik ellátás megfelelő? Vegye fel velünk a kapcsolatot.",
    to: "/kapcsolat",
    cta: "Kapcsolat",
  },
];

export default function KinekSzol() {
  return (
    <Box py={{ base: 12, md: 20 }} bg="white">
      <Container maxW="container.xl">
        <MotionInView>
          <Heading textAlign="center" fontWeight="900" fontSize={{ base: "2xl", md: "4xl" }}>
            Kinek szól?
          </Heading>
        </MotionInView>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={{ base: 8, md: 12 }}>
          {cards.map((c, i) => (
            <MotionInView key={c.title} delay={i * 0.06}>
              <Box
                bg="gray.50"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="2xl"
                p={{ base: 6, md: 7 }}
                boxShadow="sm"
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
                    as={RouterLink}
                    to={c.to}
                    variant="outline"
                    borderColor="gray.300"
                    _hover={{ borderColor: "yellow.400", bg: "yellow.50" }}
                    fontWeight="800"
                  >
                    {c.cta}
                  </Button>
                </Stack>
              </Box>
            </MotionInView>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

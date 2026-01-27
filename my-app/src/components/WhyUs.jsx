import { Box, Container, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import MotionInView from "../components/MotionView";

const points = [
  { title: "Szakértelem", desc: "Szakképzett munkatársak, emberközeli gondoskodás." },
  { title: "Biztonság", desc: "Megbízható, stabil működés és kiszámítható ellátás." },
  { title: "Több ellátási forma", desc: "Alapellátás és szakosított ellátás egy központban." },
  { title: "Segítünk eligazodni", desc: "Kapcsolatfelvételtől az ellátásig végig támogatjuk." },
];

export default function WhyUs() {
  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        <MotionInView>
          <Heading textAlign="center" fontWeight="900" fontSize={{ base: "2xl", md: "4xl" }}>
            Miért minket?
          </Heading>
        </MotionInView>

        <MotionInView delay={0.05}>
          <Text textAlign="center" color="gray.700" mt={3} maxW="70ch" mx="auto" lineHeight="1.7">
            Célunk a biztonságos, átlátható és emberközeli ellátás — a megfelelő szolgáltatás megtalálásában is segítünk.
          </Text>
        </MotionInView>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={{ base: 8, md: 12 }}>
          {points.map((p, i) => (
            <MotionInView key={p.title} delay={i * 0.06}>
              <Box
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="2xl"
                p={{ base: 6, md: 7 }}
                boxShadow="sm"
              >
                <Heading fontSize="lg" fontWeight="900">
                  {p.title}
                </Heading>
                <Text mt={2} color="gray.700" lineHeight="1.7">
                  {p.desc}
                </Text>
              </Box>
            </MotionInView>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

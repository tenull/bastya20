import { Box, Container, Heading, Text, Stack, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MotionInView from "../components/MotionView";

export default function LandingHero() {
  return (
    <Box
      as="section"
      pt={{ base: 28, md: 36 }}  // header fix miatt
      pb={{ base: 14, md: 20 }}
      bg="gray.900"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* finom "glow" háttér (csak design) */}
      <Box
        position="absolute"
        inset="-200px"
        bg="radial-gradient(circle at 20% 30%, rgba(236,201,75,0.18), transparent 40%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.10), transparent 35%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative">
        <Stack spacing={{ base: 6, md: 8 }} maxW="3xl">
          <MotionInView y={10}>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="whiteAlpha.800"
              letterSpacing="0.12em"
              textTransform="uppercase"
              fontWeight="700"
            >
              BÁSTYA Szociális Szolgáltató Központ
            </Text>
          </MotionInView>

          <MotionInView y={12} delay={0.04}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              lineHeight="1.05"
            >
              Biztonságos, emberközeli ellátás
              <Box as="span" color="yellow.300"> egy helyen</Box>.
            </Heading>
          </MotionInView>

          <MotionInView y={12} delay={0.08}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
              lineHeight="1.8"
              maxW="2xl"
            >
              Alapellátási és szakosított szolgáltatásainkkal segítünk eligazodni és a megfelelő
              ellátást megtalálni — nappali ellátástól a bentlakásos intézményi gondozásig.
            </Text>
          </MotionInView>

          <MotionInView y={12} delay={0.12}>
            <HStack spacing={4} flexWrap="wrap">
              <Button
                as={RouterLink}
                to="/kapcsolat"
                bg="yellow.400"
                color="black"
                _hover={{ bg: "yellow.500" }}
                size="lg"
                fontWeight="800"
              >
                Kapcsolatfelvétel
              </Button>

              <Button
                as={RouterLink}
                to="/szakositott"
                variant="outline"
                borderColor="whiteAlpha.500"
                color="white"
                _hover={{ borderColor: "yellow.400", color: "yellow.300" }}
                size="lg"
                fontWeight="700"
              >
                Intézményeink
              </Button>

              <Button
                as={RouterLink}
                to="/alapellatas"
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ color: "yellow.300", bg: "whiteAlpha.100" }}
                size="lg"
                fontWeight="700"
              >
                Alapellátás
              </Button>
            </HStack>
          </MotionInView>

          {/* mini bizalmi sor (opcionális, de jó) */}
          <MotionInView y={10} delay={0.16}>
            <Text color="whiteAlpha.700" fontSize="sm">
              Nem biztos benne, melyik ellátás megfelelő? Hívjon minket:{" "}
              <Box as="a" href="tel:+36301628381" color="yellow.300" fontWeight="800">
                +36/30-162-8381
              </Box>
            </Text>
          </MotionInView>
        </Stack>
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  Text,
  Link,
  Icon,
  Stack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiFacebookBoxLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Footer = () => {
  const center = { lat: 48.02184, lng: 21.38115 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyB8ZVOSmtLY1o_dL6GAwku8uIT1JrzshuA', 
  });

  const handleTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    //{ label: "Rólunk", to: "/rolunk" },
    { label: "Missziónk", to: "/misszionk" },
    { label: "Szolgáltatásaink", to: "/szolgaltatasaink" },
    { label: "Galéria - Nappali ellátás", to: "/galeria/bastya" },
    { label: "Galéria - Idősotthon", to: "/galeria/nappali" },
    { label: "Dokumentumok", to: "/formanyomtatvanyok" },
    { label: "Kapcsolat", to: "/kapcsolat" },
  ];

  const navSzolgLinks = [
    { label: "Demens Idősek nappali ellátása", to: "/alapellatas/demens-nappali" },
    { label: "Fogyatékkal élők nappali ellátása", to: "/alapellatas/fogyatekkal-elok-nappali" },
    { label: "Támogató szolgáltatás", to: "/alapellatas/tamogato-szolgaltatas" },
    { label: "Bástya idősotthon", to: "/szakositott/bastya-idosotthon" },
    { label: "Forrás idősotthon", to: "/szakositott/forras-idosotthon" },
  ]

  return (
    <Box bg="gray.800" color="white">
      <Container maxW="container.xl" py={{ base: 6, md: 3 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 8 }}>
          {/* Oldalaink */}
          <Box display='flex' flexDirection='column' alignItems={{base:'center',md:'left'}}>
            <Text  fontWeight="900" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
              Oldalaink
            </Text>

            <Stack spacing={2}>
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  as={RouterLink}
                  to={l.to}
                  onClick={handleTopScroll}
                  display="inline-flex"
                  alignItems="center"
                  
                  gap={2}
                  py={1.5}
                  _hover={{ color: "yellow.400", textDecoration: "none" }}
                >
                  <Icon as={MdKeyboardArrowRight} />
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Social */}
          <Box display='flex' flexDirection='column' alignItems={{base:'center',md:'left'}}>
             <Box display='flex' flexDirection='column' alignItems={{base:'center',md:'left'}}>
            <Text  fontWeight="900" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
              Szolgáltatásaink
            </Text>

            <Stack spacing={2}>
              {navSzolgLinks.map((l) => (
                <Link
                  key={l.to}
                  as={RouterLink}
                  to={l.to}
                  onClick={handleTopScroll}
                  display="inline-flex"
                  alignItems="center"
                  
                  gap={2}
                  py={1.5}
                  _hover={{ color: "yellow.400", textDecoration: "none" }}
                >
                  <Icon as={MdKeyboardArrowRight} />
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Box>

            <Text fontWeight="900" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
              Social Media
            </Text>

            <HStack spacing={4} justify={{ base: "flex-start", md: "left" }}>
              <Link
                href="https://www.facebook.com/profile.php?id=100075319150836"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="48px"
                h="48px"
                rounded="xl"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                _hover={{ color: "yellow.400", borderColor: "yellow.400", textDecoration: "none" }}
              >
                <Icon as={RiFacebookBoxLine} fontSize="28px" />
              </Link>

              <Link
                href="https://www.youtube.com/watch?v=2ixYV8p_GT4&ab_channel=Tiszavasv%C3%A1riTV"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="48px"
                h="48px"
                rounded="xl"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                _hover={{ color: "yellow.400", borderColor: "yellow.400", textDecoration: "none" }}
              >
                <Icon as={SlSocialYoutube} fontSize="26px" />
              </Link>
            </HStack>
          </Box>

          <Box>
            <Text fontWeight="900" textAlign='center' fontSize={{ base: "xl", md: "2xl" }} mb={4}>
              Elhelyezkedés
            </Text>

            <Box
              rounded="2xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              h={{ base: "250px", md: "320px" }}
            >
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={center}
                  zoom={17}
                  options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                  }}
                />
              ) : (
                <Box w="100%" h="100%" bg="whiteAlpha.100" />
              )}
            </Box>

            <Text mt={3} color="whiteAlpha.800">
              4450, Tiszalök, Hősök tere 7/a
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Box bg="blackAlpha.600" py={4}>
        <Container maxW="container.xl">
          <Text fontSize="sm" color="whiteAlpha.800" textAlign="center">
           Bástya Református Szociális Szolgáltató Központ © 2026 Minden jog fenntartva
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

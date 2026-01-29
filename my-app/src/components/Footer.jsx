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
import { Marker } from "@react-google-maps/api";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {

  const locations = [
    {
      title: "Bástya Idősek Otthona",
      address: "4450 Tiszalök, Hősök tere 7/a",
      position: { lat: 48.0217987, lng: 21.3795757 },
    },
    {
      title: "Forrás Idősek Otthona",
      address: "4450 Tiszalök, Kossuth utca 41.",
      position: { lat: 48.0193179, lng: 21.3774749 },
    },
    {
      title: "Nappali Ellátás",
      address: "4450 Tiszalök, Damjanich utca 24.",
      position: { lat: 48.0094679, lng: 21.3796366 },
    },
  ];



  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => bounds.extend(loc.position));
    map.fitBounds(bounds);
  };
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
          <Box display='flex' flexDirection='column' alignItems={{ base: 'center', md: 'left' }}>
            <Text fontWeight="900" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
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
          <Box display='flex' flexDirection='column' alignItems={{ base: 'center', md: 'left' }}>
            <Box display='flex' flexDirection='column' alignItems={{ base: 'center', md: 'left' }}>
              <Text fontWeight="900" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
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
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={locations[0].position}
                zoom={16}
                onLoad={onLoad}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              >
                {locations.map((loc, i) => (
                  <Marker
                    key={i}
                    position={loc.position}
                    title={`${loc.title}\n${loc.address}`}
                  />
                ))}
              </GoogleMap>

            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' width='100%' textAlign='justify' fontSize='12px'>
              <Text display='flex' alignItems='center' mt={3} color="whiteAlpha.800">
               <FaLocationDot style={{marginRight:'4px'}}/>{" "} 1. Bástya idősotthon 4450, Tiszalök, Hősök tere 7/a
              </Text>
              <Text display='flex' alignItems='center' color="whiteAlpha.800">
                <FaLocationDot style={{marginRight:'4px'}}/> 2. Forrás idősotthon 4450, 4450, Tiszalök, Kossuth utca 41.
              </Text>
              <Text display='flex' alignItems='center' color="whiteAlpha.800">
                <FaLocationDot style={{marginRight:'4px'}}/> 3. Nappali ellátás 4450, 4450, Tiszalök, Damjanich utca 24.{" "}{" "}
              </Text>
            </Box>

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

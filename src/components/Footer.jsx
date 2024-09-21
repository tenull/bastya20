import React from 'react';
import { Box, Flex, Text, Link, Icon, VStack, HStack, Container } from '@chakra-ui/react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Link as RouterLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const mapContainerStyle = {
    width: '450px',
    height: '350px',
  };

  const mapContainerStyleMobile = {
    width: '340px',
    height: '250px',
  };

  const center = {
    lat: 48.02184,
    lng: 21.38115,
  };

  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB8ZVOSmtLY1o_dL6GAwku8uIT1JrzshuA',
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box bg="gray.800">
      <Container maxW="container.lg" color="white">
        <Box py={8}>
          <Flex flexWrap="wrap" justifyContent="space-between" mx="auto" maxW="1200px" >

            <VStack align="start" spacing={4} flex="1">
              <Box>
                <Text fontWeight='900' mb={5} fontSize={{ base: 'xl', md: '2xl' }}>Oldalaink</Text>
              </Box>
              <Link display='flex' alignItems='center' _hover={{ color: 'yellow.400' }} textDecoration='none' as={RouterLink} to="/rolunk" onClick={handleTopScroll}>
                <MdKeyboardArrowRight />  Rólunk
              </Link>

              <Link display='flex' alignItems='center' _hover={{ color: 'yellow.400' }} textDecoration='none' as={RouterLink} to="/szolgaltatasaink" onClick={handleTopScroll}>
                <MdKeyboardArrowRight />  Szolgáltatásaink
              </Link>
              <Link display='flex' alignItems='center' _hover={{ color: 'yellow.400' }} textDecoration='none' as={RouterLink} to="/galeria" onClick={handleTopScroll}>
                <MdKeyboardArrowRight />  Galéria
              </Link>
              <Link display='flex' alignItems='center' _hover={{ color: 'yellow.400' }} textDecoration='none' as={RouterLink} to="/formanyomtatvanyok" onClick={handleTopScroll}>
                <MdKeyboardArrowRight />  Dokumentumok
              </Link>
              <Link display='flex' alignItems='center' _hover={{ color: 'yellow.400' }} textDecoration='none' as={RouterLink} to="/kapcsolat" onClick={handleTopScroll}>
                <MdKeyboardArrowRight />  Kapcsolat
              </Link>
            </VStack>

            <HStack spacing={4} flexDirection="column" flex="1" justifyContent="flex-start" alignItems="center">
              <Box>
                <Text fontWeight="900" mb={5} fontSize={{ base: 'xl', md: '2xl' }}>
                  Social Media
                </Text>
              </Box>

              <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
                <Link
                  border="1px"
                  p={3}
                  rounded="5px"
                  display="inline-flex"  
                  alignItems="center"
                  href="https://www.facebook.com/bastyaidosotthon"
                  _hover={{ color: 'yellow.400' }}
                  target="_blank"
                >
                  <Icon as={FaFacebook} w={10} h={10} />
                </Link>

                <Link
                  border="1px"
                  p={3} 
                  rounded="5px"
                  display="inline-flex"
                  alignItems="center"
                  href="https://www.youtube.com/watch?v=2ixYV8p_GT4&ab_channel=Tiszavasv%C3%A1riTV"
                  _hover={{ color: 'yellow.400' }}
                  target="_blank"
                >
                  <Icon as={FaYoutube} w={10} h={10} />
                </Link>
              </Box>
            </HStack>


            <Box flex="1" position="relative" textAlign="center" display='flex' justifyContent='center' flexDirection='column'>
              <Box>
                <Text fontWeight='900' mb={5} fontSize={{ base: 'xl', md: '2xl' }}>Elhelyezkedés</Text>
              </Box>
              <Box display={{ base: 'none', md: 'block' }}>
                {isLoaded && (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  />
                )}
                <Text mt={2}>4450, Tiszalök, Hősök tere 7/a</Text>
              </Box>
              <Box display={{ base: 'block', md: 'none' }}>
                {isLoaded && (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyleMobile}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  />
                )}
                <Text mt={2}>4450, Tiszalök, Hősök tere 7/a</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

      </Container>
      <Box color='white' py={4} bg="gray.900">
        <Flex mx="auto" maxW="1200px" justifyContent="center" alignItems="center">
          <Text fontSize="sm">Tiszalöki Bástya idősotthon © 2024 Minden jog fenntartva</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;

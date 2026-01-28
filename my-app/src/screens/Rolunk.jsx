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
               
              </Text>
            </Box>
          </MotionInView>
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
              
              </Text>
            </Box>
          </MotionInView>
          <MotionInView y={12}>
            <Text
              mt={{ base: 10, md: 14 }}
              lineHeight="1.8"
              color="gray.700"
              textAlign="justify"
            >
            
            </Text>
          </MotionInView>
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

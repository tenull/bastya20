import {
  Box,
  Container,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import MotionInView from "../components/MotionView";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const SzakositottEllatas = () => {
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
              SZAKOSÍTOTT ELLÁTÁS
            </Heading>
          </MotionInView>
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

          <BreadcrumbItem isCurrentPage>
            <Text>Szakosított Ellátás</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      {/* Tartalom placeholder */}
      <Box py={{ base: 10, md: 14 }}>
        <Container maxW="container.xl">
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="sm"
            textAlign="center"
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="900">
              Tartalom feltöltés alatt
            </Heading>
            <Text mt={3} color="gray.700">
              Dolgozunk rajta — hamarosan elérhető lesz a Szakosított ellátás bemutatása.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SzakositottEllatas;

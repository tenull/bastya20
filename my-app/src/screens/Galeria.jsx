import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  useBreakpointValue,
  Breadcrumb,
  BreadcrumbItem
} from "@chakra-ui/react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link as ReactLink } from "react-router-dom";
import MotionInView from "../components/MotionView";
import { imageData } from "../nappaliImageData";
import { foglalkozasData } from "../foglalkozasDataNappali";
import { ChevronRightIcon } from "@chakra-ui/icons";
function buildSlidesFromAlbum(album) {
  const imgs = album?.images ? Object.values(album.images) : [];
  return imgs.map((src) => ({
    src,
    title: album?.title || "",
  }));
}

function AlbumGridSection({ title, subtitle, data, onOpenAlbum, bg }) {
  return (
    <Box py={{ base: 10, md: 14 }} bg={bg || "white"}>
      <Container maxW="container.xl">
        <Stack spacing={2} align="center" textAlign="center" mb={{ base: 6, md: 10 }}>
          <MotionInView variant="zoom-up">

            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
              {title}
            </Text>

          </MotionInView>
          <Box w="90px" h="4px" bg="yellow.400" rounded="full" />
          {subtitle ? (
            <MotionInView variant="fade-up" delay={0.05}>
              <Text color="gray.700" maxW="750px" fontSize={{ base: "md", md: "lg" }}>
                {subtitle}
              </Text>
            </MotionInView>
          ) : null}
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {data.map((album, i) => (
            <MotionInView key={album.title} variant="fade-up" delay={i * 0.05}>
              <Box
                role="group"
                cursor="pointer"
                overflow="hidden"
                rounded="2xl"
                borderWidth="1px"
                borderColor="gray.200"
                bg="white"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
                transition="all 0.2s ease"
                onClick={() => onOpenAlbum(album)}
              >
                <Box position="relative" overflow="hidden">
                  <Image
                    src={album.mainimage}
                    alt={album.title}
                    w="100%"
                    h={{ base: "220px", md: "240px" }}
                    objectFit="cover"
                    objectPosition="top"
                    transition="transform 0.25s ease, filter 0.25s ease"
                    _groupHover={{ transform: "scale(1.04)", filter: "brightness(1.05)" }}
                    loading="lazy"
                  />
                </Box>

                <Box p={5}>
                  <Text fontSize="lg" fontWeight="800" textAlign="center">
                    {album.title}
                  </Text>
                  <Text mt={2} fontSize="sm" color="gray.600" textAlign="center">
                    Kattints a megnyitáshoz
                  </Text>
                </Box>
              </Box>
            </MotionInView>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function Galeria() {
  const [open, setOpen] = React.useState(false);
  const [slides, setSlides] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [albumTitle, setAlbumTitle] = React.useState("");

  const heroHeight = useBreakpointValue({ base: "450px", md: "550px" });

  const openAlbum = (album) => {
    const nextSlides = buildSlidesFromAlbum(album);
    setSlides(nextSlides);
    setAlbumTitle(album?.title || "");
    setIndex(0);
    setOpen(true);
  };

  return (
    <Box>
      <Box
        w="full"
        h={heroHeight}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage={`linear-gradient(100deg, rgba(42,42,42,0.85) 0%, rgba(42,42,42,0) 90%), url(/images/virag2.jpg)`}
      >
        <Container
          maxW="container.lg"
          h={heroHeight}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box
            w='100%'
            p={10}
            borderRadius='15'
            backgroundColor='black'
            opacity='0.6'
            display='flex'
            flexDirection='column'
            alignItems='center'
          //backgroundImage={`linear-gradient(100deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.10) 85%),`}
          >
            <MotionInView variant="fade-up">
              <Heading color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
                GALÉRIA - NAPPALI ELLÁTÁS
              </Heading>
            </MotionInView>

            <MotionInView variant="fade-up" delay={0.06}>

              <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} mt={2} maxW="720px">
                Betekintést nyerhet a demens idősek és a fogyatékkal élők nappali ellátásának
                mindennapjaiba.
              </Text>
            </MotionInView>
          </Box>
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
            <Text>Galéria</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <AlbumGridSection
        title="PROGRAMOK"
        subtitle={null}
        data={imageData}
        onOpenAlbum={openAlbum}
        bg="white"
      />
      <AlbumGridSection
        title="FOGLALKOZÁSOK"
        subtitle={null}
        data={foglalkozasData}
        onOpenAlbum={openAlbum}
        bg="gray.50"
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: current }) => setIndex(current) }}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.88)" },
        }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ swipe: 240 }}
        render={{
          toolbar: () => (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                color: "white",
                fontWeight: 800,
                letterSpacing: "0.08em",
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              {albumTitle}
            </div>
          ),
        }}
      />
    </Box>
  );
}

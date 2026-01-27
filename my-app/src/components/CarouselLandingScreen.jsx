import React from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);
  const MotionBox = motion(Box);

  const slidesToShow = useBreakpointValue({ base: 1, md: 1 });

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,

  autoplaySpeed: 6000, 
  speed: 1200,         

  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: false,

  slidesToShow: 1,
  slidesToScroll: 1,
};

  const slides = [
    // { image: "/images/kep2.jpg" },
    { image: "/images/carousel/1.jpg" },
    { image: "/images/carousel/2.jpg" },
    { image: "/images/carousel/3.jpg" },
    { image: "/images/carousel/9.jpg" },
    { image: "/images/carousel/4.jpg" },
    { image: "/images/carousel/5.jpg" },
    { image: "/images/carousel/6.jpg" },
    { image: "/images/carousel/7.jpg" },
    { image: "/images/carousel/8.jpg" },
  
  ];

  const handleTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box position="relative">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider háttér */}
      <Box overflow="hidden">
        <Slider {...settings} ref={(s) => setSlider(s)}>
          {slides.map((s, idx) => (
            <Box key={idx} position="relative" width="100%" height="100%" overflow="hidden" >
              <MotionBox
                position="relative"
                width="100%"
                height={{ base: "520px", md: "820px" }}
                bg="gray.800"
                backgroundImage={`linear-gradient(100deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.10) 85%), url(${s.image})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                  animate={{ scale: 1.03 }}
                transition={{ duration: 9.2, ease: "easeInOut", repeat: Infinity }}
                willChange="transform"
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Hero tartalom overlay */}
 <Box position="absolute" inset={0} zIndex={3} display="flex" alignItems="center">
  <Container maxW="container.xl">
    <Stack
      spacing={{ base: 5, md: 6 }}
      maxW="3xl"
      pt={{ base: 14, md: 8 }}
      style={{
        borderRadius: "15px",
        padding: "22px",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
      }}
    >
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color="whiteAlpha.800"
        letterSpacing="0.14em"
        textTransform="uppercase"
        fontWeight="700"
      >
        BÁSTYA Református Szociális Szolgáltató Központ
      </Text>

      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="900"
        lineHeight="1.1"
        color="white"
      >
        Biztonság, gondoskodás, emberközeli ellátás{" "}
        <Box as="span" color="yellow.300">
         
        egy rendszerben
        </Box>
        .
      </Heading>

      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="whiteAlpha.900"
        lineHeight="1.7"
        maxW="2xl"
      >
        Alap- és szakosított ellátásainkkal segítünk megtalálni azt a
        szolgáltatást, amely leginkább megfelel leendő hozzánktartozóink
        igényeinek.
      </Text>

      <HStack spacing={3} flexWrap="wrap">
        <Button
          as={RouterLink}
          to="/kapcsolat"
          bg="yellow.400"
          color="black"
          _hover={{ bg: "yellow.500" }}
          size="md"
          fontWeight="900"
          onClick={handleTopScroll}
        >
          Kapcsolatfelvétel
        </Button>

        <Button
          as={RouterLink}
          to="/alapszolgaltatas"
          variant="outline"
          borderColor="whiteAlpha.500"
          color="white"
          _hover={{ borderColor: "yellow.400", color: "yellow.300" }}
          size="md"
          fontWeight="800"
          onClick={handleTopScroll}
        >
          Alapszolgáltatás
        </Button>

        <Button
          as={RouterLink}
          to="/szakositott"
          variant="ghost"
          color="whiteAlpha.900"
          _hover={{ color: "yellow.300", bg: "whiteAlpha.100" }}
          size="md"
          fontWeight="800"
          onClick={handleTopScroll}
        >
          Szakosított ellátás
        </Button>
      </HStack>

      <Text color="whiteAlpha.700" fontSize="xs">
        Telefon:{" "}
        <Box
          as="a"
          href="tel:+36301449427"
          color="yellow.300"
          fontWeight="900"
        >
          +36/30-144-9427
        </Box>
      </Text>
    </Stack>
  </Container>
</Box>


      {/* Wave maradhat */}
      <Box position="absolute" bottom={-1} width="100%" height="auto" zIndex={2}>
        <svg
          style={{ transform: "rotate(0deg)", transition: "0.3s", pointerEvents: "none" }}
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
              <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,441L80,441C160,441,320,441,480,416.5C640,392,800,343,960,285.8C1120,229,1280,163,1440,187.8C1600,212,1760,327,1920,310.3C2080,294,2240,147,2400,81.7C2560,16,2720,33,2880,98C3040,163,3200,278,3360,302.2C3520,327,3680,261,3840,196C4000,131,4160,65,4320,73.5C4480,82,4640,163,4800,187.8C4960,212,5120,180,5280,212.3C5440,245,5600,343,5760,318.5C5920,294,6080,147,6240,114.3C6400,82,6560,163,6720,236.8C6880,310,7040,376,7200,367.5C7360,359,7520,278,7680,236.8C7840,196,8000,196,8160,171.5C8320,147,8480,98,8640,73.5C8800,49,8960,49,9120,49C9280,49,9440,49,9600,40.8C9760,33,9920,16,10080,32.7C10240,49,10400,98,10560,171.5C10720,245,10880,343,11040,334.8C11200,327,11360,212,11440,155.2L11520,98L11520,490L0,490Z"
          />
        </svg>
      </Box>
    </Box>
  );
}

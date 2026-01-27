import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

const CarouselBastya = () => {
  const slidesToShow = useBreakpointValue({ base: 1, md: 1 });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,        
    cssEase: "ease-in-out",
  };

  const cards = [
    { image: "/images/kep2.jpg", title: "Bástya" },
    { image: "/images/kisBastya.jpg", title: "Nappali Bástya" },
  ];

  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      
      sx={{
        ".slick-list": { overflow: "hidden" },
        ".slick-track": { display: "flex" },
        ".slick-slide > div": { height: "100%" },
      }}
    >
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box key={index}>
            <Image
              src={card.image}
              alt={card.title}
              w="100%"
              h={{ base: "260px", md: "550px" }}
              objectFit="cover"
              display="block"
              mb={{base:0,md:-2}}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselBastya;

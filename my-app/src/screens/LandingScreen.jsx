import CaptionCarousel from "../components/CarouselLandingScreen";
import HomeServices from "../components/HomeServices";
import WhyDifferent from "../components/WhyDifferent";
export default function LandingScreen() {
  return (
    <>
      <CaptionCarousel />
      {/* <Box py={10}>
        <Container maxW="container.xl">
        <HirekList />
        </Container>
      </Box> */}    
   <WhyDifferent/>
    <HomeServices />
    {/* <SzolgSection />
      <AboutSection /> */}

     
    </>
  );
}

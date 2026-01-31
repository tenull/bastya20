import CaptionCarousel from "../components/CarouselLandingScreen";
import HomeServices from "../components/HomeServices";
import WhyDifferent from "../components/WhyDifferent";
import Youtube from "../components/Youtube";
export default function LandingScreen() {
  return (
    <>
      <CaptionCarousel />
      {/* <Box py={10}>
        <Container maxW="container.xl">
        <HirekList />
        </Container>
      </Box> */}
      <WhyDifferent />
      <Youtube/>
      <HomeServices />
      {/* <SzolgSection />
      <AboutSection /> */}


    </>
  );
}

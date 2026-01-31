import MotionInView from "./MotionView";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

const Youtube = () => {
  return (
    <Box py={{ base: 10, md: 14 }} px={{base:5,md:0}}>
      <MotionInView y={12}>
        {/* CÍM */}
        <Box  display='flex' flexDirection='column' alignItems='center' textAlign="center" mb={8}>
          <Heading mb={5} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900">
            BEMUTATKOZÓ VIDEÓK
          </Heading>
          <Box w="90px" h="4px" bg="yellow.400" rounded="full" />
          <Text mt={2} color="gray.600">
            Pillanatok a Bástya mindennapjaiból
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          maxW="1100px"
          mx="auto"
        >
          {[
            "https://www.youtube.com/embed/2ixYV8p_GT4",
            "https://www.youtube.com/embed/Pjmmv4XQsdQ",
          ].map((src, i) => (
            <Box
              key={i}
              position="relative"
              w="100%"
              pt="56.25%"
              rounded="2xl"
              overflow="hidden"
              boxShadow="md"
            >
              <Box
                as="iframe"
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                src={src}
                title={`YouTube video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </Box>
          ))}
        </SimpleGrid>
      </MotionInView>
    </Box>
  );
};

export default Youtube;

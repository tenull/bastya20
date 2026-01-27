import {
    Box,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Button,
    Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import MotionInView from "./MotionView";

export default function AboutSection() {
    return (
        <Box py={{ base: 10, md: 16 }} bg="white">
            <Box >
                <Container maxW='container.xl' justifyContent='space-evenly'>
                    <MotionInView variant="zoom-in-up">
                        <Flex

                            mb={5} justifyContent='center'>
                            <Text textAlign='center'  fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>OTTHONUNK</Text>
                        </Flex>
                    </MotionInView>
                    <Flex justify="space-evenly" wrap="wrap" pt={5} gap={4}>
                        <Box position="relative" width={{ base: "100%", md: "50%" }} mb={4}>
                            <MotionInView variant="zoom-in-left">
                                <Box
                                    display={{ base: "none", lg: "block" }}
                                    position="absolute"
                                    right="35px"
                                    top="-35px"
                                    width="496px"
                                    height="550px"
                                    border="7px solid"
                                    borderColor="yellow.400"
                                    rounded="5px"
                                    zIndex={0}
                                    pointerEvents="none"
                                />
                            </MotionInView>

                            <Stack spacing={2} align="center" position="relative" zIndex={1}>
                                <MotionInView variant="flip-left">
                                    <Image
                                        position="relative"
                                        zIndex={1}
                                        src="/images/healthcare.webp"
                                        alt="Image 1"
                                        rounded="5px"
                                        width={{ base: "350px", lg: "500px" }}
                                        height={{ base: "300px", lg: "550px" }}
                                        objectFit="cover"
                                    />
                                </MotionInView>

                                <Text fontSize={{ base: "sm", md: "lg" }} textAlign="justify">
                                    A Csurgó vendégház jól felszerelt,- 4 kétágyas szobával és egyterű nappali-konyha-étkezővel rendelkezik. Minden szobához külön fürdőszoba tartozik, melyből 2 szoba pótágyazható. Vendégházunk mellett egy külön bejáratú 2+1 fős apartman is a vendégek rendelkezésére áll. A vendégház és apartman egyben és külön-külön is foglalható. Akár születésnapi hétvégét tartana, akár egy romantikus kiruccanást, vagy egy baráti összejövetelt- vendégházunk gondoskodik az Önök kényelméről.
                                </Text>
                            </Stack>
                        </Box>


                      <Box
  position="relative"
  width={{ base: "100%", md: "47%" }}
  maxW="500px"
>
  <Stack spacing={2} align="center" position="relative" zIndex={1}>
    <Text
    mb={5}
      fontSize={{ base: "sm", md: "lg" }}
      textAlign="justify"
      maxW="450px"
    >
   Farkasgyepű, a nyugalom szigete 2022 augusztusában nyílt, panorámás, medencével ellátott vendégházunk a szubalpin klímájáról jellegzetes Farkasgyepűn található. Pár km-en belül vízesés, tavak és erdei ösvények kínálnak a kirándulni vágyók részére mesés úti célt , melyek tökéletesen alkalmasak arra, hogy Ön elvonuljon a város zajától, és kikapcsolódjon.
    </Text>

    <MotionInView variant="zoom-in-right">
      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        left="75px"
        bottom="35px"
        width="466px"
        height="550px"
        border="7px solid"
        borderColor="yellow.400"
        rounded="5px"
        zIndex={0}
        pointerEvents="none"
      />
    </MotionInView>

    <MotionInView variant="flip-right">
      <Image
        position="relative"
        zIndex={1}
        src="/images/nursingold.jpg"
        alt="Image 2"
        width={{ base: "350px", lg: "500px" }}
        height={{ base: "300px", lg: "550px" }}
        objectFit="cover"
        rounded="5px"
      />
    </MotionInView>
  </Stack>
</Box>

                    </Flex>
                    <Box mt={10} display='flex' justifyContent='flex-end'>
                        <Button
                            as={Link}
                            to='/szolgaltatasaink'
                            _focus={{ textDecoration: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                            bg="transparent"
                            width='250px'
                            border='2px'
                            _hover={{ color: 'yellow.400', textDecoration: 'none' }}
                            _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                            sx={{
                                '> svg': { transition: 'transform 0.3s ease-in-out' },
                                '&:hover > svg': { transform: 'translateX(5px)' }
                            }}
                            display="flex"
                            mt={{ base: '5', md: '0' }}
                            px={3}
                            py={1}
                            alignItems="center"
                            color="black"
                            fontWeight="medium"
                        >
                            BŐVEBBEN
                            <BiRightArrowAlt fontSize='25px' />
                        </Button>
                    </Box>


                </Container>
            </Box>
        </Box>
    );
}

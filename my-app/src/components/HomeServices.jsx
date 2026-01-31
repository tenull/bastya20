import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import MotionInView from "../components/MotionView";
import {
  MdOutlineHomeWork,
  MdOutlineLocalHospital,
  MdOutlineGroups,
  MdOutlineAccessibilityNew,
  MdOutlineHandshake
} from "react-icons/md";

const handleTopScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const groups = [
  {
    title: "SZAKOSÍTOTT ELLÁTÁS",
    subtitle: "Bentlakásos intézményi ellátás",
    items: [
      {
        title: "Bástya Idősotthon",
        desc: "Bentlakásos ellátás, gondozás és ápolás biztonságos környezetben.",
        icon: MdOutlineLocalHospital,
        to: "/szakositott/bastya-idosotthon",
      },
      {
        title: "Forrás Idősotthon",
        desc: "Bentlakásos ellátás, gondozás és ápolás biztonságos környezetben.",
        icon: MdOutlineHomeWork,
        to: "/szakositott/forras-idosotthon",
      },
    ],
  },
  {
    title: "ALAPSZOLGÁLTATÁS",
    subtitle: "Nappali ellátás szolgáltatásai",
    items: [
      {
        title: "Idősek / Demens idősek nappali ellátása",
        desc: "Nappali felügyelet, készségfejlesztés, esetkezelés, szeretetteljes légkör.",
        icon: MdOutlineGroups,
        to: "/alapellatas/demens-nappali",
      },
      {
        title: "Kihívással élők nappali ellátása",
        desc: "Nappali felügyelet, készségfejlesztés, esetkezelés, szeretetteljes légkör.",
        icon: MdOutlineAccessibilityNew,
        to: "/alapellatas/kihivassal-elok-nappali",
      },
      {
        title: `Támogató szolgáltatás   `,
        desc: "Személyi segítés és szállítás.",
        icon: MdOutlineHandshake,
        to: "/alapellatas/tamogato-szolgaltatas",
      },
    ],
  },
];


function ServiceCard({ title, desc, icon: Icon, to }) {
  return (
    <Box
      role="group"
      bg="gray.600"
      color="white"
      rounded="2xl"
      p={6}
      borderWidth="1px"
      borderColor="gray.200"
      boxShadow="sm"
      transition="all 0.2s ease"
      _hover={{ borderColor: "yellow.400", boxShadow: "md", }}
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems='center'
      minW={{base:'360px',lg:'100%'}}
    >
      <Stack spacing={4} align="center" justifyContent='center'>
        <Box
          w="68px"
          h="68px"
          rounded="2xl"
          display="grid"
          placeItems="center"
          
        >
          <Box
            as={Icon}
            fontSize="65px"
            color="yellow.400"
            transition="all 0.2s ease"
            _groupHover={{ color: "yellow.400", transform: "scale(1.1)" }}
          />
        </Box>

        <Heading  h="44px" fontSize="lg" fontWeight="900" textAlign="center" lineHeight="1.2">
          {title}
        </Heading>

        <Text color="white" textAlign="center" lineHeight="normal">
          {desc}
        </Text>
      </Stack>

      <Button
        as={RouterLink}
        to={to}
        _focus={{ textDecoration: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
        bg="transparent"
        width='250px'
        border='2px solid white'
        _hover={{ color: 'yellow.400', textDecoration: 'none' }}
        _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        sx={{
          '> svg': { transition: 'transform 0.3s ease-in-out' },
          '&:hover > svg': { transform: 'translateX(5px)' }
        }}
        display="flex"
        px={3}
        py={1}
        alignItems="center"
        justifyContent='center'
        color="white"
        fontWeight="medium"
        onClick={handleTopScroll}
      >
        BŐVEBBEN
        <BiRightArrowAlt fontSize='25px' />
      </Button>
    </Box>
  );
}

export default function HomeServicesV2() {
  return (
    <Box py={{ base: 14, md: 22 }} bg="gray.50">
      <Container maxW="container.lg">
        {groups.map((g, gi) => (
          <Box

            _hover={{ '> img': { transform: 'scale(1.10)', transitionDuration: '0.3s' } }}
            key={g.title} mb={{ base: 16, md: 20 }}>

            <MotionInView delay={gi * 0.08}>
              <Stack spacing={3} align="center" textAlign="center" mb={{ base: 8, md: 10 }}>
                <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                  {g.title}
                </Heading>

                <Box w="90px" h="4px" bg="yellow.400" rounded="full" />

                <Text color="gray.600" maxW="60ch">
                  {g.subtitle}
                </Text>
              </Stack>
            </MotionInView>

            <SimpleGrid
              columns={{
                base: 1,
                sm: 1,
                md:2,
                lg: g.items.length === 2 ? 2 : 3,
              }}
              spacing={6}
              justifyItems="center"
            >
              {g.items.map((item, i) => (
                <MotionInView key={item.to} delay={i * 0.05}>
                  <Box

                    w="100%" h='290px' maxW="360px">
                    <ServiceCard

                      {...item} />
                  </Box>
                </MotionInView>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

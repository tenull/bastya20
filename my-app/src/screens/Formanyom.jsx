import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Icon,
    LinkBox,
    LinkOverlay,
    Stack,
    Breadcrumb,
    BreadcrumbItem
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import MotionInView from "../components/MotionView";
import { Link as ReactLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

function DocumentItem({ title, description, link }) {
    const isPdf = link.toLowerCase().endsWith(".pdf");
    const isDoc = link.toLowerCase().endsWith(".doc") || link.toLowerCase().endsWith(".docx");

    return (
        <MotionInView key={link} y={10}>
            <LinkBox
                as="article"
                role="group"
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="2xl"
                p={{ base: 4, md: 5 }}
                boxShadow="sm"
                _hover={{ boxShadow: "md", transform: "translateY(-1px)" }}
                transition="all 0.2s ease"
            >
                <Flex align="center" gap={4}>
                    <Box flex="1" minW={0}>
                        <Heading
                            as="h3"
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="900"
                            textTransform="uppercase"
                        >
                            <LinkOverlay
                                href={link}
                                target={isPdf ? "_blank" : undefined}
                                rel={isPdf ? "noreferrer" : undefined}
                                download={isDoc ? true : undefined}
                            >
                                {title}
                            </LinkOverlay>
                        </Heading>

                        {description ? (
                            <Text mt={2} fontSize="md" color="gray.700" noOfLines={2}>
                                {description}
                            </Text>
                        ) : null}
                    </Box>

                    <Box
                        w="48px"
                        h="48px"
                        rounded="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                        display="grid"
                        placeItems="center"
                        _groupHover={{ borderColor: "yellow.400" }}
                    >
                        <Icon as={DownloadIcon} boxSize={6} />
                    </Box>
                </Flex>
            </LinkBox>
        </MotionInView>
    );
}


function DocumentGroup({ title, subtitle, items, children }) {

    return (
        <Box py={{ base: 10, md: 12 }} bg="white">
            <Container maxW="container.lg">
                <MotionInView y={10}>
                    <Stack align="center" textAlign="center" spacing={3}>
                        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900">
                            {title}
                        </Heading>
                        <Box w="90px" h="4px" bg="yellow.400" rounded="full" />
                        {subtitle ? (
                            <Text color="gray.600" maxW="70ch">
                                {subtitle}
                            </Text>
                        ) : null}
                    </Stack>
                </MotionInView>
                {children ? (
                    <Box mt={8}>{children}</Box>
                ) : (
                    <Stack spacing={4} mt={8}>
                        {items?.map((item) => (
                            <DocumentItem key={item.link} {...item} />
                        ))}
                    </Stack>
                )}
            </Container>
        </Box>
    );
}


const Formanyomtatvanyok = () => {



    const otthonDocs = [
        {
            title: "Kérelem",
            description:
                "Az idősek otthona, mint személyes gondozást nyújtó szociális ellátás igénybevételéhez.",
            link: "/images/dokumentum/kerelem.pdf",
        },
        {
            title: "Egészségi állapotra vonatkozó igazolás",
            description:
                "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
            link: "/images/dokumentum/egeszsegi_igazolas.pdf",
        },
        {
            title: "Értékelő adatlap",
            description: "",
            link: "/images/dokumentum/ertekelo_adatlap.pdf",
        },
        {
            title: "Megállapodás",
            description:
                "A megállapodás a Magyarországi Református Egyház szeretetszolgálati küldetésének szellemében kerül megkötésre.",
            link: "/images/dokumentum/megallapodas.docx",
        },
    ];

    const nappaliDocGroups = [
        {
            section: "Demens Idősek Nappali Ellátása",
            items: [
                {
                    title: "Kérelem",
                    description:
                        "Az idősek, demens személyek nappali ellátásának igénybevételéhez.",
                    link: "/images/dokumentum/nappali/idoskerelem.docx",
                },
                {
                    title: "Egészségi állapotra vonatkozó igazolás",
                    description:
                        "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
                    link: "/images/dokumentum/egeszsegi_igazolas.pdf",
                },
                {
                    title: "Megállapodás",
                    description:
                        "Idős (ezen belül demens személyek) nappali ellátása.",
                    link: "/images/dokumentum/nappali/idosmegallapodas.docx",
                },
            ],
        },
        {
            section: "Fogyatékossággal élők nappali ellátása",
            items: [
                {
                    title: "Kérelem",
                    description:
                        "A fogyatékos személyek nappali ellátásának igénybevételéhez.",
                    link: "/images/dokumentum/nappali/fogykerelem.docx",
                },
                {
                    title: "Egészségi állapotra vonatkozó igazolás",
                    description:
                        "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
                    link: "/images/dokumentum/egeszsegi_igazolas.pdf",
                },
                {
                    title: "Megállapodás",
                    description:
                        "Fogyatékossággal élő személyek nappali ellátása.",
                    link: "/images/dokumentum/nappali/megallapodasfogy.docx",
                },
            ],
        },
        {
            section: "Támogató szolgáltatás",
            items: [
                {
                    title: "Kérelem",
                    description: "Támogató szolgálat igénybe vételéhez.",
                    link: "/images/dokumentum/nappali/tamogatoszolgalatkerelem .docx",
                },
                {
                    title: "Megállapodás",
                    description: "Támogató szolgálat.",
                    link: "/images/dokumentum/nappali/megallapodastamogatoszolgalat.docx",
                },
                {
                    title: "Egészségi állapotra vonatkozó igazolás",
                    description:
                        "A háziorvos, kezelőorvos vagy kórházi osztályos orvos tölti ki.",
                    link: "/images/dokumentum/egeszsegi_igazolas.pdf",
                },
            ],
        },
    ];



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
                    //backgroundImage={`linear-gradient(100deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.10) 85%),`}
                    >
                        <MotionInView variant="fade-up">
                            <Text color="white" fontWeight="900" fontSize={{ base: "3xl", md: "5xl" }}>
                                DOKUMENTUMOK
                            </Text>
                        </MotionInView>

                        <MotionInView variant="fade-up" delay={0.06}>
                            <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }}>
                                Intézményünk jelentkezéséhez szükséges dokumentumok
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
                        <Text>Dokumentumok</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <DocumentGroup
                title="FORRÁS- ÉS BÁSTYA IDŐSOTTHON – DOKUMENTUMOK"
                subtitle="A bentlakásos ellátás igényléséhez szükséges nyomtatványok."
                items={otthonDocs}
            />

            <Box h="1px" bg="gray.200" />

            <DocumentGroup

                title="NAPPALI ELLÁTÁS – DOKUMENTUMOK"
                subtitle="A nappali ellátások igényléséhez szükséges nyomtatványok."
            >
                {nappaliDocGroups.map((group) => (
                    <Box key={group.section} mt={10}>
                        <Heading fontSize="xl" fontWeight="900" mb={2} textAlign="center">
                            {group.section}
                        </Heading>

                        <Box w="60px" h="3px" bg="yellow.400" rounded="full" mb={4} mx="auto" />

                        <Stack spacing={4}>
                            {group.items.map((item) => (
                                <DocumentItem key={item.link} {...item} />
                            ))}
                        </Stack>
                    </Box>
                ))}
            </DocumentGroup>


        </Box>
    );
};

export default Formanyomtatvanyok;

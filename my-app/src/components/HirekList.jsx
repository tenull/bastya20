import {
    Box,
    Text,
    Heading,
    Image,
    SimpleGrid,
    Badge,
    Link,
    Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { hirekData } from "../hirekData";
import { FaTag } from "react-icons/fa";

export default function HirekList() {
    return (
        <Box p={4}

        >
            <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>HÍREINK</Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {hirekData.map((hir) => {
                    const [day, month, year] = hir.date.split(".");
                    const monthMap = {
                        "01": "jan", "02": "feb", "03": "már", "04": "ápr", "05": "máj",
                        "06": "jún", "07": "júl", "08": "aug", "09": "sze", "10": "okt", "11": "nov", "12": "dec"
                    };

                    return (
                        <Box
                        as={RouterLink}
                        to={`/hir/${hir.id}`}
                            key={hir.id}
                             role="group"
                            bg="white"
                            borderRadius="md"
                            overflow="hidden"
                            boxShadow="md"
                            _hover={{ boxShadow: "lg", transform: "scale(1.00)" }}
                            transition="all 0.2s"
                        >
                            <Box position="relative">
                                <Image
                                    src={hir.image}
                                    alt={hir.header}
                                    objectFit="cover"

                                    w="100%"
                                    h="200px"
                                />
                                <Box
                                    position="absolute"
                                    bottom="-5"
                                    left="5"
                                    bg="gray.800"
                                    borderRadius='5px'
                                    color="white"
                                    px={4}
                                    py={2}
                                    fontWeight="bold"
                                    fontSize="sm"
                                    textAlign="center"
                                    _groupHover={{ bg: "yellow.500", transition: "0.3s" }}
                                    transition="0.3s"

                                >
                                    <Text fontSize="lg" lineHeight="1">
                                        {day}
                                    </Text>
                                    <Text>{monthMap[month]}</Text>
                                </Box>
                            </Box>

                            <Box p={5}>
                                {/* <Flex align="center" color="gray.500" fontSize="sm" mb={2}>
                                    <Box as={FaTag} mr={2} />
                                    Hírek
                                </Flex> */}
                                <Heading size="md" mb={2}>
                                    {hir.header}
                                </Heading>
                                <Text noOfLines={2} mb={4}>
                                    {hir.description.slice(0, 90)}{hir.description.length > 90 ? "…" : ""}
                                </Text>
                                <Link
                                    as={RouterLink}
                                    to={`/hir/${hir.id}`}
                                    fontWeight="bold"
                                    color="black"
                                    _hover={{ textDecoration: "none", color: 'yellow.400' }}
                                >
                                    TOVÁBB
                                </Link>
                            </Box>
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

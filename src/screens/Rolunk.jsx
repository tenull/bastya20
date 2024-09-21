import { Box, Heading, Text, Flex, Link, useBreakpointValue, Container, Image } from '@chakra-ui/react';

const Rolunk = () => {
    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/falevel.jpg)`}
            >
                <Container display='flex' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text  color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>RÓLUNK</Text>
                </Container>
            </Box>
            <Box mt={10} mx="auto" maxW="container.lg">
                <Flex my={10} justifyContent='center'>
                    <Text data-aos="zoom-in-up" textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>BEMUTATKOZÁS</Text>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: 'center' }} mb={6} px={4}>
                    <Image
                        src="../images/idosotthon3.jpg"
                        alt=""
                        maxW="300px"
                        data-aos="flip-left"
                        mr={{ base: 0, md: 4 }}
                        mb={{ base: 4, md: 0 }}
                        borderRadius="md"
                        objectFit="cover"
                        float={{ base: "none", md: "left" }}
                    />
                    <Text textAlign='justify'>
                        A település neve a méretére utal. A XIII. század közepén a szabolcsi
                        várispánság birtoka, de a tatárjáráskor elpusztul. Az 1332. évi pápai
                        tizedjegyzékben mint templomos hely szerepel, erről azonban nem
                        történik említés. 1459-ben Egyházasnagyfalu néven említik. 1556-ban
                        mintegy 350 lakosa lehetett. Ez idő tájt érhette el a reformáció,
                        melynek népe birtokába vette a középkori templomot. Ez a templom a
                        későbbiek során rommá lett, 1699. évi templomösszeírásban sem
                        szerepel, és egy régi feljegyzés szerint “az Erdő alatt a két Morotva
                        között a régi templom fundámentumából kiásott- mintegy 14 öl kő,
                        melyek között találtatott a Cathedra alatt lévő faragott kő is.” Az
                        újkori egyház megalakulásának dátuma 1670, de még több, mint 100 évig
                        semmit nem tudunk az egyház történetéről. Az 1779. évi visitatio
                        szerint a faluban templom nincs, csak egy ima- és iskolaterem sárból
                        és vesszőből, valamint harangláb.
                    </Text>
                </Flex>

                <Flex direction={{ base: "column-reverse", md: "row" }} alignItems={{ base: 'center' }} mb={6} px={4}>
                    <Text textAlign='justify'>
                        1788. június 3-án tette le a templomépítő főkurátor, Bónis László
                        férfi és női atyafiainak jelenlétében az új templom alapkövét a
                        délkeleti oldal alá. Tervét készítette Szabolcs vármegye hites
                        ingenierje, Sézty András. A templom 1789 szeptemberére lett készen.
                        Felhasználtak hozzá, “114 öl terméskövet, 141 ezer téglát, 24 400 fa
                        zsindelyt, 42 ezer zsindelyszeget, 12 ezer leczet tölgy és fenyő
                        fákból, 374 hordó meszet, 1256 font vasat és rostélyokat.” A templom
                        építéséhez tolcsvai Bónis Ferenc jelentős adománnyal járult. A
                        templomot 1856-ban, 1876-ban és különösen az 1888. évi nagy árvíz
                        után-mely az egész falut romba döntötte- állították helyre,
                        legközelebb 1924-ben és az 1980-as években. Nem tudjuk, mikor
                        állítottak először haranglábat, de amint már szó volt róla, 1779 óta
                        van, korábban a templomkert utcai kapujánál, most pedig a templom
                        délkeleti sarka előtt. A 132 kg-os harangját Szlezák László öntötte
                        1935-ben Budapesten, a 90 kg-osat pedig Korrents Márk 1853-ban
                        Egerben.
                    </Text>
                    <Image
                        src="../images/idosotthon4.jpg"
                        alt=""
                        maxW="300px"
                        data-aos="flip-left"
                        ml={{ base: 0, md: 4 }}
                        mb={{ base: 4, md: 0 }}
                        borderRadius="md"
                        objectFit="cover"
                        float={{ base: "none", md: "right" }}
                    />
                </Flex>

                <Text textAlign='justify' pb='10' px={4}>
                    A kelet – nyugati tengelyű templom keleti homlokzata torony nélküli,
                    háromszögű oromzattal záródik. Egyetlen bejárata ennek közepén nyílik,
                    egyenes záródású, kőkeretes, záróköves kapu. Fölötte a tolcsvai Bónis
                    család címerét látjuk. Az egyszerű, dísz nélküli templomon, a hosszú
                    oldalakon két-két, a nyugati félköríves záródású végfalán egy kilépő
                    pilléreken nyugszik, amelyek minden irányban egymással összekötöttek.
                    Az íves fal mezőkben vannak az ablakok. A szószék és vele szemben a
                    faragott támlás szék késő barokk stílusban készült a templomépítés
                    idején. A 275 ülőhelyes késő barokk stílusú templom műemlék jellegű.
                    Orgonáját Demény Imre építette 1938-ban három változattal. <br />
                    Fényes Elek szerint 583 református és 328 más, az 1911-13. évi
                    névtárak szerint 614 református és 1145 más vallású lakója volt. A
                    temetőben nyugszik Héczei Szabó Lajos, ki 20 évig volt lelkésze, és
                    Nagy Sándor, élt 81 évet. Forrás: Váradi József: Tiszántúl Református
                    Templomai
                </Text>
                <Box width="full" display="flex" justifyContent="center" mb={10} px={4}>
                    <iframe
                        width="100%"
                        height="400px"
                        src="https://www.youtube.com/embed/2ixYV8p_GT4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </Box>
            </Box>
            <Container maxW='container.lg'>
                <Flex my={10} justifyContent='center'>
                    <Text data-aos="zoom-in-up" textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '2xl', md: '4xl' }}>FEJLESZTÉSEINK</Text>
                </Flex>
                <Text textAlign='justify' pb='10' px={4}>
                    A kelet – nyugati tengelyű templom keleti homlokzata torony nélküli,
                    háromszögű oromzattal záródik. Egyetlen bejárata ennek közepén nyílik,
                    egyenes záródású, kőkeretes, záróköves kapu. Fölötte a tolcsvai Bónis
                    család címerét látjuk. Az egyszerű, dísz nélküli templomon, a hosszú
                    oldalakon két-két, a nyugati félköríves záródású végfalán egy kilépő
                    pilléreken nyugszik, amelyek minden irányban egymással összekötöttek.
                    Az íves fal mezőkben vannak az ablakok. A szószék és vele szemben a
                    faragott támlás szék késő barokk stílusban készült a templomépítés
                    idején. A 275 ülőhelyes késő barokk stílusú templom műemlék jellegű.
                    Orgonáját Demény Imre építette 1938-ban három változattal. <br />
                    Fényes Elek szerint 583 református és 328 más, az 1911-13. évi
                    névtárak szerint 614 református és 1145 más vallású lakója volt. A
                    temetőben nyugszik Héczei Szabó Lajos, ki 20 évig volt lelkésze, és
                    Nagy Sándor, élt 81 évet. Forrás: Váradi József: Tiszántúl Református
                    Templomai
                </Text>
            </Container>
        </Box>
    );
}

export default Rolunk;
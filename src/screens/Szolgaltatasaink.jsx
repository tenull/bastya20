import { Box, Heading, Text, Flex, Link, useBreakpointValue, Container, Image } from '@chakra-ui/react';
import { TiInputChecked } from "react-icons/ti";
import Foglalkozasok from '../components/Foglalkozasok';
import Kivizsgalasok from '../components/Kivizsgalasok';
import Szobak from '../components/Szobak';
import AOS from 'aos';
import { useEffect } from 'react';

const Szolgaltatasaink = () => {

    useEffect(() => {
        AOS.init({
            duration: 700, 
            once: false,   
        });
        AOS.refresh(); 
    }, []);

    return (
        <Box>
            <Box
                width='full'
                height={{ base: '450px', md: '550px' }}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(100deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0) 90%), url(../images/virag.jpg)`}
            >
                <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' height={{ base: '450px', md: '550px' }} maxW='container.lg'>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' fontWeight='900' fontSize={{ base: '3xl', md: '5xl' }}>SZOLGÁLTATÁSAINK</Text>
                    <Text color='white' fontFamily='Montserrat, Sans-serif' textAlign='center' fontSize={{ base: 'md', md: 'lg' }}>Intézményünk alapvetően az arra rászorultak hotelszintű gondozásával, ápolásával foglalkozik.</Text>
                </Container>
            </Box>
            <Box my={10} mx="auto" maxW="container.lg">
            <Box>
                <Text textAlign='center' my={10}>
                Szemléletünk szerint fontos, hogy egymás korlátait elfogadjuk; türelemmel segítsük és támogassuk az arra rászoruló személyt. Ezen túlmenően gondozottjaink adherenciája és képességei alapján igyekszünk, fejlesztő foglalkozások által, egy elfogadható életminőséget biztosítani.
                </Text>
                <Text mb={10} textAlign='center'>
                Évente több alkalommal speciális hétvégi, ünnepi mulatsággal szórakoztatjuk a közösséget, úgymint kerti sütögetés, zenés est, show műsor vagy vetélkedők.
                </Text>
            </Box>
                <Box>
                    <Box data-aos="zoom-in-up">
                        <Text textAlign='center' fontFamily='Montserrat, Sans-serif' fontWeight='900' mb={5} fontSize={{base:'3xl',md:'4xl'}}>SZOLGÁLTATÁSAINK LISTÁJA</Text>
                    </Box>
                    <Box display='flex' flexWrap='wrap'>
                        <Box data-aos="fade-right" width={{ base: '100%', md: '50%' }}>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    rendszeres orvosi felügyelet (hetente 2x vizitel háziorvos és pszichiáter szakorvos)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    24 órás nővérszolgálat (a nap 24 órájában szakképzett ápolók teljesítenek szolgálatot)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    az előírt gyógyszerek biztosítása (az intézmény alapgyógyszer listáján szereplő gyógyszereket, a gyógyászati segédeszközöket, inkontinencia termékeket térítésmentesen biztosítjuk); a gyógyszerek pontos beadása, ellenőrizve, lenyelte-e
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    kórházi kezelés megszervezése (beutalás esetén kórházi csomagot állítunk össze tisztálkodási szerekből, ruházatból, rendszeresen tartjuk a kapcsolatot a kórházzal, értesítjük a családot)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    kulturális és szabadidős programok (rendszeresen szervezünk sétákat a környező parkokba és buszos város látogatásokat a közelbe az azt igénylők számára, valamint zöldséges kertünk és virágos parkunkat közösen ápoljuk)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    a szobák és közös helyiségek takarítása (naponta takarítjuk a közös helyiségeket, és a lakók szobáit is)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' style={{ width: '50px', height: '50px', fill: '50px' }} />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    mosás (intézményen belül történik a lakók ruházatának mosása és javítása, névre szóló, saját szennyeszsákban, elkeveredés minimalizálása érdekében
                                </Text>
                            </Box>
                        </Box>
                        <Box data-aos="fade-left" width={{ base: '100%', md: '50%' }}>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' fontSize='50px' />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    napi ötszöri étkezés, szükség esetén diétás lehetőséggel (változatos, házias ízek, egyénre szabott tálalással, figyelve a teljes tápértékre)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' fontSize='50px' />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    korlátlan üdítő és ásványvíz fogyasztás (szénsavas és szénsavmentes ásványvíz, cukorbetegek által is fogyasztható üdítőital)
                                </Text>
                            </Box>
                            <Box display='flex' my={3}>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' fontSize='50px' />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    naponta friss gyümölcs, zöldség, sütemény (szezonális gyümölcs, kompót) áll rendelkezésre igény szerint
                                </Text>
                            </Box>
                            <Box display='flex'>
                                <Box display='flex' alignItems='center'>
                                    <TiInputChecked color='#ECC94B' fontSize='50px' />
                                </Box>
                                <Text display='flex' alignItems='center'>
                                    gyógytorna havi 4x, de szükség szerint további időpont kérhető, térítés ellenében
                                </Text>
                            </Box>

                        </Box>
                    </Box>
                </Box>
              
            </Box>
              <Foglalkozasok/>
                <Kivizsgalasok/>
                <Szobak/>
        </Box>
    );
}

export default Szolgaltatasaink;
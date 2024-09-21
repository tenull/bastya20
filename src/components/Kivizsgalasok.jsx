import { Image, Text, Stack, Flex, Container, Box } from '@chakra-ui/react'

const Kivizsgalasok = () => {
    return (
        <Box py={10}  backgroundColor='#F3F8FC'>
        <Container maxW='container.lg' >
            <Box data-aos="zoom-in-up">
                <Text textAlign='center' pb={5} fontFamily='Montserrat, Sans-serif' fontWeight='900' mb={5} fontSize='4xl'>KIVIZSGÁLÁSOK</Text>
            </Box>
            <Box>
                <Text>
                A kivizsgálások nagy részét igyekszünk intézményen belül megoldani. Térítés ellenében lehetőség van bizonyos szakorvosi konzultációkra (pl. neurológus, bőrgyógyász, urológus, nőgyógyász, sebész, radiológus szakorvossal), ezzel a kivizsgálás menetének meggyorsítására. Természetesen háziorvosunk beutalójával a NEAK finanszírozott rendelés is elérhető.
                </Text>
                <Text>
                Az intézmény 24 órás gondozói-nővéri felügyeletet biztosít (szakápoló, ápoló, szociális munkás). A szakszemélyzet folyamatos kapcsolatot ápol az intézményi orvosokkal. 
                </Text>
                <Text>
                Heti rendszerességgel pszichiáter és háziorvos ellenőrzi a lakók állapotát, illetve fejlesztő- foglalkoztató biztosít kompetenciaszintnek megfelelő, izgalmas, játékos időtöltést a lakók számára (pl. közös séta, kertészkedés, felolvasás, társasjátékozás).
                </Text>
                <Text>
                Havonta több alkalommal gyógytornász, gyógymasszőr, 1 alkalommal manikűrös-pedikűrös és fodrász segíti munkánkat.
                </Text>
            </Box>
        </Container>
        </Box>
    );
}

export default Kivizsgalasok;
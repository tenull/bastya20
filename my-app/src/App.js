import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import Footer from "./components/Footer";
import Rolunk from "./screens/Rolunk";
import Szolgaltatasaink from "./screens/Szolgaltatasaink";
import Contacts from "./components/Contacts";
import Galeria from "./screens/Galeria";
import Formanyomtatvanyok from "./screens/Formanyom";
import Kapcsolat from './screens/Kapcsolat'
import Rendelkezes from "./components/Rendelkezes";
import HirDetail from "./screens/Hirek";
import Admin from "./screens/Admin";
import theme from "./theme";
import ForrasIdos from "./screens/ForrasIdos";
import BastyaIdos from "./screens/BastyaIdos";
import TamogatoSzolg from "./screens/TamogatoSzolg";
import FogyatekkalElok from "./screens/FogyatekkalElok";
import DemensNappali from "./screens/DemensNappali";
import GaleriaBastya from "./screens/GaleriaBastya";
import Alapellatas from "./screens/Alapellatas";
import SzakositottEllatas from "./screens/SzakositottEllatas";
import Misszio from "./screens/Misszio";
import GoogleMapsProvider from "./components/GoogleMapsProvider";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <GoogleMapsProvider>
        <Router>
          <Header />
          <main className="appp">
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/rolunk" element={<Rolunk />} />
              <Route path="/hir/:id" element={<HirDetail />} />
              <Route path="/szolgaltatasaink" element={<Szolgaltatasaink />} />
              <Route path="/misszionk" element={<Misszio />} />
              <Route path="/alapszolgaltatas" element={<Alapellatas />} />
              <Route path="/szakositott" element={<SzakositottEllatas />} />
              <Route path="/alapellatas/demens-nappali" element={<DemensNappali />} />
              <Route path="/alapellatas/fogyatekkal-elok-nappali" element={<FogyatekkalElok />} />
              <Route path="/alapellatas/tamogato-szolgaltatas" element={<TamogatoSzolg />} />
              <Route path="/szakositott/bastya-idosotthon" element={<BastyaIdos />} />
              <Route path="/szakositott/forras-idosotthon" element={<ForrasIdos />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/galeria/nappali" element={<Galeria />} />
              <Route path="/galeria/bastya" element={<GaleriaBastya />} />
              <Route path="/formanyomtatvanyok" element={<Formanyomtatvanyok />} />
              <Route path="/kapcsolat" element={<Kapcsolat />} />
            </Routes>
          </main>
          <Rendelkezes />
          <Contacts />
          <Footer />
        </Router>
      </GoogleMapsProvider>
    </ChakraProvider>
  );
}

export default App;

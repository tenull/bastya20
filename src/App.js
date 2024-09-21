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
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main className="appp">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/rolunk" element={<Rolunk />} />
            <Route path="/szolgaltatasaink" element={<Szolgaltatasaink />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/formanyomtatvanyok" element={<Formanyomtatvanyok />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
          </Routes>
        </main>
        <Rendelkezes/>
        <Contacts/>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;

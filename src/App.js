import React from "react";
import "./App.css";
import Nav from "./component/navMenu";
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Chat from "./pages/Chat"
import Equides from "./pages/Equides"
import Poisson from "./pages/Poisson"
import Chien from "./pages/Chien"
import  Header  from "./component/Header";
import Petitmammifere from "./pages/PetitMammifere";
import Animauxdeterrarium from "./pages/AnimauxDeTerrarium";
import Oiseaux from "./pages/Oiseaux"
import Animauxdelaferme from "./pages/AnimauxDeLaFerme";
import Apropos from "./pages/Apropos";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
<Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/equides" element={<Equides />} />
          <Route path="/poisson" element={<Poisson />} />
          <Route path="/chien" element={<Chien />} />
          <Route path="/petitmammifere" element={<Petitmammifere />} />
          <Route path="/animauxdeterrarium" element={<Animauxdeterrarium />} />
          <Route path="/oiseaux" element={<Oiseaux />} />
          <Route path="/animauxdelaferme" element={<Animauxdelaferme />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

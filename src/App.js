import React from "react";
import "./App.css";
import Nav from "./component/navMenu";
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Accueil from "./pages/Accueil"
import Shop from "./pages/Shop"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Nav/>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

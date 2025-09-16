import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyPage from "./Pages/BuyPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy/:id" element={<BuyPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Services1 from "./Services1";
import Services2 from "./Services2";
import Services3 from "./Services3";
import Contect from "./Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route path="services1" element={<Services1 />} />
            <Route path="services2" element={<Services2 />} />
            <Route path="services3" element={<Services3 />} />
          </Route>
          <Route path="/contact" element={<Contect />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

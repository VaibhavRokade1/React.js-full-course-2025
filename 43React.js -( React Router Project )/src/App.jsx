import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import PageNotFound from "./Page404/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

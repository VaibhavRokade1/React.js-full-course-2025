import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
{
  /* React Router is a standard routing library for React that enables
navigation between pages (components) in a single-page application (SPA)
without reloading the page. */
}
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Browser Router enables "client-side routing" using our "browser history Api" */}

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">services</Link>
        </div>

        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
          <Route path="/about" element={<h1>This is about</h1>} />
          <Route path="/services" element={<h1>This is Sevices Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

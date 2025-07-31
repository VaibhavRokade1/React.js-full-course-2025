import React from "react";
import "./App.css";
import Collage from "./Collage";
function App() {
  return (
    <>
      <div
        style={{
          background: "skyblue",
          color: "black",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <h1>Main App Component</h1>

        <h4>Subject : </h4>
        <Collage />
      </div>
    </>
  );
}

export default App;

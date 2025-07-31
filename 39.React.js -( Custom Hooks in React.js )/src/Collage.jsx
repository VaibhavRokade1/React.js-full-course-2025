import React from "react";
import Student from "./Student";

function Collage() {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h1>Collage Componenst</h1>
      <Student />
    </div>
  );
}

export default Collage;

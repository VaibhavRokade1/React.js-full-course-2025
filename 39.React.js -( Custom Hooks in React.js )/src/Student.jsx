import React from "react";
import Subject from "./Subject";

function Student() {
  return (
    <div
      style={{
        background: "red",
        color: "black",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h2>Student</h2>
      <Subject />
    </div>
  );
}

export default Student;

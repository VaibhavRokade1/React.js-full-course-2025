import React from "react";
import { useContext } from "react";
import { SubjectContext } from "./useUserContaxt";

function Subject() {
  const subject = useContext(SubjectContext);

  return (
    <div
      style={{
        background: "yellow",
        color: "black",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h2>Subject : {subject}</h2>
    </div>
  );
}

export default Subject;

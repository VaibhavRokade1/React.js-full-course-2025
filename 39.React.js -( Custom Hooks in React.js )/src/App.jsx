import React from "react";
import "./App.css";
import Collage from "./Collage";
import { SubjectContext } from "./useUserContaxt";
import { useState } from "react";
function App() {
  const [subject, setSubject] = useState("");
  console.log(subject);

  return (
    <>
      <SubjectContext.Provider value={subject}>
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
          <select
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option value="Maths">Maths</option>
            <option value="IT">IT</option>
            <option value="Biology">Biology</option>
          </select>

          <button
            onClick={() => {
              setSubject("");
            }}
          >
            {" "}
            Clear Subject
          </button>
          <Collage />
        </div>
      </SubjectContext.Provider>
    </>
  );
}

export default App;

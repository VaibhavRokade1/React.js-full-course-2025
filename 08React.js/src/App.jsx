import React, { useState } from "react";
import "./App.css";
import User from "./User";
import Collage from "./Collage";
import Student from "./Student";
function App() {
  // let user1 = {
  //   name: "Vaibhav Rokade",
  //   age: 29,
  // };

  // let user2 = {
  //   name: "Aditya Fatke",
  //   age: 33,
  // };

  const collageName = [
    { name: "Vaibhav" },
    { name: "Aditya" },
    { name: "Vikas" },
  ];

  const [student, setStudent] = useState(" Vaibhav Rokade");

  return (
    <>
      <h1>App Components</h1>
      {/* <User user={user1} id={"1"} />

      <User user={user2} id={"2"} /> */}

      {/* <Collage names={collageName} /> */}

      <Student name={student} />

      <button
        onClick={() =>
          setStudent(
            student === "Aditya Fatke" ? "Vaibhav Rokade" : "Aditya Fatke"
          )
        }
      >
        update student name
      </button>
    </>
  );
}

export default App;

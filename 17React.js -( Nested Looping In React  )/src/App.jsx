import React from "react";
import Collage from "./Collage";

function App() {
  const CollagesData = [
    {
      name: "MIT College of Engineering",
      city: "Pune",
      collageWebsite: "https://mitpune.edu.in",
      students: [
        { name: "Rahul Sharma" },
        { name: "Anjali Mehta" },
        { name: "Tanya Deshmukh" },
      ],
    },
    {
      name: "VIT University",
      city: "Vellore",
      collageWebsite: "https://vit.ac.in",
      students: [
        { name: "Siddharth Rao" },
        { name: "Pooja Desai" },
        { name: "Aman Gupta" },
      ],
    },
    {
      name: "BITS Pilani",
      city: "Pilani",
      collageWebsite: "https://bits-pilani.ac.in",
      students: [
        { name: "Arjun Verma" },
        { name: "Sneha Patil" },
        { name: "Divya Iyer" },
      ],
    },
    {
      name: "SRM Institute of Science and Technology",
      city: "Chennai",
      collageWebsite: "https://srmist.edu.in",
      students: [{ name: "Karan Malhotra" }, { name: "Nikita Joshi" }],
    },
    {
      name: "College of Engineering Pune (COEP)",
      city: "Pune",
      collageWebsite: "https://www.coep.org.in",
      students: [{ name: "Mehul Shah" }, { name: "Riya Kulkarni" }],
    },
  ];

  return (
    <>
      <h1>Nested loops in React.js</h1>
      {CollagesData.map((collage, index) => (
        <div key={index} className="card">
          <Collage collage={collage} />
        </div>
      ))}
    </>
  );
}

export default App;

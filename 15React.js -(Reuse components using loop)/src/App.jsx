import React from "react";
import Card from "./Card";

function App() {
  const userData = [
    {
      id: 1,
      name: "Vaibhav",
      city: "Pune",
      course: "React.js",
    },
    {
      id: 2,
      name: "Aditya",
      city: "Deccan Gymkhana",
      course: "Angular.js",
    },
    {
      id: 3,
      name: "Vikas",
      city: "Karve Nagar",
      course: "Vue.js",
    },
    {
      id: 4,
      name: "Rohit",
      city: "Mumbai",
      course: "Node.js",
    },
    {
      id: 5,
      name: "Sneha",
      city: "Nagpur",
      course: "JavaScript",
    },
  ];
  return (
    <>
      <h1>Compoenent Reuse in loops </h1>
      <div className="box">
        {userData.map((user) => (
          <Card {...user} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default App;

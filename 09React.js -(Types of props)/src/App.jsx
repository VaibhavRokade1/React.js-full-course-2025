import React from "react";
import DefaultProps from "./DefaultProps";
import Wrapper from "./Wrapper";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const users = [
  {
    name: "Aarav Sharma",
    contact: "+91 9123456780",
    city: "Mumbai",
    email: "aarav.sharma@example.com",
    laptop: "HP",
  },
  {
    name: "Isha Verma",
    contact: "+91 9876501234",
    city: "Delhi",
    email: "isha.verma@example.com",
  },
  {
    name: "Rohan Patel",
    contact: "+91 9988776655",
    city: "Ahmedabad",
    email: "rohan.patel@example.com",
    laptop: "Dell",
  },
  {
    name: "Priya Nair",
    contact: "+91 9090909090",
    city: "Bengaluru",
    email: "priya.nair@example.com",
    laptop: "HP",
  },
  {
    name: "Kunal Deshmukh",
    contact: "+91 7766554433",
    city: "Pune",
    email: "kunal.deshmukh@example.com",
  },
  {
    name: "Sneha Reddy",
    contact: "+91 8899776655",
    city: "Hyderabad",
    email: "sneha.reddy@example.com",
  },
  {
    name: "Ankit Singh",
    contact: "+91 9123098765",
    city: "Lucknow",
    email: "ankit.singh@example.com",
    laptop: "asus",
  },
  {
    name: "Meera Iyer",
    contact: "+91 9822001122",
    city: "Chennai",
    email: "meera.iyer@example.com",
  },
  {
    name: "Rahul Chavan",
    contact: "+91 9345678123",
    city: "Nagpur",
    email: "rahul.chavan@example.com",
  },
  {
    name: "Neha Gupta",
    contact: "+91 9456781230",
    city: "Jaipur",
    email: "neha.gupta@example.com",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <div className="flex mt-5 gap-7 flex-wrap justify-center">
        {users.map((user, index) => {
          return <Card {...user} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;

// {/* <DefaultProps name={name} />

//       <Wrapper>
//         <h2>Wrapping text 1</h2>
//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque
//           architecto omnis, totam quas dolor ullam maiores nobis necessitatibus,
//           porro adipisci ipsa modi, animi quo. Repudiandae est sed rerum
//           architecto.
//         </p>
//       </Wrapper>
//       <br />
//       <Wrapper>
//         <h2>Wrapping text 1</h2>
//         <p>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque
//           architecto omnis, totam quas dolor ullam maiores nobis necessitatibus,
//           porro adipisci ipsa modi, animi quo. Repudiandae est sed rerum
//           architecto.
//         </p>
//       </Wrapper> */}

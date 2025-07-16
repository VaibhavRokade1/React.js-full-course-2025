import React from "react";

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
    {
      id: 6,
      name: "Pooja",
      city: "Nashik",
      course: "Python",
    },
    {
      id: 7,
      name: "Siddharth",
      city: "Aurangabad",
      course: "Java",
    },
    {
      id: 8,
      name: "Kiran",
      city: "Ahmednagar",
      course: "C#",
    },
    {
      id: 9,
      name: "Megha",
      city: "Pimpri",
      course: "HTML & CSS",
    },
    {
      id: 10,
      name: "Aniket",
      city: "Thane",
      course: "Next.js",
    },
  ];

  return (
    <>
      <h1>Array of Object handle in jsx table</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;

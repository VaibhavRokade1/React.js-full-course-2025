import React from "react";
import User from "./components/User";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@example.com",
      city: "Mumbai",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      city: "Delhi",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      email: "rohan@example.com",
      city: "Pune",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List (Props Demo)</h1>
      <div className="flex gap-4 flex-wrap">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

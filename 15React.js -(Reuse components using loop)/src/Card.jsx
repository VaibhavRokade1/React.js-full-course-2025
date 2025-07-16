import React from "react";

function Card({ id, name, city, course }) {
  return (
    <>
      <div className="card">
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{city}</p>
        <p>{course}</p>
      </div>
    </>
  );
}

export default Card;

import React from "react";

function Collage({ collage }) {
  return (
    <div>
      <h3 className="pt-5">ClgName : {collage.name}</h3>
      <h4 className="pt-5">Website : {collage.collageWebsite}</h4>
      <h4 className="pt-5">City : {collage.city}</h4>
      <h4 className="pt-5">Students</h4>
      <ul style={{ marginLeft: "20px" }}>
        {collage.students.map((student) => (
          <li>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collage;

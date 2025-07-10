import React from "react";
import img from "./assets/ProfileImage.jpeg";

// globlely function but same name function present in a local app component scope.
const friuts = (p) => {
  alert(p + "friuts outer");
};
function App() {
  // simple function in onclick
  function showMassage() {
    alert("Clicked");
  }

  // arrow function with parameters passing in onclick event
  const friuts = (p) => {
    alert(p + "friuts Inner");
  };
  return (
    <>
      <h1>Vaibhav Rokade (To Do Task)</h1>
      <img
        style={{ marginTop: "10px" }}
        src={img}
        alt="Vaibhav Rokade"
        className="img"
      />
      <ul>
        <li>Invent the traffic light</li>
        <li>Resarche movie scence</li>
        <li>Improve the specturunm technology</li>
      </ul>

      {/* in react onclick event dont need of funtion call it is only need of functionu defination */}

      <button onClick={() => friuts("Apple")}>click me</button>
    </>
  );
}

export default App;

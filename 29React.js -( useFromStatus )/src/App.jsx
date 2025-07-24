import React from "react";
// import "./App.css";
import { useFormStatus } from "react-dom";

const handlesubmit = async () => {
  // async task waits fro 1.5 secounds
  await new Promise((res) => setTimeout(res, 1500));
  console.log("Submitting...");
};

function FromContaint() {
  // before the click it is true otherwise false
  let { pending } = useFormStatus();

  return (
    <>
      <input type="text" placeholder="Enter a Name" />
      <br />
      <br />
      <input type="text" placeholder="Enter a Name" />
      <br />
      <br />
      <button disabled={pending}>
        {pending ? "Submitting...." : "Submit"}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>useFromStatus Hook In React.js</h1>
      <form action={handlesubmit}>
        <FromContaint />
      </form>
    </>
  );
}

export default App;

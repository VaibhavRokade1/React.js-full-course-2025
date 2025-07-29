import React, { useState, useTransition } from "react";
import "./App.css";
function App() {
  const [pending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async (res) => {
      await new Promise((res) => setTimeout(res, 2000));

      // alert("Data Send Successfully...!!");
    });
  };
  return (
    <>
      <h1>useTransition Hook In React.js</h1>

      <form action="">
        <input type="text" placeholder="Enter a Name" />
        <br />
        <br />
        <input type="email" placeholder="Enter a Email" />
        <br />
        <br />
        <input type="password" placeholder="Enter a Password" />
        <br />
        <br />
        <button disabled={pending} onClick={handleSubmit}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default App;

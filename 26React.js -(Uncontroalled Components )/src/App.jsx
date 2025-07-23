import React, { useRef } from "react";

function App() {
  let userName = useRef(null);
  let userPassword = useRef(null);
  const handleSubmit = () => {
    console.log(userName.current.value, userPassword.current.value);
  };
  return (
    <>
      {/* <h1>UnControlled Components</h1>
      <ul>
        <li>Without using states Thay working on from </li>
      </ul> */}
      <h1>Uncontrolled Components</h1>

      <input type="text" ref={userName} placeholder="Enter Name" />
      <br />
      <br />
      <input type="text" ref={userPassword} placeholder="Enter Password" />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit Data</button>
    </>
  );
}

export default App;

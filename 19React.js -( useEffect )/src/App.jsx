// import React, { useEffect, useState } from "react";

// function App(props) {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     // display();
//     counterFunc();
//   }, [counter]);

//   const display = () => {
//     console.log("Hello React.js");
//   };
//   // Side Effect in react if we donot use useeffect  , every function run ageain and agian

//   //  const display = () => {
//   //     console.log("Hello React.js");
//   //   };
//   //   display();

//   const counterFunc = () => {
//     console.log("This is a Counter Function :", { counter });
//   };

//   // types of useEffect Hook
//   // 1.
//   useEffect(() => {
//     // Call Every time if any state update
//   });

//   // 2.
//   useEffect(() => {
//     // call on simgle state update
//   }, [counter]);

//   // 3.
//   useEffect(() => {
//     // call on multiple state update
//   }, [counter, data]);

//   //4.
//   useEffect(() => {
//     // call on Change props data
//   }, [props]);
//   //5.
//   useEffect(() => {
//     // call only one time
//   }, []);

//   // Use multiple useEffect on 1 component

//   useEffect(() => {
//     console.log("Hello World");
//   }, []);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter {counter}
//       </button>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  return (
    <>
      <h2>Handle Props Side Effect in component</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Data {data}
      </button>
      <Counter counter={counter} data={data} />
    </>
  );
}

export default App;

import React from "react";
// don't use globle variable's it can make component un pure
// let counter = 20;

function App() {
  return (
    <>
      <h1>Pure Components</h1>
      <MyCounter cnt={454} />
      <MyCounter cnt={455} />
      <MyCounter cnt={456} />
      <MyCounter cnt={457} />
    </>
  );
}

// Pure Components
const MyCounter = ({ cnt }) => {
  let counter = cnt;
  return (
    <>
      <h1>Counter {++counter}</h1>
    </>
  );
};

// const MyCounter = () => {
//   counter++;
//   return (
//     <>
//       <h1>Conter {counter}</h1>
//     </>
//   );
// };

export default App;

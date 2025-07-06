import "./App.css";

function App() {
  return (
    <>
      <h1>Hello i am App Components</h1>

      {/* Comonent Calling */}
      <Fruits />
    </>
  );
}
// fullfrom of jsx -> Javascript JML || syntax extension

// create new Component Function that can retrun jsx code

// component Calling type

//  1. <Fruits />  -> Self close
//  2. <fruits> </Fruits>   -> Close with open close braket

function Fruits() {
  return (
    <>
      <h1>Mango</h1>
      {sum()}
    </>
  );
}

// simple non jsx function in react

function sum() {
  return 10 + 30;
}

export default App;

import React from "react";

// Css Linking
import "./App.css";

function App() {
  const sum = (a, b) => {
    return a + b;
  };

  // return
  // first way
  // <>
  //   {/* <h1>Hello Vaibhav.</h1>
  //   <button
  //     onClick={() => {
  //       alert("Clicked");
  //     }}
  //   >
  //     Click Me
  //   </button> */}
  // </>

  // secound way html rendaring
  // <>
  //   <h1>Hii Vaibhav</h1>
  //   <h3>Addition is : {sum(2, 22)}</h3>
  // </>

  //without using jsx render html code on index.html page

  return React.createElement(
    "h1",
    { id: "Heading" },
    "Hello Vaibhav Rokade without using jsx render html code on index.html page"
  );
}

export default App;

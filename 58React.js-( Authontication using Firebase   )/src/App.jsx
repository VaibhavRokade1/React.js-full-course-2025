import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Admin/Auth/Auth";

// const auth = getAuth(app);
// const signUp = () => {
//   createUserWithEmailAndPassword(
//     auth,
//     "rokadevaibhav04@gmail.com",
//     "Vaibhav@145"
//   )
//     .then(() => {
//       console.log("User created Successfully...");
//     })
//     .catch((e) => {
//       console.log("Something went wrong..." + e);
//     });
// };
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Auth />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

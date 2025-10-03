import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Auth = () => {
  const auth = getAuth(app);
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignupData = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const SignupUser = () => {
    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((res) => {
        toast.success(`${signUpData.name} you are registerd successfully...`);
      })
      .catch((e) => {
        console.log(
          " Create User With EmailAndPassword ( Auth.js ) Error : " + e
        );
      });
  };

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSigninData = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signInUser = (e) => {
    signInWithEmailAndPassword(auth, signInData.email, signInData.password)
      .then(() => {
        toast.success("Login Successfully...");
      })
      .catch((err) => {
        toast.error("Invalid User Credentials");
        console.log(err);
      });
  };
  return (
    <div className="mt-14 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-pink-500 px-4">
      <div className="relative w-full max-w-3xl sm:max-w-4xl h-auto sm:h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row">
        {/* Sign In Form */}
        <div
          className={`relative sm:absolute top-0 left-0 h-auto sm:h-full w-full sm:w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out ${
            isSignUp
              ? "translate-y-10 opacity-0 scale-90 pointer-events-none"
              : "translate-y-0 opacity-100 scale-100"
          }`}
        >
          <div className="w-80 text-center py-8 sm:py-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-6">
              Sign In
            </h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signInData.email}
              onChange={handleSigninData}
              className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signInData.password}
              onChange={handleSigninData}
              className="w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={signInUser}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </div>
        </div>

        <div
          className={`relative sm:absolute top-0 right-0 h-auto sm:h-full w-full sm:w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out ${
            isSignUp
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-10 opacity-0 scale-90 pointer-events-none"
          }`}
        >
          <div className="w-80 text-center py-8 sm:py-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
              Sign Up
            </h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={signUpData.name}
              onChange={handleSignupData}
              className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={handleSignupData}
              className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleSignupData}
              placeholder="Password"
              className="w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={SignupUser}
              className="w-full py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          className={`absolute sm:relative top-0 left-0 sm:left-1/2 w-full sm:w-1/2 h-auto sm:h-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white flex flex-col items-center justify-center p-8 sm:p-10 transition-transform duration-700 ease-in-out ${
            isSignUp
              ? "-translate-y-0 sm:-translate-x-full"
              : "translate-y-0 sm:translate-x-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center text-gray-100 text-sm sm:text-base">
            {isSignUp
              ? "Already have an account? Sign in to continue."
              : "Don't have an account yet? Sign up to get started."}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;

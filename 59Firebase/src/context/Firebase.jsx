import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh7rwpG2QyDLEslYHVHebL1aXOebkHcKI",
  authDomain: "react-auth-38a60.firebaseapp.com",
  databaseURL: "https://react-auth-38a60-default-rtdb.firebaseio.com",
  projectId: "react-auth-38a60",
  storageBucket: "react-auth-38a60.firebasestorage.app",
  messagingSenderId: "582492240689",
  appId: "1:582492240689:web:597c61177fe6c8296c8e10",
  measurementId: "G-GW6H0SL3Q6",
};
const FirebaseApp = initializeApp(firebaseConfig);
const Database = getDatabase(FirebaseApp);
const FirebaseAuth = getAuth(FirebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ childern }) => {
  const putData = (key, data) => set(ref(Database, key), data);
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {childern}
    </FirebaseContext.Provider>
  );
};

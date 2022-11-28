import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdWjNG3pN4yYUiqzpIV5M_LPuQ0iPU6Z4",
  authDomain: "disneyplus-clone-eda7c.firebaseapp.com",
  projectId: "disneyplus-clone-eda7c",
  storageBucket: "disneyplus-clone-eda7c.appspot.com",
  messagingSenderId: "153518851049",
  appId: "1:153518851049:web:38990c4a184f4116f60178",
  measurementId: "G-66HL25FTKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;

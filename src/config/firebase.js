// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoyo2hsD2kJsXrV3D2GEJK2dRkcMhuNsY",
  authDomain: "pantry-manager-bf8c0.firebaseapp.com",
  projectId: "pantry-manager-bf8c0",
  storageBucket: "pantry-manager-bf8c0.appspot.com",
  messagingSenderId: "562930624255",
  appId: "1:562930624255:web:c63e15c08bb5066bc64eca",
  measurementId: "G-19CZY2FTK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}
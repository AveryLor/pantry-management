// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
  event.preventDefault()
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Creating Account...")
      window.location.href = "@/"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})
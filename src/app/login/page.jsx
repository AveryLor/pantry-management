// src/app/login/page.tsx
"use client"; // Mark this file as a Client Component

import Link from "next/link";
import React from 'react';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const LoginPage = () => {

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement your login logic here
    // For now, this just redirects to the home page
    const submit = document.getElementById('submit');
    submit.addEventListener("click",function(event){
      event.preventDefault()
      alert(5)
      const auth = getAuth();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Loging in...")
          window.location.href = "/"
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        });
    })
    router.push('/');
    };
    return <><script type="module" src="login.js" defer></script><div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl front-bold my-4">
          Enter the details
        </h1>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" id="email" />
          <input type="text" placeholder="Password" id="password" />
          <button onClick={handleLogin} className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-s" id="submit">
            Login
          </button><script type="module" src="login.js" defer></script>
          <div className="bg-red-500 w-fit text-white text-sm py-1 px-3 rounded-md mt-2">
            Error Message
          </div>
          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div></>
};

export default LoginPage;
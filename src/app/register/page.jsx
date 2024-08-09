"use client"; // Mark this file as a Client Component

import Link from "next/link";
import React from 'react';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
        setError("All fields are necessary!");
        return;
    }
    const submit = document.getElementById('submit');
    submit.addEventListener("click",function(event){
    event.preventDefault()
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        alert("Creating Account...")
        window.location.href = "/"
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        });
    })
    try {
        const res = await fetch('api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });


        if (res.ok) {
            const form = e.target;
            form.reset();
        } else {
            console.log("User registration failed.")
        }
    } catch (error) {
        console.log("Error during registration: ", error);
    }
    };

    console.log("Name: ", name);

  return <><script type="module" src="firebase.js" defer></script><div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl front-bold my-4">
                Enter the details
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" id="email"/>
                <input onChange={e => setPassword(e.target.value)} type="text" placeholder="Password" id="password"/>
                <button className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-s" id = "submit">
                    Register
                </button>
                {error && (
                    <div className="bg-red-500 w-fit text-white text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}

                <Link className="text-sm mt-3 text-right" href={"/"}>
                    Already have an account? <span className="underline">Login</span>
                </Link>
            </form>
        </div>
    </div></>;
};
export default RegisterPage;
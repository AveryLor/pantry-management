"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!name || !email || !password) {
                setError("All fields are necessary!");
                return;
            }

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

    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl front-bold my-4">
                Enter the details
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Full Name"/>
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={e => setPassword(e.target.value)} type="text" placeholder="Password"/>
                <button className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-s">
                    Register
                </button>
                { error && (
                    <div className="bg-red-500 w-fit text-white text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}

                <Link className="text-sm mt-3 text-right" href={"/"}>
                    Already have an account? <span className="underline">Login</span>
                </Link>
            </form>
        </div>
    </div>;
}
// src/app/login/page.tsx
"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    // Implement your login logic here
    // For now, this just redirects to the home page
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Log in
      </button>
    </main>
  );
};

export default LoginPage;

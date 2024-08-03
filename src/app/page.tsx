// src/app/page.tsx
import React from 'react';
import DropDownMenu from '../components/DropDownMenu'; // Adjust the path if needed
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropDownMenu />
      <Link href="/login" className="text-blue-500 hover:text-blue-700">
        Go to Login
      </Link>
    </main>
  );
}

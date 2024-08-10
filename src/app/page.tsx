'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CssBaseline } from '@mui/material';
import Dashboard from '../components/Dashboard';
import InventoryList from '../components/InventoryList';
import AddRemoveItems from '../components/AddRemoveItems';

type Page = 'Dashboard' | 'Inventory' | 'Add/Remove' | 'Analytics' | 'Settings';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handlePageChange = (pageName: Page) => {
    setCurrentPage(pageName);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard searchTerm={searchTerm} />;
      case 'Inventory':
        return <InventoryList searchTerm={searchTerm} />;
      case 'Add/Remove':
        return <AddRemoveItems searchTerm={searchTerm} />;
      case 'Analytics':
        return <Analytics searchTerm={searchTerm} />;
      case 'Settings':
        return <Settings searchTerm={searchTerm} />;
      default:
        return <Dashboard searchTerm={searchTerm} />;
    }
  };

  // Handle login state here
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        router.push('/home'); // Redirect to home page after successful login
      } else {
        console.error('Login failed.');
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setIsAuthenticated(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.target as any).email.value;
              const password = (e.target as any).password.value;
              handleLogin(email, password);
            }}
            className="flex flex-col gap-3"
          >
            <input type="text" placeholder="Email" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <button className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {renderCurrentPage()}
      </Box>
    </Box>
  );
}
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '@/utils/auth';

const ProtectedPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    const auth = new URLSearchParams(window.location.search).get('auth');
    const urlUsername = new URLSearchParams(window.location.search).get('username');

    if (auth === 'true') {
      window.localStorage.setItem('isAuthenticated', 'true');
      if (urlUsername) {
        window.localStorage.setItem('username', urlUsername);
        setUsername(urlUsername);
      }
    }

    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      const storedUsername = window.localStorage.getItem('username');
      if (storedUsername) setUsername(storedUsername);
    }

    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    loadData();
  }, [router]);

  const handleLogout = async () => {
    setLogoutLoading(true);
    await logout();
    setLogoutLoading(false);
    router.push('/');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      {(loading || logoutLoading) ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-blue-500 border-solid" />
        </div>
      ) : (
        <>
          <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
            <span className="text-2xl font-bold text-blue-500">{username.charAt(0).toUpperCase()}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="absolute top-4 right-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome, {username}!</h1>
          <p className="text-lg text-white">You have successfully accessed the protected content.</p>
        </>
      )}
    </div>
  );
};

export default ProtectedPage;

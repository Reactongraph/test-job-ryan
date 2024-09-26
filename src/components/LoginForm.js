"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../utils/auth';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      router.push('/protected');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

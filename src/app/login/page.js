'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate the email and password
    // and make an API call to authenticate the user.
    // For this example, we'll just navigate to the track_hours page.
    console.log('Login attempted with:', email, password);
    router.push('/track_hours');
  };

  return (
    <div className="container mx-auto px-4 flex flex-col flex-grow">
      <div className="flex items-center justify-center py-4">
        <h1 id="login" className="text-[#181311] text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Login
        </h1>
      </div>

      <form onSubmit={handleLogin} className="flex-grow flex flex-col items-center" role="main">
        <div className="space-y-2 w-full max-w-md">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-[#e6dedb]" 
            required
          />
        </div>

        <div className="space-y-2 w-full max-w-md mt-4">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-[#e6dedb]" 
            required
          />
        </div>

        <div className="text-right w-full max-w-md mt-2">
          <Link href="#" className="text-sm text-[#f14b0e] hover:underline">
            Forgot password?
          </Link>
        </div>

        <button 
          type="submit"
          className="mt-6 bg-[#f14b0e] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out w-full max-w-md"
        >
          Log in
        </button>

        <div className="mt-6 text-center">
          <Link href="/register" className="text-[#181311] hover:underline">
            New user? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
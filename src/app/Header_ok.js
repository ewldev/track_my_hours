// Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex items-center bg-white p-4 justify-between">
        <h2 id="freelancer-hours-tracking" className="text-[#181311] text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-[-0.015em]">
          Freelancer Hours Tracking
        </h2>
        <div className="hidden lg:flex gap-4">
          <Link 
            href="/login" 
            className="bg-[#e6dedb] text-[#181311] font-bold py-2 px-4 rounded-xl hover:bg-gray-300 transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-[#f14b0e] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Register
          </Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden p-2 scale-125">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="lg:hidden bg-white p-4 flex flex-row gap-4 justify-center">
          <Link 
            href="/login" 
            className="bg-[#e6dedb] text-[#181311] font-bold py-2 px-4 rounded-xl hover:bg-gray-300 transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-[#f14b0e] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
}
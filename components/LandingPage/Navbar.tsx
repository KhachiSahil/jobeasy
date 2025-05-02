'use client';

import { FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react";
import Banner1 from './Banner1';

export default  function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <FileText className="text-purple-500 w-8 h-8" />
          <span className="text-3xl sm:text-4xl font-serif font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            ResumeMatch
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
         <Link href="#banner" className="hover:text-purple-400 transition">Home</Link>
          <Link href="#features" className="hover:text-purple-400 transition">Features</Link>
          <Link href="#" onClick={()=>alert("Coming soon!")} className="hover:text-purple-400 transition">Pricing</Link>
          <button onClick={()=>signOut({ callbackUrl: '/signup' })} className=" transition bg-gray-800 px-5 py-2 rounded-full hover:bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-600 duration-500 hover:text-black">Signout</button>
          <button  onClick={()=>signIn("credentials")} className="px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition text-lg font-medium">Sign up</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black px-6 py-8 border-t border-gray-800 shadow-lg space-y-6 text-lg font-semibold transition-all duration-300">
          <Link href="#home" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Home</Link>
          <Link href="#features" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Features</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Pricing</Link>
          <button onClick={()=>signOut()} className=" transition bg-gray-800 px-5 py-2 rounded-full hover:bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-600 duration-500 hover:text-black">Signout</button>
          <button  onClick={()=>signIn("credentials")} className="px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition text-lg font-medium">Sign up</button>
         </div>
      )}
    </nav>
  );
}

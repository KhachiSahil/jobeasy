'use client';

import { FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <FileText className="text-purple-500 w-8 h-8" />
          <span className="text-3xl sm:text-4xl font-serif font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            JobEasy
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <Link href="#home" className="hover:text-purple-400 transition">Home</Link>
          <Link href="#features" className="hover:text-purple-400 transition">Features</Link>
          <Link href="#testimonials" className="hover:text-purple-400 transition">Testimonials</Link>
          <Link href="#pricing" className="hover:text-purple-400 transition">Pricing</Link>
          <Link href="/login" className="hover:text-purple-400 transition bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900">Log in</Link>
          <Link href="/signup" className="px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition text-lg font-medium">Sign up</Link>
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
          <Link href="#testimonials" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Testimonials</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Pricing</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900 text-center">Log in</Link>
          <Link href="/signup" onClick={() => setIsOpen(false)} className="block bg-purple-500 px-4 py-2 rounded-full text-white hover:bg-purple-600 text-center">Sign up</Link>
        </div>
      )}
    </nav>
  );
}

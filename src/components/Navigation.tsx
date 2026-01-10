'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-rose-600">
            💕 Our Wedding
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-rose-600 transition">Home</Link>
            <Link href="/gallery" className="hover:text-rose-600 transition">Gallery</Link>
            <Link href="/faq" className="hover:text-rose-600 transition">FAQ</Link>
            <Link href="/rsvp" className="hover:text-rose-600 transition">RSVP</Link>
            <Link href="/admin" className="text-sm bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700 transition">Admin</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-rose-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/gallery" className="block py-2 hover:text-rose-600" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/faq" className="block py-2 hover:text-rose-600" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="/rsvp" className="block py-2 hover:text-rose-600" onClick={() => setIsOpen(false)}>RSVP</Link>
            <Link href="/admin" className="block py-2 text-sm bg-rose-600 text-white px-3 py-1 rounded" onClick={() => setIsOpen(false)}>Admin</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import AccueilButton from './navigation/navbar/AccueilButton';
import FaqButton from './navigation/navbar/FaqButton';
import PhotosButton from './navigation/navbar/PhotosButton';
import ReservationButton from './navigation/navbar/ReservationButton';
import CustomHrLine from './CustomHrLine';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 gap-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            <Link 
              href="/"             >
              <AccueilButton/>
            </Link>
            <Link 
              href="/faq"             >
              <FaqButton/>
            </Link>
            <Link 
              href="/gallery"             >
              <PhotosButton/>
            </Link>
            <Link 
              href="/rsvp"             >
              <ReservationButton/>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-400 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/" 
              className="block text-center px-6 py-2.5 bg-blue-400 text-white rounded-full font-medium shadow-md border-2 border-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              accueil
            </Link>
            <Link 
              href="/faq" 
              className="block text-center px-6 py-2.5 bg-pink-400 text-white rounded-full font-medium shadow-md border-2 border-pink-500" 
              onClick={() => setIsOpen(false)}
            >
              faq
            </Link>
            <Link 
              href="/gallery" 
              className="block text-center px-6 py-2.5 bg-green-400 text-white rounded-full font-medium shadow-md border-2 border-green-500" 
              onClick={() => setIsOpen(false)}
            >
              photos
            </Link>
            <Link 
              href="/rsvp" 
              className="block text-center px-6 py-2.5 bg-yellow-400 text-white rounded-full font-medium shadow-md border-2 border-yellow-500" 
              onClick={() => setIsOpen(false)}
            >
              réservation
            </Link>
          </div>
        )}
      </div>
      <CustomHrLine/>
    </nav>
  );
}
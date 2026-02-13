'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Try Now', href: '#try' },
    { label: 'Gallery', href: '#community' },
  ];

  return (
    <header className="w-full bg-forest-green border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-white">
                <Image src="/bird-svgrepo-com.svg" alt="Bird" width={20} height={20} />
             </div>
             <span className="font-bold text-xl text-white tracking-tight">BirdDex</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-gray-300 hover:text-primary-green font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="bg-primary-green text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-opacity shadow-sm text-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-primary-green font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-gray-300 hover:text-white font-medium text-sm"
          >
            Login
          </Link>
          <Link
            href="#signup"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-primary-green font-semibold text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

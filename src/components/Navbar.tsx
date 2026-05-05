'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-0' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl font-cormorant">DC</span>
              </div>
              <span className={`font-bold text-xl tracking-tight font-cormorant transition-colors duration-500 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Dental<span className="text-primary">Care</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`font-medium transition-all duration-500 hover:text-primary ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+251911234567" 
              className={`hidden lg:flex items-center gap-2 transition-colors duration-500 ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">+251 911 234 567</span>
            </a>
            <Link 
              href="#book"
              className="bg-primary hover:bg-red-800 text-white px-5 lg:px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/20 font-sans text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline uppercase tracking-widest">Book Now</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-gray-900 hover:text-primary py-2 transition-colors border-b border-gray-50 last:border-0 font-cormorant"
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+251911234567" className="flex items-center gap-3 text-primary font-bold mt-2 font-sans">
              <Phone className="w-6 h-6" />
              <span>+251 911 234 567</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

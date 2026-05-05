'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navDisplayScrolled = scrolled || !isHomePage;

  const navLinks = [
    {
      name: 'Treatments',
      href: '/treatments',
      dropdown: [
        { name: 'General Dentistry', href: '/treatments/general' },
        { name: 'Cosmetic Dentistry', href: '/treatments/cosmetic' },
        { name: 'Restorative Dentistry', href: '/treatments/restorative' },
        { name: 'Orthodontics', href: '/treatments/orthodontics' },
        { name: 'Pediatric Dentistry', href: '/treatments/pediatric' },
        { name: 'Preventive Dentistry', href: '/treatments/preventive' },
      ]
    },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about' },
        { name: 'Meet Our Dentists', href: '/dentists' },
      ]
    },
    { name: 'Book', href: '/book' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },

  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${navDisplayScrolled
        ? 'bg-[#F0F9FF]/95 backdrop-blur border-b border-gray-100 shadow-sm py-0'
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
              <span className={`font-bold text-xl tracking-tight font-cormorant transition-colors duration-500 ${navDisplayScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                Dental<span className="text-primary">Care</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-medium transition-all duration-500 flex items-center gap-1 py-4 ${navDisplayScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <div className={`absolute top-full left-0 w-64 bg-[#F0F9FF] rounded-2xl shadow-2xl border border-gray-100 py-4 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                    }`}>
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors font-sans"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+251911234567"
              className={`hidden lg:flex items-center gap-2 transition-colors duration-500 ${navDisplayScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-bold">+251 911 234 567</span>
            </a>
            <Link
              href="/book"
              className="bg-primary hover:bg-primary-hover text-white px-5 lg:px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-primary/30 font-sans text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="uppercase tracking-widest">Book Now</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${navDisplayScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-[#F0F9FF]/10'
                }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F0F9FF] border-b border-gray-100 shadow-2xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-bold text-gray-900 font-cormorant"
                  >
                    {link.name}
                  </Link>
                </div>
                {link.dropdown && (
                  <div className="pl-4 py-2 flex flex-col gap-3">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-500 hover:text-primary text-sm font-sans"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:+251911234567" className="flex items-center gap-3 text-primary font-bold mt-4 font-sans">
              <Phone className="w-6 h-6" />
              <span>+251 911 234 567</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Car, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-gradient-premium backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center py-2 sm:py-3 text-sm w-full">
            {/* Contact Info - Phone Only on Mobile, Full on Desktop */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <motion.a 
                href="tel:+14163610002"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gold hover:text-gold-light transition-all duration-300 font-semibold cursor-pointer group"
              >
                <div className="bg-gold/20 p-1.5 rounded-full group-hover:bg-gold/30 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm sm:text-base">(416) 361-0002</span>
              </motion.a>
              <motion.a 
                href="https://maps.google.com/?q=519+Eastern+Ave,+Toronto,+ON+M4M+1C7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center space-x-2 text-gold hover:text-gold-light transition-all duration-300 font-semibold cursor-pointer group"
              >
                <div className="bg-gold/20 p-1.5 rounded-full group-hover:bg-gold/30 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>519 Eastern Ave, Toronto</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61582003483902"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gold hover:text-gold-light transition-all duration-300 cursor-pointer group"
                aria-label="Facebook"
              >
                <div className="bg-gold/20 p-1.5 sm:p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </motion.a>
              <motion.a
                href="http://instagram.com/maximumcardetailingto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gold hover:text-gold-light transition-all duration-300 cursor-pointer group"
                aria-label="Instagram"
              >
                <div className="bg-gold/20 p-1.5 sm:p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@maximumcardetailingto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 5, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gold hover:text-gold-light transition-all duration-300 cursor-pointer group"
                aria-label="TikTok"
              >
                <div className="bg-gold/20 p-1.5 sm:p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-10 sm:top-12 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-premium backdrop-blur-xl border-b border-gold/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image 
                src="/images/MAX-DETAIL-LOGO--150x150.png" 
                alt="Maximum Detail Logo" 
                width={40} 
                height={40}
                className="h-10 w-10 rounded-full ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20 group-hover:opacity-30 transition-all"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-luxury font-bold text-luxury">Maximum Car Detailing</span>
              <span className="text-xs text-gold-light uppercase tracking-wider hidden sm:block">Best or Nothing</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white hover:text-gold transition-all duration-300 relative group font-medium text-lg"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-gold rounded-full transition-all duration-300 group-hover:w-full"></span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-gold rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-gradient-gold text-black px-8 py-3 rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl transition-all duration-300"
          >
            <Car className="h-5 w-5" />
            <span>Book Service</span>
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          className="md:hidden overflow-hidden bg-gradient-premium backdrop-blur-xl border-t border-gold/30"
        >
          <div className="py-6 space-y-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-gold transition-all duration-300 px-6 py-3 text-lg font-medium border-l-4 border-transparent hover:border-gold hover:bg-gold/5"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mx-6 flex items-center justify-center space-x-2 bg-gradient-gold text-black px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl transition-all duration-300 w-auto"
            >
              <Car className="h-5 w-5" />
              <span>Book Service</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
    </>
  );
}

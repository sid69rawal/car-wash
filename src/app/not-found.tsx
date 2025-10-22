'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Car, Sparkles, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-premium flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Car Icon */}
      <motion.div
        className="absolute top-20 right-20 text-gold/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Car className="h-64 w-64 hidden lg:block" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-luxury font-bold leading-none">
            <span className="text-luxury">404</span>
          </h1>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-black font-bold text-sm uppercase tracking-wider shadow-2xl mb-6"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Page Not Found
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold mb-6 text-white"
        >
          Oops! Lost Your Way?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-gold-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Looks like this page took a detour. Don&apos;t worry, we&apos;ll get you back on track!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold text-black px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <Link href="/#services">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                backgroundColor: "rgba(212, 175, 55, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3"
            >
              <Car className="h-5 w-5" />
              <span>Our Services</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-gold/20"
        >
          <p className="text-gray-400 mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/#about', label: 'About Us', icon: <Sparkles className="h-4 w-4" /> },
              { href: '/#gallery', label: 'Gallery', icon: <Car className="h-4 w-4" /> },
              { href: '/#contact', label: 'Contact', icon: <ArrowLeft className="h-4 w-4" /> },
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors duration-300 px-4 py-2 rounded-full border border-gold/20 hover:border-gold/40 bg-gold/5 hover:bg-gold/10"
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Brand Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12"
        >
          <p className="text-gold-light font-luxury text-2xl font-semibold">
            Maximum Car Detailing
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Best or Nothing
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-gold/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="h-12 w-12 hidden md:block" />
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 text-gold/20"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Car className="h-12 w-12 hidden md:block" />
      </motion.div>
    </div>
  );
}


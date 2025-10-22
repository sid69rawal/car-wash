'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { AlertTriangle, Home, RefreshCcw, Car } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-gradient-gold p-8 rounded-full"
            >
              <AlertTriangle className="h-24 w-24 md:h-32 md:w-32 text-black" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-gold rounded-full blur-xl"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-black font-bold text-sm uppercase tracking-wider shadow-2xl mb-6"
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          Something Went Wrong
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold mb-6 text-white"
        >
          Oops! We Hit a Bump
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-gold-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Don&apos;t worry! Even the best cars need a tune-up sometimes. Let&apos;s get you back on the road.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => reset()}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-gold text-black px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
          >
            <RefreshCcw className="h-5 w-5" />
            <span>Try Again</span>
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                backgroundColor: "rgba(212, 175, 55, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 p-6 bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl text-left max-w-2xl mx-auto"
          >
            <p className="text-gold font-semibold mb-2">Error Details (Development Mode):</p>
            <p className="text-gray-300 text-sm font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-gray-400 text-xs mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>
        )}

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
        className="absolute bottom-10 right-10 text-gold/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Car className="h-12 w-12 hidden md:block" />
      </motion.div>
    </div>
  );
}


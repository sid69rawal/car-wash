'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { Car, Sparkles, Star, Crown } from 'lucide-react';

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const heroTexts = [
    {
      badge: "PREMIUM DETAILING",
      title: "Best or Nothing",
      subtitle: "Treat Your Automobile to the Best Clean & Detail It Ever Had",
      description: "Keep It Clean @Maximum Car Detailing"
    },
    {
      badge: "CONVENIENT SERVICE",
      title: "Shop Location or Mobile Service",
      subtitle: "Visit Our Shop or We Come To You - Your Choice!",
      description: "Professional car detailing with flexible service options"
    },
    {
      badge: "LUXURY SERVICE",
      title: "Maximum Car Detailing",
      subtitle: "Where Excellence Meets Convenience",
      description: "Over 15 years of automotive detailing experience"
    }
  ];

  // Generate particle positions once to avoid hydration mismatch
  const particlePositions = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === heroTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const floatingIcons = [
    { icon: Car, position: "top-20 left-20", delay: 0 },
    { icon: Sparkles, position: "top-40 right-32", delay: 0.5 },
    { icon: Star, position: "bottom-40 left-32", delay: 1 },
    { icon: Crown, position: "bottom-20 right-20", delay: 1.5 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpeg')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block ${item.position} text-gold/30`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: item.delay 
          }}
        >
          <item.icon className="h-8 w-8" />
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-black font-bold text-sm uppercase tracking-wider shadow-2xl"
              >
                <Crown className="h-4 w-4 mr-2" />
                {heroTexts[currentTextIndex].badge}
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-luxury font-bold mb-4 md:mb-6 leading-tight"
              >
                <span className="text-luxury">{heroTexts[currentTextIndex].title}</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold mb-3 md:mb-4"
              >
                {heroTexts[currentTextIndex].subtitle}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gold-light font-medium max-w-3xl mx-auto"
              >
                {heroTexts[currentTextIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-gold text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider hover:shadow-2xl transition-all duration-300 transform"
          >
            <Car className="inline h-4 w-4 sm:h-5 w-5 md:h-6 w-6 mr-2 md:mr-3" />
            Book Service
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
              backgroundColor: "rgba(212, 175, 55, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 md:border-3 border-gold text-gold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Sparkles className="inline h-4 w-4 sm:h-5 w-5 md:h-6 w-6 mr-2 md:mr-3" />
            Get Free Quote
          </motion.button>
        </motion.div>

        {/* Enhanced Text Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex justify-center items-center space-x-4 mt-8 md:mt-16"
        >
          {heroTexts.map((_, index) => (
            <motion.div
              key={index}
              className={`relative transition-all duration-500 cursor-pointer ${
                index === currentTextIndex ? 'w-12 h-3' : 'w-3 h-3'
              }`}
              whileHover={{ scale: 1.3 }}
              onClick={() => setCurrentTextIndex(index)}
            >
              <div className={`w-full h-full rounded-full transition-all duration-500 ${
                index === currentTextIndex 
                  ? 'bg-gradient-gold shadow-lg' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`} />
              {index === currentTextIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-gold"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

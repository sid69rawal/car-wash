'use client';

import { motion } from 'framer-motion';
import { Car, Star, Award, Sparkles, Shield, Clock } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Car className="h-12 w-12" />,
      title: "FLEXIBLE SERVICE OPTIONS",
      description: "Visit our professional shop for the full experience, or we can come to you with our mobile service. Choose what works best for your schedule and needs.",
      cta: "Learn About Service Options",
      premium: true,
      badge: "FEATURED"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "CERAMIC COATING PAINT PROTECTION",
      description: "Protect your investment with premium paint protection. High gloss diamond hardness, anti-scratch technology, and high-quality ceramic protection for lasting shine.",
      cta: "Learn About Ceramic Protection",
      premium: false
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "INTERIOR & ENGINE DETAIL",
      description: "Complete interior and engine shampooing service. We provide competitive, convenient and professional services with attention to every detail.",
      cta: "View Interior Services",
      premium: false
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "HIGH SPEED BUFF & POLISH",
      description: "Premium buffing and polishing services that restore your vehicle's original shine. Toronto's premier car detailing experience with best-in-class customer service.",
      cta: "Discover Polish Services",
      premium: false
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "SPECIALIZED CLEANING",
      description: "Dog hair & odor removal, lease return preparation, and specialized cleaning services. Over 15 years of experience making every vehicle shine like new.",
      cta: "View Specialty Services",
      premium: false
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "PICK-UP & DELIVERY",
      description: "Complete convenience with our pick-up and delivery service. Comprehensive vehicle inspection ensuring our service meets your highest standards.",
      cta: "Schedule Pickup",
      premium: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-premium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-black font-bold text-sm uppercase tracking-wider shadow-2xl mb-6"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Our Premium Services
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-6 leading-tight">
            What <span className="text-luxury">Maximum Car Detailing</span> can do for your Automobile
          </h2>
          <p className="text-2xl text-gold-light max-w-4xl mx-auto font-medium leading-relaxed">
            Professional car detailing services that bring out the best in your vehicle - at our shop or your location
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: service.premium 
                  ? "0 30px 60px rgba(212, 175, 55, 0.3)" 
                  : "0 20px 40px rgba(212, 175, 55, 0.1)"
              }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                service.premium 
                  ? 'bg-gradient-to-br from-gold/10 via-black to-gold/5 border-2 border-gold/50 shadow-2xl' 
                  : 'bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/90 border border-gold/20'
              } backdrop-blur-xl transition-all duration-500`}
            >
              {/* Premium Badge */}
              {service.premium && service.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ rotate: -12 }}
                    whileHover={{ rotate: 0 }}
                    className="bg-gradient-gold text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                  >
                    {service.badge}
                  </motion.div>
                </div>
              )}

              {/* Background Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.premium ? 'bg-gradient-gold' : 'bg-gradient-to-br from-gold/5 to-transparent'
              }`} />

              <div className="relative z-10 p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: service.premium ? 360 : 0,
                    scale: 1.2 
                  }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 ${
                    service.premium ? 'text-gold' : 'text-gold group-hover:text-gold-light'
                  } transition-colors duration-300`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 uppercase tracking-wide leading-tight ${
                  service.premium ? 'text-luxury' : 'text-gold group-hover:text-gold-light'
                } transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-white mb-6 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`inline-flex items-center font-semibold uppercase tracking-wider text-sm ${
                    service.premium 
                      ? 'text-gold-dark hover:text-gold' 
                      : 'text-gold hover:text-gold-light'
                  } transition-colors duration-300`}
                >
                  {service.cta}
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.premium 
                  ? 'bg-gradient-to-r from-gold via-gold-light to-gold p-0.5' 
                  : 'bg-gradient-to-r from-gold/30 via-gold to-gold/30 p-0.5'
              }`}>
                <div className="w-full h-full bg-black rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

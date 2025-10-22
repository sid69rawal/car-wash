'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61582003483902", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "http://instagram.com/maximumcardetailingto", label: "Instagram" },
    { icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>, href: "https://www.tiktok.com/@maximumcardetailingto", label: "TikTok" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "FAQ" },
  ];

  return (
    <footer className="bg-gradient-premium border-t border-gold/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Image 
                  src="/images/MAX-DETAIL-LOGO--150x150.png" 
                  alt="Maximum Detail Logo" 
                  width={48} 
                  height={48}
                  className="h-12 w-12 rounded-full ring-2 ring-gold/30"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-luxury font-bold text-luxury">Maximum Car Detailing</span>
                <span className="text-sm text-gold-light uppercase tracking-wider">Shop & Mobile Service</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gold mb-3 uppercase tracking-wide">Flexible Service Options</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Visit our professional shop for the complete detailing experience, or choose our convenient mobile service. 
                Premium car detailing with the flexibility to serve you at our location or yours in Toronto.
              </p>
              <p className="text-gold-light font-medium">
                Keep It Clean @Maximum Car Detailing - Best or Nothing
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.a 
                href="tel:+14163610002"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-gold-light transition-colors duration-300 cursor-pointer group"
              >
                <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg font-medium">(416) 361-0002</span>
              </motion.a>
              <motion.a 
                href="mailto:maximumcardetailing361@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-gold-light transition-colors duration-300 cursor-pointer group"
              >
                <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg font-medium">maximumcardetailing361@gmail.com</span>
              </motion.a>
              <motion.a 
                href="https://maps.google.com/?q=519+Eastern+Ave,+Toronto,+ON+M4M+1C7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-gold-light transition-colors duration-300 cursor-pointer group"
              >
                <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <span className="text-lg font-medium">519 Eastern Ave, Toronto, ON M4M 1C7</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gold font-bold text-xl mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-gold-light transition-all duration-300 text-lg font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gold font-bold text-xl mb-6 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-4 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-gold-light transition-all duration-300 text-lg font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h3 className="text-gold font-bold text-xl mb-6 uppercase tracking-wide">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 10px 20px rgba(212, 175, 55, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gold/20 p-3 rounded-full text-gray-400 hover:text-gold hover:border-gold/60 transition-all duration-300 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gold/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-lg font-medium">
                &copy; {currentYear} Maximum Car Detailing. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-gold-light text-lg font-medium flex items-center">
                <span className="mr-2">Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                <span className="ml-2">in Toronto</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

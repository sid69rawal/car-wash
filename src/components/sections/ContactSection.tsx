'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Phone",
      details: "(416) 361-0002"
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Location",
      details: "519 Eastern Ave\nToronto, ON M4M 1C7"
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Hours",
      details: "Every Day: 8:00 AM – 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold">Contact</span> Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to give your car the premium treatment it deserves?
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const getHref = () => {
                switch (info.title) {
                  case "Phone":
                    return "tel:+14163610002";
                  case "Location":
                    return "https://maps.google.com/?q=519+Eastern+Ave,+Toronto,+ON+M4M+1C7";
                  default:
                    return "#";
                }
              };

              const isClickable = info.title === "Phone" || info.title === "Location";

              const ContactItem = isClickable ? motion.a : motion.div;
              const linkProps = isClickable ? {
                href: getHref(),
                target: info.title === "Location" ? "_blank" : undefined,
                rel: info.title === "Location" ? "noopener noreferrer" : undefined
              } : {};

              return (
                <ContactItem
                  key={index}
                  {...linkProps}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={isClickable ? { x: 5 } : undefined}
                  className={`flex items-center space-x-4 ${isClickable ? 'cursor-pointer group' : ''}`}
                >
                  <div className={`bg-gold/20 p-3 rounded-full ${isClickable ? 'group-hover:bg-gold/30 transition-colors' : ''}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className={`whitespace-pre-line ${isClickable ? 'text-gray-300 group-hover:text-gold-light transition-colors' : 'text-gray-300'}`}>
                      {info.details}
                    </p>
                  </div>
                </ContactItem>
              );
            })}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your vehicle and service needs" 
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    "Certified detailing professionals",
    "Premium products and equipment",
    "Satisfaction guarantee",
    "Convenient Eastern Ave location"
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "4.9+", label: "Average Rating" },
    { number: "15+", label: "Years of Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold">About</span> Maximum Detail
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              With over 15+ years of experience in Toronto, we've perfected the art of car detailing. 
              Located on Eastern Ave, our team of certified professionals uses only the finest products and techniques to ensure your 
              vehicle receives the premium treatment it deserves.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-8 border border-gold/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-300 mb-6">Happy Customers</div>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(1).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl font-bold text-gold mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

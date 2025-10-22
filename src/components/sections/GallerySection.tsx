'use client';

import { motion } from 'framer-motion';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function GallerySection() {
  const galleryItems = [
    { title: "Luxury Sedan Detail", description: "Complete exterior and interior detailing" },
    { title: "Sports Car Polish", description: "Premium paint correction and protection" },
    { title: "SUV Deep Clean", description: "Comprehensive cleaning and conditioning" },
    { title: "Classic Car Restoration", description: "Specialized care for vintage vehicles" },
    { title: "Ceramic Coating", description: "Long-lasting paint protection" },
    { title: "Interior Detailing", description: "Leather conditioning and fabric protection" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold">Our</span> Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the transformation we bring to every vehicle
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <ImagePlaceholder 
                width={400} 
                height={300} 
                className="rounded-xl overflow-hidden group-hover:border-gold/40 transition-all"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center p-4">
                <h3 className="text-gold font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white text-sm text-center">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

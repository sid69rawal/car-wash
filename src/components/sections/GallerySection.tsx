'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with captions
  const galleryImages = [
    { src: '/images/gallery/gallery-1.jpeg', alt: 'Professional car detailing result 1' },
    { src: '/images/gallery/gallery-2.jpeg', alt: 'Professional car detailing result 2' },
    { src: '/images/gallery/gallery-3.jpeg', alt: 'Professional car detailing result 3' },
    { src: '/images/gallery/gallery-4.jpeg', alt: 'Professional car detailing result 4' },
    { src: '/images/gallery/gallery-5.jpeg', alt: 'Professional car detailing result 5' },
    { src: '/images/gallery/gallery-6.jpeg', alt: 'Professional car detailing result 6' },
    { src: '/images/gallery/gallery-7.jpeg', alt: 'Professional car detailing result 7' },
    { src: '/images/gallery/gallery-8.jpeg', alt: 'Professional car detailing result 8' },
    { src: '/images/gallery/gallery-9.jpeg', alt: 'Professional car detailing result 9' },
    { src: '/images/gallery/gallery-10.jpeg', alt: 'Professional car detailing result 10' },
    { src: '/images/gallery/gallery-11.jpg', alt: 'Professional car detailing result 11' },
    { src: '/images/gallery/gallery-12.jpeg', alt: 'Professional car detailing result 12' },
    { src: '/images/gallery/gallery-13.jpeg', alt: 'Professional car detailing result 13' },
    { src: '/images/gallery/gallery-14.jpeg', alt: 'Professional car detailing result 14' },
    { src: '/images/gallery/gallery-15.jpeg', alt: 'Professional car detailing result 15' },
    { src: '/images/gallery/gallery-16.jpeg', alt: 'Professional car detailing result 16' },
    { src: '/images/gallery/gallery-17.jpeg', alt: 'Professional car detailing result 17' },
    { src: '/images/gallery/gallery-18.jpeg', alt: 'Professional car detailing result 18' },
    { src: '/images/gallery/gallery-19.jpeg', alt: 'Professional car detailing result 19' },
    { src: '/images/gallery/gallery-20.jpeg', alt: 'Professional car detailing result 20' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-gradient-premium relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-black font-bold text-sm uppercase tracking-wider shadow-2xl mb-6"
            >
              Our Portfolio
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-6 leading-tight">
              <span className="text-luxury">Gallery</span> of Excellence
            </h2>
            <p className="text-2xl text-gold-light max-w-4xl mx-auto font-medium leading-relaxed">
              See the transformation we bring to every vehicle with our premium detailing services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-gold/20 group-hover:border-gold/60 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/20">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-gold text-sm font-semibold">Click to view</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[101] bg-gradient-gold text-black p-3 rounded-full shadow-2xl"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Previous Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-[101] bg-gradient-gold text-black p-3 rounded-full shadow-2xl hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-[101] bg-gradient-gold text-black p-3 rounded-full shadow-2xl hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-black px-4 py-2 rounded-full font-bold text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </>
  );
}

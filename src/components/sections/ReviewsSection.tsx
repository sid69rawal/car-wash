'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import reviewsData from '@/data/reviews.json';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface ReviewsData {
  lastUpdated: string;
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [reviewsPerSlide] = useState<number>(3);

  useEffect(() => {
    // Load reviews from static JSON file
    try {
      const data: ReviewsData = reviewsData;
      setReviews(data.reviews || []);
      setOverallRating(data.overallRating || 0);
      setTotalReviews(data.totalReviews || 0);
    } catch (err) {
      console.error('Error loading reviews:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-gold fill-gold' 
            : 'text-gray-400 fill-gray-400'
        }`}
        fill={i < rating ? 'currentColor' : 'none'}
        stroke={i < rating ? 'currentColor' : 'currentColor'}
        strokeWidth={i < rating ? 0 : 1}
      />
    ));
  };

  const nextSlide = () => {
    const maxSlides = Math.ceil(reviews.length / reviewsPerSlide) - 1;
    setCurrentSlide((prev) => (prev < maxSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(reviews.length / reviewsPerSlide) - 1;
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlides));
  };

  const getCurrentReviews = () => {
    const start = currentSlide * reviewsPerSlide;
    const end = start + reviewsPerSlide;
    return reviews.slice(start, end);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gold">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Reviews From Satisfied Customers
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(overallRating))}
              <span className="text-2xl font-bold text-gold">{overallRating.toFixed(1)}</span>
            </div>
            <div className="text-gray-300">
              <span className="font-semibold">{totalReviews}</span> Google Reviews
            </div>
          </div>
        </motion.div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getCurrentReviews().map((review, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all group"
                  >
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-gold/50 mr-3" />
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{review.author_name}</h4>
                        <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                      </div>
                      <div className="text-gold text-xs font-semibold">
                        Google Review
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {reviews.length > reviewsPerSlide && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-full transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-full transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {reviews.length > reviewsPerSlide && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-gold' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* See More Reviews Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.google.com/maps/place/?cid=YOUR_BUSINESS_ID"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all shadow-lg"
          >
            <span>See more reviews on Google</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </motion.a>
        </motion.div>
        
        {reviews.length === 0 && (
          <div className="text-center">
            <p className="text-gray-400">No reviews available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
}

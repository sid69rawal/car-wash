'use client';

import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function ImagePlaceholder({ 
  width = 400, 
  height = 300, 
  className = "",
  children 
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gold/20 ${className}`}
      style={{ width, height }}
    >
      {children || (
        <div className="text-center">
          <Car className="h-16 w-16 text-gold/50 mx-auto mb-2" />
          <p className="text-gold/50 text-sm">Image Placeholder</p>
        </div>
      )}
    </div>
  );
}

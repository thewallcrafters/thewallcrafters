'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
  layout?: 'grid' | 'horizontal';
}

export default function ImageGallery({ images, layout = 'grid' }: ImageGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (layout === 'horizontal') {
    return (
      <div ref={ref} className="overflow-hidden">
        <motion.div
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[50vw] aspect-[4/3] relative overflow-hidden group"
              data-cursor-label="View Full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Grid layout (default)
  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative aspect-[4/3] overflow-hidden group"
          data-cursor-label="View Full"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

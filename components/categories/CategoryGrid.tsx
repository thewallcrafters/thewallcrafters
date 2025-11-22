'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface CategoryCard {
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface CategoryGridProps {
  items: CategoryCard[];
  columns?: 2 | 3 | 4;
}

export default function CategoryGrid({ items, columns = 3 }: CategoryGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div ref={ref} className={`grid ${gridCols[columns]} gap-8 lg:gap-12`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="group relative"
          data-cursor-label={item.href ? 'Explore' : 'View'}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden mb-6">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            {/* Red dot indicator on hover */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-twc-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-1.5 h-1.5 bg-twc-red rounded-full opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              ></motion.div>
              <h3 className="text-xl md:text-2xl tracking-wide">
                {item.href ? (
                  <Link href={item.href} className="hover:text-twc-red transition-colors duration-300">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
            </div>
            <p className="text-twc-grey leading-relaxed font-light pl-6">
              {item.description}
            </p>

            {item.href && (
              <Link href={item.href} className="inline-block pl-6 pt-2">
                <motion.div
                  className="inline-flex items-center gap-2 text-sm tracking-wider text-twc-warm/70 hover:text-twc-red transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <span>→</span>
                </motion.div>
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function KitchensSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const kitchens = [
    { image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Island Kitchen · Premium Line', href: '/kitchens/premium-island-kitchen' },
    { image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Parallel Kitchen · Modern', href: '/kitchens/warm-l-shaped-kitchen' },
    { image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'L-Shape · Minimal', href: '/kitchens/parallel-kitchen-tall-units' },
    { image: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'U-Shape · Contemporary', href: '/kitchens/compact-urban-kitchen' },
    { image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Open Kitchen · Luxury', href: '/kitchens/modern-u-shape-kitchen' },
    { image: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Modular · Smart Storage', href: '/kitchens/minimalist-white-kitchen' },
  ];

  return (
    <section className="bg-twc-warm section-padding" id="kitchens" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-display text-display text-twc-charcoal">
            Kitchens that work beautifully.
          </h2>
          <p className="text-twc-charcoal/60 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Modular, made-to-measure kitchens engineered for daily life — with precise joinery, considered storage and enduring materials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {kitchens.map((kitchen, index) => (
            <Link
              key={index}
              href={kitchen.href}
              className="block"
            >
              <motion.div
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                data-cursor-label="View Kitchen"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.img
                  src={kitchen.image}
                  alt={kitchen.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-twc-charcoal/85 flex items-center justify-center transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <div className="text-center space-y-3">
                    <div className="w-2 h-2 bg-twc-red rounded-full mx-auto"></div>
                    <p className="text-sm tracking-wider text-twc-warm">{kitchen.label}</p>
                    <p className="text-xs text-twc-grey tracking-widest-plus">TWC FIT-OUTS</p>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

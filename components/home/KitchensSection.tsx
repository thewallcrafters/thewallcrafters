'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const kitchens = [
  { image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Island Kitchen · Premium Line', href: '/kitchens/premium-island-kitchen' },
  { image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Parallel Kitchen · Modern', href: '/kitchens/warm-l-shaped-kitchen' },
  { image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'L-Shape · Minimal', href: '/kitchens/parallel-kitchen-tall-units' },
  { image: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'U-Shape · Contemporary', href: '/kitchens/compact-urban-kitchen' },
  { image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Open Kitchen · Luxury', href: '/kitchens/modern-u-shape-kitchen' },
  { image: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Modular · Smart Storage', href: '/kitchens/minimalist-white-kitchen' },
];

export default function KitchensSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-warm section-padding" id="kitchens" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-display text-section-title text-twc-charcoal">
            Kitchens that work beautifully.
          </h2>
          <p className="text-twc-charcoal/60 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Modular, made-to-measure kitchens engineered for daily life — with precise joinery, considered storage and enduring materials.
          </p>
        </motion.div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {kitchens.map((kitchen, index) => (
            <li key={kitchen.href}>
              <Link href={kitchen.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-twc-red focus-visible:outline-offset-4">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-twc-charcoal/10"
                  data-cursor-label="View Kitchen"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Image
                    src={kitchen.image}
                    alt={kitchen.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-twc-charcoal/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center space-y-3">
                      <div className="w-2 h-2 bg-twc-red rounded-full mx-auto" aria-hidden="true" />
                      <p className="text-sm tracking-wider text-twc-warm">{kitchen.label}</p>
                      <p className="text-xs text-twc-grey tracking-widest-plus">TWC FIT-OUTS</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const spaces = [
  {
    title: 'Residential',
    description: 'Custom homes, villas and apartments designed and executed end to end — from structure to the last piece of furniture.',
  },
  {
    title: 'Commercial',
    description: 'Offices, retail and hospitality spaces that reflect your brand and support how your teams and guests really use them.',
  },
  {
    title: 'Turnkey Fit-Outs',
    description: 'Civil, MEP, interiors and bespoke carpentry coordinated under one roof for a seamless, on-time delivery.',
  },
];

export default function SpacesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal section-padding relative noise-texture" id="services" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-serif-display text-display leading-tight tracking-tight">
              Spaces we craft.
            </h2>
            <p className="text-twc-grey text-xl font-light leading-relaxed">
              Residential, commercial and everything in between.
            </p>
          </motion.div>

          <div className="space-y-12 lg:border-l border-twc-warm/10 lg:pl-16">
            {spaces.map((space, index) => (
              <motion.div
                key={space.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-twc-red rounded-full" />
                  <h3 className="text-2xl md:text-3xl tracking-wide">{space.title}</h3>
                </div>
                <p className="text-twc-grey leading-relaxed font-light text-lg pl-6">
                  {space.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SpecialtiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specialties = [
    {
      title: 'Conference Tables',
      description: 'Custom conference tables with integrated power, cable management and acoustic awareness.',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Puja Rooms',
      description: 'Wood, brass, light and proportion carefully composed into quiet sanctuaries at home.',
      image: 'https://images.pexels.com/photos/8082304/pexels-photo-8082304.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Storage Systems',
      description: 'Built-in storage that disappears into architecture while keeping everything within reach.',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'TV & Media Units',
      description: 'Minimal media walls with hidden wiring, integrated lighting and refined finishes.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="bg-twc-charcoal section-padding relative noise-texture" id="interiors" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="mb-20 space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-display text-display">Beyond kitchens.</h2>
          <p className="text-twc-grey text-lg md:text-xl font-light leading-relaxed">
            From conference rooms to puja spaces, storage systems and media walls — TWC Fit-Outs delivers crafted environments end to end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="group relative"
              data-cursor-label="Explore"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <motion.img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 right-4 w-2 h-2 bg-twc-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-1.5 h-1.5 bg-twc-red rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <h3 className="text-2xl md:text-3xl tracking-wide">{specialty.title}</h3>
                </div>
                <p className="text-twc-grey leading-relaxed font-light text-lg pl-6">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const specialties = [
  { title: 'Conference Tables', description: 'Custom conference tables with integrated power, cable management and acoustic awareness.', image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/interiors/conference-tables' },
  { title: 'Puja Rooms', description: 'Wood, brass, light and proportion carefully composed into quiet sanctuaries at home.', image: 'https://images.pexels.com/photos/8082304/pexels-photo-8082304.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/interiors/puja-room' },
  { title: 'Storage Systems', description: 'Built-in storage that disappears into architecture while keeping everything within reach.', image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/interiors/storage' },
  { title: 'TV & Media Units', description: 'Minimal media walls with hidden wiring, integrated lighting and refined finishes.', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/interiors/tv-units' },
];

export default function SpecialtiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        <ul className="grid md:grid-cols-2 gap-8 lg:gap-12" role="list">
          {specialties.map((specialty, index) => (
            <li key={specialty.title}>
              <Link href={specialty.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-twc-red focus-visible:outline-offset-4">
                <motion.article
                  className="group relative"
                  data-cursor-label="Explore"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-twc-warm/10">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-twc-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-twc-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      <h3 className="text-2xl md:text-3xl tracking-wide">{specialty.title}</h3>
                    </div>
                    <p className="text-twc-grey leading-relaxed font-light text-lg pl-6">
                      {specialty.description}
                    </p>
                  </div>
                </motion.article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

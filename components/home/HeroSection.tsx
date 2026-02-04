'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const taglines = [
  'Premium Cabinetry & Interior Fit-out Firm — driven by Precision, Logical Design & Craftsmanship.',
  'Expertise in Modular Kitchens, Bespoke Kitchen Models, and Complete Interior Renovations.',
];

const subtitles = [
  'One accountable team — from design support to manufacturing to installation.',
  'Designed for Indian cooking habits, heavy usage, and easy maintenance.',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-r from-twc-charcoal via-twc-charcoal/80 to-transparent z-10 noise-texture"></div>

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      ></motion.div>

      <div className="relative z-20 h-full container-wide flex items-center">
        <motion.div
          className="max-w-3xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
      {/* Rotating main headlines */}
          <div className="min-h-[220px] md:min-h-[180px] lg:min-h-[160px] overflow-visible relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                className="font-serif-display text-hero text-twc-warm text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {taglines[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Rotating subtitles */}
          <div className="min-h-[60px] md:min-h-[32px] overflow-visible relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                className="text-lg md:text-xl leading-relaxed text-twc-warm/80 font-light"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {subtitles[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm tracking-wider text-twc-grey max-w-2xl">
            Clear scope. Clean finish. And yes—your timeline matters.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:main@thewallcrafters.com?subject=Cabinetry%20Estimate%20Request"
              className="border border-twc-warm px-8 py-4 text-sm tracking-wider hover:bg-twc-warm hover:text-twc-charcoal transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Cabinetry Estimate
            </a>
            <a
              href="tel:9952217602"
              className="text-sm tracking-wider px-8 py-4 text-twc-warm/70 hover:text-twc-warm relative group"
            >
              Talk to Our Designer
              <span className="absolute bottom-2 left-8 right-8 h-px bg-twc-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-[10px] tracking-widest text-twc-grey uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-twc-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}

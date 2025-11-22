'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
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
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-twc-red rounded-full"></div>
            <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
              The WallCrafters — TWC Fit-Outs
            </p>
          </div>

          <h1 className="font-serif-display text-hero text-twc-warm text-balance">
            Spaces crafted<br />
            with precision<br />
            and purpose.
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-twc-warm/80 max-w-2xl font-light">
            The WallCrafters is a full-service architecture and execution firm transforming homes and
            workspaces with meticulous craftsmanship, bespoke carpentry and integrated project delivery.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              className="border border-twc-warm px-8 py-4 text-sm tracking-wider hover:bg-twc-warm hover:text-twc-charcoal transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </motion.button>
            <motion.button
              className="text-sm tracking-wider px-8 py-4 text-twc-warm/70 hover:text-twc-warm relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Consultation
              <span className="absolute bottom-2 left-8 right-8 h-px bg-twc-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </motion.button>
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
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-twc-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}

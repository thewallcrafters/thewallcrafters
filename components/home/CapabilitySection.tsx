'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'Hardware & detailing expertise',
    description: 'We select hardware by usage, load, and area—kitchens, wardrobes, offices—balancing durability, feel, and long-term serviceability.',
    points: ['Usage-based selection', 'Load ratings & application fit', 'Residential and commercial requirements', 'Details others usually ignore'],
  },
  {
    title: 'Scale & capacity',
    description: 'From compact homes to large villas and full commercial interiors—our manufacturing capacity, machinery, and skilled installation teams deliver consistently.',
    points: ['Small residential to large villas', 'Full commercial interiors', 'In-house machinery and workflows', 'Dedicated installation teams'],
  },
  {
    title: 'Why partner with The Wall Crafters',
    description: 'One accountable team from design to handover—so timelines stay predictable and the final finish matches what you approved.',
    points: ['In-house manufacturing', 'Factory finish quality', 'Indian-focused design', 'Transparent pricing', 'Timely delivery', 'Single team to handover'],
  },
];

export default function CapabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-dark section-padding relative noise-texture" id="capability" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red" />
            <p className="text-[10px] tracking-widest-plus text-twc-grey/50 uppercase">Capability</p>
          </div>
          <h2 className="font-serif-display text-section-title">Built to deliver.</h2>
          <p className="text-twc-grey text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Quality is a system—materials, hardware, process, and people. We build it in at every step.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="space-y-6 border border-twc-warm/10 rounded-3xl p-8 bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-twc-red rounded-full"></div>
                <h3 className="text-2xl font-serif-display">{pillar.title}</h3>
              </div>

              <p className="text-twc-warm/80 leading-relaxed">{pillar.description}</p>

              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-twc-grey">
                    <span className="w-1 h-1 mt-2 bg-twc-warm/40 rounded-full flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-twc-warm/30 hover:border-twc-red hover:bg-twc-red/5 px-6 py-3.5 text-sm tracking-wider transition-all duration-300 group mt-2"
                >
                  <span>Talk to our designer</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

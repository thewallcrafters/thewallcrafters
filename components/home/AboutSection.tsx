'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  'Quality Craftsmanship',
  'Innovation & Creativity',
  'Customer-Centric',
  'Integrity & Accountability',
  'Collaboration',
  'Continuous Improvement',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal section-padding" id="about" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-twc-red rounded-full" aria-hidden="true"></div>
            <h2 className="font-serif-display text-display text-twc-warm">
              Built with collaborators,<br />driven by craft.
            </h2>
            <div className="space-y-6 text-twc-warm/70 text-lg leading-relaxed font-light">
              <p>
                The Wall Crafters Interior Fitouts (TWC Fitouts) is a cabinetry and interior manufacturing studio specializing in modular kitchens, wardrobes, and bespoke furniture for residences and workspaces.
              </p>
              <p>
                Established in 2025, the company follows a factory-based production model paired with on-site installation teams so detailing from the shop floor flows seamlessly into final handovers.
              </p>
              <p>
                TWC Fitouts is led by founder Anikate Singhal, a BBA in Entrepreneurship graduate from IILM and SBS Swiss Business School in Zurich, who champions integrated delivery across design, engineering, and craft disciplines.
              </p>
              <p>
                What started as collaborative builds among long-time partners has evolved into a full-service collective handling architecture, civil work, MEP systems, and bespoke interiors—all under one roof.
              </p>
              <p>
                Today, we bring clarity to complexity, delivering turnkey solutions that balance aesthetics, function, and the needs of those who inhabit the spaces we create.
              </p>
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-twc-warm/70 hover:text-twc-red transition-colors duration-300 group"
            >
              <span>Learn more about the studio</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>

          <motion.div
            className="space-y-8 lg:pl-12 lg:border-l border-twc-warm/10"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl tracking-wide text-twc-warm">Our Values</h3>
            <ul className="space-y-6" role="list">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-4 group list-none">
                  <div className="w-1.5 h-1.5 bg-twc-red rounded-full mt-2.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <p className="text-lg text-twc-warm/80 group-hover:text-twc-warm transition-colors duration-300">
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'Dedicated project manager',
    description: 'A single point of contact guides you from design brief to final handover — no passing the buck.',
  },
  {
    title: 'Factory finish quality',
    description: 'CNC precision and controlled processes ensure consistency across every piece.',
  },
  {
    title: 'Indian-focused design',
    description: 'Kitchens and spaces built for how Indian families actually cook and live.',
  },
  {
    title: 'Transparent pricing',
    description: 'Detailed, itemized quotations with no hidden costs or last-minute additions.',
  },
  {
    title: 'Timely delivery',
    description: '45-day commitment from confirmation — because your time matters.',
  },
  {
    title: 'Single team, start to finish',
    description: 'One accountable team from design through installation to handover.',
  },
];

export default function WhyPartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal relative overflow-hidden" id="why-partner" ref={ref}>
      <div className="container-wide py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-twc-red" aria-hidden="true" />
                <p className="text-[10px] tracking-widest-plus text-twc-warm/50 uppercase">Why Us</p>
              </div>
              
              <h2 className="font-serif-display text-section-title tracking-tight text-twc-warm mb-6">
                Why partner with<br />
                <span className="text-twc-red">The Wall Crafters</span>
              </h2>
              
              <p className="text-twc-warm/60 text-lg font-light leading-relaxed">
                Six reasons clients trust us with their spaces.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Reasons Grid */}
          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-0" role="list">
              {reasons.map((reason, index) => (
                <motion.li
                  key={reason.title}
                  className="group py-8 border-b border-twc-warm/10 list-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                >
                  <div className="flex gap-4">
                    {/* Number */}
                    <span className="text-3xl font-serif-display text-twc-warm/10 leading-none group-hover:text-twc-red/30 transition-colors duration-300" aria-hidden="true">
                      0{index + 1}
                    </span>
                    
                    {/* Content */}
                    <div>
                      <h3 className="font-serif-display text-xl text-twc-warm mb-2 group-hover:text-twc-red transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-twc-warm/50 text-sm font-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

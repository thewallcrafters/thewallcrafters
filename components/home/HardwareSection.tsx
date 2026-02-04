'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const criteria = [
  {
    label: 'Usage',
    description: 'How often will it be opened, pulled, or accessed?',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'Load',
    description: 'What weight and stress will it need to bear daily?',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L18 6M6 6l12 12" />
        <path d="M3 12h4M17 12h4M12 3v4M12 17v4" />
      </svg>
    ),
  },
  {
    label: 'Area',
    description: 'Kitchen, wardrobe, office — each demands different specs.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: 'Application',
    description: 'Residential warmth or commercial durability — we match the need.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
];

const details = [
  'Soft-close hinges rated for 100,000+ cycles',
  'Drawer channels matched to load requirements',
  'Handles selected for grip, finish & durability',
  'Concealed hardware for clean aesthetics',
];

export default function HardwareSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal relative overflow-hidden" id="hardware" ref={ref}>
      <div className="container-wide py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-twc-red" />
                <p className="text-[10px] tracking-widest-plus text-twc-warm/50 uppercase">Hardware & Detailing</p>
              </div>
              
              <h2 className="font-serif-display text-section-title tracking-tight text-twc-warm mb-8">
                The details<br />
                <span className="text-twc-warm/50">others overlook.</span>
              </h2>
              
              <p className="text-twc-warm/70 text-lg font-light leading-relaxed mb-10">
                Hardware isn't an afterthought — it determines how your space feels every single day. We select each component with care, based on how it will actually be used.
              </p>

              {/* Detail list */}
              <ul className="space-y-3" role="list">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 list-none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-twc-red mt-1" aria-hidden="true">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                    </span>
                    <span className="text-twc-warm/60 text-sm font-light">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Criteria Cards */}
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-6" role="list">
              {criteria.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="group relative list-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <div className="bg-twc-warm/5 border border-twc-warm/10 p-8 h-full transition-all duration-300 hover:bg-twc-warm/10 hover:border-twc-warm/20">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-twc-red/10 flex items-center justify-center mb-6 text-twc-red group-hover:bg-twc-red group-hover:text-twc-warm transition-all duration-300" aria-hidden="true">
                      {item.icon}
                    </div>
                    
                    {/* Number */}
                    <span className="text-7xl font-serif-display text-twc-warm/5 absolute top-4 right-6 leading-none" aria-hidden="true">
                      0{index + 1}
                    </span>
                    
                    {/* Label */}
                    <h3 className="font-serif-display text-2xl text-twc-warm mb-3 relative z-10">
                      {item.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-twc-warm/60 text-sm font-light leading-relaxed relative z-10">
                      {item.description}
                    </p>
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

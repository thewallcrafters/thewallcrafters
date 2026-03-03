'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projectTypes = [
  {
    label: 'Residential',
    description: 'Apartments, independent homes & compact spaces',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 14l11-9 11 9v13a2 2 0 01-2 2H7a2 2 0 01-2-2V14z" />
        <path d="M12 29V17h8v12" />
      </svg>
    ),
  },
  {
    label: 'Villas & Bungalows',
    description: 'Large-scale homes with extensive cabinetry needs',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16l6-5v-5h4v2l3-2.5 13 10.5" />
        <path d="M5 15v12h22V15" />
        <rect x="10" y="20" width="5" height="7" />
        <rect x="18" y="18" width="5" height="4" />
      </svg>
    ),
  },
  {
    label: 'Commercial',
    description: 'Offices, retail, hospitality & institutional projects',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="1" />
        <path d="M4 12h24M12 6v22" />
        <rect x="16" y="16" width="4" height="3" />
        <rect x="16" y="22" width="4" height="3" />
      </svg>
    ),
  },
];

export default function ScaleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-warm relative overflow-hidden" id="scale" ref={ref}>
      <div className="container-wide py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red" />
            <p className="text-[10px] tracking-widest-plus text-[#F5F3EE]/50 uppercase">Scale & Capacity</p>
          </div>
          <h2 className="font-serif-display text-section-title tracking-tight text-[#F5F3EE] mb-6">
            Built to deliver at any scale
          </h2>
          <p className="text-[#F5F3EE]/60 text-lg font-light">
            From a single kitchen to a full commercial fit-out — we have the infrastructure to match.
          </p>
        </motion.div>

        {/* Project Types */}
        <ul className="grid md:grid-cols-3 gap-6 mb-20" role="list">
          {projectTypes.map((type, index) => (
            <motion.li
              key={type.label}
              className="group relative bg-white border border-[#2C2824]/5 p-8 md:p-10 text-center hover:shadow-lg transition-all duration-500 list-none"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-[#2C2824]/5 flex items-center justify-center mb-6 text-[#2C2824] group-hover:bg-twc-red group-hover:text-[#F5F3EE] transition-all duration-300" aria-hidden="true">
                {type.icon}
              </div>
              
              <h3 className="font-serif-display text-2xl text-[#2C2824] mb-3">{type.label}</h3>
              <p className="text-[#2C2824]/60 text-sm font-light">{type.description}</p>
              
              {/* Decorative check */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2C2824]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <svg className="w-3 h-3 text-twc-red" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M10.28 2.72a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06L4.25 7.69l4.97-4.97a.75.75 0 011.06 0z" />
                </svg>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

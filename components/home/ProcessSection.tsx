'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Goals, site conditions, budget & daily usage',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="10" r="5" />
        <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    description: 'Layouts & planning with our in-house designer',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <path d="M4 12h24M12 12v16" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Finalize',
    description: 'Materials, finishes & transparent quotation',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6h16v20H8z" />
        <path d="M12 12h8M12 16h8M12 20h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Manufacture',
    description: 'CNC precision in our factory with QC checks',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="14" width="24" height="14" rx="1" />
        <path d="M8 14V8a2 2 0 012-2h12a2 2 0 012 2v6" />
        <circle cx="10" cy="21" r="2" />
        <circle cx="22" cy="21" r="2" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Install & Handover',
    description: 'On-site execution, walk-through & keys to your space',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l12 10v14a2 2 0 01-2 2H6a2 2 0 01-2-2V14L16 4z" />
        <path d="M12 28v-8h8v8" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-warm relative overflow-hidden" id="process" ref={ref}>
      {/* Section Header */}
      <div className="container-wide pt-16 pb-10 md:pt-20 md:pb-12">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red" />
            <p className="text-[10px] tracking-widest-plus text-[#F5F3EE]/50 uppercase">How We Work</p>
          </div>
          <h2 className="font-serif-display text-section-title tracking-tight text-[#F5F3EE] mb-6">
            From brief to handover
          </h2>
          <p className="text-[#F5F3EE]/60 text-lg font-light">
            A predictable journey with no surprises along the way.
          </p>
        </motion.div>
      </div>

      {/* Visual Flow - Desktop */}
      <div className="hidden lg:block container-wide pb-16">
        <div className="relative">
          {/* Curved dotted connector line - positioned at icon center height */}
          <svg
            className="absolute top-10 left-[10%] right-[10%] w-[80%] h-12 pointer-events-none z-0"
            viewBox="0 0 800 50"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 0 25 Q 100 0, 200 25 Q 300 50, 400 25 Q 500 0, 600 25 Q 700 50, 800 25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="text-[#F5F3EE]/15"
              fill="none"
            />
          </svg>

          {/* Steps */}
          <ol className="grid grid-cols-5 gap-8" role="list">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {/* Icon container */}
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-[#F5F3EE]/5 flex items-center justify-center mb-8 text-[#2C2824] relative z-10" aria-hidden="true">
                  {step.icon}
                </div>
                
                {/* Step number */}
                <span className="text-[10px] tracking-widest text-[#F5F3EE]/40 uppercase mb-2 bg-twc-warm relative z-10">Step {step.number}</span>
                
                {/* Title */}
                <h3 className="font-serif-display text-xl text-[#F5F3EE] mb-3">{step.title}</h3>
                
                {/* Description */}
                <p className="text-[#F5F3EE]/60 text-sm font-light leading-relaxed">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      {/* Visual Flow - Tablet */}
      <div className="hidden md:block lg:hidden container-wide pb-16">
        <ol className="grid grid-cols-3 gap-8" role="list">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-[#F5F3EE]/5 flex items-center justify-center mb-4 text-[#2C2824]">
                {step.icon}
              </div>
              <span className="text-[10px] tracking-widest text-[#F5F3EE]/40 uppercase mb-1">Step {step.number}</span>
              <h3 className="font-serif-display text-lg text-[#F5F3EE] mb-2">{step.title}</h3>
              <p className="text-[#F5F3EE]/60 text-xs font-light">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Visual Flow - Mobile */}
      <div className="md:hidden container-wide pb-16">
        <ol className="grid grid-cols-2 gap-6" role="list">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[#F5F3EE]/5 flex items-center justify-center mb-3 text-[#2C2824]" aria-hidden="true">
                {step.icon}
              </div>
              <span className="text-[9px] tracking-widest text-[#F5F3EE]/40 uppercase mb-1">{step.number}</span>
              <h3 className="font-serif-display text-base text-[#F5F3EE] mb-1">{step.title}</h3>
              <p className="text-[#F5F3EE]/60 text-xs font-light leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div className="bg-twc-warm">
        <div className="container-wide py-12 md:py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div>
              <p className="text-[#F5F3EE]/60 text-sm tracking-wider mb-1">Ready to begin?</p>
              <p className="text-[#F5F3EE] text-xl md:text-2xl font-serif-display">Let&apos;s discuss your project.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#F5F3EE]/40 text-[#F5F3EE] hover:bg-[#F5F3EE] hover:text-[#2C2824] px-8 py-4 text-sm tracking-wider transition-all duration-300 group"
            >
              <span>Start a conversation</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

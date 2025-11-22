'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Listen & map',
      description: 'Discovery sessions, site visits and detailed mapping of how you live or work.',
    },
    {
      number: '02',
      title: 'Design & detail',
      description: 'Layouts, 3D visualisation, material curation, modular systems and smart tech integration.',
    },
    {
      number: '03',
      title: 'Build & handover',
      description: 'Civil, MEP, joinery and finishing managed under one roof, with strict QC and on-time handover.',
    },
  ];

  const differentiators = [
    'CNC precision',
    'Smart home integration',
    'Sustainable materials',
    'Integrated project management',
  ];

  return (
    <section className="bg-twc-dark section-padding relative noise-texture" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="mb-20 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-display text-display">
            Craft, systems, and execution.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="space-y-6 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-twc-red rounded-full"></div>
                <span className="text-5xl font-serif-display text-twc-red/30 group-hover:text-twc-red transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl tracking-wide">{step.title}</h3>
              <p className="text-twc-grey leading-relaxed font-light text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-twc-warm/10 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-twc-red rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-sm tracking-wider text-twc-grey group-hover:text-twc-warm transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const confessions = [
  {
    confession: "We've been known to obsess over a 2mm gap.",
    context: 'Perfectionism is occupational.',
  },
  {
    confession: 'Our factory smells like fresh wood. Clients visit just for that.',
    context: "We don't blame them.",
  },
  {
    confession: "We've talked clients out of trends that wouldn't suit their home.",
    context: 'Honesty over sales.',
  },
  {
    confession: 'Our WhatsApp updates are sometimes too detailed.',
    context: 'Transparency has no off switch.',
  },
];

const funFacts = [
  { number: '2,847', label: 'Cups of chai consumed in 2024' },
  { number: '0', label: 'Projects where we blamed the client' },
  { number: '∞', label: "Times we've said 'let me check with the factory'" },
];

export default function FunSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-warm relative overflow-hidden" id="fun" ref={ref}>
      {/* Marquee Strip */}
      <div className="bg-twc-red py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {['Crafted with care', 'Built to last', 'Designed for life', 'Made in India', 'Factory fresh'].map((text, idx) => (
                <span key={idx} className="flex items-center mx-8">
                  <span className="text-twc-warm text-sm tracking-wider uppercase">{text}</span>
                  <span className="text-twc-warm/50 mx-8" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-wide py-16 md:py-20">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-widest-plus text-twc-charcoal/50 uppercase mb-4">Honest Confessions</p>
          <h2 className="font-serif-display text-3xl md:text-4xl leading-[1.2] tracking-tight text-twc-charcoal">
            A few things we probably<br />shouldn't admit publicly.
          </h2>
        </motion.div>

        {/* Confessions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {confessions.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-twc-charcoal/5 p-8 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <p className="font-serif-display text-xl md:text-2xl text-twc-charcoal leading-snug mb-4 group-hover:text-twc-red transition-colors duration-300">
                "{item.confession}"
              </p>
              <p className="text-twc-charcoal/50 text-sm font-light italic">
                — {item.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          className="border-t border-b border-twc-charcoal/10 py-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-serif-display text-twc-red">{fact.number}</span>
                <p className="text-twc-charcoal/60 text-xs md:text-sm font-light mt-2">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Quip */}
        <motion.p
          className="text-center text-twc-charcoal/40 text-sm font-light mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Still reading? You might actually like working with us.
        </motion.p>
      </div>
    </section>
  );
}

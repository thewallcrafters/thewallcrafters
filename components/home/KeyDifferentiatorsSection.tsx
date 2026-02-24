'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KeyDifferentiatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal relative" id="differentiators" ref={ref}>
      {/* Section Header */}
      <div className="container-wide pt-16 pb-10 md:pt-20 md:pb-12">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-twc-red" />
            <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">Key Differentiators</p>
          </div>
          <h2 className="font-serif-display text-section-title tracking-tight">
            The difference is in<br />
            <span className="text-twc-grey">how we work.</span>
          </h2>
        </motion.div>
      </div>

      {/* Differentiator 1 - Design Support */}
      <motion.div
        className="border-t border-twc-warm/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 py-10 md:py-14">
            <div className="lg:col-span-1">
              <span className="text-5xl md:text-6xl font-serif-display text-twc-warm/25 leading-none" aria-hidden="true">01</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 space-y-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">Design support</h3>
              <p className="text-twc-grey text-lg font-light leading-relaxed">
                Many customers don't have a designer or architect. Our in-house design team works directly with you — understanding your needs, your space, and your lifestyle.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-twc-warm/30 hover:border-twc-red hover:bg-twc-red/5 px-6 py-3.5 text-sm tracking-wider transition-all duration-300 group mt-2"
              >
                <span>Talk to our designer</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 space-y-3 lg:pt-6">
              {['Space planning', 'Practical usage', 'Material & finish guidance', 'Indian lifestyle focused'].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-twc-red/40 group-hover:bg-twc-red transition-colors duration-300" />
                  <span className="text-twc-warm/80 group-hover:text-twc-warm transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Differentiator 2 - Estimation */}
      <motion.div
        className="border-t border-twc-warm/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 py-10 md:py-14">
            <div className="lg:col-span-1">
              <span className="text-5xl md:text-6xl font-serif-display text-twc-warm/25 leading-none" aria-hidden="true">02</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 space-y-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">Transparent estimation</h3>
              <p className="text-twc-grey text-lg font-light leading-relaxed">
                Get clear, upfront quotes for kitchens, wardrobes, and all fixed furniture. In-house manufacturing means no middlemen — just honest, competitive pricing.
              </p>
              <a
                href="mailto:main@thewallcrafters.com?subject=Cabinetry%20Quotation%20Request"
                className="inline-flex items-center gap-3 border border-twc-warm/30 hover:border-twc-red hover:bg-twc-red/5 px-6 py-3.5 text-sm tracking-wider transition-all duration-300 group mt-2"
              >
                <span>Get your cabinetry quotation</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <p className="text-xs tracking-widest text-twc-grey/50 uppercase mb-3">Estimates for</p>
              <div className="flex flex-wrap gap-3">
                {['Kitchens', 'Wardrobes', 'Fixed Furniture'].map((item) => (
                  <span key={item} className="px-4 py-2 border border-twc-warm/10 text-sm text-twc-warm/70">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Differentiator 3 - Indian Kitchens */}
      <motion.div
        className="border-t border-twc-warm/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 py-10 md:py-14">
            <div className="lg:col-span-1">
              <span className="text-5xl md:text-6xl font-serif-display text-twc-warm/25 leading-none" aria-hidden="true">03</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 space-y-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">Kitchens for Indian cooking</h3>
              <p className="text-twc-grey text-lg font-light leading-relaxed">
                Built for how you actually cook. Heavy usage, heat, moisture, oil, and daily wear — all planned into layouts, materials, and hardware from day one.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 space-y-2 lg:pt-6">
              {['Indian cooking habits', 'Heavy daily usage', 'Moisture & heat resistance', 'Practical storage', 'Easy maintenance'].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-twc-red/40 group-hover:bg-twc-red transition-colors duration-300" />
                  <span className="text-twc-warm/80 text-sm group-hover:text-twc-warm transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Differentiator 4 - Trust & Quality */}
      <motion.div
        className="border-t border-twc-warm/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 py-10 md:py-14">
            <div className="lg:col-span-1">
              <span className="text-5xl md:text-6xl font-serif-display text-twc-warm/25 leading-none" aria-hidden="true">04</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 space-y-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">Trust & finish quality</h3>
              <p className="text-twc-grey text-lg font-light leading-relaxed">
                What you approve is exactly what gets delivered. No surprises, no compromises. Factory-controlled processes ensure consistent quality on every piece.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 space-y-2 lg:pt-6">
              {['Factory-controlled finishing', 'Precision detailing', 'Clean execution', 'Professional installation'].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-twc-red/40 group-hover:bg-twc-red transition-colors duration-300" />
                  <span className="text-twc-warm/80 text-sm group-hover:text-twc-warm transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Differentiator 5 - 45 Day Delivery */}
      <motion.div
        className="border-t border-b border-twc-warm/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 py-10 md:py-14">
            <div className="lg:col-span-1">
              <span className="text-5xl md:text-6xl font-serif-display text-twc-warm/25 leading-none" aria-hidden="true">05</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 space-y-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">45-day delivery commitment</h3>
              <p className="text-twc-grey text-lg font-light leading-relaxed">
                Once design and materials are finalized, we commit to manufacturing, quality checks, and complete installation — all within 45 days.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-serif-display text-twc-red leading-none">45</span>
                <span className="text-twc-grey text-sm tracking-wider uppercase">days</span>
              </div>
              <div className="flex items-center gap-3 mt-4 text-sm text-twc-grey/60">
                <span>Manufacturing</span>
                <span className="w-4 h-px bg-twc-warm/20" />
                <span>QC</span>
                <span className="w-4 h-px bg-twc-warm/20" />
                <span>Installation</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

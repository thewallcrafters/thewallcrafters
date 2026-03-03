'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const services = [
  { title: 'Kitchens', desc: 'Modular & bespoke solutions' },
  { title: 'Wardrobes', desc: 'Walk-in, sliding & hinged' },
  { title: 'TV Units', desc: 'Entertainment walls' },
  { title: 'Storage', desc: 'Built-in cabinetry' },
  { title: 'Commercial', desc: 'Office & retail fit-outs' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-warm py-12 md:py-16" id="what-we-do" ref={ref}>
      <div className="container-wide">
        <motion.div
          className="mb-10 md:mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red"></div>
            <p className="text-[10px] tracking-widest-plus text-[#F5F3EE]/70 uppercase">What we do</p>
          </div>
          
          <div className="max-w-4xl">
            <h2 className="font-serif-display text-section-title tracking-tight text-[#F5F3EE] mb-4">
              Designed for your space.<br />Built to last.
            </h2>
            <p className="text-[#F5F3EE] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We design, craft, and install cabinetry and fixed furniture — from kitchens to commercial interiors. One team handles everything.
            </p>
          </div>
        </motion.div>

        {/* Main Content: Services List + Key Points */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Services List - Left */}
          <div className="lg:col-span-7">
            <p className="text-[10px] tracking-widest-plus text-[#F5F3EE]/70 uppercase mb-4">
              What we craft
            </p>
            
            <div className="border-t border-[#F5F3EE]/10">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group border-b border-[#F5F3EE]/10 py-3 flex items-center justify-between hover:bg-[#F5F3EE]/[0.02] transition-colors duration-300 -mx-4 px-4"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-[#F5F3EE]/60 font-mono w-6">0{index + 1}</span>
                    <h3 className="text-xl md:text-2xl text-[#F5F3EE] group-hover:text-twc-red transition-colors duration-300">{service.title}</h3>
                  </div>
                  <span className="text-sm text-[#F5F3EE] font-light hidden sm:block">{service.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Points - Right */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32 space-y-5">
              <div className="bg-[#2C2824] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#F5F3EE]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#F5F3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F3EE]">Factory finish</h3>
                </div>
                <p className="text-[#F5F3EE]/60 font-light text-sm leading-relaxed">
                  Controlled shop-floor finishing for consistent colour, texture, and detailing — every piece.
                </p>
              </div>

              <div className="border border-[#F5F3EE]/10 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-twc-red/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-twc-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F3EE]">End-to-end</h3>
                </div>
                <p className="text-[#F5F3EE] font-light text-sm leading-relaxed">
                  Design → manufacturing → installation, handled by one accountable team.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-2 px-8 py-4 border border-[#F5F3EE] text-[#F5F3EE] text-sm tracking-wider font-medium hover:bg-[#F5F3EE] hover:text-[#2C2824] transition-all duration-300"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

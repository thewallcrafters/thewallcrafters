'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Core Values
const values = [
  {
    title: 'Precision',
    description: 'Factory-controlled fabrication ensures every piece fits to the millimeter.',
  },
  {
    title: 'Integrity',
    description: 'Transparent pricing, honest timelines, and accountability at every stage.',
  },
  {
    title: 'Craft',
    description: 'Traditional joinery techniques meet modern manufacturing excellence.',
  },
  {
    title: 'Service',
    description: 'Single-point ownership from first meeting to post-installation support.',
  },
];

// Capabilities
const capabilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Design & Architecture',
    description: 'Concept development, 3D visualization, and detailed construction documentation.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Factory Fabrication',
    description: 'Precision manufacturing in our 50,000 sq.ft facility with quality control at every stage.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Project Management',
    description: 'Single-point accountability with real-time tracking and transparent budgeting.',
  },
];

// Process Steps
const process = [
  { number: '01', title: 'Discovery', description: 'Site visit, requirements gathering, and scope definition.' },
  { number: '02', title: 'Design', description: '3D visualization, material selection, and client approval.' },
  { number: '03', title: 'Fabrication', description: 'Factory production with quality checks at every milestone.' },
  { number: '04', title: 'Installation', description: 'On-site execution, finishing, and final handover.' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-twc-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1 min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/wardrobes/WARDROBE 8.jpg"
              alt="TWC Craftsmanship"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C2824]/50 lg:hidden" />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-20 order-1 lg:order-2 bg-twc-charcoal">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                About TWC
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-8">
                Crafting Spaces
                <br />
                <span className="italic font-extralight">That Inspire</span>
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                The Wall Crafters is a design-build firm specializing in modular kitchens, 
                wardrobes, and complete interior fit-outs. Factory precision meets on-site 
                excellence — every piece engineered to last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal leading-tight mb-8">
                Factory Precision Meets
                <br />
                <span className="italic font-extralight">On-Site Excellence</span>
              </h2>
              <div className="space-y-6 text-base text-twc-charcoal/70 font-light leading-relaxed">
                <p>
                  The Wall Crafters began with a simple belief: interior fit-outs should be 
                  delivered with the same precision as aerospace manufacturing. Every joint 
                  perfect, every finish flawless, every deadline met.
                </p>
                <p>
                  Our 50,000 sq.ft factory in Chennai houses CNC machinery, edge-banding lines, 
                  and finishing booths — all under one roof. When components leave our facility, 
                  they are ready to install, not adjust.
                </p>
                <p>
                  From villas and penthouses to corporate offices and hospitality venues, we 
                  bring the same discipline to every project. Design, fabrication, and installation 
                  — managed by one team, for one standard of quality.
                </p>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/office/workstation 3.jpg"
                    alt="TWC Workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/tv-units/Tv unit 4.jpg"
                    alt="TWC Detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/5] overflow-hidden">
                  <Image
                    src="/images/pooja-room/pooja room 4.jpg"
                    alt="TWC Craftsmanship"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section - Preserved */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] bg-[#2C2824] overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-5xl font-light text-white/30">AS</span>
                  </div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Founder Portrait</p>
                </div>
              </div>
            </motion.div>

            {/* Founder Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                About the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal leading-tight mb-4">
                Anikate Singhal
              </h2>
              <p className="text-sm uppercase tracking-widest text-twc-charcoal/50 mb-8">
                Founder & Managing Director
              </p>
              <div className="space-y-6 text-base text-twc-charcoal/70 font-light leading-relaxed">
                <p>
                  I'm the tenth generation of a Madurai business family with roots in the grain 
                  trade. I grew up seeing my family build trust through quality and keeping their 
                  promises. These principles shape my approach to business today.
                </p>
                <p>
                  After completing my BBA in Entrepreneurship from Swiss Business School in 2020, 
                  I worked in our family business for three years. However, I became interested in 
                  a different path: the craft of interior execution. I was fascinated by the 
                  precision needed for a perfectly fitted wardrobe, the logic behind a functional 
                  kitchen, and the discipline required to bring a design to life exactly as envisioned.
                </p>
                <p>
                  In 2023, I took on a 5,000 sq. ft. residential project with one goal: flawless 
                  execution in six months. We achieved that goal. This success gave me the clarity 
                  and confidence to start TWC Fitouts.
                </p>
                <p>
                  What motivates me is simple. I believe interior work deserves the same seriousness 
                  as any craft. It's not about following trends; it's about understanding what people 
                  need, designing practical solutions, and building them with precision.
                </p>
              </div>

              {/* Philosophy */}
              <div className="mt-10 pt-8 border-t border-twc-charcoal/10">
                <p className="text-xs uppercase tracking-widest text-twc-charcoal/50 mb-4">Our Values</p>
                <p className="text-sm text-twc-charcoal/70 italic leading-relaxed">
                  "We are a young company built on old values: exceptional quality, accountability, 
                  and keeping our word."
                </p>
              </div>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-twc-charcoal/10">
                <p className="text-xs uppercase tracking-widest text-twc-charcoal/50 mb-4">Education</p>
                <div className="space-y-3">
                  <p className="text-sm text-twc-charcoal/70">BBA in Entrepreneurship — Swiss Business School, 2020</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-twc-charcoal">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              What Guides Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-light text-twc-red">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-light text-white mb-3">{value.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight mb-8">
                Everything Under
                <br />
                <span className="italic font-extralight">One Roof</span>
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed">
                From initial design concept to final installation, every discipline operates 
                under one management structure. No handoffs, no finger-pointing — just 
                seamless execution.
              </p>
            </motion.div>

            {/* Right - Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-twc-charcoal/10 hover:border-twc-red/30 transition-colors duration-300"
                >
                  <div className="text-twc-red mb-4">{cap.icon}</div>
                  <h3 className="text-lg font-light text-twc-charcoal mb-2">{cap.title}</h3>
                  <p className="text-sm text-twc-charcoal/60 font-light leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal">
              From Concept to Completion
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-8"
              >
                <span className="text-5xl font-light text-twc-red/20">{step.number}</span>
                <h3 className="text-xl font-light text-twc-charcoal mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-twc-charcoal/60 font-light leading-relaxed">{step.description}</p>
                
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-twc-charcoal/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

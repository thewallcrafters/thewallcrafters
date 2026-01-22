'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Core Services with images
const coreServices = [
  {
    id: '01',
    title: 'Modular Kitchens',
    subtitle: 'Factory-Precision Craftsmanship',
    description: 'Complete kitchen systems engineered in our factory — from layout planning to installation. Every cabinet, drawer, and fitting designed for decades of daily use.',
    image: '/images/kitchens/island/island kitchen 1.jpg',
    features: ['Island, L-Shaped, U-Shaped, Parallel layouts', 'Soft-close mechanisms & premium hardware', 'Integrated appliances & smart storage'],
    href: '/kitchens',
  },
  {
    id: '02',
    title: 'Wardrobes & Storage',
    subtitle: 'Space Maximized',
    description: 'Floor-to-ceiling wardrobes, walk-ins, and modular storage systems. Optimized interiors with pull-outs, organizers, and finishes that complement your space.',
    image: '/images/wardrobes/WARDROBE 4.jpg',
    features: ['Sliding & hinged door systems', 'Custom internal configurations', 'Premium laminate & veneer finishes'],
    href: '/interiors',
  },
  {
    id: '03',
    title: 'Office Fit-Outs',
    subtitle: 'Workspaces That Perform',
    description: 'Complete commercial interiors — executive suites, open workstations, conference rooms, and reception areas. Built for productivity and professional presence.',
    image: '/images/office/executive desk 4.jpg',
    features: ['Executive desks & workstations', 'Conference tables with power integration', 'Modular office storage systems'],
    href: '/interiors',
  },
  {
    id: '04',
    title: 'Bespoke Furniture',
    subtitle: 'Made for Your Space',
    description: 'Custom furniture pieces designed and built in-house. TV units, puja rooms, dining sets, bed frames — crafted to exact specifications.',
    image: '/images/tv-units/Tv unit 3.jpg',
    features: ['TV & media units with concealed wiring', 'Puja rooms with traditional detailing', 'Custom dining & bedroom furniture'],
    href: '/interiors',
  },
];

// Additional Services
const additionalServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Architecture & Design',
    description: 'From site analysis to 3D visualization and construction documentation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Civil & MEP',
    description: 'Structural work, electrical, plumbing, and HVAC coordination.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Project Management',
    description: 'Single-point accountability from design to handover.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Custom Solutions',
    description: 'Unique requirements? We design and build to your specifications.',
  },
];

// Process Steps
const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Site visit, requirements gathering, and scope definition.',
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Design',
    description: '3D visualization, material selection, and design approval.',
    duration: 'Week 2-3',
  },
  {
    number: '03',
    title: 'Fabrication',
    description: 'Factory production with quality checks at every stage.',
    duration: 'Week 4-6',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'On-site fitting, finishing, and final handover.',
    duration: 'Week 7-8',
  },
];

// Service Card Component
function ServiceCard({ service, index }: { service: typeof coreServices[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Service number overlay */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-twc-red flex items-center justify-center">
          <span className="text-white text-sm font-light">{service.id}</span>
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-2 block">
            {service.subtitle}
          </span>
          <h3 className="text-3xl md:text-4xl font-light text-twc-charcoal leading-tight">
            {service.title}
          </h3>
        </div>

        <p className="text-base text-twc-charcoal/70 font-light leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 pt-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-twc-charcoal/80">
              <span className="w-1.5 h-1.5 mt-2 bg-twc-red rounded-full flex-shrink-0" />
              <span className="font-light">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={service.href}
          className="inline-flex items-center gap-3 text-twc-charcoal hover:text-twc-red transition-colors duration-300 pt-2"
        >
          <span className="text-sm uppercase tracking-widest">View Projects</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-twc-charcoal flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/wardrobes/WARDROBE 7.jpg"
            alt="TWC Services"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-twc-charcoal via-twc-charcoal/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-8">
              Design. Build.
              <br />
              <span className="italic font-extralight">Deliver.</span>
            </h1>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-xl">
              From modular kitchens to complete office fit-outs, we handle every phase 
              in-house — design, fabrication, and installation. One team, one responsibility, 
              one standard of quality.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="text-3xl font-light text-white">15+</span>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl font-light text-white">500+</span>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Projects Delivered</p>
              </div>
              <div>
                <span className="text-3xl font-light text-white">50K</span>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Sq.Ft Factory</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight max-w-3xl mx-auto">
              Integrated Solutions for Every Space
            </h2>
          </motion.div>

          {/* Services List */}
          <div className="space-y-24 lg:space-y-32">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              Also Available
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal">
              Supporting Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-twc-charcoal/5 flex items-center justify-center mb-6 text-twc-red">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light text-twc-charcoal mb-3">{service.title}</h3>
                <p className="text-sm text-twc-charcoal/60 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-twc-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
                From First Meeting
                <br />
                <span className="italic font-extralight">to Final Handover</span>
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed mb-10">
                A structured approach that keeps projects on track. Clear timelines, 
                transparent communication, and quality checks at every stage ensure 
                we deliver what we promise.
              </p>

              {/* Timeline visualization */}
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <span>Typical Project</span>
                <div className="flex-1 h-px bg-white/20" />
                <span>6-8 Weeks</span>
              </div>
            </motion.div>

            {/* Right - Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-light text-twc-red/30 group-hover:text-twc-red transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-light text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-white/50 font-light">{step.description}</p>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-white/30 whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

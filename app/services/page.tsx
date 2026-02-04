'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Residential Services
const residentialServices = [
  {
    id: '01',
    title: 'Home Interior Design',
    subtitle: 'Complete Living Spaces',
    description: 'End-to-end interior design for homes — from concept to execution. We create cohesive spaces that reflect your lifestyle, preferences, and functional needs.',
    image: '/images/bedroom/bed 1.jpg',
    features: ['Full home interior planning & design', '3D visualization & material selection', 'Color schemes & lighting design'],
    href: '/interiors',
  },
  {
    id: '02',
    title: 'Renovations & Remodeling',
    subtitle: 'Transform Your Space',
    description: 'Breathe new life into existing spaces. Whether it\'s a kitchen upgrade, bathroom renovation, or complete home makeover — we handle structural changes with minimal disruption.',
    image: '/images/kitchens/u-shaped/U kitchen 1.jpg',
    features: ['Kitchen & bathroom renovations', 'Structural modifications', 'Flooring, walls & ceiling upgrades'],
    href: '/interiors',
  },
  {
    id: '03',
    title: 'Custom Furniture',
    subtitle: 'Made for Your Space',
    description: 'Bespoke furniture designed and crafted in our factory. From modular kitchens to wardrobes, TV units to puja rooms — built to exact specifications and site dimensions.',
    image: '/images/wardrobes/WARDROBE 4.jpg',
    features: ['Modular kitchens & wardrobes', 'TV units, beds & storage systems', 'Puja rooms with traditional detailing'],
    href: '/interiors',
  },
  {
    id: '04',
    title: 'Space Planning',
    subtitle: 'Optimize Every Square Foot',
    description: 'Strategic layout planning that maximizes functionality without compromising aesthetics. We analyze traffic flow, storage needs, and lifestyle patterns to create efficient spaces.',
    image: '/images/storage/bookshelf 2.jpg',
    features: ['Floor plan optimization', 'Storage & organization solutions', 'Furniture placement & flow'],
    href: '/interiors',
  },
];

// Commercial Services
const commercialServices = [
  {
    id: '01',
    title: 'Office Interior Design',
    subtitle: 'Workspaces That Perform',
    description: 'Complete office interiors designed for productivity, collaboration, and brand identity. From executive suites to open workstations — spaces that inspire your team.',
    image: '/images/office/executive desk 4.jpg',
    features: ['Executive cabins & workstations', 'Conference rooms & meeting spaces', 'Reception areas & lobbies'],
    href: '/interiors',
  },
  {
    id: '02',
    title: 'Retail Space Design',
    subtitle: 'Spaces That Sell',
    description: 'Retail environments that enhance customer experience and showcase your products. Display systems, counters, and layouts optimized for customer flow and engagement.',
    image: '/images/office/display 1.jpg',
    features: ['Showcase counters & display systems', 'Lab & utility cabinets for non-medical use', 'Branding integration & signage'],
    href: '/interiors',
  },
  {
    id: '03',
    title: 'Hospitality Design',
    subtitle: 'Memorable Experiences',
    description: 'Interiors for restaurants, hotels, and hospitality venues. We create atmospheres that leave lasting impressions — from intimate cafes to large banquet spaces.',
    image: '/images/dining/Bar table 1.jpg',
    features: ['Restaurant & cafe interiors', 'Hotel rooms & lobby design', 'Bar counters & vanity units'],
    href: '/interiors',
  },
  {
    id: '04',
    title: 'Corporate Branding',
    subtitle: 'Identity Through Interiors',
    description: 'Translate your brand values into physical spaces. We integrate brand colors, materials, and messaging into interior design for a cohesive corporate identity.',
    image: '/images/office/workstation 2.jpg',
    features: ['Brand-aligned color & material palettes', 'Logo integration & feature walls', 'Consistent design language across locations'],
    href: '/interiors',
  },
];

// Additional Services
const additionalServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Consultation Services',
    description: 'Expert guidance on design direction, material selection, and budget planning. Get professional advice before committing to a full project.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Project Management',
    description: 'Single-point accountability from design to handover. We coordinate all vendors, timelines, and deliverables so you don\'t have to.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Architecture & Design',
    description: 'From site analysis to 3D visualization and construction documentation. Complete architectural services for new builds and renovations.',
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
function ServiceCard({ service, index }: { service: typeof residentialServices[0]; index: number }) {
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
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl">
              From modular kitchens to complete office fit-outs, we handle every phase 
              in-house — design, fabrication, and installation. One team, one responsibility, 
              one standard of quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              01 — Residential Services
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight">
                Homes That Reflect You
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed lg:text-right max-w-lg lg:ml-auto">
                Complete residential interior solutions — from initial design concepts to final installation. We create spaces that are functional, beautiful, and uniquely yours.
              </p>
            </div>
          </motion.div>

          {/* Residential Services List */}
          <div className="space-y-24 lg:space-y-32">
            {residentialServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-twc-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              02 — Commercial Services
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight">
                Spaces That Mean Business
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed lg:text-right max-w-lg lg:ml-auto">
                Professional environments designed for productivity, brand presence, and customer experience. From corporate offices to retail showrooms.
              </p>
            </div>
          </motion.div>

          {/* Commercial Services List */}
          <div className="space-y-24 lg:space-y-32">
            {commercialServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              03 — Additional Services
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal">
              Supporting Your Project
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

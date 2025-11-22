'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Architecture & Design',
    description: 'Complete architectural services from concept to construction documentation, ensuring design intent translates into built reality.',
    features: [
      'Site analysis and master planning',
      'Architectural design and 3D visualization',
      'Interior design and space planning',
      'Detailed working drawings and specifications',
    ],
  },
  {
    title: 'Modular Kitchens',
    description: 'Factory-fabricated, precision-engineered kitchen systems designed for functionality, durability, and aesthetic appeal.',
    features: [
      'Custom layouts: L-shaped, U-shaped, Island, Parallel',
      'Premium finishes: Matte, Gloss, Wood-grain laminates',
      'Integrated appliances and smart storage solutions',
      'Soft-close mechanisms and concealed hardware',
    ],
  },
  {
    title: 'Wardrobes & Storage',
    description: 'Wall-to-wall storage systems, walk-in wardrobes, and modular cabinetry that maximize space while blending seamlessly into interiors.',
    features: [
      'Floor-to-ceiling wardrobes with optimized internals',
      'Sliding and hinged door systems',
      'Drawer organizers, pull-outs, and accessories',
      'Customized finishes to match interior themes',
    ],
  },
  {
    title: 'Bespoke Furniture',
    description: 'Custom-designed furniture pieces crafted in-house—from dining tables to media units, conference tables, and puja rooms.',
    features: [
      'Conference tables with integrated power and cable management',
      'TV and media units with concealed wiring',
      'Puja rooms with traditional detailing',
      'Made-to-measure pieces for unique spaces',
    ],
  },
  {
    title: 'Civil & MEP Services',
    description: 'Complete civil engineering and MEP (mechanical, electrical, plumbing) coordination to ensure all systems work in harmony.',
    features: [
      'Structural modifications and false ceiling work',
      'Electrical layout, lighting design, and automation',
      'Plumbing and HVAC system integration',
      'On-site supervision and quality control',
    ],
  },
  {
    title: 'Turnkey Project Management',
    description: 'End-to-end project execution where design, fabrication, civil work, and installation are managed under one roof for seamless delivery.',
    features: [
      'Single point of accountability from design to handover',
      'Coordinated scheduling and material procurement',
      'Real-time project tracking and transparent budgeting',
      'Post-handover support and maintenance guidance',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation & Briefing',
    description: 'We begin with understanding your requirements, site conditions, and functional needs through detailed discussions and site visits.',
  },
  {
    step: '02',
    title: 'Design Development',
    description: 'Our team develops design concepts, 3D visualizations, and material palettes, refining them based on your feedback until approval.',
  },
  {
    step: '03',
    title: 'Fabrication & Coordination',
    description: 'Factory fabrication runs parallel to on-site civil and MEP work, with weekly coordination meetings to keep everything aligned.',
  },
  {
    step: '04',
    title: 'Installation & Handover',
    description: 'Our installation teams execute on-site work with precision, followed by final inspections, snag rectification, and documentation.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-twc-charcoal text-twc-warm">
      {/* Hero Section */}
      <section className="relative h-auto py-32 w-full overflow-hidden bg-[#1a1a1a] pt-28">
        <div className="container-wide flex items-center">
          <motion.div
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-twc-red rounded-full"></div>
              <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
                What we do
              </p>
            </div>

            <h1 className="font-serif-display text-display text-twc-warm">
              Services that build better spaces.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-twc-warm/80 font-light">
              From architecture and modular kitchens to bespoke furniture and turnkey project management, TWC Fit-Outs delivers integrated solutions for residential and commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-twc-charcoal relative noise-texture">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="border border-twc-warm/10 rounded-3xl p-8 bg-white/5 backdrop-blur hover:border-twc-warm/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-twc-red rounded-full"></div>
                    <h2 className="text-2xl font-serif-display">{service.title}</h2>
                  </div>
                  <p className="text-twc-warm/80 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-twc-grey">
                        <span className="w-1 h-1 mt-2 bg-twc-warm/40 rounded-full flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-twc-warm text-twc-charcoal">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-twc-grey">How we work</span>
            <h2 className="font-serif-display text-[clamp(2.5rem,4vw,4rem)] leading-tight">
              From concept to completion.
            </h2>
            <p className="text-lg text-twc-charcoal/75">
              Our integrated approach ensures every phase—design, fabrication, and execution—flows seamlessly for timely, quality-driven delivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-5xl font-serif-display text-twc-red/20">{step.step}</div>
                <h3 className="text-xl font-serif-display text-twc-charcoal">{step.title}</h3>
                <p className="text-twc-charcoal/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-twc-charcoal">
        <div className="container-wide text-center space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-twc-grey">Let's get started</p>
          <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.8rem)] leading-tight max-w-4xl mx-auto">
            Have a project in mind? Let's discuss how we can bring it to life.
          </h2>
          <p className="text-lg text-twc-warm/75 max-w-3xl mx-auto">
            Whether it's a new build, renovation, or custom fit-out, we'll map the scope and guide you through every step—from initial design to final handover.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:main@thewallcrafters.com"
              className="border border-twc-warm px-8 py-4 text-sm tracking-wider uppercase hover:bg-twc-warm hover:text-twc-charcoal transition-colors duration-300"
            >
              Email the studio
            </a>
            <a
              href="/work"
              className="px-8 py-4 text-sm tracking-wider uppercase text-twc-warm/80 hover:text-twc-red transition-colors duration-300"
            >
              View our work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const kitchenLayouts = [
  {
    title: 'Island Kitchen',
    subtitle: "The entertainer's choice",
    description: 'A central island creates the perfect stage for cooking, conversation, and gathering. Ideal for open-plan living with space to spare.',
    images: [
      '/images/kitchens/island/island kitchen 1.jpg',
      '/images/kitchens/island/island kitchen 2.jpg',
      '/images/kitchens/island/island kitchen 3.jpg',
    ],
    features: ['Central workspace', 'Social cooking', 'Open-plan friendly'],
    slug: 'island',
  },
  {
    title: 'L-Shaped Kitchen',
    subtitle: 'The versatile classic',
    description: 'Corner efficiency meets flexible design. The L-shape adapts to any space while maintaining an ergonomic work triangle.',
    images: [
      '/images/kitchens/l-shaped/L kitchen 1.jpg',
      '/images/kitchens/l-shaped/L kitchen 2.jpg',
      '/images/kitchens/l-shaped/L kitchen 3.jpg',
    ],
    features: ['Efficient corners', 'Work triangle', 'Flexible layout'],
    slug: 'l-shaped',
  },
  {
    title: 'U-Shaped Kitchen',
    subtitle: 'Maximum storage & counter',
    description: 'Three walls of cabinetry deliver unmatched storage and prep space. Perfect for serious home cooks who need room to work.',
    images: [
      '/images/kitchens/u-shaped/U kitchen 1.jpg',
      '/images/kitchens/u-shaped/U kitchen 2.jpg',
      '/images/kitchens/u-shaped/U kitchen 3.jpg',
    ],
    features: ['Maximum storage', 'Ample counter', 'Enclosed feel'],
    slug: 'u-shaped',
  },
  {
    title: 'Parallel Kitchen',
    subtitle: 'The galley-style efficiency',
    description: "Two facing runs create a streamlined workflow. Compact yet capable — everything within arm's reach.",
    images: [
      '/images/kitchens/parallel/parallel kitchen 1.jpg',
      '/images/kitchens/parallel/parallel kitchen 2.jpg',
      '/images/kitchens/parallel/parallel kitchen 3.jpg',
    ],
    features: ['Space efficient', 'Linear workflow', 'Easy access'],
    slug: 'parallel',
  },
  {
    title: 'Straight Kitchen',
    subtitle: 'Simple & compact',
    description: 'A single-wall solution that delivers functionality without footprint. Ideal for apartments and studio spaces.',
    images: [
      '/images/kitchens/straight/straight kitchen 1.jpg',
      '/images/kitchens/straight/straight kitchen 2.jpg',
      '/images/kitchens/straight/straight kitchen 3.jpeg',
    ],
    features: ['Minimal footprint', 'Budget friendly', 'Easy to plan'],
    slug: 'straight',
  },
];

export default function KitchensPage() {
  return (
    <div className="min-h-screen bg-twc-warm">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-twc-dark flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/kitchens/island/island kitchen 2.jpg"
            alt="TWC Kitchens"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2824] via-[#2C2824]/80 to-transparent" />
        </div>

        <div className="relative container-wide w-full py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-twc-red" />
              <span className="text-xs tracking-widest text-twc-red uppercase">Kitchens</span>
            </div>

            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#F5F3EE] leading-[1.1] mb-8">
              Kitchens built for<br />
              <span className="font-light italic">how you cook.</span>
            </h1>

            <p className="text-lg text-[#F5F3EE]/70 font-light leading-relaxed max-w-xl">
              Factory-crafted modular kitchens designed around Indian cooking habits — heat, oil, moisture, and daily wear all planned from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 md:py-28 bg-twc-warm">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-2xl md:text-3xl text-twc-charcoal font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Every kitchen we build is designed around your space, your workflow, and your daily rituals. 
              <span className="text-twc-charcoal/50"> Choose from five proven layouts, each engineered for different lifestyles and footprints.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Kitchen Layouts */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="container-wide space-y-24 md:space-y-32">
          {kitchenLayouts.map((kitchen, index) => (
            <motion.article
              key={kitchen.slug}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Header */}
              <div className="grid lg:grid-cols-12 gap-8 mb-10">
                <div className="lg:col-span-4">
                  <p className="text-[10px] tracking-widest text-twc-charcoal/40 uppercase mb-3">
                    {kitchen.subtitle}
                  </p>
                  <h2 className="font-serif-display text-4xl md:text-5xl text-twc-charcoal">
                    {kitchen.title}
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-6">
                  <p className="text-twc-charcoal/60 font-light leading-relaxed text-lg mb-6">
                    {kitchen.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {kitchen.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 text-xs tracking-wide text-twc-charcoal/60 border border-twc-charcoal/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Gallery - 3 images */}
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {/* Large image */}
                <div className="col-span-12 md:col-span-8">
                  <div className="relative aspect-[4/3] overflow-hidden bg-twc-charcoal/5">
                    <Image
                      src={kitchen.images[0]}
                      alt={`${kitchen.title} - Main view`}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                {/* Two stacked images */}
                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                  <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden bg-twc-charcoal/5">
                    <Image
                      src={kitchen.images[1]}
                      alt={`${kitchen.title} - Detail view`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden bg-twc-charcoal/5">
                    <Image
                      src={kitchen.images[2]}
                      alt={`${kitchen.title} - Additional view`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-twc-charcoal">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] tracking-widest-plus text-twc-warm/40 uppercase mb-6">Our Process</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-twc-warm leading-tight mb-8">
                From brief to installed<br />
                <span className="text-twc-warm/50">in 45 days.</span>
              </h2>
              <div className="space-y-6 text-twc-warm/60 font-light leading-relaxed">
                <p>
                  We start with your kitchen dimensions and cooking habits. Our design team translates these into 3D layouts you can walk through before a single panel is cut.
                </p>
                <p>
                  Once approved, manufacturing begins in our factory — CNC precision, controlled finishing, quality checks at every stage. Then our installation crew brings it all together on site.
                </p>
              </div>
              <div className="flex gap-4 pt-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-twc-red text-twc-charcoal text-sm tracking-wider uppercase hover:bg-twc-red/90 transition-colors duration-300"
                >
                  Get your estimate
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative aspect-square overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/kitchens/l-shaped/L kitchen 2.jpg"
                alt="Kitchen manufacturing process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

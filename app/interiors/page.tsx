'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Residential Categories
const residentialCategories = [
  {
    title: 'Wardrobes',
    description: 'Walk-in, sliding, or hinged — wardrobes engineered for space and style.',
    image: '/images/wardrobes/WARDROBE 2.jpg',
    href: '/interiors/storage',
  },
  {
    title: 'Bedrooms',
    description: 'Complete bedroom solutions from beds to dressers and side units.',
    image: '/images/bedroom/bed 1.jpg',
    href: '/interiors/storage',
  },
  {
    title: 'TV & Media Units',
    description: 'Minimal media walls with hidden wiring and integrated lighting.',
    image: '/images/tv-units/tv unit 1.jpg',
    href: '/interiors/tv-units',
  },
  {
    title: 'Pooja Rooms',
    description: 'Sacred spaces crafted with wood, brass, proportion and light.',
    image: '/images/pooja-room/Pooja room 1.jpg',
    href: '/interiors/puja-room',
  },
  {
    title: 'Storage & Shelving',
    description: 'Bookshelves, shoe racks, and custom storage that blend into architecture.',
    image: '/images/storage/bookshelf 1.jpg',
    href: '/interiors/storage',
  },
  {
    title: 'Dining & Bar',
    description: 'Bar tables, crockery units, and dining furniture for refined entertaining.',
    image: '/images/dining/Bar table 1.jpg',
    href: '/interiors/storage',
  },
];

// Commercial Categories
const commercialCategories = [
  {
    title: 'Executive Desks',
    description: 'Statement desks for leadership spaces with integrated cable management.',
    image: '/images/office/executive desk 2.jpg',
    href: '/interiors/conference-tables',
  },
  {
    title: 'Workstations',
    description: 'Modular workstations designed for productivity and collaboration.',
    image: '/images/office/workstation 2.jpg',
    href: '/interiors/conference-tables',
  },
  {
    title: 'Office Storage',
    description: 'Filing systems, modular storage, and organizational solutions.',
    image: '/images/office/storage unit 1.jpg',
    href: '/interiors/conference-tables',
  },
  {
    title: 'Display Units',
    description: 'Trophy displays, showcases, and exhibition furniture.',
    image: '/images/office/display 1.jpg',
    href: '/interiors/conference-tables',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Category Card Component
function CategoryCard({ 
  category, 
  index,
  size = 'normal' 
}: { 
  category: typeof residentialCategories[0]; 
  index: number;
  size?: 'normal' | 'large';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={category.href} className="group block">
        <div className={`relative overflow-hidden bg-twc-charcoal ${
          size === 'large' ? 'aspect-[4/3]' : 'aspect-[3/4]'
        }`}>
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-light text-white mb-2 tracking-wide">
              {category.title}
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-xs">
              {category.description}
            </p>
            
            {/* Arrow indicator */}
            <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <svg 
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Featured Image Component for hero
function FeaturedImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );
}

export default function InteriorsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen bg-twc-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left - Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-20 order-2 lg:order-1">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Interiors & Fit-Outs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-8">
                Spaces That
                <br />
                <span className="italic font-extralight">Work & Live</span>
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
                From intimate pooja rooms to expansive office fit-outs, we craft interiors 
                that balance beauty with function. Every piece is designed for the space 
                it inhabits.
              </p>
              
              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div>
                  <span className="text-3xl font-light text-white">500+</span>
                  <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Spaces Delivered</p>
                </div>
                <div>
                  <span className="text-3xl font-light text-white">10</span>
                  <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Categories</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Collage */}
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2 lg:p-4">
              <FeaturedImage 
                src="/images/wardrobes/WARDROBE 3.jpg" 
                alt="Wardrobe Design"
                className="col-span-1 row-span-2"
              />
              <FeaturedImage 
                src="/images/office/executive desk 3.jpg" 
                alt="Executive Office"
                className="col-span-1 row-span-1"
              />
              <FeaturedImage 
                src="/images/pooja-room/Pooja room2.jpg" 
                alt="Pooja Room"
                className="col-span-1 row-span-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              01 — Residential
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight">
                Home Interiors
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed lg:text-right">
                Complete solutions for every room — wardrobes, bedrooms, entertainment units, 
                sacred spaces, and storage systems designed for the way you live.
              </p>
            </div>
          </motion.div>

          {/* Residential Grid - Asymmetric */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {residentialCategories.map((category, index) => (
              <CategoryCard 
                key={category.title} 
                category={category} 
                index={index}
                size={index === 0 || index === 3 ? 'large' : 'normal'}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider with Quote */}
      <section className="py-16 md:py-24 bg-twc-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic"
          >
            "Furniture should serve space, not dominate it."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm uppercase tracking-widest text-white/50"
          >
            — TWC Design Philosophy
          </motion.p>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-twc-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-4 block">
              02 — Commercial
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-twc-charcoal leading-tight">
                Office & Workspace
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed lg:text-right">
                Professional environments that inspire productivity — executive suites, 
                open workstations, and complete office fit-outs built for business.
              </p>
            </div>
          </motion.div>

          {/* Commercial Grid - 2x2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {commercialCategories.map((category, index) => (
              <CategoryCard 
                key={category.title} 
                category={category} 
                index={index}
                size="large"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/wardrobes/WARDROBE 6.jpg"
                alt="TWC Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-twc-charcoal leading-tight mb-6">
                From Concept to Installation
              </h2>
              <p className="text-base text-twc-charcoal/60 font-light leading-relaxed mb-8">
                Every interior project begins with understanding how you use your space. 
                We measure, design, manufacture, and install — managing every detail so 
                you receive a finished product, not a project to manage.
              </p>
              
              {/* Steps */}
              <div className="space-y-4 mb-10">
                {['Site Survey & Brief', 'Design Development', 'Factory Production', 'Installation & Handover'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full border border-twc-charcoal/20 flex items-center justify-center text-sm text-twc-charcoal/60">
                      {i + 1}
                    </span>
                    <span className="text-twc-charcoal font-light">{step}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/services" 
                className="inline-flex items-center gap-3 text-twc-charcoal hover:text-twc-red transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-widest">Learn About Our Process</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkListingPage() {
  const projects = [
    // Row 1
    {
      title: 'Island Kitchen',
      category: 'Kitchen',
      slug: 'island-kitchen',
      image: '/images/kitchens/island/island kitchen 1.jpg',
    },
    {
      title: 'Walk-in Wardrobe',
      category: 'Wardrobe',
      slug: 'walk-in-wardrobe',
      image: '/images/wardrobes/WARDROBE 1.jpg',
    },
    // Row 2
    {
      title: 'Executive Office',
      category: 'Commercial',
      slug: 'executive-office',
      image: '/images/office/executive desk 2.jpg',
    },
    {
      title: 'L-Shaped Kitchen',
      category: 'Kitchen',
      slug: 'l-shaped-kitchen',
      image: '/images/kitchens/l-shaped/L kitchen 1.jpg',
    },
    // Row 3
    {
      title: 'Entertainment Unit',
      category: 'Living Room',
      slug: 'entertainment-unit',
      image: '/images/tv-units/Tv unit 2.jpg',
    },
    {
      title: 'Pooja Room',
      category: 'Living Room',
      slug: 'pooja-room',
      image: '/images/pooja-room/Pooja room 1.jpg',
    },
    // Row 4
    {
      title: 'U-Shaped Kitchen',
      category: 'Kitchen',
      slug: 'u-shaped-kitchen',
      image: '/images/kitchens/u-shaped/U kitchen 1.jpg',
    },
    {
      title: 'Hinged Wardrobe',
      category: 'Wardrobe',
      slug: 'hinged-wardrobe',
      image: '/images/wardrobes/WARDROBE 5.jpg',
    },
    // Row 5
    {
      title: 'Parallel Kitchen',
      category: 'Kitchen',
      slug: 'parallel-kitchen',
      image: '/images/kitchens/parallel/parallel kitchen 1.jpg',
    },
    {
      title: 'Office Workstation',
      category: 'Commercial',
      slug: 'office-workstation',
      image: '/images/office/workstation 1.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-warm">
      {/* Dark header band for navbar visibility */}
      <div className="bg-twc-charcoal">
        {/* Hero section */}
        <section className="pt-32 pb-16 md:pb-20">
          <div className="container-wide">
            <motion.div
              className="max-w-3xl space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-twc-warm tracking-tight">
                Work
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-twc-warm/60 font-light max-w-xl">
                A selection of kitchens, wardrobes, and interiors crafted in our factory.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Projects Grid - 2 Column Masonry */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="columns-1 md:columns-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block mb-12 md:mb-16 break-inside-avoid"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-twc-charcoal/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      priority={index < 2}
                    />
                  </div>
                  <h2 className="font-serif-display text-xl md:text-2xl text-twc-charcoal mt-5 group-hover:text-twc-red transition-colors duration-300 uppercase tracking-wide">
                    {project.title}
                  </h2>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

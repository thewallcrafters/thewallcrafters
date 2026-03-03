'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkListingPage() {
  const projects = [
    {
      title: 'JP Residence',
      category: 'Residential',
      slug: 'jp-residence',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Meiyyappan Residence',
      category: 'Residential',
      slug: 'meiyyappan-residence',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Villa16',
      category: 'Residential',
      slug: 'villa16',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Vaishali Residence',
      category: 'Residential',
      slug: 'vaishali-residence',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
        <div className="container-wide">
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
                  <h2 className="font-serif-display text-xl md:text-2xl text-[#F5F3EE] mt-5 group-hover:text-twc-red transition-colors duration-300 uppercase tracking-wide">
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

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function WorkListingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'JP Residence',
      location: 'Madurai',
      tag: 'Residential · Interior Fit-Out',
      category: 'Residential',
      slug: 'jp-residence',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Meiyyappan Residence',
      location: 'Coimbatore',
      tag: 'Residential · Interior Fit-Out',
      category: 'Residential',
      slug: 'meiyyappan-residence',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Villa16',
      location: 'Valar Nagar, Madurai',
      tag: 'Residential · Interior Fit-Out',
      category: 'Residential',
      slug: 'villa16',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Vaishali Residence',
      location: 'Thiruparankundram, Madurai',
      tag: 'Residential · Interior Fit-Out',
      category: 'Residential',
      slug: 'vaishali-residence',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = ['All', 'Residential', 'Commercial'];

  return (
    <div className="min-h-screen bg-twc-charcoal relative noise-texture">
      {/* Hero section */}
      <section className="section-padding pt-32">
        <div className="container-wide">
          <motion.div
            className="max-w-4xl space-y-8 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-twc-red rounded-full"></div>
              <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
                Selected Projects
              </p>
            </div>

            <h1 className="font-serif-display text-display text-twc-warm">
              Work
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-twc-warm/80 font-light max-w-2xl">
              A curated selection of residential and commercial projects that showcase our approach to integrated architecture, interiors and execution.
            </p>
          </motion.div>

          {/* Filter row */}
          <motion.div
            className="flex gap-6 mb-8 border-b border-twc-warm/10 pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm tracking-wider relative group ${
                  activeFilter === filter ? 'text-twc-warm' : 'text-twc-grey'
                } hover:text-twc-warm transition-colors duration-300`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    className="absolute -bottom-6 left-1/2 w-1.5 h-1.5 bg-twc-red rounded-full"
                    layoutId="activeFilter"
                    style={{ x: '-50%' }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24" ref={ref}>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/work/${project.slug}`}
                className="group block"
                data-cursor-label="View Project"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Project image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-twc-charcoal/0 group-hover:bg-twc-charcoal/20 transition-colors duration-500" />
                  </div>

                  {/* Project info */}
                  <motion.div
                    className="space-y-4"
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-twc-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
                        {project.tag}
                      </p>
                    </div>

                    <h2 className="font-serif-display text-3xl md:text-4xl tracking-tight group-hover:text-twc-red transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-sm tracking-wider text-twc-grey">
                      {project.location}
                    </p>

                    {/* View project link - appears on hover */}
                    <motion.div
                      className="flex items-center gap-2 text-sm tracking-wider text-twc-warm/0 group-hover:text-twc-warm transition-colors duration-300"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <span>View project</span>
                      <span>→</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

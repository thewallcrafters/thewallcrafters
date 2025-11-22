'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      name: 'JP Residence',
      location: 'Madurai',
      type: 'Residential · Interior Fit-out',
      description: 'A modern yet cozy home balancing contemporary design with everyday functionality. Built-in storage and warm materials deliver comfort and clarity.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
      imagePosition: 'left',
      slug: 'jp-residence',
    },
    {
      name: 'Meiyyappan Residence',
      location: 'Coimbatore',
      type: 'Residential · Full Interior',
      description: 'Traditional details blended with a modern minimalist shell. Clean lines, neutral palettes and integrated cabinetry create a calm, clutter-free space.',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920',
      imagePosition: 'right',
      slug: 'meiyyappan-residence',
    },
    {
      name: 'Villa16',
      location: 'Valar Nagar, Madurai',
      type: 'Residential Villa · Architecture + Interiors',
      description: 'A contemporary villa defined by split levels, double-height volumes, polished concrete, glass and integrated smart systems.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920',
      imagePosition: 'left',
      slug: 'villa16',
    },
    {
      name: 'Vaishali Residence',
      location: 'Thiruparankundram, Madurai',
      type: 'Traditional-Modern Fusion',
      description: 'A fusion of Kerala-style elements — wood, brass, courtyards — with open modern layouts and natural light.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
      imagePosition: 'right',
      slug: 'vaishali-residence',
    },
  ];

  return (
    <section className="bg-twc-dark section-padding relative noise-texture" id="work">
      <div className="container-wide">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-display text-display">Signature projects.</h2>
        </motion.div>

        <div className="space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        project.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
      }`}
    >
      <motion.div
        className={`space-y-6 ${project.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}
        initial={{ opacity: 0, x: project.imagePosition === 'right' ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-twc-red rounded-full"></div>
          <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
            {project.type}
          </p>
        </div>

        <h3 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
          {project.name}
        </h3>

        <p className="text-sm tracking-wider text-twc-grey uppercase">
          {project.location}
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-twc-warm/80 font-light max-w-lg">
          {project.description}
        </p>

        <motion.a
          href={`/work/${project.slug}`}
          className="text-sm tracking-wider text-twc-warm/70 hover:text-twc-red transition-colors duration-300 group flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          <span>View Project</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      </motion.div>

      <motion.a
        href={`/work/${project.slug}`}
        className={`relative aspect-[4/3] overflow-hidden group cursor-pointer ${
          project.imagePosition === 'right' ? 'lg:col-start-2' : ''
        }`}
        data-cursor-label="View Project"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.a>
    </div>
  );
}

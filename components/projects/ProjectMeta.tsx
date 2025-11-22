'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectMetaProps {
  name: string;
  location: string;
  category: string;
  scope: string;
  year?: string;
  size?: string;
}

export default function ProjectMeta({ name, location, category, scope, year, size }: ProjectMetaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metaItems = [
    { label: 'Project', value: name },
    { label: 'Location', value: location },
    { label: 'Category', value: category },
    { label: 'Scope', value: scope },
  ];

  if (year) metaItems.push({ label: 'Year', value: year });
  if (size) metaItems.push({ label: 'Size', value: size });

  return (
    <motion.div
      ref={ref}
      className="space-y-8 lg:sticky lg:top-32"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Heading */}
      <div className="space-y-4">
        <div className="w-2 h-2 bg-twc-red rounded-full"></div>
        <h3 className="text-sm tracking-widest-plus text-twc-grey uppercase">
          Project Details
        </h3>
      </div>

      {/* Meta items */}
      <div className="space-y-6 border-l border-twc-warm/10 pl-6">
        {metaItems.map((item, index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-xs tracking-wider text-twc-grey uppercase">
              {item.label}
            </p>
            <p className="text-lg text-twc-warm/90">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectSection {
  title: string;
  content: string | string[];
}

interface ProjectBodyProps {
  sections: ProjectSection[];
}

export default function ProjectBody({ sections }: ProjectBodyProps) {
  return (
    <div className="space-y-20 lg:space-y-24">
      {sections.map((section, index) => (
        <ProjectSection key={index} section={section} index={index} />
      ))}
    </div>
  );
}

function ProjectSection({ section, index }: { section: ProjectSection; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Section title with red dot */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-twc-red rounded-full"></div>
        <h3 className="text-2xl md:text-3xl font-serif-display tracking-wide">
          {section.title}
        </h3>
      </div>

      {/* Section content */}
      <div className="space-y-4 text-twc-warm/80 text-lg leading-relaxed font-light pl-6">
        {Array.isArray(section.content) ? (
          <ul className="space-y-3">
            {section.content.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-twc-red mt-2">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{section.content}</p>
        )}
      </div>
    </motion.div>
  );
}

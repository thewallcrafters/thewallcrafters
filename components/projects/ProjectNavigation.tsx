'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectNavigationProps {
  nextSlug: string;
}

export default function ProjectNavigation({ nextSlug }: ProjectNavigationProps) {
  return (
    <section className="section-padding border-t border-twc-warm/10">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link
            href="/work"
            className="flex items-center gap-2 text-sm tracking-wider text-twc-grey hover:text-twc-warm transition-colors duration-300"
          >
            <motion.div whileHover={{ x: -5 }} className="flex items-center gap-2">
              <span>←</span>
              <span>Back to Work</span>
            </motion.div>
          </Link>

          <Link
            href={`/work/${nextSlug}`}
            className="flex items-center gap-2 text-sm tracking-wider text-twc-grey hover:text-twc-red transition-colors duration-300"
          >
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
              <span>Next Project</span>
              <span>→</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

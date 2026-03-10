'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectHeroProps {
  title: string;
  location: string;
  type: string;
  image: string;
}

export default function ProjectHero({ title, location, type, image }: ProjectHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2824] via-[#2C2824]/60 to-[#2C2824]/80 z-10 noise-texture"></div>

      {/* Background image with scale-in effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Content overlay - bottom left positioning */}
      <div className="relative z-20 h-full container-wide flex items-end pb-20">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Type label with red dot */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-twc-red rounded-full"></div>
            <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
              {type}
            </p>
          </div>

          {/* Project title */}
          <h1 className="font-serif-display text-hero text-[#F5F3EE]">
            {title}
          </h1>

          {/* Location */}
          <p className="text-sm tracking-wider text-twc-grey uppercase">
            {location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

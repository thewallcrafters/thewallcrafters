'use client';

import { motion } from 'framer-motion';

interface CategoryHeroProps {
  title: string;
  description: string;
  image?: string;
}

export default function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <section className={`relative ${image ? 'h-[70vh]' : 'h-auto py-32'} w-full overflow-hidden`}>
      {image && (
        <>
          <div className="absolute inset-0 bg-twc-charcoal/80 z-10"></div>
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          ></motion.div>
        </>
      )}

      <div className={`${image ? 'relative z-20 h-full' : ''} container-wide flex items-center ${image ? 'justify-center text-center' : ''}`}>
        <motion.div
          className={`${image ? 'max-w-4xl' : 'max-w-3xl'} space-y-8`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={`flex items-center gap-3 ${image ? 'justify-center' : ''}`}>
            <div className="w-2 h-2 bg-twc-red rounded-full"></div>
            <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
              TWC Fit-Outs
            </p>
          </div>

          <h1 className="font-serif-display text-display text-twc-warm">
            {title}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-twc-warm/80 font-light max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

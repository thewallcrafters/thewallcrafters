'use client';

import { motion } from 'framer-motion';

export default function ProjectGalleryTitle() {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl md:text-3xl font-serif-display">Project Gallery</h3>
    </motion.div>
  );
}

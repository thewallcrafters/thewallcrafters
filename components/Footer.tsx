'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-twc-dark py-16 border-t border-twc-warm/5 relative noise-texture">
      <div className="container-wide">
        <div className="text-center space-y-6">
          <motion.div
            className="flex items-baseline justify-center gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-4xl font-bold tracking-tight">twc</span>
            <motion.span
              className="w-2 h-2 bg-twc-red rounded-full ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.span>
          </motion.div>
          <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase font-serif-display">
            FIT-OUTS
          </p>
          <p className="text-sm text-twc-grey/60 pt-8">
            © {new Date().getFullYear()} The WallCrafters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

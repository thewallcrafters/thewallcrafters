'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-twc-charcoal flex items-center">
      <div className="container-wide py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
            404 — Page Not Found
          </span>
          <h1 className="font-serif-display text-6xl md:text-8xl lg:text-[10rem] text-twc-warm leading-none mb-6">
            404
          </h1>
          <p className="text-lg text-twc-warm/60 font-light max-w-md mx-auto mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-twc-warm text-twc-charcoal px-8 py-4 text-sm tracking-wider font-medium hover:bg-twc-warm/90 transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/interiors"
              className="inline-flex items-center gap-3 border border-twc-warm/30 text-twc-warm px-8 py-4 text-sm tracking-wider hover:bg-twc-warm/5 transition-colors duration-300"
            >
              Browse Interiors
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

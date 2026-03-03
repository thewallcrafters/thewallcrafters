'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-twc-charcoal flex items-center">
      <div className="container-wide py-32 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
          Something went wrong
        </span>
        <h1 className="font-serif-display text-5xl md:text-7xl text-twc-warm leading-none mb-6">
          Error
        </h1>
        <p className="text-lg text-twc-warm/60 font-light max-w-md mx-auto mb-12">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-3 bg-[#2C2824] text-[#F5F3EE] px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#2C2824]/90 transition-colors duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-[#2C2824]/30 text-[#2C2824] px-8 py-4 text-sm tracking-wider hover:bg-[#2C2824]/5 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

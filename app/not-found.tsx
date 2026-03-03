import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-twc-charcoal flex items-center">
      <div className="container-wide py-32 text-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
            404 — Page Not Found
          </span>
          <h1 className="font-serif-display text-6xl md:text-8xl lg:text-[10rem] text-twc-warm leading-none mb-6">
            404
          </h1>
          <p className="text-lg text-twc-warm/60 font-light max-w-md mx-auto mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[#2C2824] text-[#F5F3EE] px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#2C2824]/90 transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/interiors"
              className="inline-flex items-center gap-3 border border-[#2C2824]/30 text-[#2C2824] px-8 py-4 text-sm tracking-wider hover:bg-[#2C2824]/5 transition-colors duration-300"
            >
              Browse Interiors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

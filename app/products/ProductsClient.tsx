'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 'premium-poker-table',
    name: 'Premium Poker Table',
    tagline: 'Elite 10 Player Poker Table',
    price: '₹1,44,999',
    originalPrice: '₹2,07,000',
    discount: '30% Off',
    rating: 5,
    reviews: 11,
    image: '/images/products/poker-table.png',
    description: 'Handcrafted poker table designed for serious players. Solid hardwood frame, professional-grade felt, and integrated cup holders.',
  },
  {
    id: 'foldable-poker-table',
    name: 'Foldable Poker Table',
    tagline: 'Triton Classic Folding 8 Player Poker Table',
    price: '₹94,999',
    originalPrice: '₹1,35,000',
    discount: '30% Off',
    rating: 5,
    reviews: 25,
    image: '/images/products/untitled.png',
    description: 'Innovative foldable design delivers authentic casino gameplay with effortless storage — perfect for any home.',
  },
];

const features = [
  {
    number: '01',
    label: 'Quick Assembly',
    title: 'Set up in under 30 seconds',
    description: 'Designed to get you straight to the action. All required tooling is included — no fuss, no waiting.',
    image: '/images/products/poker-table.png',
  },
  {
    number: '02',
    label: 'Casino-Grade Play',
    title: '8 & 10 player casino-style positions',
    description: 'Glossy playing surface, padded PU leather armrests, and professional proportions bring Vegas into your home.',
    image: '/images/products/untitled.png',
  },
  {
    number: '03',
    label: 'Built to Last',
    title: 'Premium materials, exceptional finish',
    description: 'Sourced from the finest materials worldwide — extraordinary build quality that eclipses the competition.',
    image: '/images/products/poker-table.png',
  },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Free Shipping',
    description: 'On all products, pan India',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure Payment',
    description: '100% safe checkout',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Cash on Delivery',
    description: 'Accepted on all orders',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: '30-Day Returns',
    description: 'Hassle-free guarantee',
  },
];

const reviews = [
  {
    name: 'Rahul Sharma',
    review: 'Absolutely stunning. The build quality is exceptional and it looks incredible in our game room.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    review: 'Best purchase we made for home entertainment. The folding mechanism is seamless.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    review: 'Casino-quality feel at home. Friends are always impressed on poker nights.',
    rating: 5,
  },
];

function InterestModal({
  isOpen,
  onClose,
  productName,
}: {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}) {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', email: '' });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="bg-white shadow-2xl overflow-hidden relative w-full max-w-md">
              <div className="bg-[#2C2824] px-8 py-6">
                <h3 className="font-serif-display text-xl text-[#F5F3EE]">Register Interest</h3>
                <p className="text-[#F5F3EE]/60 text-sm mt-1 font-light">{productName}</p>
              </div>

              {isSubmitted ? (
                <div className="p-10 text-center">
                  <div className="w-12 h-12 border border-twc-red flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-twc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#2C2824] font-light">Thank you — we will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
                  {[
                    { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Mobile', key: 'mobile', type: 'tel', placeholder: 'Your mobile number' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'Your email address' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-xs tracking-widest text-[#2C2824]/60 uppercase mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        value={formData[key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="w-full px-4 py-3 border border-[#2C2824]/20 focus:border-twc-red outline-none transition-all text-[#2C2824] text-sm font-light"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2C2824] text-[#F5F3EE] py-3.5 text-sm uppercase tracking-widest font-light transition-all hover:bg-twc-red disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                  </button>
                </form>
              )}

              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#F5F3EE]/60 hover:text-[#F5F3EE] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function HeroSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-[#2C2824] flex items-center relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-twc-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-[#F5F3EE]/10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#F5F3EE]/10" />

      <div className="container-wide w-full relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-twc-red" />
              <span className="text-xs tracking-widest text-twc-red uppercase">Premium Collection</span>
            </div>

            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#F5F3EE] leading-tight mb-6">
              Vegas Style.<br />
              <span className="font-light italic">At Home.</span>
            </h1>

            <p className="text-[#F5F3EE]/60 text-lg font-light leading-relaxed max-w-md mb-10">
              Handcrafted poker tables that bring the sophistication of world-class casinos into your living space.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setSelectedProduct('Premium Poker Table')}
                className="inline-flex items-center gap-3 bg-twc-red text-[#F5F3EE] px-8 py-4 text-sm uppercase tracking-widest font-light transition-all hover:bg-twc-red/90"
              >
                Register Interest
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#products"
                className="inline-flex items-center gap-3 border border-[#F5F3EE]/30 text-[#F5F3EE] px-8 py-4 text-sm uppercase tracking-widest font-light transition-all hover:border-[#F5F3EE]/60"
              >
                View Products
              </a>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#F5F3EE]/10 pt-8">
              {[
                'Unique folding design with wheels',
                'Easy storage and replaceable mats',
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-twc-red rounded-full flex-shrink-0" />
                  <span className="text-sm text-[#F5F3EE]/70 font-light">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/products/poker-table.png"
                alt="Premium Poker Table"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-[#F5F3EE]/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1 bg-[#F5F3EE]/40 rounded-full" />
        </motion.div>
      </motion.div>

      <InterestModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ''}
      />
    </section>
  );
}

function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-10 border-b border-[#2C2824]/10 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="text-twc-red flex-shrink-0">{badge.icon}</div>
              <div>
                <p className="text-xs font-medium text-[#2C2824] uppercase tracking-wider">{badge.title}</p>
                <p className="text-xs text-[#2C2824]/50 font-light mt-0.5">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section ref={ref} id="products" className="py-20 md:py-28 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red" />
            <span className="text-xs tracking-widest text-[#2C2824]/50 uppercase">TWC Edition</span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#2C2824]">
            Our Products
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
              className="group border border-[#2C2824]/10 hover:border-[#2C2824]/20 transition-colors duration-300"
            >
              <div className="relative bg-[#F5F3EE] aspect-[4/3] overflow-hidden">
                <span className="absolute top-4 left-4 z-10 bg-twc-red text-[#F5F3EE] text-xs px-3 py-1 uppercase tracking-widest">
                  {product.discount}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-serif-display text-2xl text-[#2C2824] mb-1">
                  {product.name}
                </h3>
                <p className="text-xs tracking-widest text-[#2C2824]/50 uppercase mb-4">
                  {product.tagline}
                </p>
                <p className="text-sm text-[#2C2824]/60 font-light leading-relaxed mb-5">
                  {product.description}
                </p>

                <div className="flex items-end gap-3 mb-4">
                  <span className="font-serif-display text-3xl text-[#2C2824]">{product.price}</span>
                  <span className="text-sm text-[#2C2824]/40 line-through pb-1">{product.originalPrice}</span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-twc-red fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#2C2824]/40">({product.reviews} reviews)</span>
                </div>

                <button
                  onClick={() => setSelectedProduct(product.name)}
                  className="w-full border border-[#2C2824] text-[#2C2824] hover:bg-[#2C2824] hover:text-[#F5F3EE] py-3.5 text-sm uppercase tracking-widest font-light transition-all duration-300"
                >
                  I am Interested
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <InterestModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ''}
      />
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#2C2824]">
      <div className="container-wide py-14 md:py-16">
        {/* Header row: heading + image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-px bg-twc-red" />
              <span className="text-xs tracking-widest text-[#F5F3EE]/40 uppercase">Craftsmanship</span>
            </div>
            <h2 className="font-serif-display text-3xl text-[#F5F3EE]">
              Designed with you in mind
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative aspect-[16/7] bg-[#F5F3EE]/5 overflow-hidden"
          >
            <Image
              src="/images/products/poker-table.png"
              alt="Poker Table craftsmanship"
              fill
              className="object-contain p-4"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#F5F3EE]/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-[#2C2824] p-7 space-y-3"
            >
              <span className="font-serif-display text-4xl text-[#F5F3EE]/10 leading-none block">
                {feature.number}
              </span>
              <span className="text-xs tracking-widest text-twc-red uppercase block">{feature.label}</span>
              <h3 className="font-serif-display text-lg text-[#F5F3EE] leading-snug">
                {feature.title}
              </h3>
              <p className="text-[#F5F3EE]/45 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-twc-red" />
            <span className="text-xs tracking-widest text-[#2C2824]/50 uppercase">What customers say</span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#2C2824]">
            Real reviews, real homes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
              className="border border-[#2C2824]/10 p-6 md:p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-twc-red fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#2C2824]/70 font-light leading-relaxed mb-6 text-sm">
                &ldquo;{review.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#2C2824] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#F5F3EE]">{review.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-[#2C2824]">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section ref={ref} className="bg-[#2C2824] py-20 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-xs tracking-widest text-[#F5F3EE]/40 uppercase mb-2">Ready to order?</p>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#F5F3EE]">
              Elevate your game nights.
            </h2>
          </div>
          <button
            onClick={() => setSelectedProduct('Premium Poker Table')}
            className="inline-flex items-center gap-3 border border-[#F5F3EE]/30 text-[#F5F3EE] hover:border-twc-red hover:bg-twc-red/10 px-8 py-4 text-sm uppercase tracking-widest font-light transition-all duration-300 flex-shrink-0"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>

      <InterestModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ''}
      />
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <FeaturesSection />
      <ReviewsSection />
      <CTASection />
    </main>
  );
}

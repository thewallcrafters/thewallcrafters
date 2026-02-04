'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Product Data
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
    image: '/images/products/Pool table without background.png',
    description: 'Handcrafted premium poker table designed for serious players. Built with solid hardwood frame, professional-grade felt, and integrated features.',
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
    image: '/images/products/Untitled.png',
    description: 'The perfect solution for space-conscious enthusiasts. Innovative foldable poker table delivers authentic casino gameplay with easy storage.',
  },
];

// Feature sections data
const featureSections = [
  {
    label: 'Easy and Quick Assembly',
    title: 'Easily Set Up In Less Than 30 Seconds',
    description: 'We know that you want to get straight to the action. That\'s why we designed our products to be assembled in minutes. All required tooling is provided with our tables.',
    image: '/images/products/Pool table without background.png',
    imagePosition: 'right' as const,
  },
  {
    label: 'Make Your Life Happier',
    title: '8 and 10 Player Position Casino Style Table',
    description: 'Bring the flare of Vegas to your home with TWC Poker Tables! From our glossy playing surface to our padded PU leather armrests we know you will notice the difference.',
    image: '/images/products/Pool table without background.png',
    imagePosition: 'left' as const,
  },
  {
    label: 'Feel The Luxury Styles',
    title: 'Individual Armrests and Cup Holders',
    description: 'Players can comfortably rest their forearms on the table during the play. Our cupholders are also centered on the armrests to minimize interference and accidental spills during the play.',
    image: '/images/products/Pool table without background.png',
    imagePosition: 'right' as const,
  },
  {
    label: 'Impress Your Guests',
    title: 'Sturdy and Made to Last',
    description: 'Our products come with extraordinary finish and build quality. We are here to deliver the pinnacle of the poker playing experience. We have sourced the finest materials from around the world to eclipse the competition.',
    image: '/images/products/Untitled.png',
    imagePosition: 'left' as const,
  },
];

// Trust badges
const trustBadges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'FREE SHIPPING',
    description: 'Totally free shipping on all products',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'LOVED BY EVERYONE',
    description: 'Highest rated and most reviewed',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '100% SECURE PAYMENT',
    description: '100% Secure payment and personal information',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: '100% MONEY BACK GUARANTEE',
    description: '30 days money back guarantee',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'CASH ON DELIVERY',
    description: 'We accept cash on delivery on all orders',
  },
];

// Hero feature pills
const heroFeatures = [
  { icon: '🎯', text: 'Unique Folding Design with Wheels' },
  { icon: '📦', text: 'Easy Storage and Replaceable Mats' },
];

// Interest Form Modal Component
function InterestModal({ 
  isOpen, 
  onClose, 
  productName 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  productName: string;
}) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative w-full max-w-md">
              <div className="bg-twc-charcoal p-6 text-center">
                <h3 className="text-xl font-bold text-white">I&apos;m Interested</h3>
                <p className="text-twc-warm/80 text-sm mt-1">{productName}</p>
              </div>
              
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="text-twc-charcoal font-medium">Thank you for your interest!</p>
                  <p className="text-gray-500 text-sm mt-1">We&apos;ll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-twc-charcoal mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-twc-red focus:ring-2 focus:ring-twc-red/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-twc-charcoal mb-1">Mobile</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-twc-red focus:ring-2 focus:ring-twc-red/20 outline-none transition-all"
                      placeholder="Your mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-twc-charcoal mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-twc-red focus:ring-2 focus:ring-twc-red/20 outline-none transition-all"
                      placeholder="Your email address"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-twc-red hover:bg-twc-red/90 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Interest'
                    )}
                  </button>
                </form>
              )}
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hero Section Component (Classy Premium Style)
function HeroSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-twc-charcoal via-twc-charcoal to-neutral-900 flex items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Radial glow behind product */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-twc-red/10 rounded-full blur-[150px]" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-twc-warm/5 rounded-full blur-[100px]" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-twc-warm/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-twc-warm/20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Elegant tagline with decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-twc-red to-transparent" />
              <span className="text-twc-red font-medium text-sm uppercase tracking-[0.2em]">
                Premium Collection
              </span>
            </div>
            
            {/* Main headline with elegant styling */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Vegas Style</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-twc-warm via-white to-twc-warm">
                Casino Experience
              </span>
              <span className="block">At Home</span>
            </h1>
            
            {/* Elegant subtitle */}
            <p className="mt-6 text-twc-warm/70 text-lg max-w-md leading-relaxed">
              Handcrafted poker tables that bring the sophistication of world-class casinos to your home.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProduct('Premium Poker Table')}
                className="bg-twc-red hover:bg-twc-red/90 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all shadow-lg shadow-twc-red/30"
              >
                Explore Collection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(244, 241, 234, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="border border-twc-warm/30 text-twc-warm px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all backdrop-blur-sm"
              >
                View Details
              </motion.button>
            </div>
            
            {/* Elegant Feature Pills */}
            <div className="mt-12 flex flex-wrap gap-8">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-twc-warm/20 flex items-center justify-center group-hover:border-twc-red/50 transition-colors">
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-twc-warm/80 uppercase tracking-wide">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Image with elegant frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:scale-[2] lg:translate-x-20 lg:-translate-y-4"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-twc-red/20 via-transparent to-twc-warm/10 blur-3xl scale-150" />
            
            {/* Main image container - larger */}
            <div className="relative aspect-[4/3] min-h-[350px] lg:min-h-[450px]">
              <Image
                src="/images/products/Pool table without background.png"
                alt="Premium Poker Table"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-twc-warm/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-twc-warm/50 rounded-full" />
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

// "Designed With You In Mind" Section
function DesignedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-16 bg-twc-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          DESIGNED WITH YOU IN MIND
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/images/products/Pool table without background.png"
                alt="Premium Poker Table"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative w-[120px] h-[100px]">
                <Image
                  src="/images/products/Untitled.png"
                  alt="Foldable Table Top"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[120px] h-[100px]">
                <Image
                  src="/images/products/Untitled.png"
                  alt="Foldable Table Side"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Feature Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <span className="text-twc-red font-semibold text-sm uppercase tracking-wider">
              Easy and Quick Assembly
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
              Easily Set Up In Less Than 30 Seconds
            </h3>
            <p className="text-twc-warm/80 leading-relaxed">
              We know that you want to get straight to the action. That&apos;s why we designed our products to be assembled in minutes. All required tooling is provided with our tables.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Feature Section Component (Alternating Layout)
function FeatureSection({ 
  feature, 
  index 
}: { 
  feature: typeof featureSections[0]; 
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isImageRight = feature.imagePosition === 'right';
  const isDark = index % 2 === 1;
  
  return (
    <section ref={ref} className={`py-12 ${isDark ? 'bg-twc-charcoal' : 'bg-twc-warm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isImageRight ? '' : 'lg:flex-row-reverse'}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-center lg:text-left ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <span className="text-twc-red font-semibold text-sm uppercase tracking-wider">
              {feature.label}
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-twc-charcoal'}`}>
              {feature.title}
            </h3>
            <p className={`leading-relaxed max-w-lg mx-auto lg:mx-0 ${isDark ? 'text-twc-warm/80' : 'text-twc-charcoal/70'}`}>
              {feature.description}
            </p>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Products Grid Section (Triton Style)
function ProductsGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-twc-red font-semibold text-sm uppercase tracking-wider">
            Meet Our TWC Edition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-twc-charcoal mt-2">
            WHERE THE BATTLE BEGINS
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              {/* Product Card */}
              <div className="relative">
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-twc-red text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.discount}
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-4">
                <h3 className="font-semibold text-twc-charcoal text-lg">
                  {product.tagline}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="text-twc-red font-bold text-xl">
                    {product.price}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product.name)}
                  className="mt-4 w-full bg-twc-charcoal hover:bg-twc-charcoal/90 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  I&apos;m Interested
                </motion.button>
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

// Trust Badges Section
function TrustBadgesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <section ref={ref} className="py-12 bg-twc-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-twc-red mb-3 flex justify-center">
                {badge.icon}
              </div>
              <h4 className="font-bold text-white text-sm mb-1">
                {badge.title}
              </h4>
              <p className="text-twc-warm/70 text-xs">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const reviews = [
    {
      name: 'Rahul Sharma',
      review: 'Absolutely stunning table! The build quality is exceptional and it looks amazing in our game room.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      review: 'Best purchase we made for our home entertainment. The folding mechanism is so smooth!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      review: 'Casino-quality feel at home. My friends are always impressed when they come over for poker nights.',
      rating: 5,
    },
  ];
  
  return (
    <section ref={ref} className="py-16 bg-twc-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-twc-red font-semibold text-sm uppercase tracking-wider">
            See Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-twc-charcoal mt-2">
            REAL REVIEWS FROM REAL CUSTOMERS
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-twc-charcoal rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  {review.name.charAt(0)}
                </span>
              </div>
              
              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-twc-charcoal/80 mb-4">&ldquo;{review.review}&rdquo;</p>
              <p className="font-semibold text-twc-charcoal">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  return (
    <section ref={ref} className="py-16 bg-twc-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Game Nights?
          </h2>
          <p className="text-twc-warm/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their homes into premium entertainment spaces.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProduct('Premium Poker Table')}
            className="bg-twc-red hover:bg-twc-red/90 text-white px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all shadow-lg"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
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

// Main Page Component
export default function ProductsPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <DesignedSection />
      {featureSections.slice(1).map((feature, index) => (
        <FeatureSection key={index} feature={feature} index={index} />
      ))}
      <ProductsGridSection />
      <ReviewsSection />
      <TrustBadgesSection />
      <FinalCTASection />
    </main>
  );
}

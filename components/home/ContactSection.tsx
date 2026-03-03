'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';
import { useRef, useState } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-twc-warm section-padding relative" id="contact" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-twc-red rounded-full"></div>
            <h2 className="font-serif-display text-section-title text-[#F5F3EE]">
              Let's talk about<br />your space.
            </h2>
            <p className="text-[#F5F3EE]/60 text-lg leading-relaxed font-light max-w-lg">
              Share a few details about your home or project. We'll get back with a call and a site visit slot.
            </p>

            {submitted ? (
              <motion.div
                className="pt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-12 h-12 rounded-full bg-twc-red/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-twc-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif-display text-2xl text-[#F5F3EE]">Thank you!</h3>
                <p className="text-[#F5F3EE]/60 font-light">We've received your enquiry and will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="space-y-6 pt-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-[#F5F3EE]/20 py-4 text-[#F5F3EE] placeholder-[#F5F3EE]/40 focus:border-twc-red focus:outline-none focus-visible:ring-2 focus-visible:ring-twc-red/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Contact Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    aria-required="true"
                    placeholder="Contact Number"
                    pattern="[0-9]{10}"
                    className="w-full bg-transparent border-b border-[#F5F3EE]/20 py-4 text-[#F5F3EE] placeholder-[#F5F3EE]/40 focus:border-twc-red focus:outline-none focus-visible:ring-2 focus-visible:ring-twc-red/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Project Location & Brief</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    placeholder="Project Location & Brief"
                    rows={4}
                    className="w-full bg-transparent border-b border-[#F5F3EE]/20 py-4 text-[#F5F3EE] placeholder-[#F5F3EE]/40 focus:border-twc-red focus:outline-none focus-visible:ring-2 focus-visible:ring-twc-red/20 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border border-[#F5F3EE] text-[#F5F3EE] px-8 py-4 text-sm tracking-wider hover:bg-[#F5F3EE] hover:text-[#2C2824] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="space-y-12 lg:pl-12 lg:border-l border-[#F5F3EE]/10"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-[#F5F3EE]/50 uppercase">Call us</h3>
                </div>
                <div className="space-y-2 pl-8">
                  <a
                    href="tel:9952217602"
                    className="block text-xl text-[#F5F3EE] hover:text-twc-red transition-colors duration-300"
                  >
                    +91 99522 17602
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-[#F5F3EE]/50 uppercase">Write to us</h3>
                </div>
                <div className="space-y-2 pl-8">
                  <a
                    href="mailto:main@thewallcrafters.com"
                    className="block text-xl text-[#F5F3EE] hover:text-twc-red transition-colors duration-300 break-all"
                  >
                    main@thewallcrafters.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Instagram size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-[#F5F3EE]/50 uppercase">Follow</h3>
                </div>
                <div className="pl-8">
                  <a
                    href="https://instagram.com/thewallcrafters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl text-[#F5F3EE] hover:text-twc-red transition-colors duration-300"
                  >
                    @thewallcrafters
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-12 space-y-4 border-t border-[#F5F3EE]/10">
              <p className="text-[#F5F3EE]/50 text-sm tracking-wider">VISIT US</p>
              <p className="text-lg leading-relaxed text-[#F5F3EE]/70 font-light">
                Schedule a consultation at our studio to discuss your project in detail.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

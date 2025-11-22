'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-twc-charcoal section-padding relative noise-texture" id="contact" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-twc-red rounded-full"></div>
            <h2 className="font-serif-display text-display">
              Let's talk about<br />your space.
            </h2>
            <p className="text-twc-grey text-lg leading-relaxed font-light max-w-lg">
              Share a few details about your home or project. We'll get back with a call and a site visit slot.
            </p>

            <form className="space-y-6 pt-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-twc-grey/30 py-4 text-twc-warm placeholder-twc-grey/50 focus:border-twc-red focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full bg-transparent border-b border-twc-grey/30 py-4 text-twc-warm placeholder-twc-grey/50 focus:border-twc-red focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Project Location & Brief"
                  rows={4}
                  className="w-full bg-transparent border-b border-twc-grey/30 py-4 text-twc-warm placeholder-twc-grey/50 focus:border-twc-red focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="border border-twc-warm px-8 py-4 text-sm tracking-wider hover:bg-twc-warm hover:text-twc-charcoal transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SUBMIT ENQUIRY
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-12 lg:pl-12 lg:border-l border-twc-grey/20"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-twc-grey uppercase">Call us</h3>
                </div>
                <div className="space-y-2 pl-8">
                  <a
                    href="tel:9952217602"
                    className="block text-xl hover:text-twc-red transition-colors duration-300"
                  >
                    +91 99522 17602
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-twc-grey uppercase">Write to us</h3>
                </div>
                <div className="space-y-2 pl-8">
                  <a
                    href="mailto:main@thewallcrafters.com"
                    className="block text-xl hover:text-twc-red transition-colors duration-300 break-all"
                  >
                    main@thewallcrafters.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Instagram size={20} className="text-twc-red" />
                  <h3 className="text-[11px] tracking-widest-plus text-twc-grey uppercase">Follow</h3>
                </div>
                <div className="pl-8">
                  <a
                    href="https://instagram.com/thewallcrafters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl hover:text-twc-red transition-colors duration-300"
                  >
                    @thewallcrafters
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-12 space-y-4 border-t border-twc-warm/10">
              <p className="text-twc-grey text-sm tracking-wider">VISIT US</p>
              <p className="text-lg leading-relaxed text-twc-warm/80 font-light">
                Schedule a consultation at our studio to discuss your project in detail.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

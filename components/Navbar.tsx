'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'WORK', href: '/work' },
    { label: 'KITCHENS', href: '/kitchens' },
    { label: 'INTERIORS', href: '/interiors' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-twc-charcoal/95 backdrop-blur-md border-b border-twc-warm/5' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container-wide py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-baseline gap-0 group">
              <span className="text-2xl font-bold tracking-tight">twc</span>
              <motion.span
                className="w-1.5 h-1.5 bg-twc-red rounded-full ml-0.5"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[11px] tracking-widest-plus text-twc-warm/70 hover:text-twc-warm transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-twc-red rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredItem === item.label ? 1 : 0,
                      scale: hoveredItem === item.label ? 1 : 0,
                      x: '-50%',
                    }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button className="hidden md:block border border-twc-warm/30 px-6 py-2.5 text-[11px] tracking-widest-plus hover:border-twc-red hover:text-twc-red hover:bg-twc-red/5 transition-all duration-300">
                BOOK A VISIT
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              >
                <motion.span
                  className="w-6 h-0.5 bg-twc-warm"
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-twc-warm"
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-twc-warm"
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-twc-charcoal flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="text-4xl md:text-5xl font-serif-display tracking-tight hover:text-twc-red transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <motion.div
                    className="absolute -left-6 top-1/2 w-2 h-2 bg-twc-red rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

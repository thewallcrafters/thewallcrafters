'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ColorTheme {
  id: string;
  name: string;
  description: string;
  colors: {
    charcoal: string;
    dark: string;
    warm: string;
    grey: string;
    accent: string;
    navFooter?: string;
    navFooterText?: string;
  };
}

const colorThemes: ColorTheme[] = [
  // === DARK BACKGROUNDS ===
  {
    id: 'charcoal-red',
    name: 'Charcoal & Red',
    description: 'Current - Bold & Premium',
    colors: {
      charcoal: '#050509',
      dark: '#111111',
      warm: '#F5F3EE',
      grey: '#999999',
      accent: '#FF2B2B',
    },
  },
  {
    id: 'beige-charcoal',
    name: 'Beige & Charcoal',
    description: 'Warm & Sophisticated',
    colors: {
      charcoal: '#E8E0D5',
      dark: '#1A1A1A',
      warm: '#2C2824',
      grey: '#8A837A',
      accent: '#8B4513',
      navFooter: '#2C2824',
      navFooterText: '#F5F3EE',
    },
  },
  {
    id: 'forest-copper',
    name: 'Forest & Copper',
    description: 'Earthy & Natural',
    colors: {
      charcoal: '#0F1F15',
      dark: '#1A3025',
      warm: '#FAF8F2',
      grey: '#6B8B73',
      accent: '#B87333',
    },
  },
  {
    id: 'plum-gold',
    name: 'Plum & Gold',
    description: 'Rich & Opulent',
    colors: {
      charcoal: '#1A0F1F',
      dark: '#2D1B35',
      warm: '#FBF8FA',
      grey: '#9A7AA8',
      accent: '#FFB800',
    },
  },
  // === LIGHT/CREAM BACKGROUNDS ===
  {
    id: 'cream-charcoal',
    name: 'Cream & Charcoal',
    description: 'Light & Elegant',
    colors: {
      charcoal: '#FAF7F2',
      dark: '#EDE8E0',
      warm: '#1A1A1A',
      grey: '#8A8680',
      accent: '#C41E3A',
      navFooter: '#1A1A1A',
      navFooterText: '#F5F3EE',
    },
  },
  {
    id: 'ivory-navy',
    name: 'Ivory & Navy',
    description: 'Classic & Refined',
    colors: {
      charcoal: '#FFFEF8',
      dark: '#F5F3EB',
      warm: '#0A1628',
      grey: '#6B7280',
      accent: '#1E3A5F',
      navFooter: '#0A1628',
      navFooterText: '#FFFEF8',
    },
  },
  {
    id: 'sand-terracotta',
    name: 'Sand & Terracotta',
    description: 'Warm Mediterranean',
    colors: {
      charcoal: '#F9F5EC',
      dark: '#EDE6D8',
      warm: '#2D2520',
      grey: '#9A9080',
      accent: '#C04000',
      navFooter: '#2D2520',
      navFooterText: '#F9F5EC',
    },
  },
  // === UNIQUE THEMES ===
  {
    id: 'midnight-electric',
    name: 'Midnight & Electric',
    description: 'Modern & Bold',
    colors: {
      charcoal: '#0A0A12',
      dark: '#12121F',
      warm: '#E8E8F0',
      grey: '#6E6E8A',
      accent: '#6366F1',
    },
  },
  {
    id: 'olive-bronze',
    name: 'Olive & Bronze',
    description: 'Sophisticated & Warm',
    colors: {
      charcoal: '#1C1E18',
      dark: '#2A2D25',
      warm: '#F8F7F2',
      grey: '#8A8D80',
      accent: '#CD7F32',
    },
  },
  {
    id: 'slate-teal',
    name: 'Slate & Teal',
    description: 'Fresh & Professional',
    colors: {
      charcoal: '#1A2530',
      dark: '#253340',
      warm: '#F5F9FA',
      grey: '#708090',
      accent: '#008B8B',
    },
  },
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ColorTheme>(colorThemes[0]);
  const [isVisible, setIsVisible] = useState(true);

  const applyTheme = (theme: ColorTheme) => {
    setActiveTheme(theme);
    
    // Apply CSS custom properties to root
    document.documentElement.style.setProperty('--twc-charcoal', theme.colors.charcoal);
    document.documentElement.style.setProperty('--twc-dark', theme.colors.dark);
    document.documentElement.style.setProperty('--twc-warm', theme.colors.warm);
    document.documentElement.style.setProperty('--twc-grey', theme.colors.grey);
    document.documentElement.style.setProperty('--twc-accent', theme.colors.accent);

    // Update Tailwind classes dynamically by modifying stylesheet
    const styleId = 'theme-overrides';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      :root {
        --color-charcoal: ${theme.colors.charcoal};
        --color-dark: ${theme.colors.dark};
        --color-warm: ${theme.colors.warm};
        --color-grey: ${theme.colors.grey};
        --color-accent: ${theme.colors.accent};
      }
      
      /* Background overrides */
      .bg-twc-charcoal { background-color: ${theme.colors.charcoal} !important; }
      .bg-twc-dark { background-color: ${theme.colors.dark} !important; }
      .bg-twc-warm { background-color: ${theme.colors.warm} !important; }
      .bg-twc-red:not(.logo-dot) { background-color: ${theme.colors.accent} !important; }
      
      /* Keep logo dot always red */
      .logo-dot { background-color: #FF2B2B !important; }
      
      /* Body text color override */
      body { 
        background-color: ${theme.colors.charcoal} !important;
        color: ${theme.colors.warm} !important;
      }
      
      /* Gradient overrides for hero sections */
      .from-twc-charcoal { --tw-gradient-from: ${theme.colors.charcoal} !important; }
      .via-twc-charcoal\\/80 { --tw-gradient-via: ${theme.colors.charcoal}CC !important; }
      .to-transparent { --tw-gradient-to: transparent !important; }
      .bg-gradient-to-r.from-twc-charcoal { 
        background-image: linear-gradient(to right, ${theme.colors.charcoal}, ${theme.colors.charcoal}CC, transparent) !important; 
      }
      .bg-gradient-to-t.from-twc-charcoal { 
        background-image: linear-gradient(to top, ${theme.colors.charcoal}, transparent) !important; 
      }
      .bg-gradient-to-b.from-twc-charcoal { 
        background-image: linear-gradient(to bottom, ${theme.colors.charcoal}, transparent) !important; 
      }
      
      /* Text color overrides */
      .text-twc-charcoal { color: ${theme.colors.charcoal} !important; }
      .text-twc-warm { color: ${theme.colors.warm} !important; }
      .text-twc-grey { color: ${theme.colors.grey} !important; }
      .text-twc-red { color: ${theme.colors.accent} !important; }
      
      /* Text opacity variants for charcoal */
      .text-twc-charcoal\\/40 { color: ${theme.colors.charcoal}66 !important; }
      .text-twc-charcoal\\/50 { color: ${theme.colors.charcoal}80 !important; }
      .text-twc-charcoal\\/60 { color: ${theme.colors.charcoal}99 !important; }
      .text-twc-charcoal\\/70 { color: ${theme.colors.charcoal}B3 !important; }
      .text-twc-charcoal\\/80 { color: ${theme.colors.charcoal}CC !important; }
      .text-twc-charcoal\\/15 { color: ${theme.colors.charcoal}26 !important; }
      
      /* Headings and key elements inherit warm color */
      h1, h2, h3, h4, h5, h6 { color: ${theme.colors.warm} !important; }
      
      /* Override headings in bg-twc-warm sections to use charcoal */
      .bg-twc-warm h1, .bg-twc-warm h2, .bg-twc-warm h3, 
      .bg-twc-warm h4, .bg-twc-warm h5, .bg-twc-warm h6 { 
        color: ${theme.colors.charcoal} !important; 
      }
      .bg-twc-warm .text-twc-charcoal { color: ${theme.colors.charcoal} !important; }
      .bg-twc-warm .text-twc-charcoal\\/40 { color: ${theme.colors.charcoal}66 !important; }
      .bg-twc-warm .text-twc-charcoal\\/50 { color: ${theme.colors.charcoal}80 !important; }
      .bg-twc-warm .text-twc-charcoal\\/60 { color: ${theme.colors.charcoal}99 !important; }
      .bg-twc-warm svg.text-twc-charcoal\\/15 { color: ${theme.colors.charcoal}26 !important; }
      .bg-twc-warm .border-twc-charcoal\\/5 { border-color: ${theme.colors.charcoal}0D !important; }
      .bg-twc-warm .bg-twc-charcoal\\/10 { background-color: ${theme.colors.charcoal}1A !important; }
      .bg-twc-warm .bg-twc-charcoal\\/85 { background-color: ${theme.colors.charcoal}D9 !important; }
      
      /* Hover overlays inside bg-twc-warm */
      .bg-twc-warm .group:hover .bg-twc-charcoal\\/85 { background-color: ${theme.colors.charcoal}D9 !important; }
      .bg-twc-warm .text-twc-warm { color: ${theme.colors.warm} !important; }
      
      /* bg-white sections - ensure proper text contrast */
      .bg-white .bg-twc-charcoal\\/5 { background-color: ${theme.colors.warm}15 !important; }
      
      /* Group hover for icon containers */
      .group:hover .group-hover\\:bg-twc-red { background-color: ${theme.colors.accent} !important; }
      .group:hover .group-hover\\:text-twc-warm { color: ${theme.colors.charcoal} !important; }
      
      /* Override text in bg-twc-dark sections to use warm (light) */
      .bg-twc-dark h1, .bg-twc-dark h2, .bg-twc-dark h3, 
      .bg-twc-dark h4, .bg-twc-dark h5, .bg-twc-dark h6 { 
        color: ${theme.colors.warm} !important; 
      }
      .bg-twc-dark .text-twc-charcoal { color: ${theme.colors.warm} !important; }
      .bg-twc-dark .text-twc-charcoal\\/40 { color: ${theme.colors.warm}66 !important; }
      .bg-twc-dark .text-twc-charcoal\\/50 { color: ${theme.colors.warm}80 !important; }
      .bg-twc-dark .text-twc-charcoal\\/60 { color: ${theme.colors.warm}99 !important; }
      .bg-twc-dark .text-twc-charcoal\\/70 { color: ${theme.colors.warm}B3 !important; }
      .bg-twc-dark .border-twc-charcoal\\/5 { border-color: ${theme.colors.warm}0D !important; }
      .bg-twc-dark .border-twc-charcoal\\/10 { border-color: ${theme.colors.warm}1A !important; }
      .bg-twc-dark .border-twc-charcoal\\/15 { border-color: ${theme.colors.warm}26 !important; }
      .bg-twc-dark svg { color: ${theme.colors.warm} !important; }
      
      /* Border overrides */
      .border-twc-charcoal { border-color: ${theme.colors.charcoal} !important; }
      .border-twc-charcoal\\/10 { border-color: ${theme.colors.charcoal}1A !important; }
      .border-twc-charcoal\\/20 { border-color: ${theme.colors.charcoal}33 !important; }
      .border-twc-warm { border-color: ${theme.colors.warm} !important; }
      .border-twc-grey { border-color: ${theme.colors.grey} !important; }
      .border-twc-red { border-color: ${theme.colors.accent} !important; }
      .border-twc-warm\\/5 { border-color: ${theme.colors.warm}0D !important; }
      .border-twc-warm\\/10 { border-color: ${theme.colors.warm}1A !important; }
      .border-twc-warm\\/20 { border-color: ${theme.colors.warm}33 !important; }
      .border-twc-warm\\/30 { border-color: ${theme.colors.warm}4D !important; }
      
      /* Divide overrides */
      .divide-twc-warm\\/20 > :not([hidden]) ~ :not([hidden]) { border-color: ${theme.colors.warm}33 !important; }
      
      /* Hover states */
      .hover\\:bg-twc-red:hover { background-color: ${theme.colors.accent} !important; }
      .hover\\:text-twc-red:hover { color: ${theme.colors.accent} !important; }
      .hover\\:border-twc-red:hover { border-color: ${theme.colors.accent} !important; }
      .hover\\:bg-twc-warm:hover { background-color: ${theme.colors.warm} !important; }
      .hover\\:text-twc-charcoal:hover { color: ${theme.colors.charcoal} !important; }
      
      /* Group hover */
      .group:hover .group-hover\\:text-twc-red { color: ${theme.colors.accent} !important; }
      
      /* Opacity variants */
      .bg-twc-charcoal\\/80 { background-color: ${theme.colors.charcoal}CC !important; }
      .bg-twc-charcoal\\/85 { background-color: ${theme.colors.charcoal}D9 !important; }
      .bg-twc-charcoal\\/90 { background-color: ${theme.colors.charcoal}E6 !important; }
      .bg-twc-charcoal\\/95 { background-color: ${theme.colors.charcoal}F2 !important; }
      .bg-twc-charcoal\\/5 { background-color: ${theme.colors.charcoal}0D !important; }
      .bg-twc-charcoal\\/10 { background-color: ${theme.colors.charcoal}1A !important; }
      .bg-twc-warm\\/10 { background-color: ${theme.colors.warm}1A !important; }
      .bg-twc-warm\\/5 { background-color: ${theme.colors.warm}0D !important; }
      .text-twc-warm\\/40 { color: ${theme.colors.warm}66 !important; }
      .text-twc-warm\\/50 { color: ${theme.colors.warm}80 !important; }
      .text-twc-warm\\/60 { color: ${theme.colors.warm}99 !important; }
      .text-twc-warm\\/70 { color: ${theme.colors.warm}B3 !important; }
      .text-twc-warm\\/80 { color: ${theme.colors.warm}CC !important; }
      .text-twc-grey\\/70 { color: ${theme.colors.grey}B3 !important; }
      
      /* Ring colors */
      .ring-twc-red { --tw-ring-color: ${theme.colors.accent} !important; }
      .focus\\:ring-twc-red:focus { --tw-ring-color: ${theme.colors.accent} !important; }
      
      /* Placeholder */
      .placeholder\\:text-twc-grey::placeholder { color: ${theme.colors.grey} !important; }
      
      /* Scrolled navbar background */
      nav.bg-twc-charcoal\\/95 { background-color: ${theme.colors.navFooter || theme.colors.charcoal}F2 !important; }
      
      ${theme.colors.navFooter ? `
      /* Nav & Footer overrides for light themes */
      nav { 
        background-color: ${theme.colors.navFooter} !important; 
      }
      nav * { 
        color: ${theme.colors.navFooterText} !important; 
      }
      nav .text-twc-warm\\/70 { color: ${theme.colors.navFooterText}B3 !important; }
      nav .hover\\:text-twc-warm:hover { color: ${theme.colors.navFooterText} !important; }
      nav .border-twc-warm\\/5 { border-color: ${theme.colors.navFooterText}0D !important; }
      
      #site-footer, 
      #site-footer.bg-twc-charcoal,
      #site-footer > div,
      #site-footer > div > div { 
        background-color: ${theme.colors.navFooter} !important; 
      }
      #site-footer *, 
      #site-footer *::before, 
      #site-footer *::after { 
        color: ${theme.colors.navFooterText} !important; 
      }
      #site-footer .text-twc-warm { color: ${theme.colors.navFooterText} !important; }
      #site-footer .text-twc-warm\\/40 { color: ${theme.colors.navFooterText}66 !important; }
      #site-footer .text-twc-warm\\/50 { color: ${theme.colors.navFooterText}80 !important; }
      #site-footer .text-twc-warm\\/60 { color: ${theme.colors.navFooterText}99 !important; }
      #site-footer .border-twc-warm\\/10 { border-color: ${theme.colors.navFooterText}1A !important; }
      #site-footer .border-twc-warm\\/30 { border-color: ${theme.colors.navFooterText}4D !important; }
      #site-footer h1, #site-footer h2, #site-footer h3, #site-footer h4, #site-footer h5, #site-footer h6 { color: ${theme.colors.navFooterText} !important; }
      #site-footer a { color: ${theme.colors.navFooterText} !important; }
      #site-footer .hover\\:bg-twc-warm:hover { background-color: ${theme.colors.navFooterText} !important; }
      #site-footer .hover\\:text-twc-charcoal:hover { color: ${theme.colors.navFooter} !important; }
      ` : ''}
    `;
  };

  // Reset to default theme
  const resetTheme = () => {
    applyTheme(colorThemes[0]);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full shadow-2xl flex items-center justify-center"
        style={{ backgroundColor: activeTheme.colors.accent }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isVisible ? "Hide Color Selector" : "Show Color Selector"}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </motion.button>

      {/* Color Selector Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-6 bottom-24 z-[9998] w-80 max-h-[70vh] overflow-hidden rounded-2xl shadow-2xl"
            style={{ backgroundColor: activeTheme.colors.charcoal, borderColor: activeTheme.colors.warm + '20' }}
          >
            {/* Header */}
            <div 
              className="p-5 border-b"
              style={{ borderColor: activeTheme.colors.warm + '20' }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 
                  className="font-serif-display text-lg font-semibold"
                  style={{ color: activeTheme.colors.warm }}
                >
                  Theme Options
                </h3>
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: activeTheme.colors.accent + '20',
                    color: activeTheme.colors.accent 
                  }}
                >
                  FOR CLIENT PREVIEW
                </span>
              </div>
              <p 
                className="text-sm"
                style={{ color: activeTheme.colors.grey }}
              >
                Select a color scheme to preview
              </p>
            </div>

            {/* Theme Options */}
            <div className="p-4 max-h-[50vh] overflow-y-auto hide-scrollbar">
              {/* Dark Themes */}
              <div className="mb-4">
                <p 
                  className="text-xs uppercase tracking-wider mb-3 font-medium"
                  style={{ color: activeTheme.colors.grey }}
                >
                  Dark Backgrounds
                </p>
                <div className="space-y-3">
                  {colorThemes.slice(0, 4).map((theme) => (
                    <motion.button
                      key={theme.id}
                      onClick={() => applyTheme(theme)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left`}
                      style={{
                        borderColor: activeTheme.id === theme.id ? theme.colors.accent : activeTheme.colors.warm + '15',
                        backgroundColor: activeTheme.id === theme.id ? theme.colors.accent + '15' : 'transparent',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Color Swatches */}
                        <div className="flex -space-x-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.charcoal, borderColor: theme.colors.warm }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: theme.colors.accent }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.warm, borderColor: theme.colors.charcoal }}
                          />
                        </div>
                        
                        {/* Theme Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span 
                              className="font-medium text-sm"
                              style={{ color: activeTheme.colors.warm }}
                            >
                              {theme.name}
                            </span>
                            {theme.id === 'charcoal-red' && (
                              <span 
                                className="text-[10px] px-1.5 py-0.5 rounded"
                                style={{ 
                                  backgroundColor: activeTheme.colors.accent,
                                  color: 'white'
                                }}
                              >
                                DEFAULT
                              </span>
                            )}
                          </div>
                          <span 
                            className="text-xs"
                            style={{ color: activeTheme.colors.grey }}
                          >
                            {theme.description}
                          </span>
                        </div>

                        {/* Selected Indicator */}
                        {activeTheme.id === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: theme.colors.accent }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Light Themes */}
              <div className="mb-4">
                <p 
                  className="text-xs uppercase tracking-wider mb-3 font-medium"
                  style={{ color: activeTheme.colors.grey }}
                >
                  Light Backgrounds
                </p>
                <div className="space-y-3">
                  {colorThemes.slice(4, 7).map((theme) => (
                    <motion.button
                      key={theme.id}
                      onClick={() => applyTheme(theme)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left`}
                      style={{
                        borderColor: activeTheme.id === theme.id ? theme.colors.accent : activeTheme.colors.warm + '15',
                        backgroundColor: activeTheme.id === theme.id ? theme.colors.accent + '15' : 'transparent',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Color Swatches */}
                        <div className="flex -space-x-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.charcoal, borderColor: theme.colors.warm }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: theme.colors.accent }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.warm, borderColor: theme.colors.charcoal }}
                          />
                        </div>
                        
                        {/* Theme Info */}
                        <div className="flex-1">
                          <span 
                            className="font-medium text-sm block"
                            style={{ color: activeTheme.colors.warm }}
                          >
                            {theme.name}
                          </span>
                          <span 
                            className="text-xs"
                            style={{ color: activeTheme.colors.grey }}
                          >
                            {theme.description}
                          </span>
                        </div>

                        {/* Selected Indicator */}
                        {activeTheme.id === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: theme.colors.accent }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Unique Themes */}
              <div>
                <p 
                  className="text-xs uppercase tracking-wider mb-3 font-medium"
                  style={{ color: activeTheme.colors.grey }}
                >
                  Specialty Themes
                </p>
                <div className="space-y-3">
                  {colorThemes.slice(7).map((theme) => (
                    <motion.button
                      key={theme.id}
                      onClick={() => applyTheme(theme)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left`}
                      style={{
                        borderColor: activeTheme.id === theme.id ? theme.colors.accent : activeTheme.colors.warm + '15',
                        backgroundColor: activeTheme.id === theme.id ? theme.colors.accent + '15' : 'transparent',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Color Swatches */}
                        <div className="flex -space-x-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.charcoal, borderColor: theme.colors.warm }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: theme.colors.accent }}
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 shadow-md"
                            style={{ backgroundColor: theme.colors.warm, borderColor: theme.colors.charcoal }}
                          />
                        </div>
                        
                        {/* Theme Info */}
                        <div className="flex-1">
                          <span 
                            className="font-medium text-sm block"
                            style={{ color: activeTheme.colors.warm }}
                          >
                            {theme.name}
                          </span>
                          <span 
                            className="text-xs"
                            style={{ color: activeTheme.colors.grey }}
                          >
                            {theme.description}
                          </span>
                        </div>

                        {/* Selected Indicator */}
                        {activeTheme.id === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: theme.colors.accent }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div 
              className="p-4 border-t"
              style={{ borderColor: activeTheme.colors.warm + '20' }}
            >
              <div 
                className="text-xs text-center mb-3"
                style={{ color: activeTheme.colors.grey }}
              >
                Active: <span style={{ color: activeTheme.colors.accent }}>{activeTheme.name}</span>
              </div>
              <button
                onClick={resetTheme}
                className="w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: activeTheme.colors.warm + '10',
                  color: activeTheme.colors.warm,
                  border: `1px solid ${activeTheme.colors.warm}20`
                }}
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

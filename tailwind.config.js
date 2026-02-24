/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'twc-charcoal': '#E8E0D5',
        'twc-dark': '#1A1A1A',
        'twc-warm': '#2C2824',
        'twc-grey': '#8A837A',
        'twc-red': '#8B4513',
      },
      fontFamily: {
        'serif-display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans-body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
        'wide-editorial': '0.08em',
      },
      fontSize: {
        'hero': ['clamp(1.8rem, 4.3vw, 4.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.1' }],
        'section-title': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};

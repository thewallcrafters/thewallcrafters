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
        'twc-charcoal': '#050509',
        'twc-dark': '#111111',
        'twc-warm': '#F5F3EE',
        'twc-grey': '#999999',
        'twc-red': '#FF2B2B',
      },
      fontFamily: {
        'serif-display': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'sans-body': ['Inter', 'IBM Plex Sans', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
        'wide-editorial': '0.08em',
      },
      fontSize: {
        'hero': ['clamp(1.8rem, 4.3vw, 4.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.15' }],
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

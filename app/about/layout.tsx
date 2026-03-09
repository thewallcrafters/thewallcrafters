import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TWC Fit-Outs | Best Interior Design Company in Madurai',
  description: 'TWC Fit-Outs (The Wall Crafters) — Madurai\'s trusted interior design-build firm. 50,000 sq.ft factory, 50+ projects delivered. Modular kitchens, wardrobes & complete interiors since establishment.',
  keywords: [
    'TWC Fit-Outs Madurai', 'The Wall Crafters', 'interior design company Madurai',
    'best interior designers Madurai', 'modular kitchen company Tamil Nadu',
    'furniture manufacturer Madurai', 'about TWC Fit-Outs',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About TWC Fit-Outs | Interior Design Company in Madurai',
    description: 'Factory precision meets on-site excellence. 50,000 sq.ft manufacturing facility, 50+ projects delivered across Tamil Nadu.',
    url: 'https://thewallcrafters.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | TWC Fit-Outs',
  description: 'Learn about The Wall Crafters — a design-build firm founded by Anikate Singhal, specialising in factory-finished modular kitchens, wardrobes, and complete interior fit-outs.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About TWC Fit-Outs',
    description: 'Factory precision meets on-site excellence. One team, one responsibility.',
    url: 'https://thewallcrafters.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

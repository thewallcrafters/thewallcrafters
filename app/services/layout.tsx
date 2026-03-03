import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | TWC Fit-Outs',
  description: 'Full-service interior fit-outs — modular kitchens, wardrobes, office fit-outs, retail spaces, and hospitality design. Design, fabrication, and installation under one roof.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | TWC Fit-Outs',
    description: 'Design. Build. Deliver. One team, one responsibility, one standard of quality.',
    url: 'https://thewallcrafters.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

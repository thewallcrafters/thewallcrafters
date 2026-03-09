import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Services in Madurai | Design, Build & Install',
  description: 'Full-service interior design company in Madurai. Modular kitchens, wardrobes, office fit-outs, retail & hospitality interiors. Design, factory fabrication & on-site installation — one team.',
  keywords: [
    'interior design services Madurai', 'modular furniture Madurai', 'office fit-out services',
    'kitchen design and installation', 'commercial interior Madurai',
    'residential interior designer', 'factory-finished interiors Tamil Nadu',
    'interior renovation Madurai', 'turnkey interior solutions',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Interior Design Services in Madurai | TWC Fit-Outs',
    description: 'Design, build & deliver. Modular kitchens, wardrobes, office & commercial fit-outs under one roof. Factory precision, site excellence.',
    url: 'https://thewallcrafters.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

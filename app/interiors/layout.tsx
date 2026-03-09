import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design & Fit-Outs in Madurai | Home & Office Interiors',
  description: 'Complete interior fit-out solutions in Madurai — wardrobes, bedrooms, TV units, pooja rooms, office spaces, retail counters & more. 14 categories, 50+ projects delivered. Free consultation.',
  keywords: [
    'interior designer Madurai', 'home interior Madurai', 'wardrobe design Madurai',
    'bedroom interior design', 'TV unit design Madurai', 'pooja room design Madurai',
    'office interior Madurai', 'interior fit-out Tamil Nadu',
    'best interior company Madurai', 'home decoration Madurai',
  ],
  alternates: { canonical: '/interiors' },
  openGraph: {
    title: 'Interior Design & Fit-Outs in Madurai | TWC Fit-Outs',
    description: '14 categories of interior fit-outs — kitchens, wardrobes, bedrooms, TV units, pooja rooms, office spaces & more. Factory-finished, site-installed.',
    url: 'https://thewallcrafters.com/interiors',
  },
};

export default function InteriorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

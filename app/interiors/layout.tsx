import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interiors & Fit-Outs | TWC',
  description: 'Explore 14 categories of interior fit-outs — kitchens, wardrobes, bedrooms, TV units, pooja rooms, office spaces, retail counters, and hospitality fit-outs.',
  openGraph: {
    title: 'Interiors & Fit-Outs | TWC',
    description: 'Spaces that work and live. 50+ spaces delivered across residential and commercial categories.',
    url: 'https://thewallcrafters.com/interiors',
  },
};

export default function InteriorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

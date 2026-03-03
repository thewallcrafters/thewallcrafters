import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | TWC Fit-Outs',
  description: 'A portfolio of kitchens, wardrobes, office fit-outs, and complete interiors delivered by TWC. Factory precision, site excellence.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Our Work | TWC Fit-Outs',
    description: 'A selection of kitchens, wardrobes, and interiors crafted in our factory.',
    url: 'https://thewallcrafters.com/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}

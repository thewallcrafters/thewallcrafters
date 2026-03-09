import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Interior Design Portfolio Madurai',
  description: 'View completed modular kitchens, wardrobes, home & office interiors by TWC Fit-Outs Madurai. Real project photos, real homes. Factory-finished quality you can see.',
  keywords: [
    'interior design portfolio Madurai', 'modular kitchen projects', 'completed interiors Madurai',
    'home interior photos', 'TWC Fit-Outs projects', 'kitchen design gallery',
    'wardrobe design projects', 'before after interior design',
  ],
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Our Projects | TWC Fit-Outs Madurai',
    description: 'A portfolio of kitchens, wardrobes, and complete interiors delivered by TWC. Real projects, real quality.',
    url: 'https://thewallcrafters.com/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modular Kitchens | TWC Fit-Outs',
  description: 'Factory-built modular kitchens for Indian homes — L-shaped, U-shaped, parallel, straight, and island layouts with premium finishes and built-in storage.',
  openGraph: {
    title: 'Modular Kitchens | TWC Fit-Outs',
    description: 'Kitchens built for Indian cooking. Engineered in our factory, installed by our team.',
    url: 'https://thewallcrafters.com/kitchens',
  },
};

export default function KitchensLayout({ children }: { children: React.ReactNode }) {
  return children;
}

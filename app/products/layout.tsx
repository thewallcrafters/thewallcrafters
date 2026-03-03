import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware & Products | TWC Fit-Outs',
  description: 'Premium hardware and fittings used in every TWC fit-out — hinges, channels, handles, and accessories from globally trusted brands.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | TWC Fit-Outs',
    description: 'The hardware behind every great fit-out. Quality components, lasting performance.',
    url: 'https://thewallcrafters.com/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

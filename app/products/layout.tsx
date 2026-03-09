import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Poker Tables India | Buy Casino-Grade Tables Online',
  description: 'Buy premium poker tables online in India. Handcrafted 8 & 10 player casino-grade tables with foldable design. Starting ₹94,999. Free shipping, 30-day returns. By TWC Fit-Outs.',
  keywords: [
    'poker table India', 'buy poker table online', 'premium poker table',
    'foldable poker table', 'casino poker table India', '10 player poker table',
    '8 player poker table', 'poker table price India', 'game room furniture India',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Premium Poker Tables | TWC Fit-Outs',
    description: 'Handcrafted casino-grade poker tables. 8 & 10 player options, foldable design, free shipping pan India.',
    url: 'https://thewallcrafters.com/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modular Kitchen Designs in Madurai | L-Shaped, U-Shaped, Island',
  description: 'Best modular kitchen manufacturers in Madurai. Factory-built L-shaped, U-shaped, parallel, straight & island kitchens with premium hardware. Starting ₹1.5 lakh. Free design consultation.',
  keywords: [
    'modular kitchen Madurai', 'modular kitchen price Madurai', 'L shaped kitchen Madurai',
    'U shaped kitchen design', 'island kitchen Madurai', 'parallel kitchen design',
    'kitchen interior Madurai', 'modular kitchen manufacturers Tamil Nadu',
    'best modular kitchen near me', 'kitchen cabinet Madurai',
  ],
  alternates: { canonical: '/kitchens' },
  openGraph: {
    title: 'Modular Kitchen Designs in Madurai | TWC Fit-Outs',
    description: 'Factory-built modular kitchens for Indian homes. L-shaped, U-shaped, parallel & island layouts with premium finishes. 50+ kitchens delivered in Madurai.',
    url: 'https://thewallcrafters.com/kitchens',
  },
};

export default function KitchensLayout({ children }: { children: React.ReactNode }) {
  return children;
}

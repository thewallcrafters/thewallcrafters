import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    default: 'TWC Fit-Outs | Modular Kitchens & Interior Design',
    template: '%s | TWC Fit-Outs',
  },
  description: 'Factory-finished modular kitchens, wardrobes, and complete interior fit-outs for homes and businesses. Design, fabricate, and install — one team, one standard.',
  keywords: ['modular kitchen', 'wardrobes', 'interior fit-outs', 'TWC', 'The Wall Crafters', 'Madurai', 'Tamil Nadu', 'carpentry', 'office interior'],
  authors: [{ name: 'TWC Fit-Outs' }],
  creator: 'TWC Fit-Outs',
  metadataBase: new URL('https://thewallcrafters.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thewallcrafters.com',
    siteName: 'TWC Fit-Outs',
    title: 'TWC Fit-Outs | Modular Kitchens & Interior Design',
    description: 'Factory-finished interiors for Indian homes and businesses. 50+ spaces delivered.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TWC Fit-Outs | Modular Kitchens & Interior Design',
    description: 'Factory-finished interiors for Indian homes and businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C2824',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-twc-red focus:text-[#F5F3EE] focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

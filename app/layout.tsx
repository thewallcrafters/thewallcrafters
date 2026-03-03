import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
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
  alternates: { canonical: '/' },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://thewallcrafters.com/#business',
  name: 'TWC Fit-Outs',
  alternateName: 'The Wall Crafters',
  description:
    'Factory-finished modular kitchens, wardrobes, and complete interior fit-outs for homes and businesses across South India.',
  url: 'https://thewallcrafters.com',
  logo: 'https://thewallcrafters.com/icon.svg',
  image: 'https://thewallcrafters.com/opengraph-image',
  telephone: '+919952217602',
  email: 'main@thewallcrafters.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 59/8, Near Fatima Michael College Of Engineering & Technology, Senkottai Village, Sivagangai Main Road',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.9252',
    longitude: '78.1198',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: ['https://wa.me/919043050410'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Fit-Out Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modular Kitchens' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wardrobes & Storage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete Home Interiors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Fit-Outs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail & Hospitality Fit-Outs' } },
    ],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

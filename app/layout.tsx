import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
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
    default: 'TWC Fit-Outs | Modular Kitchen & Interior Designers in Madurai',
    template: '%s | TWC Fit-Outs Madurai',
  },
  description: 'Best modular kitchen & interior designers in Madurai, Tamil Nadu. Factory-finished kitchens, wardrobes, office fit-outs & home interiors. 50+ projects delivered. Free consultation — call +91 99522 17602.',
  keywords: [
    'modular kitchen Madurai', 'interior designers Madurai', 'kitchen designers Tamil Nadu',
    'wardrobe manufacturers Madurai', 'office interior Madurai', 'home interior design Madurai',
    'modular kitchen price Madurai', 'L shaped kitchen Madurai', 'U shaped kitchen Madurai',
    'island kitchen Madurai', 'parallel kitchen Madurai', 'wardrobe design Madurai',
    'TV unit design', 'pooja room design Madurai', 'office fit-out Tamil Nadu',
    'best interior company Madurai', 'TWC Fit-Outs', 'The Wall Crafters',
    'modular kitchen near me', 'interior decorator Madurai', 'home renovation Madurai',
    'commercial interior Madurai', 'factory-finished interiors', 'bedroom design Madurai',
  ],
  authors: [{ name: 'TWC Fit-Outs' }],
  creator: 'TWC Fit-Outs',
  publisher: 'TWC Fit-Outs Pvt. Ltd.',
  metadataBase: new URL('https://thewallcrafters.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thewallcrafters.com',
    siteName: 'TWC Fit-Outs',
    title: 'TWC Fit-Outs | Best Modular Kitchen & Interior Designers in Madurai',
    description: 'Factory-finished modular kitchens, wardrobes & complete home interiors in Madurai. 50+ spaces delivered. Design, fabricate & install — one team, one standard.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TWC Fit-Outs | Modular Kitchen & Interior Design Madurai',
    description: 'Best modular kitchens & interior designers in Madurai. Factory precision, on-site excellence. 50+ projects delivered.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console and Bing verification codes here
    // google: 'your-google-verification-code',
    // other: { 'msvalidate.01': 'your-bing-verification-code' },
  },
  category: 'Interior Design',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C2824',
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://thewallcrafters.com/#business',
  name: 'TWC Fit-Outs',
  alternateName: 'The Wall Crafters',
  description:
    'Best modular kitchen and interior designers in Madurai, Tamil Nadu. Factory-finished kitchens, wardrobes, and complete interior fit-outs for homes and businesses across South India.',
  url: 'https://thewallcrafters.com',
  logo: 'https://thewallcrafters.com/icon.svg',
  image: 'https://thewallcrafters.com/opengraph-image',
  telephone: '+919952217602',
  email: 'main@thewallcrafters.com',
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
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
  areaServed: [
    { '@type': 'City', name: 'Madurai', '@id': 'https://en.wikipedia.org/wiki/Madurai' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Trichy' },
    { '@type': 'City', name: 'Salem' },
    { '@type': 'City', name: 'Dindigul' },
    { '@type': 'City', name: 'Theni' },
    { '@type': 'City', name: 'Sivagangai' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'State', name: 'Kerala' },
  ],
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modular Kitchens', description: 'L-shaped, U-shaped, parallel, straight, and island kitchen designs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wardrobes & Storage', description: 'Walk-in, sliding, and hinged wardrobes engineered for space and style' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete Home Interiors', description: 'Bedrooms, TV units, pooja rooms, dining, and storage solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Fit-Outs', description: 'Executive desks, workstations, conference tables, and office storage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail & Hospitality Fit-Outs', description: 'Showcase counters, display units, and commercial interiors' } },
    ],
  },
  knowsAbout: [
    'Modular Kitchen Design', 'Interior Fit-Outs', 'Wardrobe Manufacturing',
    'Office Interior Design', 'CNC Woodworking', 'Laminate Finishing',
    'Kitchen Cabinet Design', 'Space Planning',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a modular kitchen cost in Madurai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modular kitchen costs in Madurai typically range from ₹1.5 lakh to ₹8 lakh+ depending on size, layout (L-shaped, U-shaped, island), materials, and hardware. TWC Fit-Outs offers transparent pricing with no hidden costs. Contact us for a free consultation and detailed quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to install a modular kitchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard modular kitchen takes 25-45 days from design approval to installation. Since TWC fabricates everything in our factory, on-site installation is completed in just 2-3 days, minimizing disruption to your home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide interior design services for offices in Madurai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, TWC Fit-Outs provides complete office interior solutions including executive desks, workstations, conference tables, display units, and modular storage. We serve offices across Madurai and Tamil Nadu.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does TWC Fit-Outs serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TWC Fit-Outs is based in Madurai and serves all of Tamil Nadu including Chennai, Coimbatore, Trichy, Salem, Dindigul, Theni, and Sivagangai. We also take projects in Kerala.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on TWC modular kitchens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All TWC modular kitchens come with comprehensive warranty coverage on materials and hardware. We use premium fittings from globally trusted brands and provide post-installation support.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thewallcrafters.com' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4J50TXGFRT"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted',
            });
            gtag('config', 'G-4J50TXGFRT');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([businessJsonLd, faqJsonLd, breadcrumbJsonLd]) }}
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

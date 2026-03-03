import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TWC Fit-Outs',
  description: 'Get in touch with TWC Fit-Outs for modular kitchen, wardrobe, and interior fit-out enquiries. Call +91 99522 17602 or email main@thewallcrafters.com.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact TWC Fit-Outs',
    description: 'Start your interior project with a conversation. We respond within 24 hours.',
    url: 'https://thewallcrafters.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

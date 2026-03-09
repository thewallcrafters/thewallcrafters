import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact TWC Fit-Outs Madurai | Free Interior Design Consultation',
  description: 'Get a free modular kitchen & interior design consultation in Madurai. Call +91 99522 17602, WhatsApp +91 90430 50410, or email main@thewallcrafters.com. Mon-Sat 10AM-7PM.',
  keywords: [
    'contact interior designer Madurai', 'modular kitchen quote Madurai',
    'interior design consultation', 'TWC Fit-Outs phone number',
    'interior designer near me Madurai', 'book interior consultation',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact TWC Fit-Outs | Free Interior Consultation in Madurai',
    description: 'Start your interior project today. Free consultation, transparent pricing. Call +91 99522 17602.',
    url: 'https://thewallcrafters.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

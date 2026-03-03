import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showcase Counters',
  description: 'Custom showcase counters and retail display solutions for jewellery shops, showrooms, and boutiques.',
  alternates: { canonical: '/interiors/showcase-counters' },
};

export default function ShowcaseCountersPage() {
  const showcaseItems = [
    {
      title: 'Jewellery Display Counter',
      description: 'Elegant glass-fronted display counters designed specifically for jewellery retail with secure storage.',
      image: '/images/showcase-counters/1.jpg',
    },
    {
      title: 'Retail Showcase',
      description: 'Versatile display units for retail stores with integrated lighting and premium finishes.',
      image: '/images/showcase-counters/2.jpg',
    },
    {
      title: 'Showroom Display',
      description: 'Large-format showcase systems for automobile, furniture, and product showrooms.',
      image: '/images/showcase-counters/3.jpg',
    },
    {
      title: 'Electronics Counter',
      description: 'Specialized display counters for electronics and gadget retail with charging capabilities.',
      image: '/images/showcase-counters/4.jpg',
    },
    {
      title: 'Premium Display Unit',
      description: 'High-end showcase counters with climate control options for delicate merchandise.',
      image: '/images/showcase-counters/5.jpg',
    },
    {
      title: 'Modular Showcase',
      description: 'Configurable display systems that can be arranged to suit any retail floor plan.',
      image: '/images/showcase-counters/6.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Showcase Counters"
          description="Glass-fronted display counters for retail, jewellery, and showroom spaces — designed to highlight your products."
          image="/images/showcase-counters/1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={showcaseItems} columns={3} />
        </div>
      </section>
    </div>
  );
}

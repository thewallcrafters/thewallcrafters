import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dining',
  description: 'Handcrafted dining tables, crockery units, and bar counters for memorable family dining experiences.',
  alternates: { canonical: '/interiors/dining' },
};

export default function DiningBarPage() {
  const items = [
    {
      title: 'Bar Table',
      description: 'Counter-height bar table in premium wood finish — perfect for entertaining and casual dining.',
      image: '/images/dining/bar-table-1.jpg',
    },
    {
      title: 'High Bar Unit',
      description: 'Tall bar unit with integrated bottle rack, glass storage, and under-counter LED lighting.',
      image: '/images/dining/bar-table-2.jpg',
    },
    {
      title: 'Bar Console',
      description: 'Slim bar console with open shelving for spirits, stemware, and serving accessories.',
      image: '/images/dining/bar-table-3.jpg',
    },
    {
      title: 'Crockery Unit',
      description: 'Display crockery unit with glass-front shutters, internal lighting, and deep base storage.',
      image: '/images/dining/crockery-unit-1.jpg',
    },
    {
      title: 'Crockery Cabinet',
      description: 'Classic crockery cabinet with solid wood frame, adjustable shelves, and soft-close doors.',
      image: '/images/dining/crockery-unit-2.jpg',
    },
    {
      title: 'Buffet & Crockery',
      description: 'Low buffet unit paired with an upper display cabinet — a complete dining room storage solution.',
      image: '/images/dining/crockery-unit-3.jpg',
    },
    {
      title: 'Side Crockery Unit',
      description: 'Narrow side cabinet with cutlery drawers, linen storage, and open plate rack.',
      image: '/images/dining/crockery-unit-4.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Dining & Bar"
          description="Bar tables, crockery units, and dining furniture crafted for refined entertaining and everyday living."
          image="/images/dining/bar-table-1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={items} columns={3} />
        </div>
      </section>
    </div>
  );
}

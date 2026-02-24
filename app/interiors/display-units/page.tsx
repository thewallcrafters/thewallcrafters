import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function DisplayUnitsPage() {
  const items = [
    {
      title: 'Trophy & Award Display',
      description: 'Illuminated display unit for trophies, awards, and certificates — with glass shelves and LED lighting.',
      image: '/images/office/display 1.jpg',
    },
    {
      title: 'Product Showcase Unit',
      description: 'Glass-fronted showcase cabinet for product samples, models, and brand artefacts.',
      image: '/images/office/display 2.jpg',
    },
    {
      title: 'Wall-Mounted Display',
      description: 'Floating wall display with backlit niches for showroom and corporate lobby installations.',
      image: '/images/office/display 3.jpg',
    },
    {
      title: 'Open Display Shelving',
      description: 'Open-backed shelving system for books, decorative items, and corporate branding displays.',
      image: '/images/office/display 4.jpg',
    },
    {
      title: 'Exhibition Display Stand',
      description: 'Portable modular display stand for exhibitions, events, and trade shows.',
      image: '/images/office/display 5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Display Units"
          description="Trophy displays, showcases, and exhibition furniture that present your brand and products with clarity."
          image="/images/office/display 1.jpg"
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

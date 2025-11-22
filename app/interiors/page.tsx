'use client';

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function InteriorsPage() {
  const categories = [
    {
      title: 'Puja Rooms',
      description: 'Quiet sanctuaries crafted with wood, brass, proportion and light.',
      image: 'https://images.pexels.com/photos/8082304/pexels-photo-8082304.jpeg?auto=compress&cs=tinysrgb&w=1200',
      href: '/interiors/puja-room',
    },
    {
      title: 'Storage Systems',
      description: 'Wall-to-wall storage, wardrobes and cabinetry that disappear into architecture.',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1200',
      href: '/interiors/storage',
    },
    {
      title: 'TV & Media Units',
      description: 'Minimal media walls with hidden wiring, integrated lighting and refined finishes.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200',
      href: '/interiors/tv-units',
    },
    {
      title: 'Conference Tables',
      description: 'Tables that anchor meeting rooms — with integrated power and robust finishes.',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
      href: '/interiors/conference-tables',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      {/* Hero */}
      <div className="pt-24">
        <CategoryHero
          title="Interiors & Fit-Outs"
          description="From focused workspaces to puja rooms, storage and media walls, TWC Fit-Outs crafts interiors tailored to the way you live and work."
        />
      </div>

      {/* Categories grid */}
      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={categories} columns={2} />
        </div>
      </section>
    </div>
  );
}

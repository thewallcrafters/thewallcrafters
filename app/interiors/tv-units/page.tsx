import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TV Units',
  description: 'Custom entertainment units and TV wall solutions designed to blend seamlessly with your living space.',
  alternates: { canonical: '/interiors/tv-units' },
};

export default function TVUnitsPage() {
  const tvUnits = [
    {
      title: 'TV Unit',
      description: 'Wall-mounted media unit with concealed brackets, cable management and ambient LED strip lighting.',
      image: '/images/tv-units/tv-unit-1.jpg',
    },
    {
      title: 'Full-Wall Entertainment Unit',
      description: 'Floor-to-ceiling integrated system with TV panel, shelving, storage and display niches.',
      image: '/images/tv-units/tv-unit-2.jpg',
    },
    {
      title: 'Floating TV Console',
      description: 'Simple horizontal cabinet with clean lines, drawers for media devices and minimal visual weight.',
      image: '/images/tv-units/tv-unit-3.jpg',
    },
    {
      title: 'Feature Wall TV Unit',
      description: 'Textured backdrop with integrated wood shelving, recessed TV panel and indirect lighting.',
      image: '/images/tv-units/tv-unit-4.jpg',
    },
    {
      title: 'Built-In Media Wall',
      description: 'Recessed TV niche with surrounding shelving, cupboards and storage below.',
      image: '/images/tv-units/tv-unit-5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="TV & Media Units"
          description="Minimal media walls with hidden wiring, integrated lighting and details tuned to your living room."
          image="/images/tv-units/tv-unit-1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={tvUnits} columns={3} />
        </div>
      </section>
    </div>
  );
}

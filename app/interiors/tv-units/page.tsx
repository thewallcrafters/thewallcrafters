'use client';

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function TVUnitsPage() {
  const tvUnits = [
    {
      title: 'Floating Media Console',
      description: 'Wall-mounted unit with concealed brackets, cable management and ambient LED strip lighting.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Full-Wall Entertainment Unit',
      description: 'Floor-to-ceiling integrated system with TV panel, shelving, storage and display niches.',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Minimal Low-Profile Stand',
      description: 'Simple horizontal cabinet with clean lines, drawers for media devices and minimal visual weight.',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Stone & Wood Feature Wall',
      description: 'Textured stone backdrop with integrated wood shelving, recessed panel and indirect lighting.',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Swivel Panel TV Mount',
      description: 'Rotating wall mount allowing flexible viewing angles with hidden wiring and cable routing.',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Built-In Alcove Unit',
      description: 'Recessed TV niche with surrounding shelving, cupboards and acoustic fabric backing.',
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="TV & Media Units"
          description="Minimal media walls with hidden wiring, integrated lighting and details tuned to your living room."
          image="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

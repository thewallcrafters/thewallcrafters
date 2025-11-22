'use client';

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function StoragePage() {
  const storageItems = [
    {
      title: 'Floor-to-Ceiling Wardrobes',
      description: 'Full-height cabinetry with sliding/hinged doors, internal organizers and soft-close mechanisms.',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Loft Storage Solutions',
      description: 'Overhead storage accessed via pull-down ladders or integrated steps, maximizing vertical space.',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Living Room Wall Cabinets',
      description: 'Seamless wall-mounted units with push-to-open doors, display niches and media integration.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Utility & Service Storage',
      description: 'Dedicated spaces for cleaning supplies, appliances and household equipment with ventilation.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Walk-In Closet Systems',
      description: 'Modular wardrobe systems with hanging rods, drawers, shoe racks and accessory trays.',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Bedroom Storage Beds',
      description: 'Beds with hydraulic lift mechanisms revealing deep storage compartments beneath.',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Storage Systems"
          description="Wall-to-wall storage, wardrobes and cabinetry that disappear into architecture while keeping everything in reach."
          image="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={storageItems} columns={3} />
        </div>
      </section>
    </div>
  );
}

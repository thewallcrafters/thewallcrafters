'use client';

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function PujaRoomPage() {
  const pujaRooms = [
    {
      title: 'Traditional Wood & Brass Altar',
      description: 'Carved teak panels, brass lamps and a marble platform anchoring a classical puja space.',
      image: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Minimal Niche Puja',
      description: 'A simple recessed niche with soft backlighting, stone finish and minimal ornamentation.',
      image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Floating Unit with Backlit Panel',
      description: 'Wall-mounted cabinet in veneer with a luminous backlit panel and integrated storage.',
      image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Temple-Style Carved Doors',
      description: 'Detailed woodwork on bi-fold doors concealing a complete puja setup with shelving and drawers.',
      image: 'https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Contemporary Marble Puja Corner',
      description: 'Modern interpretation with white marble, clean lines and hidden LED accents.',
      image: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Glass & Brass Compact Altar',
      description: 'Compact design with glass shelves, brass framework and subtle warm lighting.',
      image: 'https://images.pexels.com/photos/6045229/pexels-photo-6045229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Puja Rooms"
          description="Quiet sanctuaries crafted with wood, brass, proportion and light."
          image="https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={pujaRooms} columns={3} />
        </div>
      </section>
    </div>
  );
}

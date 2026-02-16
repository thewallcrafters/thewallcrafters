'use client';

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function HospitalityPage() {
  const hospitalityItems = [
    {
      title: 'Hotel Vanity Unit',
      description: 'Luxurious vanity units designed for hotel bathrooms with integrated storage and premium finishes.',
      image: '/images/hospitality/1.jpg',
    },
    {
      title: 'Restaurant Counter',
      description: 'Custom reception and service counters for restaurants with durable materials and elegant design.',
      image: '/images/hospitality/2.jpg',
    },
    {
      title: 'Hospitality Storage',
      description: 'Built-in storage solutions for hotels and resorts, combining function with aesthetic appeal.',
      image: '/images/hospitality/3.jpg',
    },
    {
      title: 'Spa Reception',
      description: 'Welcoming reception desks and furniture for spa and wellness centers.',
      image: '/images/hospitality/4.jpg',
    },
    {
      title: 'Bar & Lounge Unit',
      description: 'Custom bar counters and back-bars designed for hotels, lounges, and entertainment spaces.',
      image: '/images/hospitality/5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Hospitality"
          description="Custom vanity units, counters, and furniture designed for hotels, restaurants, and hospitality spaces."
          image="/images/hospitality/1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={hospitalityItems} columns={3} />
        </div>
      </section>
    </div>
  );
}

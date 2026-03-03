import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab & Utility Cabinets',
  description: 'Laboratory and utility cabinets built to specification — chemical-resistant, durable, and functional.',
  alternates: { canonical: '/interiors/lab-utility-cabinets' },
};

export default function LabUtilityCabinetsPage() {
  const cabinetItems = [
    {
      title: 'Laboratory Storage Cabinet',
      description: 'Durable storage cabinets designed for laboratory environments with chemical-resistant finishes.',
      image: '/images/lab-utility-cabinets/1.jpg',
    },
    {
      title: 'Utility Room Cabinet',
      description: 'Practical storage solutions for utility rooms, workshops, and service areas.',
      image: '/images/lab-utility-cabinets/2.jpg',
    },
    {
      title: 'Workshop Storage',
      description: 'Heavy-duty cabinets for tools, equipment, and supplies in workshop environments.',
      image: '/images/lab-utility-cabinets/3.jpg',
    },
    {
      title: 'Industrial Cabinet',
      description: 'Robust cabinet systems built for demanding industrial and commercial applications.',
      image: '/images/lab-utility-cabinets/4.jpg',
    },
    {
      title: 'Multi-Purpose Storage',
      description: 'Versatile storage units suitable for labs, garages, and utility spaces.',
      image: '/images/lab-utility-cabinets/5.jpg',
    },
    {
      title: 'Modular Lab Unit',
      description: 'Customizable modular systems that adapt to various laboratory and utility requirements.',
      image: '/images/lab-utility-cabinets/6.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Lab & Utility Cabinets"
          description="Durable storage solutions for non-medical labs, workshops, and utility areas — built to withstand heavy use."
          image="/images/lab-utility-cabinets/1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={cabinetItems} columns={3} />
        </div>
      </section>
    </div>
  );
}

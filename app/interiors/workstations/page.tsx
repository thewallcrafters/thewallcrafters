import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workstations',
  description: 'Modular office workstations designed for productivity, collaboration, and efficient space utilization.',
  alternates: { canonical: '/interiors/workstations' },
};

export default function WorkstationsPage() {
  const items = [
    {
      title: 'Linear Workstation',
      description: 'Row-style workstations with shared power modules, privacy screens, and cable trays.',
      image: '/images/office/workstation-1.jpg',
    },
    {
      title: 'Cluster Workstation',
      description: 'Four-pod cluster configuration promoting collaboration while maintaining individual focus zones.',
      image: '/images/office/workstation-2.jpg',
    },
    {
      title: 'Back-to-Back Workstation',
      description: 'Space-efficient back-to-back layout with central storage spine and modular overhead cabinets.',
      image: '/images/office/workstation-3.jpg',
    },
    {
      title: 'Acoustic Workstation',
      description: 'High-panel acoustic workstation with fabric-wrapped dividers for noise reduction in open offices.',
      image: '/images/office/workstation-4.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Workstations"
          description="Modular workstations designed for productivity, collaboration, and the way modern teams actually work."
          image="/images/office/workstation-2.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={items} columns={2} />
        </div>
      </section>
    </div>
  );
}

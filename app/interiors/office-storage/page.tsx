import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Storage',
  description: 'Commercial storage solutions — filing systems, cabinets, and modular office storage by TWC Fit-Outs.',
  alternates: { canonical: '/interiors/office-storage' },
};

export default function OfficeStoragePage() {
  const items = [
    {
      title: 'Modular Storage Wall',
      description: 'Full-height modular storage wall with open shelves, closed cabinets, and integrated display niches.',
      image: '/images/office/modular-storage-4.jpg',
    },
    {
      title: 'Modular Storage Unit',
      description: 'Freestanding modular unit with mix of open and closed compartments for flexible office storage.',
      image: '/images/office/modular-storage-5.jpg',
    },
    {
      title: 'Filing & Storage Cabinet',
      description: 'Multi-drawer filing cabinet in steel and laminate with lock and label holders.',
      image: '/images/office/storage-1.jpg',
    },
    {
      title: 'Lateral Storage Unit',
      description: 'Wide lateral cabinet with flip-up doors and adjustable shelving for files and stationery.',
      image: '/images/office/storage-2.jpg',
    },
    {
      title: 'Low Storage Credenza',
      description: 'Under-desk height credenza with push-to-open shutters and internal shelf.',
      image: '/images/office/storage-3.jpg',
    },
    {
      title: 'Storage Tower Unit',
      description: 'Tall narrow storage tower with combination of drawers, shelves, and lockable compartments.',
      image: '/images/office/storage-unit-1.jpg',
    },
    {
      title: 'Open Shelf Storage',
      description: 'Industrial-style open shelving unit for books, binders, and office display.',
      image: '/images/office/storage-unit-2.jpg',
    },
    {
      title: 'Mobile Pedestal',
      description: 'Mobile under-desk pedestal with two drawers and a file drawer on castors.',
      image: '/images/office/storage-unit-3.jpg',
    },
    {
      title: 'Overhead Cabinet',
      description: 'Wall-mounted overhead cabinet with push-to-open or handled doors for workstation storage.',
      image: '/images/office/storage-unit-4.jpg',
    },
    {
      title: 'Side Storage Module',
      description: 'Compact side module that pairs with any workstation or executive desk layout.',
      image: '/images/office/storage-unit-5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Office Storage"
          description="Filing systems, modular storage, and organizational solutions that keep every office running efficiently."
          image="/images/office/modular-storage-4.jpg"
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

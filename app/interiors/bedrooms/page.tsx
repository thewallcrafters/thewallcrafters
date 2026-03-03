import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bedrooms',
  description: 'Custom bedroom furniture — beds, dressers, and storage units crafted for comfort and elegance by TWC Fit-Outs, Madurai.',
  alternates: { canonical: '/interiors/bedrooms' },
};

export default function BedroomsPage() {
  const items = [
    {
      title: 'King Bed with Storage',
      description: 'Upholstered headboard with hydraulic lift base providing deep under-bed storage.',
      image: '/images/bedroom/bed-1.jpg',
    },
    {
      title: 'Platform Bed',
      description: 'Low-profile platform with integrated side panels and bedside shelving.',
      image: '/images/bedroom/bed2.jpg',
    },
    {
      title: 'Fitted Bed Unit',
      description: 'Floor-to-ceiling fitted unit with bed frame, wardrobes, and overhead storage in one seamless design.',
      image: '/images/bedroom/bed-3.jpg',
    },
    {
      title: 'Dressing Unit',
      description: 'Full-length mirror with flanking drawers, built-in lighting, and jewellery compartments.',
      image: '/images/bedroom/du-1.jpg',
    },
    {
      title: 'Vanity & Dresser',
      description: 'Compact dressing table with illuminated mirror, soft-close drawers and open shelving.',
      image: '/images/bedroom/du2.jpg',
    },
    {
      title: 'Study Dresser',
      description: 'Dual-purpose unit combining a dresser with an integrated study nook and bookshelf.',
      image: '/images/bedroom/du3.jpg',
    },
    {
      title: 'Bedside Storage Unit',
      description: 'Wall-mounted floating bedside unit with drawer, shelf, and integrated USB charging.',
      image: '/images/bedroom/su1.jpg',
    },
    {
      title: 'Side Cabinet',
      description: 'Freestanding side cabinet in premium laminate with soft-close hinged door.',
      image: '/images/bedroom/su2.jpg',
    },
    {
      title: 'Multi-Drawer Chest',
      description: 'Tall chest-of-drawers in elegant two-tone finish — ample storage for everyday essentials.',
      image: '/images/bedroom/su3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Bedrooms"
          description="Complete bedroom solutions — beds, dressers, and storage units crafted for rest, comfort, and quiet elegance."
          image="/images/bedroom/bed-1.jpg"
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

import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Storage Solutions',
  description: 'Smart storage solutions — shoe racks, loft storage, and modular shelving systems for organized living.',
  alternates: { canonical: '/interiors/storage' },
};

export default function StoragePage() {
  const storageItems = [
    {
      title: 'Bookshelf',
      description: 'Open-backed bookshelf with adjustable shelves in premium laminate or veneer finish.',
      image: '/images/storage/bookshelf-1.jpg',
    },
    {
      title: 'Floor-to-Ceiling Bookcase',
      description: 'Full-height bookcase with ladder access, display niches, and closed base cabinets.',
      image: '/images/storage/bookshelf-2.jpg',
    },
    {
      title: 'Wall Shelving Unit',
      description: 'Floating wall-mounted shelving in a staggered pattern for books, décor, and plants.',
      image: '/images/storage/bookshelf-3.jpg',
    },
    {
      title: 'Library Unit',
      description: 'Built-in library wall with deep shelves, reading niche, and integrated lighting.',
      image: '/images/storage/bookshelf-4.jpg',
    },
    {
      title: 'Large Bookshelf',
      description: 'Wide modular bookshelf system combining open and closed sections for flexible storage.',
      image: '/images/storage/book-shelf-4.jpg',
    },
    {
      title: 'Shoe Rack',
      description: 'Slim shoe rack with angled shelves for efficient footwear storage near entryways.',
      image: '/images/storage/shoe-rack-1.jpg',
    },
    {
      title: 'Shoe Cabinet',
      description: 'Enclosed shoe cabinet with flip-up doors and concealed storage for a clean foyer look.',
      image: '/images/storage/shoe-rack-2.jpg',
    },
    {
      title: 'Tall Shoe Unit',
      description: 'Floor-to-ceiling shoe unit with multiple rows and a bench seat at the base.',
      image: '/images/storage/shoe-rack-3.jpg',
    },
    {
      title: 'Open Shoe Shelf',
      description: 'Open-frame shoe shelf in powder-coated steel with wooden shelf inserts.',
      image: '/images/storage/shoe-rack-4.jpg',
    },
    {
      title: 'Entryway Shoe Storage',
      description: 'Combined entryway unit with shoe storage below, coat hooks above, and a mirror.',
      image: '/images/storage/shoe-rack-5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Storage Systems"
          description="Wall-to-wall storage, wardrobes and cabinetry that disappear into architecture while keeping everything in reach."
          image="/images/storage/bookshelf-1.jpg"
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

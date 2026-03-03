import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wardrobes',
  description: 'Bespoke modular wardrobes — sliding, hinged, and walk-in designs with smart storage solutions by TWC Fit-Outs.',
  alternates: { canonical: '/interiors/wardrobes' },
};

export default function WardrobesPage() {
  const wardrobes = [
    {
      title: 'Hinged Wardrobe',
      description: 'Classic hinged doors with a full interior fit-out — hanging rails, shelves, drawers, and a mirror panel.',
      image: '/images/wardrobes/wardrobe-1.jpg',
    },
    {
      title: 'Sliding Door Wardrobe',
      description: 'Space-saving sliding shutters in high-gloss or matte finish with soft-close track systems.',
      image: '/images/wardrobes/wardrobe-2.jpg',
    },
    {
      title: 'Floor-to-Ceiling Wardrobe',
      description: 'Full-height cabinetry making the most of every inch — loft storage above, deep drawers below.',
      image: '/images/wardrobes/wardrobe-3.jpg',
    },
    {
      title: 'Walk-In Wardrobe',
      description: 'A dedicated dressing room with modular sections for clothing, shoes, accessories, and jewellery.',
      image: '/images/wardrobes/wardrobe-4.jpg',
    },
    {
      title: 'Bedroom Wall Unit',
      description: 'Integrated wardrobe and bedside panel system that frames the bed and unifies the bedroom.',
      image: '/images/wardrobes/wardrobe-5.jpg',
    },
    {
      title: 'Open Wardrobe System',
      description: 'Display-style open shelving with hanging rails and cubbies — a clean, contemporary look.',
      image: '/images/wardrobes/wardrobe-6.jpg',
    },
    {
      title: 'Mirror-Front Wardrobe',
      description: 'Full-length mirror panels on sliding or hinged doors that double the perception of space.',
      image: '/images/wardrobes/wardrobe-7.jpg',
    },
    {
      title: 'Corner Wardrobe',
      description: 'L-shaped unit that utilizes corner space efficiently with carousel or swing-out drawers.',
      image: '/images/wardrobes/wardrobe-8.jpg',
    },
    {
      title: 'Two-Tone Wardrobe',
      description: 'Contrasting upper and lower finishes — lacquered shutters with veneer plinths or vice versa.',
      image: '/images/wardrobes/wardrobe-9.jpg',
    },
    {
      title: 'Kids Wardrobe',
      description: 'Compact, colourful, and child-friendly storage with adjustable shelves that grow with your child.',
      image: '/images/wardrobes/wardrobe-10.jpg',
    },
    {
      title: 'Custom Fitted Wardrobe',
      description: 'Built precisely to your room dimensions and personal storage needs — no wasted space.',
      image: '/images/wardrobes/wardrobe-11.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Wardrobes"
          description="Walk-in, sliding, or hinged — wardrobes engineered precisely for your space and the way you live."
          image="/images/wardrobes/wardrobe-2.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={wardrobes} columns={3} />
        </div>
      </section>
    </div>
  );
}

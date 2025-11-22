import { notFound } from 'next/navigation';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMeta from '@/components/projects/ProjectMeta';
import ProjectBody from '@/components/projects/ProjectBody';
import ImageGallery from '@/components/projects/ImageGallery';
import ProjectGalleryTitle from '@/components/projects/ProjectGalleryTitle';

// Kitchen data
const kitchens: Record<string, any> = {
  'premium-island-kitchen': {
    name: 'Premium Island Kitchen',
    location: 'Contemporary Living',
    category: 'Kitchen',
    scope: 'Modular Kitchen · Island Layout',
    type: 'Kitchen · Island Configuration',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'A spacious island kitchen designed for modern entertaining with integrated appliances, statement lighting, and waterfall stone countertops that create a focal point in the home.',
      },
      {
        title: 'Key Features',
        content: [
          'Central island with waterfall stone edges and integrated seating',
          'Premium integrated appliances with flush installation',
          'Statement pendant lighting above the island',
          'Soft-close mechanisms throughout',
          'Organized storage with pull-out systems',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'Engineered stone countertops with waterfall edges',
          'Premium laminate cabinetry with soft-close hinges',
          'Stainless steel appliances and fixtures',
          'Under-cabinet LED lighting',
        ],
      },
      {
        title: 'Result',
        content: 'A premium kitchen that serves as the heart of the home, combining functionality with sophisticated design for modern living and entertaining.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  'warm-l-shaped-kitchen': {
    name: 'Warm L-Shaped Kitchen',
    location: 'Residential Project',
    category: 'Kitchen',
    scope: 'Modular Kitchen · L-Shaped Layout',
    type: 'Kitchen · L-Shaped Configuration',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'An efficient corner layout kitchen with warm wood-finish cabinetry, under-cabinet lighting, and soft-close mechanisms that maximize functionality in a compact space.',
      },
      {
        title: 'Key Features',
        content: [
          'L-shaped layout optimizing corner space',
          'Wood-finish cabinetry for warmth',
          'Under-cabinet LED lighting for task illumination',
          'Soft-close drawers and cabinets throughout',
          'Integrated appliances',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'Wood-grain laminate with matte finish',
          'Quartz countertops',
          'Brushed nickel hardware',
          'Ceramic tile backsplash',
        ],
      },
      {
        title: 'Result',
        content: 'A warm and inviting kitchen that efficiently uses every inch of space while maintaining a cozy, welcoming atmosphere.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
};

export default async function KitchenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kitchen = kitchens[slug];

  if (!kitchen) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-twc-charcoal">
      {/* Hero */}
      <ProjectHero
        title={kitchen.name}
        location={kitchen.location}
        type={kitchen.type}
        image={kitchen.image}
      />

      {/* Main content */}
      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Meta sidebar - left column (3 cols) */}
            <div className="lg:col-span-3">
              <ProjectMeta
                name={kitchen.name}
                location={kitchen.location}
                category={kitchen.category}
                scope={kitchen.scope}
              />
            </div>

            {/* Body content - right column (9 cols) */}
            <div className="lg:col-span-9">
              <ProjectBody sections={kitchen.sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="section-padding bg-twc-dark">
        <div className="container-wide">
          <ProjectGalleryTitle />
          <ImageGallery images={kitchen.galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-twc-warm">
        <div className="container-wide text-center space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-twc-grey">Start your project</p>
          <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.8rem)] leading-tight max-w-4xl mx-auto text-twc-charcoal">
            Ready to design your dream kitchen?
          </h2>
          <p className="text-lg text-twc-charcoal/75 max-w-3xl mx-auto">
            Share your vision with us. From layout planning to material selection, we'll craft a kitchen tailored to your lifestyle and space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:main@thewallcrafters.com"
              className="border border-twc-charcoal px-8 py-4 text-sm tracking-wider uppercase text-twc-charcoal hover:bg-twc-charcoal hover:text-twc-warm transition-colors duration-300"
            >
              Email the studio
            </a>
            <a
              href="/kitchens"
              className="px-8 py-4 text-sm tracking-wider uppercase text-twc-charcoal hover:text-twc-red transition-colors duration-300"
            >
              View all kitchens
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'premium-island-kitchen' },
    { slug: 'warm-l-shaped-kitchen' },
  ];
}

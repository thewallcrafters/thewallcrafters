import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMeta from '@/components/projects/ProjectMeta';
import ProjectBody from '@/components/projects/ProjectBody';
import ImageGallery from '@/components/projects/ImageGallery';
import ProjectGalleryTitle from '@/components/projects/ProjectGalleryTitle';
import type { Project } from '@/types/project';
import type { Metadata } from 'next';

// Kitchen data
const kitchens: Record<string, Project> = {
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
  'parallel-kitchen-tall-units': {
    name: 'Parallel Kitchen with Tall Units',
    location: 'Urban Apartment',
    category: 'Kitchen',
    scope: 'Modular Kitchen · Parallel Layout',
    type: 'Kitchen · Gallery Configuration',
    image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'A gallery-style parallel kitchen maximizing storage with floor-to-ceiling units and sleek handleless fronts, perfect for urban living where every inch counts.',
      },
      {
        title: 'Key Features',
        content: [
          'Parallel layout with facing work zones',
          'Floor-to-ceiling tall units for maximum storage',
          'Handleless fronts with push-to-open mechanisms',
          'Integrated appliances seamlessly incorporated',
          'Pull-out pantry systems and organizers',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'High-gloss laminate cabinetry',
          'Solid surface countertops',
          'Chrome accents and fixtures',
          'Glass cabinet inserts for display',
        ],
      },
      {
        title: 'Result',
        content: 'A sleek, modern kitchen that maximizes vertical space and provides exceptional storage capacity while maintaining clean lines and contemporary aesthetics.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  'compact-urban-kitchen': {
    name: 'Compact Urban Kitchen',
    location: 'City Apartment',
    category: 'Kitchen',
    scope: 'Modular Kitchen · Compact Layout',
    type: 'Kitchen · Space-Efficient Design',
    image: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'Smart space planning for smaller footprints with modular units, pull-out organizers, and vertical storage solutions that prove big functionality can come in compact packages.',
      },
      {
        title: 'Key Features',
        content: [
          'Optimized L-shaped layout for compact spaces',
          'Multi-functional modular units',
          'Pull-out and fold-down storage solutions',
          'Vertical storage maximization',
          'Integrated appliances scaled for space',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'Light-colored laminate to enhance space perception',
          'Compact engineered stone countertops',
          'Space-saving fixtures and hardware',
          'Reflective backsplash materials',
        ],
      },
      {
        title: 'Result',
        content: 'A highly functional kitchen that proves small spaces can be incredibly efficient, offering all essential features without compromise on style or usability.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  'modern-u-shape-kitchen': {
    name: 'Modern U-Shape Kitchen',
    location: 'Family Home',
    category: 'Kitchen',
    scope: 'Modular Kitchen · U-Shaped Layout',
    type: 'Kitchen · Three-Wall Configuration',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'A three-wall U-shaped configuration offering extensive counter space, ample storage, and an efficient work triangle that makes cooking a pleasure for busy families.',
      },
      {
        title: 'Key Features',
        content: [
          'U-shaped layout with optimal work triangle',
          'Extensive counter space on three walls',
          'Corner solutions for easy access',
          'Multiple work zones for simultaneous use',
          'Premium integrated appliances',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'Premium laminate with wood-grain texture',
          'Granite countertops',
          'Stainless steel appliances and sinks',
          'Designer tile backsplash',
        ],
      },
      {
        title: 'Result',
        content: 'A spacious, functional kitchen that accommodates multiple cooks, provides abundant storage, and creates an efficient workspace perfect for family living.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  'minimalist-white-kitchen': {
    name: 'Minimalist White Kitchen',
    location: 'Modern Home',
    category: 'Kitchen',
    scope: 'Modular Kitchen · Minimalist Design',
    type: 'Kitchen · Contemporary Aesthetic',
    image: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Design Brief',
        content: 'Clean lines, handleless cabinets, integrated appliances, and a focus on negative space and simplicity create a serene, uncluttered environment that embodies modern minimalism.',
      },
      {
        title: 'Key Features',
        content: [
          'Pure white handleless cabinetry',
          'Fully integrated concealed appliances',
          'Touch-to-open mechanisms throughout',
          'Minimalist hardware and fixtures',
          'Clean, uninterrupted surfaces',
        ],
      },
      {
        title: 'Materials & Finishes',
        content: [
          'High-quality white matte laminate',
          'White solid surface countertops',
          'Concealed LED lighting',
          'Minimalist chrome fixtures',
        ],
      },
      {
        title: 'Result',
        content: 'A pure, minimalist kitchen that celebrates simplicity and functionality, creating a calm, organized space that feels both modern and timeless.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const kitchen = kitchens[slug];
  if (!kitchen) return { title: 'Kitchen Not Found' };
  return {
    title: kitchen.name,
    description: kitchen.sections[0]?.content as string || `${kitchen.name} — ${kitchen.type} by TWC Fit-Outs`,
    alternates: { canonical: `/kitchens/${slug}` },
  };
}

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
          <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.8rem)] leading-tight max-w-4xl mx-auto text-[#F5F3EE]">
            Ready to design your dream kitchen?
          </h2>
          <p className="text-lg text-[#F5F3EE]/75 max-w-3xl mx-auto">
            Share your vision with us. From layout planning to material selection, we'll craft a kitchen tailored to your lifestyle and space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:main@thewallcrafters.com"
              className="border border-[#F5F3EE] px-8 py-4 text-sm tracking-wider uppercase text-[#F5F3EE] hover:bg-[#F5F3EE] hover:text-[#2C2824] transition-colors duration-300"
            >
              Email the studio
            </a>
            <Link
              href="/kitchens"
              className="px-8 py-4 text-sm tracking-wider uppercase text-[#F5F3EE] hover:text-twc-red transition-colors duration-300"
            >
              View all kitchens
            </Link>
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
    { slug: 'parallel-kitchen-tall-units' },
    { slug: 'compact-urban-kitchen' },
    { slug: 'modern-u-shape-kitchen' },
    { slug: 'minimalist-white-kitchen' },
  ];
}

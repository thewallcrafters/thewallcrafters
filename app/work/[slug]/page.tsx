import { notFound } from 'next/navigation';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMeta from '@/components/projects/ProjectMeta';
import ProjectBody from '@/components/projects/ProjectBody';
import ImageGallery from '@/components/projects/ImageGallery';
import ProjectNavigation from '@/components/projects/ProjectNavigation';
import ProjectGalleryTitle from '@/components/projects/ProjectGalleryTitle';
import type { Project } from '@/types/project';

// Project data
const projects: Record<string, Project> = {
  'jp-residence': {
    name: 'JP Residence',
    location: 'Kochadai, Madurai',
    category: 'Residential',
    scope: 'Interior Fit-Out',
    type: 'Residential · Interior Fit-Out',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Vision',
        content: 'The client envisioned a modern yet cozy home that balances contemporary design with everyday functionality, reflecting their lifestyle while feeling warm and welcoming.',
      },
      {
        title: 'Challenges',
        content: [
          'Balancing aesthetics and daily-use practicality',
          'Maximizing storage without making the space look heavy',
        ],
      },
      {
        title: 'Solutions',
        content: [
          'Smart layout optimisation with multi-functional furniture and built-in storage',
          'Warm materials, textures and lighting to keep the space inviting',
        ],
      },
      {
        title: 'Outcome',
        content: 'JP Residence became a seamless blend of style and practicality. The home now feels open, organized, and comfortably modern, reflecting the client\'s personality without sacrificing ease of living.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    nextSlug: 'meiyyappan-residence',
  },
  'meiyyappan-residence': {
    name: 'Meiyyappan Residence',
    location: 'Coimbatore',
    category: 'Residential',
    scope: 'Interior Fit-Out',
    type: 'Residential · Interior Fit-Out',
    image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Vision',
        content: 'The project aimed to blend traditional architectural elements with modern comforts in a multigenerational family home.',
      },
      {
        title: 'Challenges',
        content: [
          'Respecting cultural and functional traditions while modernizing the space',
          'Creating distinct zones for privacy and shared family time',
        ],
      },
      {
        title: 'Solutions',
        content: [
          'Custom carpentry and detailing that honors traditional forms but feels contemporary',
          'Thoughtful space planning with separate zones that remain visually connected',
        ],
      },
      {
        title: 'Outcome',
        content: 'A residence that feels rooted in tradition yet thoroughly modern, supporting both intimate and communal family life.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    nextSlug: 'villa16',
  },
  'villa16': {
    name: 'Villa16',
    location: 'Valar Nagar, Madurai',
    category: 'Residential',
    scope: 'Interior Fit-Out',
    type: 'Residential · Interior Fit-Out',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Vision',
        content: 'To create a refined, tranquil retreat focused on natural light, materials, and minimalist elegance.',
      },
      {
        title: 'Challenges',
        content: [
          'Maximizing natural light throughout the interiors',
          'Maintaining warmth in a minimalist palette',
        ],
      },
      {
        title: 'Solutions',
        content: [
          'Strategic use of skylights and large openings to bring in natural light',
          'Layered textures and natural materials to add depth and warmth',
        ],
      },
      {
        title: 'Outcome',
        content: 'Villa16 stands as a serene, light-filled space where every element feels considered and calm, perfectly suited for contemporary living.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    nextSlug: 'vaishali-residence',
  },
  'vaishali-residence': {
    name: 'Vaishali Residence',
    location: 'Thiruparankundram, Madurai',
    category: 'Residential',
    scope: 'Interior Fit-Out',
    type: 'Residential · Interior Fit-Out',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
    sections: [
      {
        title: 'Vision',
        content: 'To design a home that balances open layouts with intimate, private corners for a young family.',
      },
      {
        title: 'Challenges',
        content: [
          'Creating a sense of openness without losing coziness',
          'Incorporating flexible spaces for different family activities',
        ],
      },
      {
        title: 'Solutions',
        content: [
          'Open-plan living areas with subtle zoning and transitions',
          'Flexible furniture systems and built-in solutions that adapt to changing needs',
        ],
      },
      {
        title: 'Outcome',
        content: 'A dynamic, welcoming home that feels both spacious and personal, offering the family room to grow and evolve.',
      },
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    nextSlug: 'jp-residence',
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-twc-charcoal">
      {/* Hero */}
      <ProjectHero
        title={project.name}
        location={project.location}
        type={project.type}
        image={project.image}
      />

      {/* Main content */}
      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Meta sidebar - left column (3 cols) */}
            <div className="lg:col-span-3">
              <ProjectMeta
                name={project.name}
                location={project.location}
                category={project.category}
                scope={project.scope}
              />
            </div>

            {/* Body content - right column (9 cols) */}
            <div className="lg:col-span-9">
              <ProjectBody sections={project.sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="section-padding bg-twc-dark">
        <div className="container-wide">
          <ProjectGalleryTitle />
          <ImageGallery images={project.galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-twc-warm">
        <div className="container-wide text-center space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-twc-grey">Start your project</p>
          <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.8rem)] leading-tight max-w-4xl mx-auto text-twc-charcoal">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-twc-charcoal/75 max-w-3xl mx-auto">
            Share your vision with us. Whether it's a complete fit-out or bespoke furniture, we'll walk you through our process and craft a solution tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:main@thewallcrafters.com"
              className="border border-twc-charcoal px-8 py-4 text-sm tracking-wider uppercase text-twc-charcoal hover:bg-twc-charcoal hover:text-twc-warm transition-colors duration-300"
            >
              Email the studio
            </a>
            <a
              href="/work"
              className="px-8 py-4 text-sm tracking-wider uppercase text-twc-charcoal hover:text-twc-red transition-colors duration-300"
            >
              View all projects
            </a>
          </div>
        </div>
      </section>

      {/* Navigation footer */}
      <ProjectNavigation nextSlug={project.nextSlug ?? ''} />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'jp-residence' },
    { slug: 'meiyyappan-residence' },
    { slug: 'villa16' },
    { slug: 'vaishali-residence' },
  ];
}

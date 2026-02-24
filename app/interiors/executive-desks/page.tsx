import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function ExecutiveDesksPage() {
  const items = [
    {
      title: 'Executive Desk',
      description: 'Statement leadership desk with integrated cable management, return unit, and modesty panel.',
      image: '/images/office/executive desk 2.jpg',
    },
    {
      title: 'Director\'s Desk',
      description: 'Premium director\'s desk in veneer and glass with solid wood legs and pedestal storage.',
      image: '/images/office/executive desk 3.jpg',
    },
    {
      title: 'Corner Executive Desk',
      description: 'L-shaped executive configuration maximising workspace with credenza and overhead storage.',
      image: '/images/office/executive desk 4.jpg',
    },
    {
      title: 'CEO Workdesk',
      description: 'Imposing CEO desk in dark stained wood with tooled leather panel and brass accent handles.',
      image: '/images/office/executive desk 5.jpg',
    },
    {
      title: 'Manager\'s Desk',
      description: 'Mid-range manager\'s desk with three-drawer pedestal and clean laminate finish.',
      image: '/images/office/desk 1.jpg',
    },
    {
      title: 'Writing Desk',
      description: 'Minimal writing desk with single drawer, cable grommet, and sleek metal legs.',
      image: '/images/office/desk 2.jpg',
    },
    {
      title: 'Compact Office Desk',
      description: 'Space-efficient desk for compact offices — clean lines, durable surface, hidden storage.',
      image: '/images/office/desk 3.jpg',
    },
    {
      title: 'Reception Desk',
      description: 'Curved reception counter in high-gloss finish with under-counter storage and branding panel.',
      image: '/images/office/desk 4.jpg',
    },
    {
      title: 'Standing Desk Unit',
      description: 'Height-adjustable worktop with ergonomic accessories and lower fixed storage.',
      image: '/images/office/desk 5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Executive Desks"
          description="Statement desks for leadership spaces — precision-crafted with integrated cable management and premium finishes."
          image="/images/office/executive desk 2.jpg"
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

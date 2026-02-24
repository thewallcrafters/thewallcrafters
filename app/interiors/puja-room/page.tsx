import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function PujaRoomPage() {
  const pujaRooms = [
    {
      title: 'Traditional Wood Puja Unit',
      description: 'Carved wood panels, brass accents, and a dedicated platform anchoring a classical puja space.',
      image: '/images/pooja-room/Pooja room 1.jpg',
    },
    {
      title: 'Contemporary Puja Room',
      description: 'Modern interpretation with clean lines, backlit niches, and hidden LED accents.',
      image: '/images/pooja-room/Pooja room2.jpg',
    },
    {
      title: 'Compact Puja Cabinet',
      description: 'Wall-mounted cabinet in veneer with a luminous backlit panel, shelves, and integrated storage.',
      image: '/images/pooja-room/Pooja room 3.jpg',
    },
    {
      title: 'Dedicated Puja Alcove',
      description: 'Full dedicated puja room fit-out with carved doors, marble flooring, and soft ambient lighting.',
      image: '/images/pooja-room/pooja room 4.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Puja Rooms"
          description="Quiet sanctuaries crafted with wood, brass, proportion and light."
          image="/images/pooja-room/Pooja room 1.jpg"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={pujaRooms} columns={3} />
        </div>
      </section>
    </div>
  );
}

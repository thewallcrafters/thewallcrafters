import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function ConferenceTablesPage() {
  const conferenceTables = [
    {
      title: 'Long Boardroom Table',
      description: 'Seats 12-16 with integrated power/data modules, cable management trays and premium veneer finish.',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Compact Meeting Table',
      description: 'Seats 6-8, ideal for huddle rooms with wireless charging pads and modular connectivity.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'High-Collaboration Table',
      description: 'Standing-height table with perimeter seating, whiteboard integration and mobile base.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Executive Conference Table',
      description: 'Premium materials (solid wood, metal accents), integrated AV controls and data ports at each seat.',
      image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Modular Meeting Pods',
      description: 'Reconfigurable table segments that can be joined or separated based on group size.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Glass-Top Modern Table',
      description: 'Tempered glass surface with metal or wood base, minimalist aesthetic and clean lines.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="pt-24">
        <CategoryHero
          title="Conference Tables"
          description="Tables that anchor meeting rooms — with integrated power, cable management and robust finishes for daily use."
          image="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </div>

      <section className="section-padding relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={conferenceTables} columns={3} />
        </div>
      </section>
    </div>
  );
}

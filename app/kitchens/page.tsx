'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryHero from '@/components/categories/CategoryHero';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function KitchensPage() {
  const [layoutFilter, setLayoutFilter] = useState('All');
  const [finishFilter, setFinishFilter] = useState('All');

  const layoutFilters = ['All', 'L-shaped', 'U-shaped', 'Parallel', 'Island'];
  const finishFilters = ['All', 'Premium', 'Budget', 'Matte', 'Gloss'];

  const kitchens = [
    {
      title: 'Premium Island Kitchen',
      description: 'A spacious island configuration with integrated appliances, statement lighting and waterfall stone countertops.',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'Island',
      finish: 'Premium',
      slug: 'premium-island-kitchen',
      href: '/kitchens/premium-island-kitchen',
    },
    {
      title: 'Warm L-Shaped Kitchen',
      description: 'Efficient corner layout with wood-finish cabinetry, under-cabinet lighting and soft-close mechanisms.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'L-shaped',
      finish: 'Matte',
      slug: 'warm-l-shaped-kitchen',
      href: '/kitchens/warm-l-shaped-kitchen',
    },
    {
      title: 'Parallel Kitchen with Tall Units',
      description: 'Gallery-style layout maximizing storage with floor-to-ceiling units and sleek handleless fronts.',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'Parallel',
      finish: 'Gloss',
      slug: 'parallel-kitchen-tall-units',
      href: '/kitchens/parallel-kitchen-tall-units',
    },
    {
      title: 'Compact Urban Kitchen',
      description: 'Smart space planning for smaller footprints with modular units, pull-out organizers and vertical storage.',
      image: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'L-shaped',
      finish: 'Budget',
      slug: 'compact-urban-kitchen',
      href: '/kitchens/compact-urban-kitchen',
    },
    {
      title: 'Modern U-Shape Kitchen',
      description: 'Three-wall configuration offering extensive counter space, ample storage and efficient work triangle.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'U-shaped',
      finish: 'Premium',
      slug: 'modern-u-shape-kitchen',
      href: '/kitchens/modern-u-shape-kitchen',
    },
    {
      title: 'Minimalist White Kitchen',
      description: 'Clean lines, handleless cabinets, integrated appliances and a focus on negative space and simplicity.',
      image: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1200',
      layout: 'Parallel',
      finish: 'Matte',
      slug: 'minimalist-white-kitchen',
      href: '/kitchens/minimalist-white-kitchen',
    },
  ];

  const filteredKitchens = kitchens.filter(kitchen => {
    const matchesLayout = layoutFilter === 'All' || kitchen.layout === layoutFilter;
    const matchesFinish = finishFilter === 'All' || kitchen.finish === finishFilter;
    return matchesLayout && matchesFinish;
  });

  return (
    <div className="min-h-screen bg-twc-charcoal">
      {/* Hero */}
      <div className="pt-24">
        <CategoryHero
          title="Kitchens by TWC"
          description="Modular, made-to-measure kitchens engineered for real life — from compact apartments to expansive villas."
          image="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </div>

      {/* Filters */}
      <section className="py-8 border-b border-twc-warm/10">
        <div className="container-wide space-y-6">
          {/* Layout filter */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest-plus text-twc-grey uppercase">Layout</p>
            <div className="flex flex-wrap gap-4">
              {layoutFilters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setLayoutFilter(filter)}
                  className={`px-6 py-2.5 text-sm tracking-wider border transition-all duration-300 ${
                    layoutFilter === filter
                      ? 'border-twc-red text-twc-red bg-twc-red/5'
                      : 'border-twc-warm/20 text-twc-grey hover:border-twc-warm hover:text-twc-warm'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Finish filter */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest-plus text-twc-grey uppercase">Finish</p>
            <div className="flex flex-wrap gap-4">
              {finishFilters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setFinishFilter(filter)}
                  className={`px-6 py-2.5 text-sm tracking-wider border transition-all duration-300 ${
                    finishFilter === filter
                      ? 'border-twc-red text-twc-red bg-twc-red/5'
                      : 'border-twc-warm/20 text-twc-grey hover:border-twc-warm hover:text-twc-warm'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen grid */}
      <section className="py-12 relative noise-texture">
        <div className="container-wide">
          <CategoryGrid items={filteredKitchens} columns={3} />
        </div>
      </section>
    </div>
  );
}

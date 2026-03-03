import { MetadataRoute } from 'next';

const BASE_URL = 'https://thewallcrafters.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kitchens`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kitchens/premium-island-kitchen`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kitchens/warm-l-shaped-kitchen`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kitchens/parallel-kitchen-tall-units`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kitchens/compact-urban-kitchen`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kitchens/modern-u-shape-kitchen`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kitchens/minimalist-white-kitchen`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/interiors`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/interiors/bedrooms`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/interiors/wardrobes`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/interiors/tv-units`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/dining`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/puja-room`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/storage`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/office-storage`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/workstations`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/executive-desks`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/conference-tables`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/hospitality`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/showcase-counters`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/display-units`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/interiors/lab-utility-cabinets`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work/jp-residence`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/work/meiyyappan-residence`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/work/villa16`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/work/vaishali-residence`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

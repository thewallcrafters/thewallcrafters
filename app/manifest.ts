import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TWC Fit-Outs',
    short_name: 'TWC',
    description: 'Factory-finished modular kitchens, wardrobes, and complete interior fit-outs for homes and businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2C2824',
    theme_color: '#2C2824',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'A.B.S Pristine Harvest',
    short_name: 'ABS Harvest',
    description: 'Raw Himalayan honey, queen bees and farm produce from Pokhara, Nepal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4ecdc',
    theme_color: '#16120e',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
  };
}

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fund Purifier',
    short_name: 'Fund Purifier',
    description: 'Invest in halal versions of popular US ETFs and mutual funds',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#733DE4',
    theme_color: '#733DE4',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

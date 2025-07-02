import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://astroom.dev'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-07-03'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
} 
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tanishqaggarwalassociates.com'

  return [
    {
      url:             `${base}/`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${base}/about`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/services`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.95,
    },
    {
      url:             `${base}/calculators`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/news`,
      lastModified:    new Date(),
      changeFrequency: 'daily',
      priority:        0.85,
    },
    {
      url:             `${base}/contact`,
      lastModified:    new Date(),
      changeFrequency: 'yearly',
      priority:        0.75,
    },
  ]
}

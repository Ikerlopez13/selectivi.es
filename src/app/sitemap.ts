
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://selectivi.es'
  
  const communities = ['madrid', 'andalucia']
  const subjects = [
    'historia-espana',
    'filosofia',
    'economia-empresa',
    'geografia',
    'lengua',
    'ingles'
  ]

  const staticRoutes = [
    '',
    '/notas-de-corte',
    '/calculadora',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  const communityRoutes = communities.flatMap((community) => [
    {
      url: `${baseUrl}/${community}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${community}/seletest`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...subjects.map((subject) => ({
      url: `${baseUrl}/${community}/seletest/${subject}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }))
  ])

  return [...staticRoutes, ...communityRoutes]
}

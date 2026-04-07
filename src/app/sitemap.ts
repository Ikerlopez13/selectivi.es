
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
    'ingles',
    'biology',
    'chemistry',
    'physics',
    'mathematics',
    'mathematics-ccss',
    'economy'
  ]

  const blogPosts = [
    '/como-sera-la-selectividad-2026',
    '/calcular-nota-acceso-universidad-espana-2026',
    '/como-calcular-nota-de-corte-madrid-evau',
    '/profesor-no-prepara-selectividad-2026',
    '/selectiviandalucia-ya-disponible',
    '/selectividad-2026-mas-complicada-historia',
    '/trampa-selectividad-2026-nadie-ve',
    '/herramienta-que-me-cambio-la-forma-de-estudiar',
    '/universidad-de-mis-suenos-imposible-hasta-este-metodo',
    '/de-perdido-a-seguro-para-la-evau-gracias-a-esto'
  ]

  const staticRoutes = [
    '',
    '/notas-de-corte',
    '/calculadora',
    '/blog',
    ...blogPosts.map(post => `/blog${post}`)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
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

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://studyabroadvadodara.in'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/leads/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/leads/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/leads/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

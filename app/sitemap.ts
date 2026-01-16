import { MetadataRoute } from 'next'
import { vadodaraAreas } from '@/lib/business-config'
import { studyAbroadKeywords } from '@/lib/keywords-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studyabroadvadodara.in'
  const currentDate = new Date()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Area pages (high priority - local SEO)
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Keyword pages (medium-high priority - targeted SEO)
  const keywordPages: MetadataRoute.Sitemap = studyAbroadKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...areaPages, ...keywordPages]
}

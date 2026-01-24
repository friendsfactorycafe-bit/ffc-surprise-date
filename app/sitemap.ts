/**
 * FRIENDS FACTORY CAFE - SEO OPTIMIZED SITEMAP
 * Domain: friendsfactorycafe.com
 * 
 * Total Pages: 200+ including:
 * - 1 Homepage (priority 1.0)
 * - 7 Static pages (priority 0.8)
 * - 8 Service category pages (priority 0.9)
 * - 8 Package detail pages (priority 0.85)
 * - 120 Keyword pages (priority 0.85) - Main SEO pages
 * - 40 Vadodara Area pages (priority 0.8)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";
import { 
  serviceCategories, 
  vadodaraAreas, 
  packages
} from "@/lib/ffc-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://friendsfactorycafe.com";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // ==================== HOME PAGE ====================
  // Highest priority - main landing page
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // ==================== STATIC PAGES ====================
  // Core pages with regular updates
  const staticPages = [
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/menu', priority: 0.8, freq: 'weekly' as const },
    { path: '/packages', priority: 0.9, freq: 'weekly' as const },
    { path: '/services', priority: 0.9, freq: 'weekly' as const },
    { path: '/virtual-tour', priority: 0.7, freq: 'monthly' as const },
    { path: '/areas', priority: 0.8, freq: 'weekly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== SERVICE CATEGORY PAGES ====================
  // 8 main service categories - high priority
  serviceCategories.forEach((service) => {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // ==================== PACKAGE DETAIL PAGES ====================
  // 8 setup packages - high priority for conversions
  packages.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // ==================== KEYWORD PAGES (MAIN SEO) ====================
  // 120 keyword pages (15 per service × 8 services)
  // These are the main SEO landing pages targeting specific search queries
  // URL Structure: /services/{service}/{keyword}
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      entries.push({
        url: `${baseUrl}/services/${service.slug}/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });
  
  // ==================== AREA PAGES ====================
  // 40 Vadodara area pages for local SEO
  vadodaraAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  
  // ==================== DYNAMIC SLUG PAGES ====================
  // Top keyword pages also accessible at root level
  // These are the highest-traffic keywords
  const topKeywords = [
    'birthday-surprise-for-boyfriend-vadodara',
    'birthday-surprise-for-girlfriend-vadodara',
    'candlelight-dinner-for-couples-vadodara',
    'romantic-dinner-vadodara',
    'proposal-setup-vadodara',
    'anniversary-dinner-vadodara',
    'pre-wedding-shoot-location-vadodara',
    'valentines-day-celebration-vadodara',
  ];
  
  topKeywords.forEach((keyword) => {
    entries.push({
      url: `${baseUrl}/${keyword}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  return entries;
}

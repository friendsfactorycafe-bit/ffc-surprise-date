/**
 * FRIENDS FACTORY CAFE - SITEMAP GENERATOR
 * Generates comprehensive sitemap for all pages including:
 * - Service pages
 * - Keyword pages (105+ from all service categories)
 * - Area pages (40 Vadodara areas)
 * - Blog posts
 * - Static pages
 */

import { MetadataRoute } from "next";
import { 
  serviceCategories, 
  vadodaraAreas, 
  packages,
  blogPosts
} from "@/lib/ffc-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://friendsfactorycafe.com";
  
  const entries: MetadataRoute.Sitemap = [];
  
  // Home page - highest priority
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // Static pages
  const staticPages = [
    '/about',
    '/contact',
    '/menu',
    '/packages',
    '/services',
    '/virtual-tour',
    '/areas',
    '/blog',
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  
  // Package detail pages
  packages.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // Service category pages
  serviceCategories.forEach((service) => {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // All keyword pages from service categories - high priority for SEO
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      entries.push({
        url: `${baseUrl}/${keyword.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });
  
  // Area pages - medium-high priority
  vadodaraAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  
  // Blog posts
  blogPosts.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });
  
  return entries;
}

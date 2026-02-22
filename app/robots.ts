/**
 * FRIENDS FACTORY CAFE - SEO OPTIMIZED ROBOTS.TXT
 * Domain: surprisedatevadodara.com
 * Surprise Planning Specialists in Vadodara
 *
 * Configuration for search engine crawlers:
 * - Allow all public pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://surprisedatevadodara.com";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact",
          "/menu",
          "/packages",
          "/packages/*",
          "/services",
          "/virtual-tour",
          "/areas",
          "/blog",
          "/rooftop-experience",
        ],
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/packages/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        // Facebook crawler for social sharing
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        // Twitter crawler for cards
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        // LinkedIn crawler
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        // WhatsApp crawler for link previews
        userAgent: "WhatsApp",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

/**
 * FRIENDS FACTORY CAFE - ROBOTS.TXT
 * Domain: friendsfactorycafe.com
 * Surprise Planning Specialists in Vadodara
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://friendsfactorycafe.com";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/", "/leads"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

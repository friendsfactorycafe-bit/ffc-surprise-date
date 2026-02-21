/**
 * FRIENDS FACTORY CAFE - SURPRISE SITEMAP
 * Domain: friendsfactorycafe.com
 * Total: 110+ pages (Surprise-focused)
 */

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://friendsfactorycafe.com";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // Homepage
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // Core Pages
  const corePages = [
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/packages', priority: 0.9 },
    { path: '/areas', priority: 0.8 },
    { path: '/menu', priority: 0.7 },
    { path: '/services', priority: 0.8 },
    { path: '/virtual-tour', priority: 0.6 },
    { path: '/blog', priority: 0.7 },
    { path: '/rooftop-experience', priority: 0.7 },
  ];
  
  corePages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: page.priority,
    });
  });
  
  // 53 Surprise Keyword Pages
  const surpriseKeywords = [
    'birthday-surprise-for-boyfriend-vadodara', 'birthday-surprise-for-girlfriend-vadodara',
    'birthday-surprise-for-husband-vadodara', 'birthday-surprise-for-wife-vadodara',
    'birthday-surprise-planners-vadodara', 'best-birthday-surprise-vadodara',
    'midnight-birthday-surprise-vadodara', 'romantic-birthday-surprise-vadodara',
    'surprise-birthday-party-vadodara', '25th-birthday-surprise-vadodara',
    '30th-birthday-surprise-vadodara', '50th-birthday-surprise-vadodara',
    'anniversary-surprise-for-husband-vadodara', 'anniversary-surprise-for-wife-vadodara',
    'surprise-anniversary-date-vadodara', 'surprise-anniversary-party-vadodara',
    'wedding-anniversary-surprise-vadodara', '1st-anniversary-surprise-vadodara',
    '5th-anniversary-surprise-vadodara', 'surprise-proposal-vadodara',
    'surprise-proposal-planners-vadodara', 'surprise-date-ideas-vadodara',
    'surprise-date-for-boyfriend-vadodara', 'surprise-date-for-girlfriend-vadodara',
    'surprise-date-for-husband-vadodara', 'surprise-date-for-wife-vadodara',
    'surprise-date-night-vadodara', 'surprise-date-places-vadodara',
    'surprise-date-setup-vadodara', 'surprise-date-decoration-vadodara',
    'surprise-date-planners-vadodara', 'first-date-surprise-vadodara',
    'surprise-party-for-boyfriend-vadodara', 'surprise-party-for-girlfriend-vadodara',
    'private-surprise-party-vadodara', 'rooftop-surprise-party-vadodara',
    'budget-surprise-party-vadodara', 'surprise-room-decoration-vadodara',
    'surprise-balloon-decoration-vadodara', 'surprise-dinner-for-husband-vadodara',
    'surprise-dinner-for-wife-vadodara', 'surprise-gift-for-boyfriend-vadodara',
    'surprise-gift-for-girlfriend-vadodara', 'surprise-celebration-venue-vadodara',
    'romantic-surprise-vadodara', 'luxury-surprise-celebration-vadodara',
    'honeymoon-surprise-vadodara', 'valentines-surprise-vadodara',
    'diwali-surprise-vadodara', 'new-year-surprise-vadodara',
    'christmas-surprise-vadodara', 'holi-surprise-vadodara', 'karwa-chauth-surprise-vadodara',
  ];
  
  surpriseKeywords.forEach((keyword) => {
    entries.push({
      url: `${baseUrl}/${keyword}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // 40 Area Pages
  const areas = [
    'ajwa-road-vadodara', 'akota-vadodara', 'alkapuri-vadodara', 'atladra-vadodara',
    'bhayli-vadodara', 'bil-vadodara', 'chhani-vadodara', 'dabhoi-road-vadodara',
    'diwalipura-vadodara', 'ellora-park-vadodara', 'fatehgunj-vadodara', 'gorwa-vadodara',
    'gotri-vadodara', 'harni-vadodara', 'jetalpur-vadodara', 'kalali-vadodara',
    'karelibaug-vadodara', 'karodiya-vadodara', 'koyali-vadodara', 'makarpura-vadodara',
    'mandvi-vadodara', 'maneja-vadodara', 'manjalpur-vadodara', 'nizampura-vadodara',
    'nyay-mandir-vadodara', 'old-padra-road-vadodara', 'race-course-vadodara', 'ranoli-vadodara',
    'raopura-vadodara', 'sama-savli-road-vadodara', 'sama-vadodara', 'sayajigunj-vadodara',
    'sevasi-vadodara', 'subhanpura-vadodara', 'tandalja-vadodara', 'tarsali-vadodara',
    'tp-13-vadodara', 'undera-vadodara', 'vasna-vadodara', 'waghodia-road-vadodara',
  ];
  
  areas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/${area}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  
  // Package Pages
  const packageSlugs = [
    'classic-love', 'premium-romance', 'royal-celebration', 'platinum-paradise',
    'birthday-bash', 'anniversary-special', 'proposal-perfect', 'festival-special'
  ];
  
  packageSlugs.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  return entries;
}

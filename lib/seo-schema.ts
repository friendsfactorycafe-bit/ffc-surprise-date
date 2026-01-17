// SEO Schema generators for Study Abroad Consultants Vadodara
import { getAreaDisplayName } from "./business-config";
import { Testimonial } from "./testimonials";

const baseUrl = "https://studyabroadvadodara.in";

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Review Schema from testimonials - Fixed to avoid multiple aggregate ratings
export function generateReviewSchema(testimonials: Testimonial[], area: string) {
  const areaName = getAreaDisplayName(area);
  
  // Calculate average rating from testimonials
  const avgRating = testimonials.length > 0 
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : "4.9";
  
  return {
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/${area}#localbusiness`,
    name: `Study Abroad Consultants ${areaName}`,
    image: `${baseUrl}/og-image.svg`,
    url: `${baseUrl}/${area}`,
    telephone: "+916353583148",
    email: "edu@studyabroadvadodara.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201, Shree Complex, RC Dutt Road, Alkapuri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3072",
      longitude: "73.1812"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/studyabroadvadodara",
      "https://www.instagram.com/studyabroadvadodara",
      "https://www.linkedin.com/company/studyabroadvadodara"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", "name": "Vadodara" },
      { "@type": "State", "name": "Gujarat" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Study Abroad Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Canada Student Visa Assistance",
            description: "Complete guidance for Canada student visa including SDS stream"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "USA F1 Visa Assistance",
            description: "Expert guidance for USA F1 student visa applications"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UK Student Visa Guidance",
            description: "Professional support for UK Tier 4 student visa"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IELTS & PTE Coaching",
            description: "Expert coaching for IELTS and PTE Academic exams"
          }
        }
      ]
    },
    // Reviews WITHOUT individual ratings to avoid duplicate aggregateRating
    review: testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.detailedReview,
      datePublished: `${t.year}-01-15`,
    })),
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(area: string) {
  const areaName = getAreaDisplayName(area);
  
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Study Abroad Consultants in ${areaName}`,
        item: `${baseUrl}/${area}`,
      },
    ],
  };
}

// Generate Service Schema
export function generateServiceSchema(area: string) {
  const areaName = getAreaDisplayName(area);
  
  return {
    "@type": "Service",
    "@id": `${baseUrl}/${area}#service`,
    name: `Study Abroad Consulting Services in ${areaName}`,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: `${areaName}, Vadodara`,
    },
    serviceType: "Educational Consulting",
    description: `Professional study abroad consulting services in ${areaName}, Vadodara. Expert guidance for Canada, USA, UK, Australia student visas, IELTS coaching, and university admissions.`,
    offers: [
      {
        "@type": "Offer",
        name: "Free Counseling Session",
        description: "Complimentary 30-minute counseling session for students",
        price: "0",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Complete Visa Assistance",
        description: "End-to-end visa application support with document preparation",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          price: "Contact for pricing",
        },
      },
    ],
  };
}

// Generate complete page schema
export function generatePageSchema(
  area: string,
  faqs: { question: string; answer: string }[],
  testimonials: Testimonial[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema(area),
      generateFAQSchema(faqs),
      generateReviewSchema(testimonials, area),
      generateServiceSchema(area),
    ],
  };
}

// Generate Keyword page schema
export function generateKeywordPageSchema(
  keyword: { slug: string; title: string; h1: string; metaDescription: string },
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: keyword.title,
            item: `${baseUrl}/${keyword.slug}`,
          },
        ],
      },
      generateFAQSchema(faqs),
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${keyword.slug}#webpage`,
        url: `${baseUrl}/${keyword.slug}`,
        name: keyword.title,
        description: keyword.metaDescription,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${baseUrl}/${keyword.slug}#breadcrumb`,
        },
      },
    ],
  };
}

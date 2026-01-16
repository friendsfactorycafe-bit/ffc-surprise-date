import { businesses, getBusinessBySlug, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords, getKeywordBySlug, studyAbroadKeywords } from "@/lib/keywords-config";
import { getBusinessContent, getStudyAbroadContent } from "@/lib/content-generator";
import { generatePageSchema, generateKeywordPageSchema } from "@/lib/seo-schema";
import { getTestimonialsByArea, getRandomTestimonials } from "@/lib/testimonials";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Script from "next/script";

const business = businesses[0]; // Study Abroad Consultants
const baseUrl = "https://studyabroadvadodara.in";

// Generate static params for all area + keyword combinations
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add area pages
  business.areas.forEach((area) => {
    params.push({ slug: area });
  });
  
  // Add keyword pages
  studyAbroadKeywords.forEach((keyword) => {
    params.push({ slug: keyword.slug });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug(business.slug, slug) : null;
  
  if (isArea) {
    // Area page metadata - use generated content
    const areaName = getAreaDisplayName(slug);
    const content = getStudyAbroadContent(slug);
    return {
      title: content.metaTitle,
      description: content.metaDescription,
      keywords: [
        `Study Abroad Consultants in ${areaName}`,
        `Overseas Education ${areaName} Vadodara`,
        `Best Study Abroad Consultants ${areaName}`,
        `Canada Student Visa ${areaName}`,
        `USA Student Visa ${areaName}`,
        `UK Student Visa ${areaName}`,
        `Australia Student Visa ${areaName}`,
        `IELTS Coaching ${areaName}`,
        `Education Consultancy ${areaName}`,
        `Study in Canada from ${areaName}`,
        `Study in USA from ${areaName}`,
        `Visa Consultants ${areaName} Vadodara`,
      ],
      alternates: {
        canonical: `${baseUrl}/${slug}`,
      },
      openGraph: {
        title: content.metaTitle,
        description: content.metaDescription,
        url: `${baseUrl}/${slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Study Abroad Consultants Vadodara",
        images: [
          {
            url: `${baseUrl}/og-image.svg`,
            width: 1200,
            height: 630,
            alt: `Study Abroad Consultants in ${areaName}, Vadodara`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: content.metaTitle,
        description: content.metaDescription,
        images: [`${baseUrl}/og-image.svg`],
      },
    };
  } else if (keywordConfig) {
    // Keyword page metadata
    return {
      title: `${keywordConfig.title} | Best Study Abroad Consultants Vadodara`,
      description: keywordConfig.metaDescription,
      keywords: [
        keywordConfig.title,
        `${keywordConfig.title} Vadodara`,
        `Best ${keywordConfig.title}`,
        "Study Abroad Consultants Vadodara",
        "Overseas Education Vadodara",
        "Canada Student Visa Vadodara",
        "USA Student Visa Vadodara",
      ],
      alternates: {
        canonical: `${baseUrl}/${keywordConfig.slug}`,
      },
      openGraph: {
        title: `${keywordConfig.title} | Study Abroad Vadodara`,
        description: keywordConfig.metaDescription,
        url: `${baseUrl}/${keywordConfig.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Study Abroad Consultants Vadodara",
        images: [
          {
            url: `${baseUrl}/og-image.svg`,
            width: 1200,
            height: 630,
            alt: keywordConfig.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: keywordConfig.title,
        description: keywordConfig.metaDescription,
        images: [`${baseUrl}/og-image.svg`],
      },
    };
  }
  
  return { title: "Page Not Found" };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug(business.slug, slug) : null;
  
  if (isArea) {
    // Render area page with schema
    const content = getBusinessContent(business.slug, slug);
    const areaName = getAreaDisplayName(slug);
    const areaTestimonials = getTestimonialsByArea(areaName);
    const testimonials = areaTestimonials.length >= 5 
      ? areaTestimonials 
      : [...areaTestimonials, ...getRandomTestimonials(5 - areaTestimonials.length)];
    const schema = generatePageSchema(slug, content.faqItems, testimonials);
    
    return (
      <>
        <Script
          id={`schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <BusinessPageTemplate business={business} area={slug} content={content} />
      </>
    );
  } else if (keywordConfig) {
    // Render keyword page with schema
    const content = getBusinessContent(business.slug, "vadodara");
    const schema = generateKeywordPageSchema(keywordConfig, content.faqItems);
    
    return (
      <>
        <Script
          id={`schema-${keywordConfig.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />
      </>
    );
  }
  
  notFound();
}

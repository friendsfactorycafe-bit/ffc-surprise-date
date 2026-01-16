import { businesses, getAreaDisplayName, allAreas } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const baseUrl = "https://studyabroadvadodara.in";

export const metadata: Metadata = {
  title: "Study Abroad Consultants in Vadodara | #1 Overseas Education Experts",
  description:
    "Vadodara's most trusted Study Abroad Consultants with 5000+ successful placements. Expert guidance for Canada, USA, UK, Australia student visas. IELTS coaching, scholarship guidance & university admissions. 98% visa success rate. Call +91 6353583148",
  keywords: [
    "Study Abroad Consultants Vadodara",
    "Best Study Abroad Consultants in Vadodara",
    "Overseas Education Consultants Vadodara",
    "Canada Student Visa Vadodara",
    "USA Student Visa Vadodara",
    "UK Student Visa Vadodara",
    "Australia Student Visa Vadodara",
    "IELTS Coaching Vadodara",
    "Scholarship Guidance Vadodara",
    "Study in Canada from Vadodara",
    "Study in USA from Vadodara",
    "Education Consultancy Vadodara Gujarat",
    "Student Visa Consultants Vadodara",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Study Abroad Consultants in Vadodara | #1 Overseas Education Experts",
    description: "5000+ students placed globally. Expert guidance for Canada, USA, UK, Australia student visas. 98% visa success rate. Free counseling available!",
    url: baseUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Study Abroad Consultants Vadodara",
    images: [
      {
        url: `${baseUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Study Abroad Consultants in Vadodara - Your Gateway to Global Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultants Vadodara | 5000+ Students Placed",
    description: "Your gateway to international education. Expert guidance for studying in Canada, USA, UK, Australia & more. 98% visa success rate!",
    images: [`${baseUrl}/og-image.svg`],
  },
};

const studyAbroadBusiness = businesses[0];

export default function HomePage() {
  const content = getBusinessContent("study-abroad", "vadodara");
  
  return (
    <BusinessPageTemplate 
      business={studyAbroadBusiness} 
      area="vadodara" 
      content={content} 
    />
  );
}

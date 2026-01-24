/**
 * MAIN PAGE - FRIENDS FACTORY CAFE VADODARA
 * The main home page for Friends Factory Cafe - Vadodara
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for Friends Factory Cafe
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Romantic Celebrations for Couples in Vadodara`,
    description: `${siteConfig.tagline}. Premium romantic celebration services for couples in Vadodara. Candlelight dinners, birthday surprises, anniversary celebrations, proposals & more.`,
    keywords: [
      'friends factory cafe vadodara',
      'romantic celebration vadodara',
      'candlelight dinner vadodara',
      'birthday surprise vadodara',
      'anniversary celebration vadodara',
      'couples only cafe vadodara',
      'rooftop dinner vadodara',
      'private dining vadodara'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Romantic Celebrations`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}
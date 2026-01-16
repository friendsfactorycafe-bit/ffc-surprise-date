import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#059669",
}

export const metadata: Metadata = {
  title: "Study Abroad Consultants in Vadodara | #1 Overseas Education Experts",
  description:
    "Vadodara's most trusted Study Abroad Consultants with 5000+ successful placements. Expert guidance for Canada, USA, UK, Australia student visas. IELTS coaching, scholarship guidance & university admissions. Call +91 6353583148",
  keywords:
    "study abroad consultants Vadodara, overseas education Vadodara, Canada student visa Vadodara, USA student visa, UK student visa, Australia student visa, IELTS coaching Vadodara, education consultancy Vadodara, best study abroad consultant Gujarat, scholarship guidance",
  authors: [{ name: "Study Abroad Consultants Vadodara" }],
  creator: "Study Abroad Consultants Vadodara",
  publisher: "Study Abroad Consultants Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://studyabroadvadodara.in"),
  alternates: {
    canonical: "https://studyabroadvadodara.in",
  },
  openGraph: {
    title: "Study Abroad Consultants in Vadodara | #1 Overseas Education Experts",
    description:
      "5000+ students placed globally. Expert guidance for Canada, USA, UK, Australia student visas. 98% visa success rate. Free counseling available!",
    url: "https://studyabroadvadodara.in",
    siteName: "Study Abroad Consultants Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://studyabroadvadodara.in/og-image.svg",
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
    images: ["https://studyabroadvadodara.in/og-image.svg"],
    creator: "@studyabroadvadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://studyabroadvadodara.in/#organization",
        name: "Study Abroad Consultants Vadodara",
        alternateName: "Study Abroad Vadodara",
        image: "https://studyabroadvadodara.in/og-image.svg",
        description: "Vadodara's #1 Study Abroad Consultants with 5000+ successful student placements. Expert guidance for Canada, USA, UK, Australia, Germany student visas, IELTS/PTE coaching, and university admissions with 98% visa success rate.",
        url: "https://studyabroadvadodara.in",
        telephone: "+916353583148",
        email: "edu@studyabroadvadodara.in",
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
          latitude: "22.3119",
          longitude: "73.1723",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/studyabroadvadodara",
          "https://www.instagram.com/studyabroadvadodara",
          "https://www.linkedin.com/company/studyabroadvadodara",
        ],
        priceRange: "₹₹",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
          bestRating: "5",
          worstRating: "1",
        },
        areaServed: [
          { "@type": "City", name: "Vadodara" },
          { "@type": "State", name: "Gujarat" },
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
                description: "Complete guidance for Canada student visa including SDS stream",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "USA F1 Visa Assistance",
                description: "Expert guidance for USA F1 student visa applications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UK Student Visa",
                description: "UK Tier 4 student visa assistance with university admissions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "IELTS Coaching",
                description: "Expert IELTS coaching with guaranteed band improvement",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Scholarship Guidance",
                description: "Help students find and apply for international scholarships",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://studyabroadvadodara.in/#website",
        url: "https://studyabroadvadodara.in",
        name: "Study Abroad Consultants Vadodara",
        description: "Best Study Abroad Consultants in Vadodara, Gujarat",
        publisher: {
          "@id": "https://studyabroadvadodara.in/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://studyabroadvadodara.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://studyabroadvadodara.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://studyabroadvadodara.in",
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CYW790YNQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYW790YNQ4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

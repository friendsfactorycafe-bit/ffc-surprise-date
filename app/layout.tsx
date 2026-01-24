import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D97706", // Amber-600 for FFC
};

export const metadata: Metadata = {
  metadataBase: new URL("https://friendsfactorycafe.com"),
  title: {
    default: "Friends Factory Cafe Vadodara | Romantic Celebrations & Candlelight Dinners",
    template: "%s | Friends Factory Cafe Vadodara",
  },
  description:
    "Best romantic celebration venue in Vadodara, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. 100% private rooftop & glass house. Call +91 74878 88730.",
  keywords: [
    "friends factory cafe",
    "friends factory cafe vadodara",
    "romantic cafe vadodara",
    "couples only cafe vadodara",
    "candlelight dinner vadodara",
    "birthday surprise vadodara",
    "anniversary celebration vadodara",
    "romantic proposal vadodara",
    "rooftop dinner vadodara",
    "private dining vadodara",
    "romantic restaurant vadodara",
    "couple cafe gotri",
    "date night vadodara",
    "pre-wedding photoshoot vadodara",
    "surprise party vadodara",
    "romantic venue gujarat"
  ],
  authors: [{ name: "Friends Factory Cafe", url: "https://friendsfactorycafe.com" }],
  creator: "Friends Factory Cafe",
  publisher: "Friends Factory Cafe",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://friendsfactorycafe.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://friendsfactorycafe.com",
    siteName: "Friends Factory Cafe",
    title: "Friends Factory Cafe Vadodara | Romantic Celebrations & Candlelight Dinners",
    description: "Best romantic celebration venue in Vadodara. Birthday surprises, candlelight dinners, anniversaries, proposals. 100% private rooftop & glass house experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Friends Factory Cafe - Romantic Celebrations in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friends Factory Cafe Vadodara | Romantic Celebrations",
    description: "Best romantic celebration venue in Vadodara. Birthday surprises, candlelight dinners, proposals & more!",
    images: ["/images/twitter-image.jpg"],
    creator: "@friendsfactorycafe",
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
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

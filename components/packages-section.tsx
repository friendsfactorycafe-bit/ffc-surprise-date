"use client"

import { Button } from "@/components/ui/button"
import { Check, Globe, GraduationCap, Plane } from "lucide-react"

const packages = [
  {
    name: "Basic Consultation",
    price: "Free",
    icon: GraduationCap,
    popular: false,
    features: [
      "Initial career counseling session",
      "Country & course guidance",
      "Eligibility assessment",
      "Document checklist",
      "Basic university recommendations",
      "1-hour consultation",
    ],
  },
  {
    name: "Complete Package",
    price: "Contact Us",
    icon: Globe,
    popular: true,
    features: [
      "Comprehensive career counseling",
      "University shortlisting (5-10 universities)",
      "Application assistance & review",
      "SOP & LOR guidance",
      "Visa documentation support",
      "Interview preparation",
      "Pre-departure orientation",
      "Post-arrival assistance",
    ],
  },
  {
    name: "Premium Package",
    price: "Contact Us",
    icon: Plane,
    popular: false,
    features: [
      "Everything in Complete Package",
      "Unlimited university applications",
      "IELTS/TOEFL coaching included",
      "Scholarship application assistance",
      "Dedicated relationship manager",
      "Priority visa slot booking",
      "Accommodation assistance",
      "Airport pickup coordination",
      "1-year post-arrival support",
      "Family visa guidance",
    ],
  },
]

export function PackagesSection() {
  const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello! I'm interested in the ${packageName} study abroad package. Please provide more details.`
    const whatsappNumber = "916353583148"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="packages" className="py-12 md:py-32 bg-card">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-emerald-600 font-mono uppercase tracking-wider mb-2 md:mb-4 text-xs sm:text-sm">Our Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Study Abroad Consulting Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-mono">
            {"Transparent services with comprehensive support. From initial counseling to post-arrival assistance - we're with you at every step of your international education journey."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-lg p-8 border-2 transition-all hover:shadow-2xl ${
                pkg.popular ? "border-emerald-500 shadow-xl scale-105" : "border-border hover:border-emerald-500"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-1 rounded-full text-sm font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <pkg.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-emerald-600">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsAppInquiry(pkg.name)}
                className={`w-full ${
                  pkg.popular
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

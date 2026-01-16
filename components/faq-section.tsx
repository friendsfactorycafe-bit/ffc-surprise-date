"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services does Study Abroad Vadodara offer?",
    answer:
      "Study Abroad Vadodara provides comprehensive overseas education consulting services including university selection, visa assistance for Canada, USA, UK, Australia, Germany & more, IELTS/TOEFL/PTE coaching, application documentation, scholarship guidance, and pre-departure orientation for students in Vadodara.",
  },
  {
    question: "How much does study abroad consultation cost?",
    answer:
      "Our consultation fees are transparent and tailored to your needs. We offer free initial consultation, and our complete packages include university shortlisting, visa guidance, and documentation support. Contact us for detailed pricing based on your chosen destination.",
  },
  {
    question: "Which countries can I study in through your services?",
    answer:
      "We assist students with admissions to universities in Canada, USA, UK, Australia, Germany, Ireland, New Zealand, and other popular study destinations. Each country has different requirements and we guide you through the entire process.",
  },
  {
    question: "What is the typical timeline for study abroad applications?",
    answer:
      "The timeline varies based on the country and intake. Generally, you should start 12-18 months before your intended start date. Visa processing can take 2-8 weeks depending on the country. We help you plan every step to meet deadlines.",
  },
  {
    question: "Do you provide IELTS coaching?",
    answer:
      "Yes! We provide expert IELTS, TOEFL, PTE, and GRE coaching with experienced trainers. Our coaching programs are designed to help you achieve your target scores with flexible batch timings and personalized attention.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Absolutely! We provide complete visa assistance including document preparation, application filing, interview preparation, and follow-up. Our experienced team has a high success rate for student visa approvals across all major destinations.",
  },
  {
    question: "Can you help with scholarships?",
    answer:
      "Yes, we guide students on available scholarships, eligibility criteria, and application processes. Many universities offer merit-based and need-based scholarships, and we help you identify and apply for relevant opportunities.",
  },
  {
    question: "How do I get started with Study Abroad Vadodara?",
    answer:
      "Getting started is easy! Contact us via WhatsApp, phone, or fill our online form. We'll schedule a free consultation to understand your academic background, career goals, and budget, then create a personalized study abroad plan for you.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-600 font-mono uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions About Studying Abroad
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Find answers to common questions about our study abroad services in Vadodara
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-emerald-500/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-emerald-500/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground leading-relaxed font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}

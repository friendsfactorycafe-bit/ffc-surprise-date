"use client"

import { Users, Award, Clock, Shield, Crown, Heart, Globe, GraduationCap, BookOpen, Plane } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global University Network",
    description: "Access to 500+ partner universities across Canada, USA, UK, Australia, Germany and more",
  },
  {
    icon: GraduationCap,
    title: "Expert Counselors",
    description: "Experienced education consultants with in-depth knowledge of international admissions",
  },
  {
    icon: BookOpen,
    title: "Test Prep Excellence",
    description: "Comprehensive IELTS, TOEFL, PTE & GRE coaching with proven score improvement methods",
  },
  {
    icon: Award,
    title: "High Visa Success Rate",
    description: "98% visa approval rate with expert documentation and interview preparation support",
  },
  {
    icon: Plane,
    title: "End-to-End Support",
    description: "From university selection to pre-departure orientation - we guide you at every step",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "No hidden fees, clear timelines, and regular updates throughout your application journey",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-emerald-600 font-mono uppercase tracking-wider mb-4">About Study Abroad Vadodara</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Gateway to Global Education
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
            {
              "Welcome to Study Abroad Vadodara - your trusted partner in achieving international education dreams. We specialize in helping students from Vadodara and Gujarat pursue higher education at top universities worldwide."
            }
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "With years of experience and a deep understanding of global education systems, we provide personalized guidance to help you navigate the complex journey of studying abroad. Our goal is to make your dreams of international education a reality."
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-emerald-600" />
              Our Vision
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To be the most trusted study abroad consultancy in Gujarat, empowering students with quality education opportunities worldwide and helping them build successful global careers.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-emerald-600" />
              Our Mission
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To provide honest, transparent, and comprehensive guidance to students aspiring to study abroad. We are committed to understanding each student's unique goals and matching them with the right university and program.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Choose Study Abroad Vadodara?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              How We Help You
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">1</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Free Consultation</h4>
              <p className="text-muted-foreground font-mono text-sm">Share your academic background, career goals, and preferred countries with our expert counselors.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">University Shortlisting</h4>
              <p className="text-muted-foreground font-mono text-sm">We identify the best universities and programs matching your profile, goals, and budget.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Application & Visa</h4>
              <p className="text-muted-foreground font-mono text-sm">Complete support for applications, documentation, SOP writing, and visa interview preparation.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">4</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Pre-Departure Support</h4>
              <p className="text-muted-foreground font-mono text-sm">Guidance on accommodation, travel, banking, and everything you need before flying abroad.</p>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/about/about1.jpg"
              alt="Students studying abroad"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Start Your Global Education Journey Today</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "At Study Abroad Vadodara, we believe every student deserves access to world-class education. Our expert team has helped hundreds of students from Vadodara achieve their dreams of studying at top universities worldwide."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "From Canada to Australia, UK to Germany - we provide comprehensive guidance for all major study destinations with personalized attention to each student's unique aspirations."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Expert counseling for 15+ countries",
                "IELTS, TOEFL, PTE & GRE coaching",
                "University application assistance",
                "Visa documentation & filing",
                "Scholarship guidance & support",
                "SOP & LOR preparation help",
                "Interview preparation",
                "Pre-departure orientation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

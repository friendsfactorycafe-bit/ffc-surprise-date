"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Study Abroad Consultants</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Your gateway to international education. Expert guidance for studying abroad with comprehensive support for university selection, visa assistance, and more."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>University Selection</li>
              <li>Admission Guidance</li>
              <li>Visa Assistance</li>
              <li>IELTS Coaching</li>
              <li>Scholarship Guidance</li>
              <li>Career Counseling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Study Abroad Consultants,
                    <br />
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@studyabroad.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@studyabroad.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Study Abroad Consultants - All Areas of Vadodara</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Serving students across Vadodara including Alkapuri, Akota, Gotri, Manjalpur, Sayajigunj, Subhanpura, Fatehgunj, and surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ University Selection | ✓ Visa Assistance | ✓ IELTS Coaching | ✓ Career Counseling
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2026 Study Abroad Consultants. All rights reserved. | Vadodara's Premier Education Consultancy
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Study abroad consultants Vadodara, education consultancy Vadodara, visa assistance, IELTS coaching Vadodara, GRE preparation, GMAT coaching, university selection, scholarship guidance, SOP writing, education loan help, career counseling Vadodara
      </div>
    </footer>
  )
}

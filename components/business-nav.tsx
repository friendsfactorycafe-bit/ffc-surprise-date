"use client";

import { useState } from "react";
import Link from "next/link";
import { BusinessConfig } from "@/lib/business-config";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradientClass = currentBusiness?.colors.gradient || "from-emerald-600 to-teal-700";

  return (
    <header className={cn("bg-gradient-to-r text-white fixed top-0 left-0 right-0 z-50 shadow-lg", gradientClass)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg sm:text-xl">
            <span className="flex items-center gap-2">
              <span>🎓</span>
              <span className="hidden sm:inline">Study Abroad Vadodara</span>
              <span className="sm:hidden">Study Abroad</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Home
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="#gallery" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Gallery
            </Link>
            <Link href="#services" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Services
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+916353583148"
              className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#services"
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4">
              <a
                href="tel:+916353583148"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

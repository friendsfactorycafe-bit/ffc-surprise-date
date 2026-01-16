"use client";

import Link from "next/link";
import { businesses, getAreaDisplayName } from "@/lib/business-config";
import { studyAbroadKeywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, MapPinned, Search } from "lucide-react";

const studyAbroadBusiness = businesses[0];

export function MegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Area Pages Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <MapPinned className="w-6 h-6 text-emerald-400" />
            Study Abroad Consultants - All Areas
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-bold text-lg border-b border-gray-600 pb-2 flex items-center gap-2">
                <span>{studyAbroadBusiness.icon}</span>
                <Link 
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {studyAbroadBusiness.name}
                </Link>
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                {studyAbroadBusiness.areas.map((area) => (
                  <li key={area}>
                    <Link
                      href={`/${area}`}
                      className="text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      Study Abroad in {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Pages Navigation for SEO */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Search className="w-6 h-6 text-emerald-400" />
            Popular Services & Keywords
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {studyAbroadKeywords.map((keyword) => (
                <li key={keyword.slug}>
                  <Link
                    href={`/${keyword.slug}`}
                    className="text-gray-400 hover:text-white transition-colors block py-1"
                  >
                    {keyword.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-400">+91 6353583148</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-400">edu@studyabroadvadodara.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">201, Shree Complex, RC Dutt Road,</p>
                <p className="text-gray-400">Alkapuri, Vadodara - 390007</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} studyabroadvadodara.in - Study Abroad Consultants Vadodara. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

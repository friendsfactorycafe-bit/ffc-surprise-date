"use client";

import { useState, useEffect } from "react";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { HeroForm } from "./hero-form";
import { Phone, ChevronLeft, ChevronRight, Users, Star, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessHeroSliderProps {
  business: BusinessConfig;
  area: string;
  heroTitle: string;
  heroSubtitle: string;
  keyword?: string;
}

// Study Abroad hero images - using local images
const businessImages: Record<string, string[]> = {
  "study-abroad": [
    "/images/hero/hero1.jpg",
    "/images/hero/hero2.jpg",
    "/images/hero/hero3.jpg",
  ],
};

export function BusinessHeroSlider({ business, area, heroTitle, heroSubtitle, keyword }: BusinessHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const areaName = getAreaDisplayName(area);
  const images = businessImages["study-abroad"];
  const gradientClass = business.colors.gradient;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full overflow-hidden pt-16">
      {/* Background Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className={cn("absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10")} />
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 z-10", gradientClass)} />

      {/* Content */}
      <div className="relative z-20 px-4 py-8 md:py-16">
        <div className="container mx-auto">
          {/* Mobile Layout: Stacked */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-white space-y-3 md:space-y-5">
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {business.tagline}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {heroTitle}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-xl">
                {heroSubtitle}
              </p>

              {/* SEO Content - Hidden on mobile for cleaner look */}
              <p className="hidden md:block text-sm opacity-80">
                Looking for the best <strong>{business.name.toLowerCase()}</strong> in {areaName}? 
                We are the top-rated <strong>{business.name.toLowerCase()}</strong> serving {areaName} and all of Vadodara.
              </p>
              
              {/* Quick Stats - Compact on mobile */}
              <div className="flex flex-wrap gap-2 md:gap-4 pt-2">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs md:text-sm">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">5000+</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs md:text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs md:text-sm">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">15+ Years</span>
                </div>
              </div>

              {/* CTA Buttons - Show on mobile below form */}
              <div className="flex gap-3 pt-2 lg:hidden">
                <a
                  href="tel:+916353583148"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/916353583148?text=Hi, I need Study Abroad consultation from ${areaName}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-green-600 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
              <HeroForm business={business} area={area} keyword={keyword} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Hidden on mobile for cleaner look */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-30 items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

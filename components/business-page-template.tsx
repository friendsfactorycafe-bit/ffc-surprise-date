"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { businessKeywords } from "@/lib/keywords-config";
import { BusinessNav } from "./business-nav";
import { MegaFooter } from "./mega-footer";
import { BusinessHeroSlider } from "./business-hero-slider";
import { BusinessGallerySection } from "./business-gallery-section";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Tag, GraduationCap, Globe, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { getTestimonialsByArea, getRandomTestimonials, Testimonial } from "@/lib/testimonials";
import { getAreaUniqueContent } from "@/lib/area-content";

interface BusinessPageTemplateProps {
  business: BusinessConfig;
  area: string;
  content: {
    heroTitle: string;
    heroSubtitle: string;
    aboutContent: string;
    whyChooseUs: string[];
    detailedServices: { title: string; description: string }[];
    areaSpecificContent: string;
    faqItems: { question: string; answer: string }[];
    processSteps: { title: string; description: string }[];
  };
}

// Country destinations
const destinations = [
  { name: "Canada", image: "/images/countries/canada.jpg", students: "2000+" },
  { name: "USA", image: "/images/countries/usa.jpg", students: "1500+" },
  { name: "UK", image: "/images/countries/uk.jpg", students: "1800+" },
  { name: "Australia", image: "/images/countries/australia.jpg", students: "1200+" },
  { name: "Germany", image: "/images/countries/germany.jpg", students: "800+" },
  { name: "Ireland", image: "/images/countries/ireland.jpg", students: "600+" },
];

export function BusinessPageTemplate({ business, area, content }: BusinessPageTemplateProps) {
  const areaName = getAreaDisplayName(area);
  const gradientClass = business.colors.gradient;
  
  // Get unique area content
  const uniqueContent = getAreaUniqueContent(area);
  
  // Get testimonials - prioritize area-specific ones, fill with random
  const areaTestimonials = getTestimonialsByArea(areaName);
  const testimonials = areaTestimonials.length >= 6 
    ? areaTestimonials.slice(0, 6) 
    : [...areaTestimonials, ...getRandomTestimonials(6 - areaTestimonials.length)];

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea={area} />
      
      {/* Hero Slider with Form */}
      <BusinessHeroSlider 
        business={business} 
        area={area} 
        heroTitle={uniqueContent.heroTitle}
        heroSubtitle={uniqueContent.heroSubtitle}
      />

      {/* Trust Badges */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-emerald-600 mb-2" />
              <p className="font-bold text-2xl">5000+</p>
              <p className="text-gray-600 text-sm">Students Placed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-gray-600 text-sm">Student Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-emerald-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">20+</p>
              <p className="text-gray-600 text-sm">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/gallery/gallery2.jpg"
          alt={`${business.name} services in ${areaName}`}
          fill
          className="object-cover"
          priority
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r opacity-80", gradientClass)} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Gateway to Global Education</h2>
            <p className="text-lg md:text-xl opacity-90">Expert Study Abroad Guidance in {areaName}</p>
          </div>
        </div>
      </section>

      {/* About Section with Side Image */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {uniqueContent.aboutTitle}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>{uniqueContent.aboutParagraph1}</p>
                <p>{uniqueContent.aboutParagraph2}</p>
                <p>{uniqueContent.aboutParagraph3}</p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-80 md:h-96">
              <Image
                src="/images/about/consultation.jpg"
                alt={`About ${business.name} in ${areaName}`}
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <Plane className="inline-block w-8 h-8 mr-2 text-emerald-600" />
            {uniqueContent.sectionHeadlines.destinations}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {uniqueContent.sectionHeadlines.destinationsSubtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest) => (
              <div key={dest.name} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-4 text-white text-center">
                  <h3 className="font-bold text-lg">{dest.name}</h3>
                  <p className="text-sm text-emerald-300">{dest.students} Students</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {uniqueContent.sectionHeadlines.services}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {uniqueContent.sectionHeadlines.servicesSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-3 text-emerald-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <GraduationCap className="inline-block w-8 h-8 mr-2 text-emerald-600" />
            Student Success Stories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            See our students achieving their dreams of studying abroad from {areaName}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={`/images/gallery/gallery${i}.jpg`}
                    alt={`Student success story ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Success Story</p>
                    <p className="text-sm text-emerald-300">From {areaName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-80 md:h-[500px]">
              <Image
                src="/images/about/team.jpg"
                alt={`Why choose ${business.name} in ${areaName}`}
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Us in {areaName}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-600" />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-16 md:py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{uniqueContent.sectionHeadlines.testimonials}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {uniqueContent.sectionHeadlines.testimonialsSubtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}, Vadodara</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <GraduationCap className="w-4 h-4" />
                  {testimonial.university}, {testimonial.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Specific Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {uniqueContent.sectionHeadlines.contact}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>{uniqueContent.uniqueIntro}</p>
                  <p>{uniqueContent.whyStudyAbroad}</p>
                  <p>{uniqueContent.localAdvantage}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[9, 10, 11, 12].map((i) => (
                  <div key={i} className="relative h-40 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <Image
                      src={`/images/gallery/gallery${i}.jpg`}
                      alt={`Study abroad in ${areaName} ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Story from {areaName}</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">{uniqueContent.successStory}</p>
            <p className="text-lg font-semibold">{uniqueContent.callToAction}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section with Unique Questions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {uniqueContent.sectionHeadlines.faq}
            </h2>
            <div className="space-y-4">
              {uniqueContent.faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl p-6 group">
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Area Specific */}
      <section className="py-16 md:py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why {areaName} Students Choose Us
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Trusted by thousands of students from {areaName} and nearby areas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {uniqueContent.sectionHeadlines.process}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 bg-emerald-600">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <BusinessGallerySection businessName={business.name} accentColor="emerald" />

      {/* Related Services / Keywords */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <Tag className="inline-block w-8 h-8 mr-2 text-emerald-600" />
            Related Services
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of study abroad services in Vadodara
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {(businessKeywords[business.slug] || []).slice(0, 15).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 rounded-full text-gray-700 transition-colors border border-gray-200 hover:border-emerald-300"
              >
                {keyword.title.replace(" in Vadodara", "").replace(" Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/gallery/gallery2.jpg"
          alt="Start your study abroad journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Study Abroad?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation for your study abroad journey from {areaName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/916353583148?text=Hi, I need Study Abroad consultation from ${areaName}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <MapPin className="inline-block w-8 h-8 mr-2 text-emerald-600" />
            We Also Serve Other Areas in Vadodara
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
            {business.areas
              .filter((a) => a !== area)
              .slice(0, 10)
              .map((otherArea, index) => (
                <Link
                  key={otherArea}
                  href={`/${otherArea}`}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-28">
                    <Image
                      src={`/images/gallery/gallery${(index % 12) + 1}.jpg`}
                      alt={`${business.name} in ${getAreaDisplayName(otherArea)}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <p className="text-white font-semibold p-3 text-sm">{getAreaDisplayName(otherArea)}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {business.areas
              .filter((a) => a !== area)
              .slice(10)
              .map((otherArea) => (
                <Link
                  key={otherArea}
                  href={`/${otherArea}`}
                  className="px-4 py-2 bg-white hover:bg-emerald-100 rounded-full text-gray-700 transition-colors border border-gray-200"
                >
                  {business.name} in {getAreaDisplayName(otherArea)}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch - {areaName}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to start your study abroad journey? Contact us today for a free consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="tel:+916353583148"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone className="w-8 h-8 mb-3" />
                <p className="font-bold">Call Us</p>
                <p className="opacity-90">+91 6353583148</p>
              </a>
              <a
                href="mailto:edu@studyabroadvadodara.in"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Mail className="w-8 h-8 mb-3" />
                <p className="font-bold">Email Us</p>
                <p className="opacity-90">edu@studyabroadvadodara.in</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl">
                <MapPin className="w-8 h-8 mb-3" />
                <p className="font-bold">Visit Us</p>
                <p className="opacity-90 text-center text-sm">201, Shree Complex, RC Dutt Road, Alkapuri, Vadodara</p>
              </div>
            </div>
            <a
              href={`https://wa.me/916353583148?text=Hi, I'm interested in studying abroad from ${areaName}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
      
      {/* WhatsApp Floating Button */}
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}

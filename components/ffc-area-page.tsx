'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { AreaConfig, packages, surpriseOnlyServices, vadodaraAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { getAreaContent } from '@/lib/ffc-area-content';

// Hero images for area pages
const areaHeroImages = [
  '/images/gallery/IMG_20260119_194315672.jpg',
  '/images/gallery/IMG_20260119_194325684.jpg',
  '/images/gallery/IMG_20260119_194351411.jpg',
  '/images/gallery/IMG_20251126_195441411.jpg',
  '/images/gallery/IMG_20251126_195451844.jpg',
];

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Get nearby areas (excluding current)
  const nearbyAreas = vadodaraAreas.filter(a => a.slug !== area.slug).slice(0, 8);
  
  // Get unique content for this area (if available)
  const uniqueContent = getAreaContent(area.slug);
  
  // Get a consistent hero image based on area slug
  const heroImageIndex = area.slug.length % areaHeroImages.length;
  const heroImage = areaHeroImages[heroImageIndex];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-amber-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Surprise Celebrations Near {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {uniqueContent?.heroSubtitle || `Planning a surprise for your loved one from ${area.name}? Friends Factory Cafe is Vadodara's #1 surprise planning venue for birthday surprises, anniversary surprises & romantic surprises!`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              {/* Dynamic Hero Badges - Unique per area */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                {uniqueContent?.heroBadges ? (
                  uniqueContent.heroBadges.map((badge, index) => (
                    <span key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      {badge}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Star className="h-4 w-4" /> 4.9★ Rated
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Check className="h-4 w-4" /> 100% Private
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                      <Gift className="h-4 w-4" /> 3000+ Surprises
                    </span>
                  </>
                )}
              </div>
            </div>
            
            {/* Hero Visual - Real Photo */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={heroImage}
                  alt={`Surprise celebration in ${area.name}, Vadodara`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="bg-white/90 text-amber-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-center gap-1">
                    <MapPin className="h-3 w-3" /> {area.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Services in This Area - Dynamic per area */}
      {uniqueContent?.topServicesInArea && (
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Popular Surprises From {area.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What {area.name} couples surprise their loved ones with
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {uniqueContent.topServicesInArea.map((service, index) => (
                <Card key={index} className="border-amber-200 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{service.emoji}</span>
                    <Badge className="mb-3 bg-amber-100 text-amber-700">{service.popularity}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Surprise Services for {area.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {uniqueContent?.servicesDescription || `All surprise celebration services available for couples from ${area.name}`}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {surpriseOnlyServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-amber-100 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Surprise Planning Near {area.name}
                </h2>
                
                {/* Unique Introduction Content */}
                {uniqueContent ? (
                  <div className="text-gray-600 mb-6 whitespace-pre-line">
                    {uniqueContent.introduction}
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 mb-6">
                      Planning a surprise for your loved one from {area.name}, Vadodara? Friends Factory Cafe is your go-to surprise planning venue for creating jaw-dropping moments they'll never forget!
                    </p>
                    <p className="text-gray-600 mb-6">
                      Whether you're planning a birthday surprise, anniversary surprise, surprise proposal, or a romantic surprise date, our 100% private rooftop venue offers stunning decorations, delicious food, and the perfect ambiance to make their heart skip a beat.
                    </p>
                  </>
                )}

                {/* About the Area - Only if unique content exists */}
                {uniqueContent?.aboutArea && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-amber-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      About {area.name}
                    </h3>
                    <p className="text-gray-600">{uniqueContent.aboutArea}</p>
                  </div>
                )}

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-amber-600" />
                    Surprise Services for {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Birthday Surprise Planning",
                      "Anniversary Surprise Setup",
                      "Surprise Proposal Arrangements",
                      "Surprise Date Nights",
                      "Midnight Birthday Surprises",
                      "Surprise Gift Delivery",
                      "Romantic Surprise Dates",
                      "Custom Surprise Celebrations"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Advantage - Only if unique content exists */}
                {uniqueContent?.locationAdvantage && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      Getting to Friends Factory Cafe from {area.name}
                    </h3>
                    <p className="text-gray-600">{uniqueContent.locationAdvantage}</p>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-4">
                  Why {area.name} Couples Trust Us for Surprises
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {uniqueContent?.whyChooseUs ? (
                    uniqueContent.whyChooseUs.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>Expert Surprise Planning:</strong> We help you plan the perfect surprise from start to finish.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>100% Secret & Private:</strong> Your surprise stays completely secret — no other guests during your booking.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>8 Stunning Surprise Setups:</strong> Balloon arches, fairy lights, flower decorations & more.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>Complete Surprise Package:</strong> Decorations, cake, food, music — everything ready before they arrive!</span>
                      </li>
                    </>
                  )}
                </ul>

                {/* Testimonial - Only if unique content exists */}
                {uniqueContent?.testimonial && (
                  <div className="bg-amber-100 rounded-xl p-6 mb-8">
                    <Quote className="h-8 w-8 text-amber-600 mb-4" />
                    <p className="text-gray-700 italic mb-4">{uniqueContent.testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(uniqueContent.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="font-semibold">{uniqueContent.testimonial.name}</span>
                      <span className="text-gray-500">- {uniqueContent.testimonial.location}</span>
                    </div>
                  </div>
                )}

                {/* Nearby Landmarks - Only if unique content exists */}
                {uniqueContent?.nearbyLandmarks && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-amber-100">
                    <h3 className="text-xl font-bold mb-4">Nearby Landmarks from {area.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {uniqueContent.nearbyLandmarks.map((landmark, index) => (
                        <span key={index} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Area Specialty - Only if unique content exists */}
                {uniqueContent?.areaSpecialty && (
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 mb-8 border border-amber-200">
                    <h3 className="text-xl font-bold mb-3 text-amber-800">{uniqueContent.areaSpecialty.title}</h3>
                    <p className="text-gray-700 mb-3">{uniqueContent.areaSpecialty.description}</p>
                    <p className="text-amber-700 font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" /> {uniqueContent.areaSpecialty.highlightFeature}
                    </p>
                  </div>
                )}

                {/* Popular Occasions in Area - Only if unique content exists */}
                {uniqueContent?.popularOccasions && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-amber-100">
                    <h3 className="text-xl font-bold mb-4">What {area.name} Couples Celebrate</h3>
                    <div className="space-y-4">
                      {uniqueContent.popularOccasions.map((occ, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-amber-100 pb-3 last:border-0">
                          <div>
                            <p className="font-medium text-gray-800">{occ.occasion}</p>
                            <p className="text-sm text-gray-500">Peak: {occ.peakMonth}</p>
                          </div>
                          <Badge className="bg-amber-100 text-amber-700">{occ.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Insights - Only if unique content exists */}
                {uniqueContent?.bookingInsights && (
                  <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Gift className="h-5 w-5 text-amber-600" />
                      {area.name} Booking Insights
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>Preferred Slot:</strong> {uniqueContent.bookingInsights.preferredSlot}</p>
                      <p><strong>Advance Booking:</strong> {uniqueContent.bookingInsights.averageAdvanceBooking}</p>
                      <p><strong>Popular Package:</strong> {uniqueContent.bookingInsights.popularPackage}</p>
                      <p className="bg-white p-3 rounded-lg border border-amber-200 mt-4">
                        <strong className="text-amber-700">💡 Insider Tip:</strong> {uniqueContent.bookingInsights.insiderTip}
                      </p>
                    </div>
                  </div>
                )}

                {/* Local Tips - Only if unique content exists */}
                {uniqueContent?.localTips && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-amber-100">
                    <h3 className="text-xl font-bold mb-4">Local Tips for {area.name} Couples</h3>
                    <ul className="space-y-2">
                      {uniqueContent.localTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-amber-600">💡</span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Reviews - Only if unique content exists */}
                {uniqueContent?.additionalReviews && (
                  <div className="bg-white rounded-xl p-6 mb-8 border border-amber-100">
                    <h3 className="text-xl font-bold mb-4">More Reviews from {area.name}</h3>
                    <div className="space-y-4">
                      {uniqueContent.additionalReviews.map((review, index) => (
                        <div key={index} className="border-b border-amber-100 pb-4 last:border-0">
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-sm italic mb-2">"{review.text}"</p>
                          <p className="text-gray-500 text-sm font-medium">— {review.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Closing Text */}
                {uniqueContent?.closingText && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
                    <p className="text-gray-700 font-medium">{uniqueContent.closingText}</p>
                    {uniqueContent.callToAction && (
                      <p className="mt-4 text-amber-700 font-semibold">{uniqueContent.callToAction}</p>
                    )}
                  </div>
                )}
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Surprise Packages for {area.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {packages.slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group bg-white">
                        <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                          <span className="text-5xl">{pkg.emoji}</span>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-amber-600 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-amber-600">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Also Serving Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-amber-50 rounded-full text-gray-700 hover:bg-amber-600 hover:text-white transition-colors border border-amber-200"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-amber-600 rounded-full text-white hover:bg-amber-700 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Planning Surprises From {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {(uniqueContent?.faqs || [
              {
                question: `How do I plan a surprise for someone from ${area.name}?`,
                answer: `It's easy! Contact us via WhatsApp or call, share your surprise idea, and we'll help you plan everything. The setup will be ready before your loved one arrives — they'll be completely surprised!`
              },
              {
                question: "Will my surprise stay a secret?",
                answer: "Absolutely! Your surprise is 100% private — no other guests during your booking. Bring them blindfolded or under a different excuse, and watch their jaw drop!"
              },
              {
                question: `How far is Friends Factory from ${area.name}?`,
                answer: `Friends Factory Cafe is conveniently located in Gotri, Vadodara — easily accessible from ${area.name} by car, auto, or cab. Contact us for exact directions.`
              },
              {
                question: "What's included in the surprise setup?",
                answer: "Everything! Balloon decorations, fairy lights, candles, surprise cake, welcome drink, delicious food, soft music, and a 100% private venue for 3 magical hours."
              }
            ]).map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-amber-100 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`Real Surprises for ${area.name} Couples`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

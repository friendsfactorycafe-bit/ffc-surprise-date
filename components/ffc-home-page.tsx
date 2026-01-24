'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, serviceCategories, vadodaraAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features
const experienceFeatures = [
  {
    icon: Clock,
    title: "3 Mesmerizing Hours",
    description: "Three magical hours designed to create unforgettable memories"
  },
  {
    icon: Gift,
    title: "Cake & Champagne",
    description: "Complimentary cake & non-alcoholic champagne (₹500)"
  },
  {
    icon: Camera,
    title: "Photo-Ready Setup",
    description: "Instagram-worthy decorations for your special moments"
  },
  {
    icon: Music,
    title: "Romantic Music",
    description: "Soft background melodies to set the perfect mood"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is the location of Friends Factory Cafe?",
    answer: "Nestled at 424, OneWest, Asopalav W, 4th Floor, Sevasi-Canal Rd, Gotri, Vadodara—your premier rooftop spot for candlelight dinners just minutes from key areas."
  },
  {
    question: "How do I book a candlelight dinner or event?",
    answer: `WhatsApp ${siteConfig.phone} or call directly—share your occasion (anniversary, proposal), date, and guest count for instant confirmation and custom quotes.`
  },
  {
    question: "What are the starting prices for packages?",
    answer: "Candlelight dinner packages begin at ₹6500, including rooftop setup, mocktails, flowers, and decor; premium options with photographer add ₹2000+."
  },
  {
    question: "Can we book for marriage proposals or engagements?",
    answer: "Absolutely—our rooftop proposal setups feature heart arches, fairy lights, and champagne for unforgettable 'yes' moments in Vadodara."
  },
  {
    question: "What occasions do you host?",
    answer: "Anniversary celebrations, birthday surprises, proposals, last candlelight dinners before marriage, engagements, pre-wedding shoots, and pregnancy announcements."
  },
  {
    question: "What time slots are available for rooftop dinners?",
    answer: "Evenings 6 PM–11 PM; weekends book fast—advance booking recommended for Vadodara's romantic peak hours."
  },
  {
    question: "Can we customize decorations and menu?",
    answer: "Fully customizable—balloons, cakes, themed backdrops, vegan mocktails for your anniversary or pregnancy announcement."
  },
  {
    question: "Is Friends Factory Cafe suitable for small groups or couples only?",
    answer: "Perfect for 2-3 people; intimate couple setups or family celebrations with private rooftop privacy."
  },
  {
    question: "Is your venue private and couple-friendly?",
    answer: "Yes, absolutely! Our venue is exclusively for couples. You'll have complete privacy with no other guests during your booking slot. It's a safe, comfortable, and romantic space."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability. No Refund Policy Applicable."
  }
];

// Gallery items data - All images and videos
const galleryItems = [
  // Images
  { type: 'image', src: '/images/gallery/20230630_212408_IMG_7011-scaled.jpg', alt: 'Romantic rooftop setup', title: 'Romantic Rooftop', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/20220618_193559_IMG_0682-scaled.jpg', alt: 'Candlelight dinner', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/images/gallery/20220618_193611_IMG_0684-scaled.jpg', alt: 'Romantic setup', title: 'Evening Romance', featured: false },
  { type: 'video', src: '/videos/Prakhar & Priyanka.mp4', alt: 'Couple celebration', title: 'Prakhar & Priyanka', featured: false },
  { type: 'image', src: '/images/gallery/20220702_190511_IMG_0943-scaled.jpg', alt: 'Celebration setup', title: 'Celebration Setup', featured: false },
  { type: 'image', src: '/images/gallery/20221018_195534_IMG_2729-scaled.jpg', alt: 'Special occasion', title: 'Special Occasion', featured: false },
  { type: 'video', src: '/videos/Yash And Tulsi .mp4', alt: 'Yash and Tulsi celebration', title: 'Yash & Tulsi', featured: false },
  { type: 'image', src: '/images/gallery/20230311_201842_IMG_5638-scaled.jpg', alt: 'Decorated table', title: 'Table Decor', featured: false },
  { type: 'image', src: '/images/gallery/20230616_185128_IMG_6728-scaled.jpg', alt: 'Birthday setup', title: 'Birthday Setup', featured: false },
  { type: 'image', src: '/images/gallery/20230616_185327_IMG_6739-scaled.jpg', alt: 'Anniversary special', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/videos/reel-.mp4', alt: 'Rooftop vibes', title: 'Rooftop Vibes', featured: false },
  { type: 'image', src: '/images/gallery/20230616_185409_IMG_6744-scaled.jpg', alt: 'Romantic ambiance', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/20230616_185457_IMG_6747-scaled.jpg', alt: 'Couple moment', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/20230616_185534_IMG_6749-scaled.jpg', alt: 'Evening celebration', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VN20250625_171332.mp4', alt: 'Birthday surprise', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/20230630_211715_IMG_6981-scaled.jpg', alt: 'Glass house dinner', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/20230630_215803_IMG_7021-scaled.jpg', alt: 'Night setup', title: 'Night Setup', featured: false },
  { type: 'video', src: '/videos/VN20250516_151148.mp4', alt: 'Celebration reel', title: 'Celebration Reel', featured: false },
  { type: 'image', src: '/images/gallery/20230712_181705_IMG_7131-scaled.jpg', alt: 'Proposal setup', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/images/gallery/20230724_114920_IMG_7329-scaled.jpg', alt: 'Day celebration', title: 'Day Celebration', featured: false },
  { type: 'video', src: '/videos/VID_20251108_200434508.mp4', alt: 'Romantic video', title: 'Romantic Moments', featured: false },
  { type: 'image', src: '/images/gallery/20230724_114928_IMG_7330-scaled.jpg', alt: 'Couple photo', title: 'Couple Photo', featured: false },
  { type: 'image', src: '/images/gallery/20240128_213430_IMG_2984-scaled.jpg', alt: 'Winter celebration', title: 'Winter Magic', featured: false },
  { type: 'video', src: '/videos/VID_20241205_201217.mp4', alt: 'December celebration', title: 'December Special', featured: false },
  { type: 'image', src: '/images/gallery/20240209_202054_IMG_3168-scaled.jpg', alt: 'Valentine setup', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/images/gallery/20240209_202159_IMG_3172-scaled.jpg', alt: 'Love celebration', title: 'Love Celebration', featured: false },
  { type: 'video', src: '/videos/VID-20250512-WA0007.mp4', alt: 'WhatsApp video', title: 'Special Moment', featured: false },
  { type: 'image', src: '/images/gallery/20240209_202215_IMG_3174-scaled.jpg', alt: 'Romantic dinner', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/images/gallery/20240218_221820_IMG_3522-scaled.jpg', alt: 'Night romance', title: 'Night Romance', featured: false },
  { type: 'video', src: '/videos/VID-20250425-WA0024.mp4', alt: 'April celebration', title: 'April Memories', featured: false },
  { type: 'image', src: '/images/gallery/20240218_221904_IMG_3528-scaled.jpg', alt: 'Fairy lights setup', title: 'Fairy Lights', featured: false },
  { type: 'image', src: '/images/gallery/20240218_222104_IMG_3533-scaled.jpg', alt: 'Couple dinner', title: 'Couple Dinner', featured: false },
  { type: 'video', src: '/videos/VID-20250416-WA0010.mp4', alt: 'Celebration video', title: 'Celebration Video', featured: false },
  { type: 'image', src: '/images/gallery/20240218_222716_IMG_3552-scaled.jpg', alt: 'Premium setup', title: 'Premium Setup', featured: false },
  { type: 'image', src: '/images/gallery/20240221_172709_IMG_2992-scaled.jpg', alt: 'Afternoon celebration', title: 'Afternoon Joy', featured: false },
  { type: 'video', src: '/videos/VID-20250416-WA0009.mp4', alt: 'Video moment', title: 'Video Moment', featured: false },
  { type: 'image', src: '/images/gallery/20240221_172710_2a52bdb3-38ee-4569-a788-3eaabc6e87ee-scaled.jpg', alt: 'Special setup', title: 'Special Setup', featured: false },
  { type: 'image', src: '/images/gallery/20240403_141146_IMG_4698-scaled.jpg', alt: 'Spring celebration', title: 'Spring Celebration', featured: false },
  { type: 'video', src: '/videos/1000330052.mp4', alt: 'Gallery video', title: 'Gallery Video 1', featured: false },
  { type: 'image', src: '/images/gallery/20240403_141155_IMG_4699-scaled.jpg', alt: 'April setup', title: 'April Setup', featured: false },
  { type: 'image', src: '/images/gallery/20240523_162144_64348a4e-285b-483e-b94b-40e62eb7ef55-scaled.jpg', alt: 'May celebration', title: 'May Celebration', featured: false },
  { type: 'video', src: '/videos/1000330054.mp4', alt: 'Gallery video', title: 'Gallery Video 2', featured: false },
  { type: 'image', src: '/images/gallery/20240523_162157_e145c19a-f82e-4775-b20a-7f180a7ce98d-scaled.jpg', alt: 'Summer setup', title: 'Summer Setup', featured: false },
  { type: 'image', src: '/images/gallery/20240630_160211_IMG_7325-scaled.jpg', alt: 'June celebration', title: 'June Magic', featured: false },
  { type: 'video', src: '/videos/1000330055.mp4', alt: 'Gallery video', title: 'Gallery Video 3', featured: false },
  { type: 'image', src: '/images/gallery/20240630_160817_IMG_7339-scaled.jpg', alt: 'Evening ambiance', title: 'Evening Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/57b5e578-168b-4542-85ea-58d17a849c01-scaled.jpg', alt: 'Romantic moment', title: 'Romantic Moment', featured: false },
  { type: 'video', src: '/videos/1000330056.mp4', alt: 'Gallery video', title: 'Gallery Video 4', featured: false },
  { type: 'image', src: '/images/gallery/5e6fb556-2f94-43ff-bbff-f3446181300e-scaled.jpg', alt: 'Couple happiness', title: 'Happy Couple', featured: false },
  { type: 'image', src: '/images/gallery/737afdb2-d204-4d95-89a9-45de427dd14d-scaled.jpg', alt: 'Beautiful setup', title: 'Beautiful Setup', featured: false },
  { type: 'video', src: '/videos/1000330059.mp4', alt: 'Gallery video', title: 'Gallery Video 5', featured: false },
  { type: 'video', src: '/videos/1000330060.mp4', alt: 'Gallery video', title: 'Gallery Video 6', featured: false },
  { type: 'video', src: '/videos/1000330061.mp4', alt: 'Gallery video', title: 'Gallery Video 7', featured: false },
  { type: 'video', src: '/videos/1000330062.mp4', alt: 'Gallery video', title: 'Gallery Video 8', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
            <ImageIcon className="h-4 w-4 mr-2" /> Our Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Magical Moments at Friends Factory
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the romantic experiences we create for couples. Every setup is designed to make your moments unforgettable.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-amber-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
            Our Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Celebration Ideas & Inspiration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and ideas to help you plan the perfect celebration in Vadodara
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-amber-100">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-amber-500 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero-slider/slide1.png', alt: 'Romantic Candlelight Dinner Setup at Friends Factory Cafe Vadodara' },
    { src: '/images/hero-slider/slide2.png', alt: 'Rooftop Celebration Setup with Fairy Lights Vadodara' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll reviews function
  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const scrollAmount = 232; // card width (220px) + gap (12px)
      reviewsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in Vadodara
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                Friends Factory Cafe
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Premium romantic celebration venue for couples. Birthday surprises, candlelight dinners, anniversaries, proposals & more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-amber-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Perfect For Every Celebration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate candlelight dinners to grand proposals, we create magical moments for every special occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow border-amber-100 hover:border-amber-300 group">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 hidden md:block">
                      {service.description}
                    </p>
                    <div className="mt-3 md:mt-4 flex items-center justify-center text-amber-600 text-xs md:text-sm font-medium">
                      Explore <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              Our Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Our Romantic Celebration Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              8 unique romantic setups designed to make your celebration unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-amber-100 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-amber-600 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-base md:text-xl font-bold text-amber-600">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              What You Get
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                Our Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Curated Café-Style Delicacies
              </h2>
              <p className="text-gray-300 mb-8">
                Crafted for Romantic Dates & Private Celebrations
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/about/menu.webp" 
                  alt="Friends Factory Cafe Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              <MapPin className="h-4 w-4 mr-2" /> Areas We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Serving All of Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring romantic celebrations to couples across all areas of Vadodara
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {vadodaraAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-amber-600 hover:text-white transition-colors border border-amber-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <section className="py-16 md:py-20 bg-amber-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                Our Love Stories Shine (Testimonials)
              </h2>
            </div>
            <a 
              href="https://g.page/r/CVQhSBwuUUhBEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Review Us on Google
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Rating Summary Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 lg:w-56 flex-shrink-0">
              <p className="text-base font-bold text-gray-800 mb-2">EXCELLENT</p>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-3">Based on <strong>1256 reviews</strong></p>
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-lg font-medium text-gray-700">Google</span>
              </div>
            </div>

            {/* Reviews Grid with Navigation */}
            <div className="flex-1 relative min-w-0 overflow-hidden">
              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollReviews('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </button>

              <button 
                onClick={() => scrollReviews('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>

              <div 
                ref={reviewsRef}
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10 py-1" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Review 1 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold text-sm">D</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Devanshi</p>
                        <p className="text-xs text-gray-500">3 weeks ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Such a great time!!!! Thanks to my hubby and the team of friends factory cafe!!!</p>
                  </CardContent>
                </Card>

                {/* Review 2 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-semibold text-sm">V</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Vraj Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">The place was calm and peace, food was awesome, will be back soon 🍽️</p>
                  </CardContent>
                </Card>

                {/* Review 3 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-sm">Y</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Yoma Patel</p>
                        <p className="text-xs text-gray-500">1 month ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Cutest set up and amazing food service.</p>
                  </CardContent>
                </Card>

                {/* Review 4 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold text-sm">K</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Krishn Sharma</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Best candlelight dinner experience in Vadodara! The decoration was stunning. Proposed here and she said YES! 💍</p>
                  </CardContent>
                </Card>

                {/* Review 5 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold text-sm">P</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Priya Shah</p>
                        <p className="text-xs text-gray-500">2 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">My husband surprised me here for our anniversary. The rooftop setup was magical! Highly recommend! ❤️</p>
                  </CardContent>
                </Card>

                {/* Review 6 */}
                <Card className="snap-start border-gray-200 bg-white h-full flex-shrink-0 w-[220px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">R</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">Rahul Desai</p>
                        <p className="text-xs text-gray-500">3 months ago</p>
                      </div>
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (<Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />))}
                      <span className="ml-1 text-cyan-500 text-xs">✓</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">Best place for couples in Vadodara! Booked for my wife's birthday. Glass house setup was Instagram-perfect!</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-3">
                <span className="text-xs text-gray-500">← Swipe to see more reviews →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your romantic celebration today and let us make your special moments truly magical
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

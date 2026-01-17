"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  DollarSign, 
  Briefcase, 
  FileCheck, 
  Award, 
  Building2, 
  BookOpen, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Globe,
  Plane,
  Users,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import type { CountryContent } from "@/lib/country-content";

interface CountryPageTemplateProps {
  country: CountryContent;
}

export function CountryPageTemplate({ country }: CountryPageTemplateProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    englishScore: "",
    budget: "",
    intake: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: `Country Page - ${country.name}`,
          page: country.slug,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        toast.success("Thank you! We'll contact you shortly about your " + country.name + " study plans.");
        setFormData({ name: "", phone: "", email: "", education: "", englishScore: "", budget: "", intake: "", course: "", message: "" });
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in studying in ${country.name}. Please provide more information.`);
  const phoneNumber = "916353583148";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Study Abroad Vadodara</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#destinations" className="text-sm hover:text-primary">Destinations</Link>
              <Link href="/#services" className="text-sm hover:text-primary">Services</Link>
              <Link href="/#about" className="text-sm hover:text-primary">About Us</Link>
              <a href={`tel:+${phoneNumber}`} className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="h-4 w-4" />
                +91 6353583148
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-4 block">{country.flag}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {country.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {country.heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <a href="#inquiry-form">Get Free Assessment</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{country.costs.tuitionRange.split(' ')[0]}</div>
              <div className="text-sm text-muted-foreground">Tuition Starts From</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{country.visaInfo.successRate}</div>
              <div className="text-sm text-muted-foreground">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{country.workOpportunities.postStudy.split(' ')[0]}</div>
              <div className="text-sm text-muted-foreground">Post-Study Work</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{country.visaInfo.processingTime.split(' ')[0]}</div>
              <div className="text-sm text-muted-foreground">Visa Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{country.overview.title}</h2>
            <div className="prose prose-lg max-w-none">
              {country.overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{country.whyStudy.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.whyStudy.reasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Courses in {country.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.popularCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {course.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>Fees: {course.avgFee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Universities in {country.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.topUniversities.map((uni, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    {uni.name}
                  </CardTitle>
                  <CardDescription>{uni.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Star className="h-3 w-3 mr-1" />
                    {uni.ranking}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Admission Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {country.admissionRequirements.map((req, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <FileCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{req.requirement}</h3>
                    <p className="text-muted-foreground">{req.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Work Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Costs */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Estimated Costs
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-muted-foreground">Tuition Range</span>
                      <span className="font-semibold">{country.costs.tuitionRange}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-muted-foreground">Living Cost</span>
                      <span className="font-semibold">{country.costs.livingCost}</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                      <span className="font-medium">Total Estimate</span>
                      <span className="font-bold text-primary">{country.costs.totalEstimate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Work Opportunities */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Work Opportunities
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        During Studies
                      </h3>
                      <p className="text-muted-foreground">{country.workOpportunities.duringStudy}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2 mb-2">
                        <Plane className="h-4 w-4 text-blue-600" />
                        Post-Study
                      </h3>
                      <p className="text-muted-foreground">{country.workOpportunities.postStudy}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                        PR Pathway
                      </h3>
                      <p className="text-muted-foreground">{country.workOpportunities.prPathway}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Visa Information</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Visa Type</h3>
                    <p className="text-muted-foreground">{country.visaInfo.type}</p>
                  </div>
                  <div>
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Processing Time</h3>
                    <p className="text-muted-foreground">{country.visaInfo.processingTime}</p>
                  </div>
                  <div>
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Our Success Rate</h3>
                    <p className="text-2xl font-bold text-green-600">{country.visaInfo.successRate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-amber-600" />
            Scholarships Available
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {country.scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                  <CardDescription className="text-amber-700 font-semibold">
                    {scholarship.amount}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {country.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {country.name} Study Abroad Consultants in Vadodara
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Looking for the <strong>best {country.name} study visa consultants in Vadodara</strong>? 
              Our expert team at Study Abroad Vadodara has helped thousands of students from Gujarat 
              secure admissions and student visas for {country.name}. We specialize in 
              <strong> {country.name} student visa applications</strong>, university admissions, 
              scholarship guidance, and complete documentation support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you're interested in pursuing <strong>MS in {country.name}</strong>, 
              <strong> MBA in {country.name}</strong>, undergraduate studies, or PhD programs, 
              our experienced <strong>overseas education consultants</strong> provide personalized 
              guidance tailored to your academic profile and career goals.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
              <h3 className="text-lg font-bold mb-4">Why Choose Us for {country.name} Education?</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                <li>✓ {country.visaInfo.successRate} visa success rate</li>
                <li>✓ Free university shortlisting</li>
                <li>✓ Complete visa documentation</li>
                <li>✓ IELTS/PTE coaching available</li>
                <li>✓ Education loan assistance</li>
                <li>✓ Scholarship applications</li>
                <li>✓ SOP & LOR guidance</li>
                <li>✓ Pre-departure orientation</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-sm">
              Visit our office at RC Dutt Road, Alkapuri, Vadodara or call +91 6353583148 for a 
              <strong> free {country.name} study abroad consultation</strong>. We serve students from 
              Alkapuri, Fatehgunj, Manjalpur, Gotri, Sama, Akota, Karelibaug, and all areas of Vadodara 
              and Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Start Your {country.name} Journey</h2>
              <p className="text-blue-100">{country.ctaText}</p>
            </div>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Full Name *</Label>
                      <Input 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/90 text-gray-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Phone Number *</Label>
                      <Input 
                        required 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/90 text-gray-900"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Email Address *</Label>
                    <Input 
                      required 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/90 text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Highest Education</Label>
                      <Select value={formData.education} onValueChange={(v) => setFormData({...formData, education: v})}>
                        <SelectTrigger className="bg-white/90 text-gray-900">
                          <SelectValue placeholder="Select education" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th">12th / High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">IELTS/PTE Score (if any)</Label>
                      <Input 
                        value={formData.englishScore}
                        onChange={(e) => setFormData({...formData, englishScore: e.target.value})}
                        className="bg-white/90 text-gray-900"
                        placeholder="e.g., IELTS 6.5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Preferred Intake</Label>
                      <Select value={formData.intake} onValueChange={(v) => setFormData({...formData, intake: v})}>
                        <SelectTrigger className="bg-white/90 text-gray-900">
                          <SelectValue placeholder="Select intake" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jan-2025">January 2025</SelectItem>
                          <SelectItem value="may-2025">May 2025</SelectItem>
                          <SelectItem value="sep-2025">September 2025</SelectItem>
                          <SelectItem value="jan-2026">January 2026</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Interested Course</Label>
                      <Input 
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        className="bg-white/90 text-gray-900"
                        placeholder="e.g., MS in Computer Science"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData({...formData, budget: v})}>
                      <SelectTrigger className="bg-white/90 text-gray-900">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-15">Under ₹15 Lakhs</SelectItem>
                        <SelectItem value="15-25">₹15 - 25 Lakhs</SelectItem>
                        <SelectItem value="25-40">₹25 - 40 Lakhs</SelectItem>
                        <SelectItem value="40-60">₹40 - 60 Lakhs</SelectItem>
                        <SelectItem value="above-60">Above ₹60 Lakhs</SelectItem>
                        <SelectItem value="scholarship">Need Scholarship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white">Any Questions or Concerns?</Label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/90 text-gray-900"
                      placeholder="Tell us about your goals or any specific questions..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-white text-blue-700 hover:bg-blue-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Assessment"}
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href={`tel:+${phoneNumber}`} className="flex items-center gap-2 hover:text-blue-400">
              <Phone className="h-5 w-5" />
              +91 6353583148
            </a>
            <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a href="mailto:edu@studyabroadvadodara.in" className="flex items-center gap-2 hover:text-blue-400">
              <Mail className="h-5 w-5" />
              edu@studyabroadvadodara.in
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              201 Shree Complex, RC Dutt Road, Alkapuri, Vadodara
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span>Study Abroad Vadodara</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/#destinations" className="hover:text-white">Countries</Link>
              <Link href="/#services" className="hover:text-white">Services</Link>
              <Link href="/#contact" className="hover:text-white">Contact</Link>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Study Abroad Vadodara. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

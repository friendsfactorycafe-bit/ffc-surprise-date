"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

interface StudyAbroadFormProps {
  area?: string;
  keyword?: string;
}

export function StudyAbroadForm({ area, keyword }: StudyAbroadFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    preferredCountry: "",
    studyLevel: "",
    intake: "",
    englishTest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = ["Canada", "UK", "USA", "Australia", "Germany", "Other"];
  const studyLevels = ["Diploma", "Bachelor's", "Master's", "PhD"];
  const intakes = ["Jan", "May", "Sep"];
  const englishTests = ["IELTS", "PTE", "Not Given"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `🎓 *STUDY ABROAD ENQUIRY*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    message += `🌍 *Preferred Country:* ${formData.preferredCountry}\n`;
    message += `📚 *Study Level:* ${formData.studyLevel}\n`;
    message += `📅 *Intake:* ${formData.intake}\n`;
    message += `🗣️ *English Test:* ${formData.englishTest}\n`;
    if (area) message += `📍 *Area:* ${area}\n`;
    if (keyword) message += `🔍 *Interest:* ${keyword}\n`;
    message += `\n_From: studyabroadvadodara.in_`;

    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  const whyChooseUs = [
    "5000+ Successful Placements",
    "Free Counseling & Profile Evaluation",
    "98%+ Visa Success Rate",
    "IELTS/PTE Coaching Available",
    "Education Loan Assistance",
    "SOP & LOR Writing Support",
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="enquiry-form">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">
              Get Free Career Counseling
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your gateway to world-class international education
              {area && ` - serving students from ${area}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter student name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Country <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {countries.map((country) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredCountry: country })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.preferredCountry === country
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400"
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Study Level
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {studyLevels.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, studyLevel: level })}
                        className={`p-3 rounded-lg border text-xs font-medium transition-all ${
                          formData.studyLevel === level
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Intake
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {intakes.map((intake) => (
                      <button
                        key={intake}
                        type="button"
                        onClick={() => setFormData({ ...formData, intake: intake })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.intake === intake
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400"
                        }`}
                      >
                        {intake}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    English Test Status
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {englishTests.map((test) => (
                      <button
                        key={test}
                        type="button"
                        onClick={() => setFormData({ ...formData, englishTest: test })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.englishTest === test
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400"
                        }`}
                      >
                        {test}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Counseling
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us Now</h3>
                    <p className="text-white/80 text-sm mb-2">Mon-Sat: 10 AM - 7 PM</p>
                    <a href="tel:+916353583148" className="text-lg font-semibold hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp Us</h3>
                    <p className="text-white/80 text-sm mb-2">Quick Response Guaranteed</p>
                    <a
                      href="https://wa.me/916353583148?text=Hi, I want to study abroad"
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

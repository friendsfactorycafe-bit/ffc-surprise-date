// Keywords configuration for Study Abroad Consultants - SEO URL slugs

export interface KeywordConfig {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
}

// Study Abroad Keywords
export const studyAbroadKeywords: KeywordConfig[] = [
  { slug: "study-abroad-consultants-vadodara", title: "Study Abroad Consultants in Vadodara", h1: "Study Abroad Consultants in Vadodara", metaDescription: "Best study abroad consultants in Vadodara. Expert guidance for USA, UK, Canada, Australia." },
  { slug: "best-study-abroad-consultant-vadodara", title: "Best Study Abroad Consultant in Vadodara", h1: "Top Study Abroad Consultants in Vadodara", metaDescription: "Vadodara's best study abroad consultant. 5000+ successful placements with 98% visa success rate." },
  { slug: "canada-study-visa-vadodara", title: "Canada Study Visa in Vadodara", h1: "Canada Study Visa Consultants in Vadodara", metaDescription: "Canada study visa consultants in Vadodara. SDS visa, student direct stream & regular visa assistance." },
  { slug: "uk-study-abroad-consultants-vadodara", title: "UK Study Abroad Consultants in Vadodara", h1: "UK Education Consultants in Vadodara", metaDescription: "UK study abroad consultants in Vadodara. Admissions in top UK universities with scholarship guidance." },
  { slug: "australia-education-consultants-vadodara", title: "Australia Education Consultants in Vadodara", h1: "Australia Study Consultants in Vadodara", metaDescription: "Australia education consultants in Vadodara. Student visa, course selection & university admissions." },
  { slug: "ielts-coaching-vadodara", title: "IELTS Coaching in Vadodara", h1: "IELTS Coaching Classes in Vadodara", metaDescription: "Best IELTS coaching in Vadodara. Expert trainers, practice tests & guaranteed band improvement." },
  { slug: "student-visa-consultants-vadodara", title: "Student Visa Consultants in Vadodara", h1: "Student Visa Consultants in Vadodara", metaDescription: "Student visa consultants in Vadodara. Visa filing, documentation & interview preparation." },
  { slug: "free-study-abroad-counseling-vadodara", title: "Free Study Abroad Counseling in Vadodara", h1: "Free Study Abroad Counseling in Vadodara", metaDescription: "Get free study abroad counseling in Vadodara. No fees for consultation & university shortlisting." },
  { slug: "usa-study-abroad-vadodara", title: "USA Study Abroad in Vadodara", h1: "USA Education Consultants in Vadodara", metaDescription: "USA study abroad consultants in Vadodara. F1 visa, university admissions & scholarship assistance." },
  { slug: "overseas-education-consultants-vadodara", title: "Overseas Education Consultants in Vadodara", h1: "Overseas Education Consultants in Vadodara", metaDescription: "Overseas education consultants in Vadodara. Study in USA, UK, Canada, Australia, Germany & more." },
  { slug: "study-abroad-near-gotri-vadodara", title: "Study Abroad Near Gotri Vadodara", h1: "Study Abroad Office in Gotri, Vadodara", metaDescription: "Study abroad consultants near Gotri Vadodara. Convenient location with expert counselors." },
  { slug: "scholarship-abroad-consultants-vadodara", title: "Scholarship Abroad Consultants in Vadodara", h1: "Scholarship Guidance for Study Abroad in Vadodara", metaDescription: "Study abroad scholarship guidance in Vadodara. Find scholarships for international education." },
  { slug: "pte-coaching-for-study-abroad-vadodara", title: "PTE Coaching for Study Abroad in Vadodara", h1: "PTE Coaching in Vadodara", metaDescription: "PTE Academic coaching in Vadodara. Quick score improvement for study abroad requirements." },
  { slug: "alkapuri-study-abroad-agency", title: "Study Abroad Agency in Alkapuri", h1: "Study Abroad Consultants in Alkapuri, Vadodara", metaDescription: "Study abroad agency in Alkapuri Vadodara. Premium counseling services for international education." },
  { slug: "germany-study-visa-vadodara", title: "Germany Study Visa in Vadodara", h1: "Germany Study Visa Consultants in Vadodara", metaDescription: "Germany study visa consultants in Vadodara. Free education in Germany, blocked account & visa help." },
  { slug: "sop-writing-for-study-visa-vadodara", title: "SOP Writing for Study Visa in Vadodara", h1: "SOP Writing Services in Vadodara", metaDescription: "Professional SOP writing in Vadodara. Statement of purpose for study visa applications." },
  { slug: "education-loan-study-abroad-vadodara", title: "Education Loan for Study Abroad in Vadodara", h1: "Study Abroad Education Loan in Vadodara", metaDescription: "Education loan for study abroad in Vadodara. Bank loans, collateral-free loans & NBFC options." },
  { slug: "post-study-work-visa-consultants-vadodara", title: "Post Study Work Visa Consultants in Vadodara", h1: "Post Study Work Visa Guidance in Vadodara", metaDescription: "Post study work visa guidance in Vadodara. PSW visa for UK, PGWP for Canada & OPT for USA." },
  { slug: "ireland-study-abroad-vadodara", title: "Ireland Study Abroad in Vadodara", h1: "Ireland Education Consultants in Vadodara", metaDescription: "Ireland study abroad consultants in Vadodara. Study in Ireland with 2-year post study work permit." },
  { slug: "study-abroad-for-engineering-vadodara", title: "Study Abroad for Engineering in Vadodara", h1: "Engineering Study Abroad from Vadodara", metaDescription: "Engineering study abroad consultants in Vadodara. MS in USA, Germany, Canada & Australia." },
];

// Master keyword map by business slug
export const businessKeywords: Record<string, KeywordConfig[]> = {
  "study-abroad": studyAbroadKeywords,
};

// Get keyword config by slug
export function getKeywordBySlug(businessSlug: string, keywordSlug: string): KeywordConfig | undefined {
  const keywords = businessKeywords[businessSlug];
  if (!keywords) return undefined;
  return keywords.find(k => k.slug === keywordSlug);
}

// Get all keyword slugs for a business
export function getKeywordSlugs(businessSlug: string): string[] {
  const keywords = businessKeywords[businessSlug];
  if (!keywords) return [];
  return keywords.map(k => k.slug);
}

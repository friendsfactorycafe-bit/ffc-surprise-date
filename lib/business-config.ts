// Business Configuration for Study Abroad Consultants

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// Common areas - 21 areas total (Vadodara main + 20 localities)
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
];

export const businesses: BusinessConfig[] = [
  {
    id: "study-abroad",
    name: "Study Abroad Consultants",
    slug: "study-abroad",
    tagline: "Your Gateway to International Education",
    description: "Expert study abroad consultancy in Vadodara",
    colors: {
      primary: "#059669", // Emerald Green
      secondary: "#6EE7B7", // Light Green
      accent: "#065F46", // Dark Green
      gradient: "from-emerald-600 to-teal-600",
    },
    icon: "🎓",
    services: [
      "University Selection",
      "Admission Guidance",
      "Visa Assistance",
      "IELTS Coaching",
      "GRE/GMAT Preparation",
      "Scholarship Guidance",
      "SOP Writing",
      "Education Loan Help",
      "Pre-Departure Briefing",
      "Career Counseling",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    vadodara: "Vadodara",
    alkapuri: "Alkapuri",
    akota: "Akota",
    "old-padra-road": "Old Padra Road",
    gotri: "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    manjalpur: "Manjalpur",
    sama: "Sama",
    karelibaug: "Karelibaug",
    "waghodia-road": "Waghodia Road",
    chhani: "Chhani",
    harni: "Harni",
    kalali: "Kalali",
    atladara: "Atladara",
    "vadsar-road": "Vadsar Road",
    tarsali: "Tarsali",
    sayajigunj: "Sayajigunj",
    subhanpura: "Subhanpura",
    tandalja: "Tandalja",
    makarpura: "Makarpura",
    fatehgunj: "Fatehgunj",
  };
  return areaNames[area] || area;
};

export const allAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
];

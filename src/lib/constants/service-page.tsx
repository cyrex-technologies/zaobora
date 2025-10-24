// src/lib/constants/service-page.tsx
import { SERVICES_CONTENT } from "./service-list";
import { ServiceCardType } from "@/types/service";

interface DetailedService extends ServiceCardType {
  fullDescription: string;
  keyBenefits: string[];
  detailedServices: { title: string; description: string; icon: string }[];
  processSteps: { step: number; title: string; description: string }[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
    location: string;
    duration: string;
  };
  pricing?: {
    title: string;
    packages: {
      name: string;
      price: string;
      features: string[];
    }[];
  };
  categoryGroup: "farmers" | "agrodealers" | "investors" | "partners";
}

export const SERVICE_PAGES: Record<string, DetailedService> = {
  "farmer-advisory": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "farmer-advisory")!,
    categoryGroup: "farmers",
    fullDescription: `We provide farmers with practical, tailored advice and hands-on training to improve productivity, profitability, and resilience...`,
    keyBenefits: [
      "Increased crop yields",
      "Enhanced financial planning",
      "Reduced production costs",
      "Improved resilience to climate change",
      "Access to latest research",
    ],
    detailedServices: [
      { title: "Tailored Agronomic Advice", description: "Guidance on seeds, fertilizers, and crop management.", icon: "FaSeedling" },
      { title: "Farm Financial Management", description: "Helping farmers plan, budget, and manage resources effectively.", icon: "FaCreditCard" },
      { title: "Capacity-Building Workshops", description: "Training sessions, demonstrations, and farmer field days to strengthen practical skills.", icon: "FaUserGraduate" },
      { title: "Climate-Smart Practices", description: "On-farm demonstrations promoting sustainable and resilient methods.", icon: "FaLeaf" },
    ],
    processSteps: [
      { step: 1, title: "Farm Assessment", description: "Evaluate farm practices, soil, and challenges." },
      { step: 2, title: "Customized Plan", description: "Develop a tailored advisory roadmap." },
      { step: 3, title: "Training Implementation", description: "Hands-on workshops, field demos, consultations." },
      { step: 4, title: "Ongoing Support", description: "Continuous monitoring and improvement." },
    ],
  },

  "agro-inputs": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "agro-inputs")!,
    categoryGroup: "farmers",
    fullDescription: `We provide farmers with high-quality agricultural inputs that boost productivity and ensure sustainable farming practices.`,
    keyBenefits: ["Improved crop yields", "Resilient seeds and fertilizers", "Timely supply chains", "Better soil management"],
    detailedServices: [
      { title: "Organic & Inorganic Fertilizers", description: "Supply of climate-smart fertilizers.", icon: "FaFlask" },
      { title: "Climate-Resilient Seeds", description: "High-quality seeds for diverse conditions.", icon: "FaSeedling" },
      { title: "Crop Protection", description: "Safe products for pest & disease control.", icon: "FaShield" },
    ],
    processSteps: [
      { step: 1, title: "Needs Assessment", description: "Identify input needs per region." },
      { step: 2, title: "Input Delivery", description: "Ensure timely and affordable supply." },
      { step: 3, title: "Farmer Training", description: "Guide farmers on correct usage." },
    ],
  },

  "credit-loans": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "credit-loans")!,
    categoryGroup: "farmers",
    fullDescription: `We empower farmers to increase productivity by improving access to credit and agro-inputs.`,
    keyBenefits: ["Improved access to credit", "Group-based lending security", "Financial literacy", "Reduced input barriers"],
    detailedServices: [
      { title: "Group Input Loans", description: "Provide fertilizers and seeds as credit to farmer groups.", icon: "FaCreditCard" },
      { title: "Financial Partnerships", description: "Collaborate with banks and MFIs to expand farmers’ access to affordable credit.", icon: "FaHandshake" },
      { title: "Farmer Profiling", description: "Use our database to strengthen bankability.", icon: "FaChartBar" },
      { title: "Repayment Support", description: "Build financial literacy and repayment discipline.", icon: "FaCheck" },
    ],
    processSteps: [
      { step: 1, title: "Group Registration", description: "Organize groups into cooperatives." },
      { step: 2, title: "Loan Processing", description: "Facilitate access to loans in inputs." },
      { step: 3, title: "Monitoring", description: "Support repayment and tracking." },
    ],
  },

  "soil-health": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "soil-health")!,
    categoryGroup: "farmers",
    fullDescription: `We help farmers make informed decisions by providing accurate soil testing and fertility assessments.`,
    keyBenefits: ["Better soil fertility", "Informed fertilizer use", "Sustainable land management"],
    detailedServices: [
      { title: "Soil Testing", description: "Scientific analysis of soil nutrients.", icon: "FaFlask" },
      { title: "Fertility Mapping", description: "Identify nutrient deficiencies.", icon: "FaMap" },
      { title: "Recommendations", description: "Tailored advice to restore soil fertility.", icon: "FaSeedling" },
    ],
    processSteps: [
      { step: 1, title: "Sample Collection", description: "Collect soil samples from farms." },
      { step: 2, title: "Lab Analysis", description: "Run fertility tests." },
      { step: 3, title: "Action Plan", description: "Share soil management plan." },
    ],
  },

  "investment-management": {
    ...SERVICES_CONTENT.cards.find(s => s.slug === "investment-management")!,
    categoryGroup: "investors",
    fullDescription: `We support investors in developing agricultural projects in the Southern Highlands of Tanzania.`,
    keyBenefits: ["Secure land access", "Efficient farm operations", "High ROI"],
    detailedServices: [
      { title: "Land Access & Legal Support", description: "Ensure legal compliance and secure land access.", icon: "FaGavel" },
      { title: "Farm Management", description: "Day-to-day management and optimization.", icon: "FaTractor" },
      { title: "Onsite Consultancy", description: "Agronomic and infrastructure guidance.", icon: "FaHandshake" },
      { title: "Regional Expertise", description: "Southern Highlands–specific insights.", icon: "FaGlobeAfrica" },
    ],
    processSteps: [
      { step: 1, title: "Planning", description: "Align investment goals with opportunities." },
      { step: 2, title: "Setup", description: "Prepare land and infrastructure." },
      { step: 3, title: "Management", description: "Ensure productivity and compliance." },
    ],
  },
};

// src/lib/constants/service-list.tsx
import { ServiceSectionType,  ServiceCategory } from "../../types/service";
// import { FaUserGraduate, FaSeedling, FaCreditCard, FaFlask, FaChartBar, FaRadio, FaHandshake } from 'react-icons/fa6';
// import { FaTint } from 'react-icons/fa';

export const SERVICES_CONTENT: ServiceSectionType = {
  sectionId: "services",
  subtitle: "Our Services",
  title: "Integrated Agricultural Solutions",
  description:
    "We provide comprehensive agricultural solutions that support farmers, agro-dealers, investors, and partners across the value chain.",
  backgroundImage: "/img/service/tree-background.png",
  cards: [
    {
      id: "farmer-advisory",
      slug: "farmer-advisory",
      icon: "FaUserGraduate",
      title: "Farmer Advisory & Training",
      shortDescription: "Empowering farmers with knowledge and skills.",
      description:
        "Tailored training and advice for farmers to improve productivity, profitability, and resilience.",
      href: `/services/farmers/farmer-advisory`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "agro-inputs",
      slug: "agro-inputs",
      icon: "FaSeedling",
      title: "Agro-Inputs Supply",
      shortDescription: "Reliable inputs for higher yields.",
      description:
        "High-quality fertilizers, seeds, and crop protection products for sustainable farming.",
      href: `/services/farmers/agro-inputs`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "credit-loans",
      slug: "credit-loans",
      icon: "FaCreditCard",
      title: "Access to Credit & Agro-Input Loans",
      shortDescription: "Affordable input financing for farmer groups.",
      description:
        "Input loans and financial literacy programs for organized farmers and cooperatives.",
      href: `/services/farmers/credit-loans`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "soil-health",
      slug: "soil-health",
      icon: "FaFlask",
      title: "Soil Health & Measurement",
      shortDescription: "Know your soil, grow better.",
      description:
        "Accurate soil testing and fertility assessments to optimize land productivity.",
      href: `/services/farmers/soil-health`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "irrigation-systems",
      slug: "irrigation-systems",
      icon: "FaTint",
      title: "Irrigation Systems",
      shortDescription: "Smart water management solutions.",
      description:
        "Efficient irrigation systems that improve yields while conserving water.",
      href: `/services/farmers/irrigation-systems`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "research-data",
      slug: "research-data",
      icon: "FaChartBar",
      title: "Research & Farmer Data Systems",
      shortDescription: "Turning data into actionable insights.",
      description:
        "Farmer profiling, data collection, and analytics for smarter agriculture.",
      href: `/services/partners/research-data`,
      category: "partners" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "information-access",
      slug: "information-access",
      icon: "FaRadio",
      title: "Access to Information & Linkages",
      shortDescription: "Bringing knowledge closer to farmers.",
      description:
        "Information services via radio, mobile, and local partnerships.",
      href: `/services/partners/information-access`,
      category: "partners" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "investment-management",
      slug: "investment-management",
      icon: "FaHandshake",
      title: "Agricultural Investment & Farm Management",
      shortDescription: "Supporting investors to succeed in agriculture.",
      description:
        "Full-cycle support for investors: land access, consultancy, and farm management.",
      href: `/services/investors/investment-management`,
      category: "investors" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
  ],
};

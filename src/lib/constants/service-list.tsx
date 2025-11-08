// src/lib/constants/service-list.tsx
import { ServiceSectionType, ServiceCategory } from "../../types/service";

export const SERVICES_CONTENT: ServiceSectionType = {
  sectionId: "services",
  subtitle: "Our Services",
  title: "Integrated Agricultural Solutions",
  description:
    "We support farmers, agro-dealers, investors, and development partners with practical, scalable solutions that increase productivity, strengthen value chains, and create sustainable growth across the agricultural sector.",
  backgroundImage: "/img/service/tree-background.png", // keep your existing asset
  cards: [
    {
      id: "farmer-advisory",
      slug: "farmer-advisory",
      icon: "FaUserGraduate",
      title: "Farmer Advisory & Field Training",
      shortDescription:
        "Hands-on agronomy coaching and seasonal field training to increase yields and improve farm profitability.",
      description:
        "Practical, plot-level training and advisory that helps farmers build productive, resilient, and market-ready farms.",
      href: `/services/farmers/farmer-advisory`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "agro-inputs",
      slug: "agro-inputs",
      icon: "FaSeedling",
      title: "Agro-Inputs Supply",
      shortDescription:
        "High-quality fertilizers, seeds, and crop-protection products delivered reliably and affordably.",
      description:
        "Ensure timely access to certified inputs and training on correct usage for improved productivity.",
      href: `/services/farmers/agro-inputs`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "credit-loans",
      slug: "credit-loans",
      icon: "FaCreditCard",
      title: "Access to Credit & Input Loans",
      shortDescription:
        "Group-based input financing models that support timely planting and reduce financial barriers.",
      description:
        "Strengthening farmer groups to access affordable input loans tied to harvest repayment cycles.",
      href: `/services/farmers/credit-loans`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "soil-health",
      slug: "soil-health",
      icon: "FaFlask",
      title: "Soil Health & Fertility Analysis",
      shortDescription:
        "Soil testing and fertility mapping for smarter fertilizer use and sustainable land productivity.",
      description:
        "We help farmers make informed nutrition decisions by analyzing soil and creating targeted fertility plans.",
      href: `/services/farmers/soil-health`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "irrigation-systems",
      slug: "irrigation-systems",
      icon: "FaTint",
      title: "Irrigation Solutions",
      shortDescription:
        "Water-efficient irrigation systems that stabilize yields and reduce climate and drought risk.",
      description:
        "Design, installation, and maintenance of drip and sprinkler systems optimized for different crops and budgets.",
      href: `/services/farmers/irrigation-systems`,
      category: "farmers" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "research-data",
      slug: "research-data",
      icon: "FaChartBar",
      title: "Research & Farmer Data Systems",
      shortDescription:
        "Collecting, analyzing, and visualizing field data to drive smarter agricultural planning.",
      description:
        "We help organizations and partners gain real-time visibility into farming performance and adoption patterns.",
      href: `/services/partners/research-data`,
      category: "partners" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "information-access",
      slug: "information-access",
      icon: "FaRadio",
      title: "Access to Information & Linkages",
      shortDescription:
        "Localized mobile, radio, and community information services to improve farmer decision-making.",
      description:
        "Bridging the last-mile knowledge gap by connecting farmers with practical, timely agricultural information.",
      href: `/services/partners/information-access`,
      category: "partners" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },

    {
      id: "investment-management",
      slug: "investment-management",
      icon: "FaHandshake",
      title: "Agricultural Investment & Farm Management",
      shortDescription:
        "End-to-end support for establishing and managing scalable, commercially viable agricultural ventures.",
      description:
        "We help investors de-risk and grow agricultural enterprises through professional planning, compliance, and field management.",
      href: `/services/investors/investment-management`,
      category: "investors" as ServiceCategory,
      bgColor: "from-green-500 to-emerald-500",
    },
  ],
};

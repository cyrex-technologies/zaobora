// src/lib/constants/service-categories.ts
export const SERVICE_CATEGORIES = {
  farmers: {
    id: "farmers",
    title: "For Farmers",
    tagline: "Grow Smarter, Earn Better",
    hero: {
      headline:
        "Empowering farmers with tools, knowledge, and opportunities to thrive.",
      image: "/img/categories/farmers-hero.jpg",
      cta: [
        { label: "Explore Services", href: "/services/farmers" },
        { label: "Join Us", href: "/contact" },
      ],
    },
    sections: [
      {
        id: "training",
        title: "Training & Advisory",
        description:
          "Learn modern, sustainable farming techniques that increase productivity and profit.",
        icon: "FaUserGraduate",
        link: "/services/farmers/farmer-advisory",
      },
      {
        id: "inputs",
        title: "Agro Inputs",
        description:
          "Get access to high-quality seeds, fertilizers, and crop protection products.",
        icon: "FaSeedling",
        link: "/services/farmers/agro-inputs",
      },
      {
        id: "soil",
        title: "Soil Health",
        description:
          "Understand your soil and boost fertility with tailored testing and improvement services.",
        icon: "FaFlask",
        link: "/services/farmers/soil-health",
      },
      {
        id: "finance",
        title: "Finance Access",
        description:
          "Affordable credit and input loans designed for organized farmer groups.",
        icon: "FaCreditCard",
        link: "/services/farmers/credit-loans",
      },
    ],
  },

  agrodealers: {
    id: "agrodealers",
    title: "For Agri-dealers",
    tagline: "Empowering local agribusinesses",
    hero: {
      headline:
        "Partnering with agri-dealers to build stronger local supply chains.",
      image: "/img/categories/agrodealers-hero.jpg",
      cta: [
        { label: "Join Our Network", href: "/contact" },
        { label: "Explore Services", href: "/services/agrodealers" },
      ],
    },
    sections: [
      {
        id: "supply",
        title: "Reliable Input Supply",
        description:
          "Access consistent, quality agro-inputs and become a certified supplier.",
        icon: "FaSeedling",
        link: "/services/agrodealers/agro-inputs",
      },
      {
        id: "training",
        title: "Dealer Training",
        description:
          "Enhance your capacity through our agro-dealer education and certification programs.",
        icon: "FaUserGraduate",
        link: "/services/agrodealers/information-access",
      },
      {
        id: "finance",
        title: "Partnership Finance",
        description:
          "Benefit from financing solutions for bulk input acquisition and retail expansion.",
        icon: "FaCreditCard",
        link: "/services/agrodealers/credit-loans",
      },
    ],
  },

  partners: {
    id: "partners",
    title: "For Partners",
    tagline: "Collaborate for Impact",
    hero: {
      headline:
        "We collaborate with organizations and institutions to accelerate agricultural transformation.",
      image: "/img/categories/partners-hero.jpg",
      cta: [
        { label: "Become a Partner", href: "/get-involved/partnership" },
        { label: "Explore Services", href: "/services/partners" },
      ],
    },
    sections: [
      {
        id: "information",
        title: "Information & Communication",
        description:
          "Work with us to expand farmer outreach via radio, mobile, and digital platforms.",
        icon: "FaRadio",
        link: "/services/partners/information-access",
      },
      {
        id: "data",
        title: "Research & Data Systems",
        description:
          "Collaborate on data-driven projects and leverage our analytics for insights.",
        icon: "FaChartBar",
        link: "/services/partners/research-data",
      },
      {
        id: "training",
        title: "Capacity Building",
        description:
          "Join our training programs for field officers, agronomists, and farmer groups.",
        icon: "FaUserGraduate",
        link: "/services/partners/farmer-advisory",
      },
    ],
  },

  investors: {
    id: "investors",
    title: "For Investors",
    tagline: "Invest in Sustainable Agriculture",
    hero: {
      headline:
        "Comprehensive support for investors developing agri-projects in Tanzania.",
      image: "/img/categories/investors-hero.jpg",
      cta: [
        { label: "Start Investing", href: "/contact" },
        { label: "View Opportunities", href: "/services/investors" },
      ],
    },
    sections: [
      {
        id: "management",
        title: "Farm Management",
        description:
          "Access professional farm management and operations services.",
        icon: "FaHandshake",
        link: "/services/investors/investment-management",
      },
      {
        id: "land",
        title: "Legal & Land Access",
        description:
          "Guidance on legal compliance, land acquisition, and licensing.",
        icon: "FaChartBar",
        link: "/services/investors/investment-management",
      },
      {
        id: "consultancy",
        title: "On-site Consultancy",
        description:
          "Receive expert advice on project setup, resource planning, and operations.",
        icon: "FaFlask",
        link: "/services/investors/investment-management",
      },
    ],
  },
};

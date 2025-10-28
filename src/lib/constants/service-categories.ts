// src/lib/constants/service-categories.ts
import { ServiceCategory } from '@/types/service';

export interface CategoryHero {
  headline: string;
  image: string;
  cta: Array<{ label: string; href: string }>;
}

export interface CategorySection {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  content?: string;
  stats?: Array<{ value: string; label: string }>;
  reasons?: Array<{ title: string; description: string }>;
  benefits?: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  cta?: { label: string; href: string };
}

export interface CategoryInfo {
  id: ServiceCategory;
  title: string;
  tagline: string;
  hero: CategoryHero;
  sections: CategorySection[];
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, CategoryInfo> = {
  farmers: {
    id: "farmers",
    title: "For Farmers",
    tagline: "Grow Smarter, Earn Better",
    hero: {
      headline:
        "Empowering farmers with tools, knowledge, and opportunities to thrive.",
      image: "/img/hero/zaoborafarmerempowermentcoffee.webp",
      cta: [
        { label: "Explore Services", href: "/services/farmers" },
        { label: "Join Us", href: "/contact" },
      ],
    },
    sections: [
      {
        id: "learn",
        title: "Learn & Grow with Us",
        description: "Expert training and guidance for better farming",
        icon: "🎓",
        link: "/services/farmers/training",
        content: "Our comprehensive training programs cover everything from soil management to market access. Learn from experts and experienced farmers in your community.",
        cta: {
          label: "Join Training Program",
          href: "/services/farmers/training"
        }
      },
      {
        id: "stories",
        title: "Success Stories",
        description: "Hear from farmers who've grown with us",
        icon: "📚",
        link: "/stories",
        testimonial: {
          quote: "Since joining Zao Bora's training program, my maize yields have doubled. Their practical approach and ongoing support have transformed my farm.",
          author: "John Mbwambo",
          location: "Mbeya Region"
        },
        cta: {
          label: "Read More Stories",
          href: "/stories"
        }
      },
      {
        id: "network",
        title: "Join Our Farming Network",
        description: "Connect, learn, and grow with fellow farmers",
        icon: "👥",
        link: "/network",
        benefits: [
          "Access to expert agricultural advice",
          "Regular training and workshops",
          "Market linkage opportunities"
        ],
        cta: {
          label: "Join the Network",
          href: "/network"
        }
      },
      {
        id: "ask",
        title: "Ask an Expert",
        description: "Get quick answers to your farming questions",
        icon: "💬",
        link: "/ask",
        content: "Have a pressing farming question? Our agricultural experts are ready to help you via WhatsApp.",
        cta: {
          label: "Chat with an Expert",
          href: "https://wa.me/255752563361"
        }
      }
    ],
  },

  agrodealers: {
    id: "agrodealers",
    title: "For Agri-dealers",
    tagline: "Empowering local agribusinesses",
    hero: {
      headline:
        "Partnering with agri-dealers to build stronger local supply chains.",
      image: "/img/hero/zaoboraagriinpunts.webp",
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
      image: "/img/hero/zaoboracallforpartners.webp",
      cta: [
        { label: "Become a Partner", href: "/get-involved/partnership" },
        { label: "Explore Services", href: "/services/partners" },
      ],
    },
    sections: [
      {
        id: "impact",
        title: "Our Impact",
        description: "Making a difference through collaboration",
        icon: "FaChartLine",
        link: "/impact",
        stats: [
          { value: "10,000+", label: "Farmers Reached" },
          { value: "15+", label: "Active Projects" },
          { value: "5+", label: "Districts Covered" },
          { value: "$2M+", label: "Project Value" }
        ],
        cta: { label: "View Impact Report", href: "/impact" }
      },
      {
        id: "why-partner",
        title: "Why Partner With Us",
        description: "Building successful collaborations",
        icon: "FaHandshake",
        link: "/partnership",
        reasons: [
          {
            title: "Data-Driven Approach",
            description: "We use analytics and research to measure and improve impact"
          },
          {
            title: "Local Expertise",
            description: "Deep understanding of local agricultural systems and communities"
          },
          {
            title: "Proven Track Record",
            description: "Successfully executed projects with multiple partners"
          }
        ],
        cta: { label: "Become a Partner", href: "/get-involved/partnership" }
      },
      {
        id: "contact",
        title: "Get in Touch",
        description: "Start a conversation about partnership opportunities",
        icon: "FaEnvelope",
        link: "/contact",
        cta: { label: "Submit Partnership Inquiry", href: "#" }
      }
    ],
  },

  investors: {
    id: "investors",
    title: "For Investors",
    tagline: "Invest in Sustainable Agriculture",
    hero: {
      headline:
        "Comprehensive support for investors developing agri-projects in Tanzania.",
      image: "/img/hero/zaoboracallforinvestors.webp",
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

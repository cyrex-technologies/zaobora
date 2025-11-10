// src/lib/constants/service-categories.ts
import { ServiceCategory } from "@/types/service";

export interface CTA {
  label: string;
  href?: string;
  type?: "link" | "modal";
  action?: "link" | "modal" | "external";
}

export interface CategoryHero {
  headline: string;
  image: string;
  cta: CTA[];
}

export interface CategorySection {
  id: string;
  title: string;
  image?: string;
  description: string;
  icon: string; // React Icon string key
  link: string;
  content?: string;
  stats?: Array<{ value: string; label: string }>;
  reasons?: Array<{ title: string; description: string }>;
  benefits?: string[];
  testimonial?: { quote: string; author: string; location: string };
  cta?: CTA;
  fullDescription?: string;
  features?: Array<{ title: string; description: string }>;
  processSteps?: Array<{ step: number; title: string; description: string }>;
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
      "Empowering farmers with practical training, soil knowledge, and access to reliable inputs and better markets.",
    image: "/img/hero/zaoborafarmerempowermentcoffee.webp",
    cta: [
      { label: "Join Farmer Network", type: "modal" },
    ],
  },
  sections: [
    {
      id: "capacity-building",
      title: "Farmer Training & Capacity Building",
      image:"/img/service/zaoboraFarmer_Training&Capacity_Building.webp",
      description: "Hands-on training to improve yields, reduce losses, and build long-term farming skills.",
      icon: "FaUserGraduate",
      link: "/services/farmers/farmer-advisory",
      fullDescription:
        "We provide practical, field-based training where farmers learn by doing. Our approach is built around demonstration plots, farmer field schools, and seasonal crop calendars that guide what to do and when to do it. Learning happens in the community, in the field — not in a classroom.",
      features: [
        { title: "Demonstration Plots", description: "Local farms used as learning sites for training and comparison of improved vs. traditional practices." },
        { title: "Seasonal Crop Calendars", description: "Farm activity plans based on rainfall patterns, pest cycles, and local crop suitability." },
        { title: "Group Coaching", description: "We train farmers in organized groups to strengthen coordination and market bargaining power." },
      ],
      benefits: [
        "Higher yields and improved crop quality",
        "Reduced production losses through timely interventions",
        "Better farming decisions based on local climate patterns"
      ],
      processSteps: [
        { step: 1, title: "Community Enrollment", description: "Mobilize farmer groups and identify local demonstration sites." },
        { step: 2, title: "Seasonal Training Cycles", description: "Conduct hands-on training aligned with planting and harvest timelines." },
        { step: 3, title: "Ongoing Follow-Up", description: "WhatsApp support groups + periodic on-farm advisory visits." }
      ],
      cta: { label: "Join the Training Program", type: "modal" }
    },

    {
      id: "soil-health",
      title: "Soil Health & Crop Fertility Support",
      image:"/img/service/zaoboraSoil_Health&Crop_Fertility_Support.webp",
      description: "Understand your soil to apply fertilizer correctly and increase yields sustainably.",
      icon: "FaFlask",
      link: "/services/farmers/soil-health",
      fullDescription:
        "Many farmers lose money by applying the wrong fertilizer or applying it at the wrong time. We help farmers test, understand, and restore soil health — ensuring the land stays productive year after year.",
      features: [
        { title: "On-Site Soil Sampling", description: "We collect representative soil samples directly from farms." },
        { title: "Laboratory Analysis", description: "Nutrient levels, structure, pH, and organic content analysis." },
        { title: "Fertilizer Recommendation Plan", description: "Customized application plans based on real soil needs — not guesswork." }
      ],
      benefits: [
        "Better fertilizer efficiency = lower costs",
        "Improved soil fertility over time",
        "Higher crop yields and stronger crop health"
      ],
      // cta: { label: "Request Soil Testing", type: "modal" }
    },

    {
      id: "inputs",
      title: "Access to Quality Seeds & Inputs",
      image:"/img/service/zaoborafarmerinputsupply.webp",
      description: "Reliable supply of certified seeds, fertilizers, and crop protection products.",
      icon: "FaSeedling",
      link: "/services/farmers/agro-inputs",
      fullDescription:
        "We work with certified suppliers to make sure farmers can access high-quality inputs at the right time. No counterfeit products. No supply gaps during planting season.",
      benefits: [
        "Certified inputs from trusted suppliers",
        "Fair pricing and community-level distribution",
        "Reduced risk of poor germination and crop failure"
      ],
      // cta: { label: "See Available Inputs", href: "/products" }
    },

    {
      id: "market-linkage",
      title: "Market & Buyer Linkages",
      image:"/img/service/zaoboraMarket&Buyer_Linkages.webp",
      description: "Helping farmers find better buyers and fairer prices.",
      icon: "FaStore",
      link: "/services/farmers/market-access",
      fullDescription:
        "We support farmers in accessing consistent, higher-value markets by aggregating produce, negotiating fair prices, and organizing transport.",
      benefits: [
        "Better prices than selling individually",
        "Reduced exploitation from middlemen",
        "Improved household income stability"
      ],
      cta: { label: "Join Selling Network", type: "modal" }
    }
  ],
},


  agrodealers: {
  id: "agrodealers",
  title: "For Agri-dealers",
  tagline: "Strengthening Local Agricultural Supply Chains",
  hero: {
    headline:
      "We work directly with local agri-dealers to provide reliable input supply, business training, and community-level distribution support.",
    image: "/img/hero/zaoboraagriinpunts.webp",
    cta: [
      { label: "Join Dealer Network", type: "modal" }
    ],
  },

  sections: [
    {
      id: "input-supply",
      title: "Reliable & Certified Agro-Input Supply",
      image:"/img/service/zaoboraReliable&Certified_Agro-Input Supply.webp",
      description: "Stock consistent, genuine inputs backed by trusted manufacturer partnerships.",
      icon: "FaSeedling",
      link: "/services/agrodealers/agro-inputs",

      fullDescription:
        "We support agri-dealers with dependable supply of seeds, fertilizers, crop protection chemicals, and other essential inputs. \
Our sourcing process ensures products are genuine, approved for local use, and delivered in time for peak planting seasons. \
By strengthening the reliability of your shop, farmers gain confidence — and that drives repeat sales.",

      features: [
        { title: "Certified Inputs Only", description: "No counterfeits – every product is traceable to verified suppliers." },
        { title: "Seasonal Stock Planning", description: "We help you plan stock levels based on local planting calendars." },
        { title: "Bulk Purchase Facilitation", description: "Access better rates and reduce logistics costs when ordering through our network." },
      ],

      benefits: [
        "Improved trust with farmers",
        "Higher stock turnover during peak seasons",
        "Reduced risk of slow-moving or expired inventory"
      ],

      cta: { label: "Become a Supply Partner", type: "modal" }
    },

    {
      id: "dealer-training",
      title: "Agri-Dealer Business & Product Training",
      image:"/img/service/zaoboraAgri-Dealer_Business&Product_Training.webp",
      description: "Build customer confidence with product knowledge and advisory skills.",
      icon: "FaUserGraduate",
      link: "/services/agrodealers/information-access",

      fullDescription:
        "Farmers rely on agri-dealers for advice on input selection and usage. \
When agri-dealers are trained, farmers use products correctly, yields improve, and \
farmers return to the shop because they trust the guidance they receive.",

      features: [
        { title: "Product Knowledge Training", description: "Understand fertilizer types, seed varieties, pesticide classification, and safe handling." },
        { title: "Advisory & Customer Service", description: "Support farmers with seasonal recommendations, not just item sales." },
        { title: "Business Management Support", description: "Pricing, stock records, promotion strategies, and shop organization." },
      ],

      benefits: [
        "Stronger customer loyalty from farmers",
        "Improved business professionalism",
        "Higher perceived value in the community"
      ],

      processSteps: [
        { step: 1, title: "Assessment", description: "We evaluate current shop capability and local demand." },
        { step: 2, title: "Training Delivery", description: "Workshops and on-site shop coaching tailored to your area." },
        { step: 3, title: "Ongoing Support", description: "Follow-up visits to reinforce learning and boost performance." }
      ],

      // cta: { label: "Enroll in Dealer Training", type: "modal" }
    },

    {
      id: "dealer-finance",
      title: "Dealer Working Capital & Input Finance Support",
      image:"/img/service/zaoboraDealer_Working_Capital&Input_Finance_Support.webp",
      description:
        "Improve shop capacity with partnership-based financing for bulk purchases.",
      icon: "FaCreditCard",
      link: "/services/agrodealers/credit-loans",

      fullDescription:
        "Many agri-dealers struggle to secure enough stock ahead of planting seasons \
because cash flow becomes tight. We support eligible dealers with structured financing partnerships \
to ensure shelves stay stocked when farmer demand is highest.",

      benefits: [
        "Avoid stock-outs during peak season",
        "Increase sales revenue and customer loyalty",
        "Reduce pressure on day-to-day cash flow"
      ],

      cta: { label: "Request Dealer Finance Evaluation", type: "modal" }
    }
  ],
},


  partners: {
  id: "partners",
  title: "For Partners",
  tagline: "Collaborate for Lasting Agricultural Impact",
  hero: {
    headline:
      "We work with development organizations, private sector partners, financial institutions, and research bodies to strengthen farming systems and expand sustainable agricultural growth.",
    image: "/img/hero/zaoboracallforpartners.webp",
    cta: [
      { label: "Become a Partner", type: "modal" }
    ],
  },

  sections: [
    {
      id: "impact-summary",
      title: "Proven Field Impact at Scale",
      image:"/img/service/zaoboraprovenfieldimpact.webp",
      description:
        "Our programs are grounded in farmer realities and tested through practical, community-based field implementation.",
      icon: "FaChartLine",
      link: "/impact",

      fullDescription:
        "We believe in development that is measurable, farmer-centered, and built on strong local systems. \
Our work focuses on regenerative production, market linkages, community extension capacity building, and sustainable input access models. \
Our projects combine data collection, accountability mechanisms, and farmer-led evaluation to ensure interventions deliver real results — not just reports.",

      stats: [
        { value: "5,000+", label: "Farmers Reached" },
        { value: "15+", label: "Active Field Initiatives" },
        { value: "5+", label: "Districts of Implementation" },
        { value: "$2M+", label: "Program Value Supported" }
      ],

      benefits: [
        "Verified on-the-ground learning and implementation",
        "Established trust networks with farmer groups and cooperatives",
        "Existing extension and monitoring systems ready for scale"
      ],

      cta: { label: "View Full Impact Brief", href: "/impact" }
    },

    {
      id: "collaboration-approach",
      title: "Our Partnership Approach",
      description:
        "We co-design and co-implement programs alongside our partners.",
      icon: "FaHandshake",
      link: "/partnership",

      fullDescription:
        "We understand that each partner has unique program objectives, geographic priorities, and budget structures. \
Instead of one-size-fits-all models, we collaborate through a co-creation process — aligning program methodology, community engagement plans, and success indicators. \
Our teams handle field execution while providing transparent reporting and continuous learning feedback loops.",

      reasons: [
        {
          title: "Co-Design Program Development",
          description:
            "Partners contribute thematic expertise, we contribute field capacity and farmer networks."
        },
        {
          title: "Local Systems Strengthening",
          description:
            "We empower existing farmer organizations, cooperatives, and local extension structures — not replace them."
        },
        {
          title: "Evidence & Accountability",
          description:
            "We measure outcomes rigorously and share clear reports that support donor and institutional requirements."
        },
      ],

      processSteps: [
        { step: 1, title: "Alignment Meeting", description: "Clarify partner priorities & intervention scope." },
        { step: 2, title: "Co-Creation Workshop", description: "Design operational & field methodologies together." },
        { step: 3, title: "Implementation & Monitoring", description: "Deploy field team & provide progress tracking." },
        { step: 4, title: "Review & Scaling", description: "Evaluate outcomes and expand where impact is strongest." }
      ],

      // cta: { label: "Initiate Partnership Discussion", type: "modal" }
    },

    {
      id: "contact-partner-team",
      title: "Let’s Explore Partnership Opportunities",
      image:"/img/service/zaoboraexplorepartnership.webp",
      description:
        "Whether research collaboration, value chain strengthening, or climate-resilient agriculture — our team is ready to align.",
      icon: "FaEnvelope",
      link: "/contact",

      testimonial: {
        quote:
          "Zao Bora has been a highly reliable implementation partner. Their community structures and field execution capacity significantly contributed to the success of our joint program.",
        author: "Program Manager, International Development NGO",
        location: "Tanzania"
      },

      cta: { label: "Submit Partnership Inquiry", type: "modal" }
    }
  ],
},


  investors: {
  id: "investors",
  title: "For Investors",
  tagline: "Invest with Confidence in Scalable Agriculture",
  hero: {
    headline:
      "We support investors in establishing and managing high-performance agricultural enterprises with strong market alignment and sustainable operational systems.",
    image: "/img/hero/zaoboracallforinvestors.webp",
    cta: [
      { label: "Start Investing", type: "modal" },
    ],
  },

  sections: [
    {
      id: "market-opportunity",
      title: "The Southern Highlands Agriculture Opportunity",
      image:"/img/service/zaoboraSouthern_Highlands_Agriculture_Opportunity.webp",
      description:
        "A region with fertile soils, high rainfall, established farmer networks, and strategic access to regional markets.",
      icon: "FaGlobeAfrica",
      link: "/services/investors/investment-management",

      fullDescription:
        "The Southern Highlands of Tanzania present one of the strongest agricultural investment opportunities in East Africa. \
With favorable climate conditions, established farming systems, and proximity to major local and export markets, the region supports profitable investments across maize, soybeans, beans, horticulture, and livestock value chains. \
Our organization has worked in this region for years — building farmer networks, improving market linkages, and developing operational models that reduce startup and scaling risk for investors.",

      stats: [
        { value: "94%", label: "Arable Fertile Soil Coverage (select regions)" },
        { value: "2–3", label: "Cropping Seasons Per Year" },
        { value: "High", label: "Regional Market Demand" },
        { value: "Strong", label: "Farmer Cooperative Networks" }
      ],

      benefits: [
        "Strong domestic + regional market access",
        "Cost-efficient labor and input availability",
        "High resilience to climate variability",
      ],
    },

    {
      id: "full-farm-management",
      title: "Professional Farm Management Services",
      image:"/img/service/zaoboraProfessional_Farm_Management_Services.webp",
      description:
        "End-to-end operational management designed to maximize efficiency, yield performance, and investment security.",
      icon: "FaHandshake",
      link: "/services/investors/investment-management",

      fullDescription:
        "Investors benefit from our structured management systems that cover planning, staffing, procurement, production scheduling, soil fertility programs, and post-harvest management. \
Our approach reduces inefficiencies, prevents operational losses, and ensures productive use of capital assets. \
We provide monthly financial reporting, field performance tracking, and continuous advisory to maintain profitability.",

      features: [
        { title: "Operational Management", description: "Daily supervision, productivity oversight, labor coordination." },
        { title: "Soil & Production Optimization", description: "Seasonal crop planning and soil health improvement programs." },
        { title: "Post-Harvest & Market Linkages", description: "Buyer connections, aggregation, and price negotiation support." }
      ],

      cta: { label: "Request Farm Management Proposal", type: "modal" }
    },

    {
      id: "land-access",
      title: "Secure Land Access & Legal Support",
      description:
        "Guidance in identifying, evaluating, and securing farmland with correct legal compliance and documentation.",
      icon: "FaGavel",
      link: "/services/investors/investment-management",

      fullDescription:
        "Agricultural investments require clarity and legal security. \
We assist in land due diligence, local authority coordination, community engagement, and guidance on Tanzania’s agricultural investment frameworks. \
This ensures land is accessed smoothly and managed responsibly, reducing legal exposure and protecting the investor’s asset.",
    },

    {
      id: "consultancy",
      title: "On-Site Technical Consultancy & Feasibility Support",
      image:"/img/service/zaoboraOn-Site_Technical_Consultancy&Feasibility_Support.webp",
      description:
        "Expert advisory for project design, budgeting, technical planning, and performance benchmarking.",
      icon: "FaChartBar",
      link: "/services/investors/investment-management",

      fullDescription:
        "Our agro-economists, production specialists, and field agronomists work directly with investors to evaluate project feasibility, model expected returns, and design operational systems. \
We ensure decision-making is guided by real field knowledge — not unreliable assumptions.",

      processSteps: [
        { step: 1, title: "Investment & Market Analysis", description: "Evaluate value chain viability and revenue potential." },
        { step: 2, title: "Farm & Resource Assessment", description: "Analyze land, climate, infrastructure, and logistics." },
        { step: 3, title: "Cost & Production Modeling", description: "Develop phased investment & crop rotation plans." },
        { step: 4, title: "Operational Setup & Transition", description: "Deploy management systems and workforce structures." }
      ],

      // cta: { label: "Schedule Investor Consultation", type: "modal" }
    }
  ],
},

};

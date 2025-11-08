// src/lib/constants/service-page.tsx
import { SERVICES_CONTENT } from "./service-list";
import { ServiceCardType } from "@/types/service";

interface DetailedService extends ServiceCardType {
  fullDescription: string;
  image?: string;
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
  /** ----------------------------------------------------------------
   * FARMER ADVISORY & TRAINING  (Coffee mention included here only)
   * ---------------------------------------------------------------- */
  "farmer-advisory": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "farmer-advisory")!,
    categoryGroup: "farmers",
    image:"/img/service/zaoboraFarmer_Training&Capacity_Building.webp",
    fullDescription:
      "We help farmers grow from one good season to a sustainable business. Our advisory blends on-field diagnostics, practical training, and seasonal planning so farmers can increase yields, reduce risk, and unlock better markets. In the Southern Highlands, we work closely with smallholder coffee farmers to improve canopy management, pruning, nutrition plans, and harvest handling—turning good coffee into great income.",
    keyBenefits: [
      "Higher, more consistent yields across seasons",
      "Better cost control and cashflow discipline",
      "Resilient practices against climate and market shocks",
      "Practical field coaching, not classroom theory",
      "Improved quality and market readiness",
      "Data-guided decisions at plot level",
    ],
    detailedServices: [
      {
        title: "Tailored Agronomic Advice",
        description:
          "Crop-specific recommendations for spacing, pruning, nutrition, pest and disease control, irrigation, and harvest handling.",
        icon: "FaSeedling",
      },
      {
        title: "Seasonal Coaching & Field Days",
        description:
          "Hands-on sessions aligned to growth stages; demo plots; farmer group coaching for faster adoption.",
        icon: "FaUserGraduate",
      },
      {
        title: "Financial & Record-Keeping Support",
        description:
          "Simple budgets, cost tracking, and gross-margin analysis that help farms plan inputs and protect profits.",
        icon: "FaCreditCard",
      },
      {
        title: "Climate-Smart Practices",
        description:
          "Mulching, shade, water management, soil cover, and risk-reduction strategies tuned to local conditions.",
        icon: "FaLeaf",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Farm & Goals Assessment",
        description:
          "Walk the field, understand challenges, yields, and targets (yield, quality, market).",
      },
      {
        step: 2,
        title: "Action Plan",
        description:
          "Create a practical, month-by-month plan for agronomy, budgets, and training touchpoints.",
      },
      {
        step: 3,
        title: "On-Field Implementation",
        description:
          "Coaching through field days, demo plots, and farmer group visits to ensure adoption.",
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description:
          "Track progress, adjust recommendations, and prepare for the next season’s goals.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * AGRO-INPUTS SUPPLY
   * ---------------------------------------------------------------- */
  "agro-inputs": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "agro-inputs")!,
    categoryGroup: "farmers",
    image:"/img/service/zaoboraReliable&Certified_Agro-Input Supply.webp",
    fullDescription:
      "Access reliable, high-quality inputs at the right time and right price. We help farmers and groups find trusted fertilizers, seeds, and crop protection products—and use them correctly for maximum returns.",
    keyBenefits: [
      "Trusted input quality and authenticity",
      "Timely availability before key operations",
      "Optimized dose and application methods",
      "Reduced wastage and better cost control",
      "Higher yields with fewer input losses",
    ],
    detailedServices: [
      {
        title: "Fertilizer Programs",
        description:
          "Balanced fertilizer plans with macro and micronutrients based on crop stage and soil condition.",
        icon: "FaFlask",
      },
      {
        title: "Seed Systems",
        description:
          "High-germination, climate-resilient varieties with attention to spacing and plant population.",
        icon: "FaSeedling",
      },
      {
        title: "Crop Protection",
        description:
          "Integrated pest and disease protocols with safe handling and resistance management.",
        icon: "FaShieldAlt",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Needs Assessment",
        description:
          "Define crop targets and input requirements by season and plot.",
      },
      {
        step: 2,
        title: "Sourcing & Delivery",
        description:
          "Coordinate credible suppliers and timely distribution to farmer groups.",
      },
      {
        step: 3,
        title: "Usage Training",
        description:
          "Coach on calibration, timing, and safety to get the best results from every shilling spent.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * CREDIT & INPUT LOANS
   * ---------------------------------------------------------------- */
  "credit-loans": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "credit-loans")!,
    categoryGroup: "farmers",
    image:"/img/service/zaoboraDealer_Working_Capital&Input_Finance_Support.webp",
    fullDescription:
      "We help organized farmer groups access input finance that is tied to production goals. With basic records and repayment discipline, farmers unlock fertilizer, seed, and crop protection on time and pay back from harvest proceeds.",
    keyBenefits: [
      "On-time inputs even when cashflow is tight",
      "Group structure reduces individual risk",
      "Simple loan terms aligned to harvest cycles",
      "Financial literacy embedded in the process",
      "Better bankability over time",
    ],
    detailedServices: [
      {
        title: "Group Input Loans",
        description:
          "Bulk input loans for registered farmer groups and cooperatives tied to production targets.",
        icon: "FaCreditCard",
      },
      {
        title: "Financial Partnerships",
        description:
          "Structuring deals with banks/MFIs and mitigating risk with profiles and purchase contracts where applicable.",
        icon: "FaHandshake",
      },
      {
        title: "Farmer Profiling",
        description:
          "Basic data and performance history to build credibility and access progressively better terms.",
        icon: "FaChartBar",
      },
      {
        title: "Repayment Support",
        description:
          "Calendarized reminders, aggregation support, and post-harvest discipline.",
        icon: "FaCheck",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Group Onboarding",
        description:
          "Verify membership, governance, and targets; agree on roles and commitments.",
      },
      {
        step: 2,
        title: "Loan Structuring",
        description:
          "Match input package to expected yields; define collection and repayment schedules.",
      },
      {
        step: 3,
        title: "Delivery & Tracking",
        description:
          "Deliver inputs on time and monitor usage and agronomy milestones.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * SOIL HEALTH & MEASUREMENT
   * ---------------------------------------------------------------- */
  "soil-health": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "soil-health")!,
    categoryGroup: "farmers",
    image:"/img/service/zaoboraSoil_Health&Crop_Fertility_Support.webp",
    fullDescription:
      "Profitable farming starts with healthy soil. We analyze soil nutrients, structure, and pH, then translate results into practical fertility plans—so every input delivers a return.",
    keyBenefits: [
      "Right nutrients at the right rate",
      "Lower fertilizer waste and cost leaks",
      "Improved soil structure and biology",
      "Higher response to applied inputs",
      "Better long-term land productivity",
    ],
    detailedServices: [
      {
        title: "Soil Testing",
        description:
          "Representative sampling and lab analysis for macro, micro, and pH.",
        icon: "FaFlask",
      },
      {
        title: "Fertility Mapping",
        description:
          "Plot-level or block maps to target application by need and budget.",
        icon: "FaMap",
      },
      {
        title: "Actionable Recommendations",
        description:
          "Simple, crop-stage-based fertilizer plans and soil amendments.",
        icon: "FaSeedling",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Sample Collection",
        description:
          "Train on correct sampling; collect and submit to lab partners.",
      },
      {
        step: 2,
        title: "Analysis & Interpretation",
        description:
          "Turn lab outputs into simple, budget-aware recommendations.",
      },
      {
        step: 3,
        title: "Field Application Support",
        description:
          "Coach on timing, placement, and safety to capture full value.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * IRRIGATION SYSTEMS
   * ---------------------------------------------------------------- */
  "irrigation-systems": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "irrigation-systems")!,
    categoryGroup: "farmers",
    image:"/img/products/zaoborairrigationsystemsupplies.webp",
    fullDescription:
      "Design and deploy irrigation that pays for itself. We engineer water-efficient systems that stabilize yields, lower risk, and reduce unit costs—whether you are upgrading a small plot or scaling a commercial block.",
    keyBenefits: [
      "Water savings and higher water-use efficiency",
      "Stabilized yields in dry spells",
      "Lower labor and application losses",
      "Predictable production calendars",
      "Better ROI on inputs and land",
    ],
    detailedServices: [
      {
        title: "System Design & Sizing",
        description:
          "Site survey, pressure/flow planning, and layout for drip, sprinkler, or hybrid systems.",
        icon: "FaDraftingCompass",
      },
      {
        title: "Drip & Sprinkler Installation",
        description:
          "Quality components, correct filtration, and pressure regulation for uniform application.",
        icon: "FaTint",
      },
      {
        title: "Maintenance & Upgrades",
        description:
          "Scheduled checks, leak fixes, emitter cleaning, and capacity upgrades.",
        icon: "FaTools",
      },
      {
        title: "Water Resource Management",
        description:
          "Source protection, storage design, and scheduling for long-term resilience.",
        icon: "FaWater",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Farm Survey",
        description:
          "Assess crops, terrain, water source, and budget objectives.",
      },
      {
        step: 2,
        title: "Design & Quotation",
        description:
          "Engineer the layout and provide a clear bill of quantities.",
      },
      {
        step: 3,
        title: "Installation & Testing",
        description:
          "Install, pressure-test, and train operators on scheduling and care.",
      },
      {
        step: 4,
        title: "After-Sales Support",
        description:
          "Seasonal maintenance and troubleshooting to protect your investment.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * RESEARCH & FARMER DATA SYSTEMS
   * ---------------------------------------------------------------- */
  "research-data": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "research-data")!,
    categoryGroup: "partners",
    image:"/img/hero/zaoboracallforpartners.webp",
    fullDescription:
      "Turn scattered farmer information into decisions that move the sector. We build farmer profiles, collect agronomic and market data, and visualize performance so partners can target resources and scale impact with confidence.",
    keyBenefits: [
      "Evidence-based programming and investments",
      "Visibility from plot to portfolio level",
      "Better risk assessment and targeting",
      "Improved accountability and learning",
      "Faster reporting and stakeholder alignment",
    ],
    detailedServices: [
      {
        title: "Farmer Profiling",
        description:
          "Standardized records on production, practices, and basic economics for each farmer/group.",
        icon: "FaIdCard",
      },
      {
        title: "Agronomic & Market Monitoring",
        description:
          "Track inputs, yields, prices, and adoption—by location and season.",
        icon: "FaChartLine",
      },
      {
        title: "Geospatial Mapping",
        description:
          "GIS layers for crops, soils, and infrastructure to guide targeting.",
        icon: "FaGlobeAfrica",
      },
      {
        title: "Dashboards & Analytics",
        description:
          "Partner-ready dashboards and periodic insight briefs for rapid decisions.",
        icon: "FaChartPie",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Framework & Tools",
        description:
          "Define indicators and digital tools; align privacy and consent.",
      },
      {
        step: 2,
        title: "Data Collection",
        description:
          "Field enumerators and digital workflows capture consistent data.",
      },
      {
        step: 3,
        title: "Analysis & Visualization",
        description:
          "Clean, analyze, and publish insights on partner dashboards.",
      },
      {
        step: 4,
        title: "Feedback & Iteration",
        description:
          "Close the loop with farmers and partners to improve outcomes.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * ACCESS TO INFORMATION & LINKAGES
   * ---------------------------------------------------------------- */
  "information-access": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "information-access")!,
    categoryGroup: "partners",
    image:"/img/service/zaoboraAgri-Dealer_Business&Product_Training.webp",
    fullDescription:
      "Knowledge moves adoption. We deliver localized, timely information through radio, mobile, and community activations—so farmers make better decisions faster and partners see real behavior change.",
    keyBenefits: [
      "Rapid dissemination of best practices",
      "Localized content matched to crop calendars",
      "Two-way farmer engagement and feedback",
      "Stronger last-mile linkages via local hubs",
      "Higher adoption with lower extension costs",
    ],
    detailedServices: [
      {
        title: "Farm Radio & Broadcast",
        description:
          "Seasonal advice, weather alerts, and market updates with call-ins and Q&A.",
        icon: "FaBroadcastTower",
      },
      {
        title: "Mobile Information Centers",
        description:
          "USSD/chat workflows, WhatsApp tips, and micro-learning modules.",
        icon: "FaMobileAlt",
      },
      {
        title: "Community Exhibitions",
        description:
          "Field demos and showcases for technologies and good practices.",
        icon: "FaUsers",
      },
      {
        title: "Agro-Dealer Info Hubs",
        description:
          "Equip local dealers as knowledge points with printed/QR resources.",
        icon: "FaHandshake",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Content Design",
        description:
          "Co-create messages aligned to crop stages and local languages.",
      },
      {
        step: 2,
        title: "Channel Delivery",
        description:
          "Blend radio, mobile, and in-person events for reach and depth.",
      },
      {
        step: 3,
        title: "Engagement & Support",
        description:
          "Enable Q&A, helplines, and peer groups to reinforce learning.",
      },
      {
        step: 4,
        title: "Measure & Adapt",
        description:
          "Track engagement and adoption; refine the approach each season.",
      },
    ],
  },

  /** ----------------------------------------------------------------
   * AGRICULTURAL INVESTMENT & FARM MANAGEMENT
   * ---------------------------------------------------------------- */
  "investment-management": {
    ...SERVICES_CONTENT.cards.find((s) => s.slug === "investment-management")!,
    categoryGroup: "investors",
    image:"/img/service/zaoboraProfessional_Farm_Management_Services.webp",
    fullDescription:
      "We help investors turn agricultural potential into bankable, well-run operations. From land access and compliance to day-to-day farm management and technical oversight, we de-risk execution and accelerate scale.",
    keyBenefits: [
      "Clarity on feasibility and risk",
      "Secure land access and legal compliance",
      "Operational discipline and KPIs",
      "Professional agronomy and technical oversight",
      "Pathways to scale and stronger ROI",
    ],
    detailedServices: [
      {
        title: "Land Access & Compliance",
        description:
          "Due diligence, community engagement support, and permits aligned to Tanzanian law.",
        icon: "FaGavel",
      },
      {
        title: "Professional Farm Management",
        description:
          "Planning, staffing, SOPs, input procurement, and performance management.",
        icon: "FaTools",
      },
      {
        title: "On-Site Technical Consultancy",
        description:
          "Periodic/embedded experts for agronomy, irrigation, infrastructure, and post-harvest.",
        icon: "FaHandshake",
      },
      {
        title: "Regional Expertise",
        description:
          "Southern Highlands know-how for climate, soils, and market pathways.",
        icon: "FaGlobeAfrica",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Feasibility & Model",
        description:
          "Assess crops, water, markets, capex/opex; align the investment thesis.",
      },
      {
        step: 2,
        title: "Land & Compliance",
        description:
          "Secure rights, complete permits, and agree frameworks with local stakeholders.",
      },
      {
        step: 3,
        title: "Build & Operate",
        description:
          "Recruit, train, establish SOPs, and execute agronomy calendars.",
      },
      {
        step: 4,
        title: "Scale & Optimize",
        description:
          "Introduce mechanization, data systems, and market contracts for growth.",
      },
    ],
  },
};

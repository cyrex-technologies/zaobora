// src/lib/constants/service-categories.ts
export const SERVICE_CATEGORIES = {
  farmers: {
    id: "farmers",
    title: "For Farmers",
    tagline: "Grow More with Less",
    description: "Simple, proven advice for smallholder farmers to increase yields, improve soils, and earn more.",
    hero: {
      headline: "Grow more coffee, maize and soybeans with smarter fertilizer use",
      subheadline: "Simple, proven advice for smallholder farmers to increase yields, improve soils, and earn more.",
      image: "/assets/img/farmers/hero.jpg",
      cta: [
        { label: "Get Farming Advice", href: "/farmers/advice" },
        { label: "Ask an Agronomist", href: "/farmers/contact" }
      ]
    },
    sections: [
      {
        id: "learn",
        title: "Learn What Works",
        description: "Every soil and season is different — but good practices always pay off.",
        content: "At Zao Bora, we help you make the most of every bag of fertilizer, whether you use manure, DAP, UREA, or SA. Learn step-by-step when and how to apply fertilizers, rotate crops, and manage residues for better yields.",
        icon: "🌱",
        cta: { label: "Learn How to Apply Fertilizer", href: "/farmers/learn" }
      },
      {
        id: "stories",
        title: "See What Farmers Like You Are Doing",
        testimonial: {
          quote: "I used to apply DAP late, but after learning from Zao Bora, I changed my timing — my maize now fills the cobs!",
          author: "Amina",
          location: "Mbozi"
        },
        icon: "🌾",
        cta: { label: "Read Farmer Stories", href: "/farmers/stories" }
      },
      {
        id: "network",
        title: "Join Our Farmer Network",
        description: "Join thousands of farmers across southern Tanzania learning and growing with Zao Bora.",
        benefits: [
          "Free agronomy tips on WhatsApp",
          "Updates on training and demo plots",
          "Advice from experts and fellow farmers"
        ],
        icon: "🧑🏾‍🌾",
        cta: { label: "Join the Network", href: "/farmers/join" }
      },
      {
        id: "ask",
        title: "Ask an Agronomist",
        description: "Have a question about your field, fertilizer, or rotation plan?",
        content: "Send us a quick message — our agronomists will respond within 24 hours.",
        icon: "💬",
        cta: { label: "Message Us on WhatsApp", href: "https://wa.me/255752563361" }
      }
    ],
    services: [
      {
        id: "advisory-training",
        title: "Farmer Advisory & Training",
        what: "Practical, tailored advice and hands-on training to improve productivity, profitability, and resilience.",
        why: "Bridge the gap between agricultural research and everyday farming practices with proven, sustainable solutions.",
        how: {
          steps: [
            "Farm Assessment: Comprehensive evaluation of your farm's current practices and challenges",
            "Customized Plan: Tailored advisory plan addressing your specific needs and goals",
            "Training Implementation: Hands-on training through workshops and field demonstrations",
            "Ongoing Support: Continuous monitoring and support for successful implementation"
          ]
        },
        benefits: [
          "Increased crop yields through improved farming practices",
          "Enhanced financial planning and resource management",
          "Reduced production costs through efficient input use",
          "Improved resilience to climate change and market fluctuations"
        ],
        evidence: {
          title: "Success Story: Legume-Maize Rotation Impact",
          results: [
            "40% reduction in chemical fertilizer costs",
            "25% increase in maize yields",
            "Improved soil nitrogen levels",
            "Reduced pest and disease pressure"
          ]
        }
      }
    ]
  },
  
  partners: {
    id: "partners",
    title: "For Partners",
    tagline: "Collaborate for Impact",
    description: "We partner with organizations that empower smallholder farmers.",
    hero: {
      headline: "We partner with organizations that empower smallholder farmers",
      subheadline: "Together, we promote sustainable soil fertility, better yields, and stronger rural economies.",
      image: "/assets/img/partners/hero.jpg",
      cta: [
        { label: "Collaborate With Us", href: "/partners/collaborate" }
      ]
    },
    sections: [
      {
        id: "impact",
        title: "Our Impact So Far",
        stats: [
          { value: "3,200+", label: "Farmers trained across southern Tanzania" },
          { value: "25%", label: "Average maize yield increase in rotation trials" },
          { value: "1,000+", label: "Acres improved through legume integration" },
          { value: "10+", label: "Active partnerships with NGOs, cooperatives, and local governments" }
        ],
        cta: { label: "See Full Impact Report", href: "/partners/impact-report" }
      },
      {
        id: "why-partner",
        title: "Why Partner With Us",
        reasons: [
          {
            title: "Field-Based Expertise",
            description: "We work directly with farmers through trials, demonstrations, and local networks."
          },
          {
            title: "Trusted by Communities",
            description: "Farmers know our agronomists by name."
          },
          {
            title: "Data-Driven Insights",
            description: "We monitor and document real changes in soil health and yield."
          }
        ],
        cta: { label: "Meet Our Team", href: "/about/team" }
      },
      {
        id: "work-together",
        title: "Let's Work Together",
        description: "Whether you're an NGO, research institution, or cooperative, we welcome collaboration in training, extension, and innovation.",
        formFields: ["Name", "Organization", "Area of Interest", "Message"],
        cta: { label: "Submit Inquiry", href: "/partners/contact" }
      }
    ]
  },
  
  agrodealers: {
    id: "agrodealers",
    title: "For Agro-dealers",
    tagline: "Grow Your Business with Us",
    description: "Join Zao Bora's trusted network of agro-dealers.",
    hero: {
      headline: "Join Zao Bora's trusted network of agro-dealers",
      subheadline: "Reach verified farmers, promote your inputs, and build long-term relationships in your community.",
      image: "/assets/img/dealers/hero.jpg",
      cta: [
        { label: "Join the Dealer Network", href: "/agrodealers/join" }
      ]
    },
    sections: [
      {
        id: "why-work",
        title: "Why Work With Zao Bora",
        benefits: [
          "Connect with a large farmer network through our field teams",
          "Promote your fertilizers, seeds, and crop protection products",
          "Get insights on farmer demand trends and seasonal needs",
          "Participate in our training sessions and field days"
        ],
        cta: { label: "Register as a Partner Dealer", href: "/agrodealers/register" }
      },
      {
        id: "how-it-works",
        title: "How It Works",
        description: "We connect farmers and agro-dealers responsibly:",
        steps: [
          "You register and verify your business",
          "We introduce you to farmers in your area",
          "You grow your sales while supporting sustainable agriculture"
        ],
        cta: { label: "Join Today", href: "/agrodealers/join" }
      },
      {
        id: "contact",
        title: "Let's Talk",
        description: "Want to learn how Zao Bora can help you expand your agro-input business?",
        content: "Send us a quick message — we'll be in touch within a few days.",
        cta: { label: "Contact Our Team", href: "/agrodealers/contact" }
      }
    ]
  },
  
  investors: {
    id: "investors",
    title: "For Investors",
    tagline: "Invest in Growth That Lasts",
    description: "Your investment grows more than crops — it grows livelihoods.",
    hero: {
      headline: "Your investment grows more than crops — it grows livelihoods",
      subheadline: "Zao Bora builds resilient farming systems that restore soils and strengthen rural incomes.",
      image: "/assets/img/investors/hero.jpg",
      cta: [
        { label: "Download Investor Brief", href: "/investors/brief.pdf" }
      ]
    },
    sections: [
      {
        id: "model",
        title: "Our Model",
        description: "Zao Bora empowers smallholder farmers through a proven model of:",
        components: [
          "Fertility and crop management training",
          "Agro-dealer partnerships for input access",
          "Data collection for evidence-based decision-making",
          "Scalable, community-led agronomy"
        ],
        flow: "Inputs → Training → Adoption → Yields → Prosperity"
      },
      {
        id: "impact-highlights",
        title: "Impact Highlights",
        stats: [
          { value: "3,000+", label: "Farmers trained" },
          { value: "10+", label: "Regional partnerships" },
          { value: "Proven", label: "Profitability and soil improvement" }
        ],
        cta: { label: "See Impact Report", href: "/investors/impact" }
      },
      {
        id: "join-us",
        title: "Join Us in Growing Sustainable Agriculture",
        description: "We welcome partnerships with investors and donors who share our vision for a sustainable, profitable, and inclusive agricultural future.",
        cta: { label: "Request a Meeting", href: "/investors/meeting" }
      },
      {
        id: "stories",
        title: "Stories of Change",
        testimonial: {
          quote: "Before Zao Bora, I used to apply DAP late. Now, with better timing and rotation, my yields have doubled.",
          author: "Farmer",
          location: "Mbozi District"
        }
      }
    ]
  }
};

// Navigation structure for main menu
export const SERVICE_NAVIGATION = {
  title: "Who We Serve",
  categories: [
    {
      id: "farmers",
      label: "For Farmers",
      href: "/farmers",
      description: "Grow more with expert guidance",
      icon: "🌾"
    },
    {
      id: "partners",
      label: "For Partners",
      href: "/partners",
      description: "Collaborate for lasting impact",
      icon: "🤝"
    },
    {
      id: "agrodealers",
      label: "For Agro-dealers",
      href: "/agrodealers",
      description: "Grow your business with us",
      icon: "🏪"
    },
    {
      id: "investors",
      label: "For Investors",
      href: "/investors",
      description: "Invest in sustainable growth",
      icon: "💰"
    }
  ]
};
export const PRODUCTS = [
  // Cash Crops
  {
    id: "specialty-coffee",
    title: "Specialty Coffee",
    description:
      "Connecting exceptional specialty coffee to credible roasters through quality assurance, certification, and seamless export logistics.",
    detail: `At Zaobora, we don't roast or sell coffee directly. Instead, we specialize in building bridges to exceptional specialty coffee through services that guarantee quality, certification, and market access.

• Curated matchmaking: We connect farmers and cooperatives to credible specialty roasters who share a commitment to traceability, quality, and fairness.

• Quality assurance & certification: We support your team to get recognized specialty certification (e.g. Fair Trade, Rainforest Alliance, organic, etc.) and maintain rigorous quality control at origin.

• Export preparation & logistics: We manage export processes — documentation, compliance, export logistics — so your coffee arrives at roasters smoothly, reliably, and legally.

• Traceability & story building: We help document the origin, farms, and practices behind your coffee so roasters (and consumers) can tell the authentic story of your product.

Why work with us? Roasters care deeply about origin, flavor, and ethical supply chains. We share your values: fostering fairness, transparency, and high standards. With us, your green coffee is more than a bean — it's a story of quality, integrity, and sustainability.

If you're interested in collaborating or want to see sample farms and roast-ready coffee lots, contact us and we'll get you started.`,
    image: "/img/products/specialty-coffee.png",
    category: "Cash Crops",
  },
  {
    id: "maize",
    title: "Maize",
    description:
      "High-quality, nutrient-rich maize suitable for both food production and industrial applications.",
    detail: "High-quality, nutrient-rich maize suitable for both food production and industrial applications. Our maize is sourced sustainably and graded for global markets.",
    image: "/img/products/image-of-zaobora-maize.png",
    category: "Cash Crops",
  },
  {
    id: "soybeans",
    title: "Soybeans",
    description:
      "A versatile commodity perfect for food and industrial use, sourced from trusted farms.",
    detail: "A versatile commodity perfect for food and industrial use, sourced from trusted farms. Our soybeans meet the highest quality standards for international trade.",
    image: "/img/products/image-of-zaobora-soybeans.png",
    category: "Cash Crops",
  },
  {
    id: "beans",
    title: "Beans",
    description:
      "Premium-grade beans sourced to meet the diverse needs of global markets.",
    detail: "Premium-grade beans sourced to meet the diverse needs of global markets. Packed with protein and flavor, they form a cornerstone of healthy diets.",
    image: "/img/products/image-of-zaobora-beans.png",
    category: "Cash Crops",
  },
  {
    id: "sesame",
    title: "Sesame",
    description:
      "Premium sesame seeds valued for their rich flavor and nutritional benefits.",
    detail: "Premium sesame seeds valued for their rich flavor and nutritional benefits. Carefully processed and graded for domestic and international markets.",
    image: "/img/products/sesame.png",
    category: "Cash Crops",
  },

  // Fruits
  {
    id: "fresh-avocado",
    title: "Fresh Avocado",
    description:
      "Rich, creamy, and globally sought-after, our avocados are a premium choice for wholesalers and exporters.",
    detail: "Rich, creamy, and globally sought-after, our avocados are a premium choice for wholesalers and exporters. Each fruit is carefully harvested to ensure peak freshness and exceptional taste. Whether destined for local markets or international shelves, our avocados meet the highest standards of quality and flavor, making them a favorite among chefs and consumers alike.",
    image: "/img/products/image-of-zaobora-avocados.png",
    category: "Fruits",
  },

  // Pembejeo (Agricultural Inputs)
  {
    id: "hybrid-seeds",
    title: "Verified Hybrid Seeds",
    description:
      "Premium quality hybrid seeds for improved yields and disease resistance.",
    detail: "Verified hybrid seeds sourced from reputable suppliers to ensure optimal germination rates and crop performance. Our seeds are tested and certified for quality assurance.",
    image: "/img/products/hybrid-seeds.png",
    category: "Pembejeo",
  },
  {
    id: "fertilizers",
    title: "Fertilizers",
    description:
      "Complete range of fertilizers to enhance soil fertility and boost crop productivity.",
    detail: "Quality fertilizers including organic and inorganic options, tailored to different soil types and crop requirements. We provide guidance on proper application for maximum effectiveness.",
    image: "/img/products/fertilizers.png",
    category: "Pembejeo",
  },
  {
    id: "pesticides",
    title: "Pesticides",
    description:
      "Effective pest control solutions to protect your crops and maximize yields.",
    detail: "Safe and effective pesticides for controlling common agricultural pests. We offer training on proper usage and safety protocols to ensure both crop protection and environmental responsibility.",
    image: "/img/products/pesticides.png",
    category: "Pembejeo",
  },
  {
    id: "herbicides",
    title: "Herbicides",
    description:
      "Reliable weed control solutions for cleaner fields and healthier crops.",
    detail: "Professional-grade herbicides for effective weed management. Our products help maintain clean fields while minimizing impact on desired crops and the environment.",
    image: "/img/products/herbicides.png",
    category: "Pembejeo",
  },

  // Machinery
  {
    id: "tractors",
    title: "Tractors",
    description:
      "Reliable tractors for efficient land preparation and farm operations.",
    detail: "Quality tractors suitable for various farm sizes and operations. We provide options ranging from compact models for small farms to powerful units for large-scale operations.",
    image: "/img/products/tractors.png",
    category: "Machinery",
  },
  {
    id: "planters",
    title: "Planters",
    description:
      "Precision planting equipment for optimal seed placement and spacing.",
    detail: "Modern planting equipment designed to ensure uniform seed distribution and proper depth control. Our planters help maximize germination rates and crop establishment.",
    image: "/img/products/planters.png",
    category: "Machinery",
  },
  {
    id: "harvesters",
    title: "Harvesters",
    description:
      "Small-scale harvesters for efficient crop harvesting and reduced labor costs.",
    detail: "Compact and efficient harvesting equipment suitable for small to medium-scale farms. Our harvesters help reduce post-harvest losses and improve productivity.",
    image: "/img/products/harvesters.png",
    category: "Machinery",
  },
  {
    id: "irrigation-systems",
    title: "Irrigation Systems",
    description:
      "Complete irrigation solutions including sprinklers, drip systems, and pumps.",
    detail: "Comprehensive irrigation equipment for efficient water management. Our range includes sprinkler systems for field coverage, drip irrigation for precision watering, and pumps for reliable water delivery. We help you choose the right system for your crops and water sources.",
    image: "/img/products/irrigation-systems.png",
    category: "Machinery",
  },
];

// Product categories for filtering
export const PRODUCT_CATEGORIES = [
  "All Products",
  "Cash Crops",
  "Fruits",
  "Pembejeo",
  "Machinery",
] as const;

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  if (category === "All Products") return PRODUCTS;
  return PRODUCTS.filter((product) => product.category === category);
};

// Helper function to get unique categories from products
export const getUniqueCategories = () => {
  return ["All Products", ...new Set(PRODUCTS.map((product) => product.category))];
};
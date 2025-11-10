export const NAV_LINKS = [
  { href: "/", label: "Home" },
  // { href: "/services", label: "Services" },
  { label: "Services",
    children: [
      { href: "/services/farmers", label: "For Farmers" },
      { href: "/services/partners", label: "For Partners" },
      { href: "/services/agrodealers", label: "For Agri-dealers" },
      { href: "/services/investors", label: "For Investors" },
    ], 
  },

  { href: "/products", label: "Products" },
  {
    label: "Get Involved",
    children: [
      { href: "/get-involved/partnership", label: "Partner with us" },
      { href: "/get-involved/vacancies", label: "Vacancies" },
      { href: "/get-involved/volunteer", label: "Volunteer" },
      { href: "/get-involved/donate", label: "Donate" },
    ],
  },
  { href: "#contact-us", label: "Contact" },
];

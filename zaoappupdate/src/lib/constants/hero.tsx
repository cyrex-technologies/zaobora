// src/lib/constants/hero.ts
import { FaArrowRight } from "react-icons/fa6";

export const HERO_CONTENT = {
  title: (
    <>
      Empowering <span className="text-gray-200">Farmers to enhance their</span> livelihoods
    </>
  ),
  description: `We provide expert agricultural consultation, sustainable farming solutions, and market access to help farmers maximize yields and income.`,
  cta: {
    href: "/services",
    label: "Learn More",
    icon: FaArrowRight,
  },
  image: {
    src: "/img/hero/zaobora-hero.webp",
    alt: "zaobora empowering farmers",
    width: 800,
    height: 800,
  },
  statistics: {
    farmersServed: 5000,
    farmersServedlabel: "Farmers Empowered",
    increaseInYield: "30%",
    satisfiedClients: 95,
  }
};

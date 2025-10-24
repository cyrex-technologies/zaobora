// src/components/ui/CategoryTemplates.tsx
"use client";

import React from "react";
import * as FaIcons from "react-icons/fa6";
import { IconType } from "react-icons";
import Link from "next/link";

type FaIconsType = {
  [key: string]: IconType;
};

type CategoryType = {
  id: string;
  title: string;
  tagline: string;
  hero: {
    headline: string;
    image: string;
    cta: { label: string; href: string }[];
  };
  sections: {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
  }[];
};

type ServiceType = {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  href: string;
};

interface TemplateProps {
  category: CategoryType;
  services: ServiceType[];
}

const SectionIcon = ({ name }: { name: string }) => {
  const Icon = (FaIcons as FaIconsType)[name];
  return Icon ? <Icon className="text-green-600 text-3xl" /> : null;
};

const Hero = ({ category }: { category: CategoryType }) => (
  <section className="relative text-center bg-cover bg-center py-24 text-white">
    {/* Using inline style for dynamic image from data */}
    <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ backgroundImage: `url(${category.hero.image})` }} 
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto">{category.hero.headline}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {category.hero.cta.map((cta, i) => (
          <Link
            key={i}
            href={cta.href}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const CategorySections = ({ category }: { category: CategoryType }) => (
  <section className="py-16 container mx-auto px-4 grid gap-8 md:grid-cols-2">
    {category.sections.map((s) => (
      <div
        key={s.id}
        className="flex items-start gap-4 p-6 bg-white shadow rounded-2xl hover:shadow-md transition"
      >
        <SectionIcon name={s.icon} />
        <div>
          <h3 className="font-semibold text-xl mb-1">{s.title}</h3>
          <p className="text-gray-600 mb-2">{s.description}</p>
          <Link
            href={s.link}
            className="text-green-600 hover:underline text-sm font-medium"
          >
            Learn more →
          </Link>
        </div>
      </div>
    ))}
  </section>
);

const RelatedServices = ({ services }: { services: ServiceType[] }) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center mb-10">
      <h2 className="text-3xl font-bold mb-2">Related Services</h2>
      <p className="text-gray-600">
        Explore services that fall under this category
      </p>
    </div>

    <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => {
        const Icon = (FaIcons as FaIconsType)[s.icon];
        return (
          <div
            key={s.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3"
          >
            {Icon && <Icon className="text-green-600 text-3xl" />}
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600">{s.shortDescription}</p>
            <Link
              href={s.href}
              className="text-green-600 hover:underline mt-auto font-medium"
            >
              View Service →
            </Link>
          </div>
        );
      })}
    </div>
  </section>
);

export const FarmersTemplate = ({ category, services }: TemplateProps) => (
  <>
    <Hero category={category} />
    <CategorySections category={category} />
    <RelatedServices services={services} />
  </>
);

export const AgroDealersTemplate = ({ category, services }: TemplateProps) => (
  <>
    <Hero category={category} />
    <CategorySections category={category} />
    <RelatedServices services={services} />
  </>
);

export const PartnersTemplate = ({ category, services }: TemplateProps) => (
  <>
    <Hero category={category} />
    <CategorySections category={category} />
    <RelatedServices services={services} />
  </>
);

export const InvestorsTemplate = ({ category, services }: TemplateProps) => (
  <>
    <Hero category={category} />
    <CategorySections category={category} />
    <RelatedServices services={services} />
  </>
);

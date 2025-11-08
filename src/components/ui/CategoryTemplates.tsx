// src/components/ui/CategoryTemplates.tsx
"use client";

import React, { useState, useEffect, ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import * as FaIconsOld from "react-icons/fa";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";
import ContactInquiryModal from "@/components/ui/ContactInquiryModal";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  ...FaIcons,
  ...FaIconsOld,
};

type CTAType = {
  label: string;
  href?: string;
  action?: "link" | "modal" | "external";
};

type CategorySectionType = {
  id: string;
  title: string;
  image?: string;
  description: string;
  icon: string;
  link: string;
  fullDescription?: string;
  features?: { title: string; description: string }[];
  benefits?: string[];
  processSteps?: { step: number; title: string; description: string }[];
  testimonial?: { quote: string; author: string; location: string };
  cta?: CTAType | null;
};

type CategoryType = {
  id: string;
  title: string;
  tagline: string;
  hero: {
    headline: string;
    image: string;
    cta: CTAType[];
  };
  sections: CategorySectionType[];
};

type ServiceType = {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  href: string;
  bgColor: string;
};

interface TemplateProps {
  category: CategoryType;
  services: ServiceType[];
}

/* SERVICE CARD */
const ServiceCard = ({
  icon,
  title,
  description,
  href,
}: {
  icon?: string | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}) => {
  const IconComponent = typeof icon === "string" ? ICONS[icon] : icon;
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all p-6 text-center">
      <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl mb-4">
        {IconComponent && <IconComponent className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link href={href} className="text-green-600 font-semibold hover:underline">
        Learn More →
      </Link>
    </div>
  );
};

/* HERO */
const Hero = ({
  category,
  onLeadModalOpen,
}: {
  category: CategoryType;
  onLeadModalOpen: () => void;
}) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <Image src={category.hero.image} alt={category.title} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 container mx-auto px-4 max-w-3xl text-white py-32">
      <h1 className="text-5xl font-bold mb-6">{category.tagline}</h1>
      <p className="text-lg mb-8">{category.hero.headline}</p>

      <div className="flex flex-wrap gap-4">
        {category.hero.cta.map((cta, i) => (
          <button
            key={i}
            onClick={onLeadModalOpen}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            {cta.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);

/* CATEGORY SECTIONS */
const CategorySections = ({
  category,
  onInquiryModalOpen,
}: {
  category: CategoryType;
  onInquiryModalOpen: () => void;
}) => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 space-y-24">
      {category.sections.map((section, index) => {
        const IconComponent = ICONS[section.icon] ?? FaIcons.FaLeaf;
        const reversed = index % 2 !== 0;

        return (
          <div
            key={section.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              reversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <IconComponent className="text-green-600 text-3xl" />
                <h3 className="text-3xl font-bold">{section.title}</h3>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {section.fullDescription || section.description}
              </p>

              {/* Features */}
              {section.features?.map((f, idx) => (
                <p key={idx} className="flex items-start gap-2 mb-3">
                  <FaIcons.FaCheck className="text-green-600 mt-1" />{" "}
                  <strong>{f.title}:</strong> {f.description}
                </p>
              ))}

              {/* Benefits */}
              {section.benefits?.map((b, idx) => (
                <p key={idx} className="flex items-start gap-2 mb-2">
                  <FaIcons.FaCheck className="text-green-600 mt-1" /> {b}
                </p>
              ))}

              {/* Steps */}
              {section.processSteps && (
                <ol className="space-y-4 mb-6">
                  {section.processSteps.map((step) => (
                    <li key={step.step} className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}

              {/* Testimonial */}
              {section.testimonial && (
                <blockquote className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 italic text-gray-700 mb-6">
                  &quot;{section.testimonial.quote}&quot;
                  <div className="mt-3 font-semibold">
                    — {section.testimonial.author}, {section.testimonial.location}
                  </div>
                </blockquote>
              )}

              {/* CTA */}
              {section.cta &&
                (() => {
                  const label = section.cta.label.toLowerCase();
                  const isInquiryCTA =
                    label.includes("inquiry") || label.includes("contact") || label.includes("request") || label.includes("become");

                  if (isInquiryCTA) {
                    return (
                      <button
                        onClick={onInquiryModalOpen}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        {section.cta.label}
                        <FaIcons.FaArrowRight className="w-5 h-5" />
                      </button>
                    );
                  }

                  return (
                    <Link
                      href={section.cta.href ?? "#"}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      {section.cta.label}
                      <FaIcons.FaArrowRight className="w-5 h-5" />
                    </Link>
                  );
                })()}
            </div>

            {/* Image */}
            {section.image && (
              <div className="relative h-64 md:h-120 rounded-3xl overflow-hidden shadow-lg">
                <Image src={section.image} alt={section.title} fill className="object-cover" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>
);

/* RELATED SERVICES */
const RelatedServices = ({ services }: { services: ServiceType[] }) =>
  !services.length ? null : (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              href={s.href}
              title={s.title}
              description={s.shortDescription}
              icon={s.icon}
            />
          ))}
        </div>
        <Link href="/services" className="text-green-600 hover:underline font-semibold">
          View All Services →
        </Link>
      </div>
    </section>
  );

/* TEMPLATE WRAPPER */
const CategoryTemplate = ({ category, services }: TemplateProps) => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      <Hero category={category} onLeadModalOpen={() => setIsLeadModalOpen(true)} />

      <CategorySections
        category={category}
        onInquiryModalOpen={() => setIsInquiryModalOpen(true)}
      />

      <RelatedServices services={services} />

      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
      <ContactInquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </>
  );
};

export const FarmersTemplate = CategoryTemplate;
export const AgroDealersTemplate = CategoryTemplate;
export const PartnersTemplate = CategoryTemplate;
export const InvestorsTemplate = CategoryTemplate;

export default CategoryTemplate;

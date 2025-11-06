// src/components/ui/CategoryTemplates.tsx
"use client";

import React, { useState, useEffect,  ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import { IconType } from "react-icons";
import { ArrowRight } from "lucide-react";
// import ServiceCard from "@/components/ui/ServiceCard";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

type FaIconsType = { [key: string]: IconType };
const ICONS: { [key: string]: ComponentType<{ className?: string }> } = {
  ...FaIcons,
};

type CTAType = {
  label: string;
  href?: string;
  action?: "link" | "modal" | "external";
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
  bgColor: string;
};

interface TemplateProps {
  category: CategoryType;
  services: ServiceType[];
}

interface ServiceCardProps {
  icon?:  string | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  features?: string[];
  bgColor?: string;
}
// Enhanced ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  href, 
  features 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent =
    typeof icon === "string" ? ICONS[icon] : icon || FaIcons.FaLeaf;

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 
                 hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 
                 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon Section */}
        <div className="mb-6">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 
                           flex items-center justify-center shadow-lg transform transition-all duration-500
                           ${isHovered ? 'rotate-6 scale-110' : 'rotate-0 scale-100'}`}>
              {IconComponent ? (
                <IconComponent className="w-8 h-8 text-white" />
              ) : (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            
            {/* Animated Ring */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-green-400 transition-all duration-500
                           ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 
                     transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features (if provided) */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <div className="text-center">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold 
                     transition-all duration-300 group-hover:gap-3"
          >
            <span>Learn More</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>


      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

/* -------------------- ICON HANDLER -------------------- */
const SectionIcon = ({ name }: { name: string }) => {
  const Icon = (FaIcons as FaIconsType)[name];
  return Icon ? <Icon className="text-green-600 text-3xl" /> : null;
};

/* -------------------- HERO SECTION -------------------- */
const Hero = ({
  category,
  onModalOpen,
}: {
  category: CategoryType;
  onModalOpen: () => void;
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src={category.hero.image}
          alt={category.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="container relative z-10 mx-auto px-4 text-white py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          {category.tagline}
        </h1>
        <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
          {category.hero.headline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {category.hero.cta?.map((cta, index) => {
            if (cta.action === "modal" || cta.label.toLowerCase().includes("join") || "Become" ) {
              return (
                <button
                  key={index}
                  onClick={onModalOpen}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                        : "bg-white text-green-600 border-2 border-white hover:bg-gray-50"
                    }`}>
                  <span>{cta.label}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              );
            } else if (cta.action === "external") {
              return (
                <a
                  key={index}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                        : "bg-white text-green-600 border-2 border-white hover:bg-gray-50"
                    }`}>
                  <span>{cta.label}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={cta.href ?? "#"}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                        : "bg-white text-green-600 border-2 border-white hover:bg-gray-50"
                    }`}>
                  <span>{cta.label}</span>
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </Link>
              );
            }
          })}
        </div>
      </div>
        </div>
      </div>

      

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

/* -------------------- CATEGORY SECTIONS -------------------- */
const CategorySections = ({ category }: { category: CategoryType }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-2">
        {category.sections.map((s) => (
          <div
            key={s.id}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <SectionIcon name={s.icon} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-3">{s.description}</p>
              <Link
                href={s.link}
                className="text-green-600 font-medium hover:underline text-sm"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------- RELATED SERVICES -------------------- */
const RelatedServices = ({ services }: { services: ServiceType[] }) => {
  if (!services.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Related Services
        </h2>
        <p className="text-gray-600 mb-10">
          Explore services that fall under this category
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.id} 
            className={`transform transition-all duration-700 animate-delay-
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}>
              <ServiceCard
                href={s.href}
                title={s.title}
                description={s.shortDescription}
                bgColor={s.bgColor}
                icon={s.icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* -------------------- CATEGORY TEMPLATE -------------------- */
const CategoryTemplate = ({ category, services }: TemplateProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero category={category} onModalOpen={() => setIsModalOpen(true)} />
      <CategorySections category={category} />
      <RelatedServices services={services} />
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

/* -------------------- EXPORTS -------------------- */
export const FarmersTemplate = CategoryTemplate;
export const AgroDealersTemplate = CategoryTemplate;
export const PartnersTemplate = CategoryTemplate;
export const InvestorsTemplate = CategoryTemplate;
export default CategoryTemplate;

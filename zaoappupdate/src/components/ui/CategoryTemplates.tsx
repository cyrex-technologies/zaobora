// src/components/ui/CategoryTemplates.tsx
"use client";

import React, { useState, useEffect, ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import * as FaIconsOld from "react-icons/fa";
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  TrendingUp,
  ChevronRight,
  Sparkles
} from "lucide-react";
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

/* ==================== SERVICE CARD ==================== */
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
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = typeof icon === "string" ? ICONS[icon] : icon;
  
  return (
    <Link href={href}>
      <div 
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-500 p-6 h-full transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon */}
          <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl mb-4 shadow-lg transform transition-all duration-500 ${
            isHovered ? 'rotate-6 scale-110' : 'rotate-0 scale-100'
          }`}>
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>
          
          {/* Link */}
          <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </Link>
  );
};

/* ==================== HERO SECTION ==================== */
const Hero = ({
  category,
  onLeadModalOpen,
}: {
  category: CategoryType;
  onLeadModalOpen: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
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
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-green-400/30 shadow-lg mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>{category.title}</span>
          </div>

          {/* Title */}
          <div className={`space-y-6 mb-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              {category.tagline}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
          </div>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-10 drop-shadow-lg transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {category.hero.headline}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row flex-wrap gap-4 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {category.hero.cta.map((cta, i) => (
              <button
                key={i}
                onClick={onLeadModalOpen}
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 0 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/50' 
                    : 'backdrop-blur-sm bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{cta.label}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

/* ==================== CATEGORY SECTIONS ==================== */
const CategorySections = ({
  category,
  onInquiryModalOpen,
  onLeadModalOpen,
}: {
  category: CategoryType;
  onInquiryModalOpen: () => void;
  onLeadModalOpen: () => void;
}) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    category.sections.forEach((section) => {
      const element = document.getElementById(`section-${section.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [category.sections]);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Solutions for You
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </div>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">
          {category.sections.map((section, index) => {
            const IconComponent = ICONS[section.icon] ?? FaIcons.FaLeaf;
            const reversed = index % 2 !== 0;
            const isVisible = visibleSections.has(`section-${section.id}`);

            return (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${reversed ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Content */}
                <div className={reversed ? 'lg:col-start-2' : ''}>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <IconComponent className="text-white text-2xl md:text-3xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    {section.fullDescription || section.description}
                  </p>

                  {/* Features */}
                  {section.features && section.features.length > 0 && (
                    <div className="space-y-4 mb-6">
                      {section.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                          <Target className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">{f.title}:</strong>{" "}
                            <span className="text-gray-600">{f.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Benefits */}
                  {section.benefits && section.benefits.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {section.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Process Steps */}
                  {section.processSteps && section.processSteps.length > 0 && (
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-gray-900">Our Process</h4>
                      </div>
                      {section.processSteps.map((step) => (
                        <div key={step.step} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300 group">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                              {step.title}
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Testimonial */}
                  {section.testimonial && (
                    <blockquote className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500 shadow-lg mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl text-green-500 leading-none">&ldquo;</div>
                        <p className="text-lg italic text-gray-700 leading-relaxed">
                          {section.testimonial.quote}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          — {section.testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">{section.testimonial.location}</p>
                      </div>
                    </blockquote>
                  )}

                  {/* CTA Button */}
                  {section.cta && (() => {
  const label = section.cta.label.toLowerCase();

  const triggersInquiry =
    label.includes("inquiry") ||
    label.includes("contact") ||
    label.includes("request") ||
    label.includes("partner");

  const triggersLead =
    label.includes("join") ||
    label.includes("enroll") ||
    label.includes("become") ||
    label.includes("registration");

  if (triggersInquiry) {
    return (
      <button
        onClick={onInquiryModalOpen}
        className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {section.cta.label}
        <ArrowRight className="w-5 h-5" />
      </button>
    );
  }

  if (triggersLead) {
    return (
      <button
        onClick={onLeadModalOpen}
        className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {section.cta.label}
        <ArrowRight className="w-5 h-5" />
      </button>
    );
  }

  // Default → acts as a link
  return (
    <Link
      href={section.cta.href ?? "#"}
      className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      {section.cta.label}
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
})()}
                </div>

                {/* Image */}
                {section.image && (
                  <div className={`relative ${reversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                      <Image 
                        src={section.image} 
                        alt={section.title} 
                        fill 
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-2xl" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================== RELATED SERVICES ==================== */
const RelatedServices = ({ services }: { services: ServiceType[] }) =>
  !services.length ? null : (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600">
            Explore more services in this category
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
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

        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );

/* ==================== TEMPLATE WRAPPER ==================== */
const CategoryTemplate = ({ category, services }: TemplateProps) => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      <Hero category={category} onLeadModalOpen={() => setIsLeadModalOpen(true)} />
      <CategorySections 
        category={category} 
        onInquiryModalOpen={() => setIsInquiryModalOpen(true)}
        onLeadModalOpen={() => setIsLeadModalOpen(true)}
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
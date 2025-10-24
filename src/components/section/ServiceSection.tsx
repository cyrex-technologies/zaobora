"use client";

import { useState, useEffect, useRef } from "react";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";
import { FaUserGraduate, FaSeedling, FaStore, FaChartLine, FaHandshake } from 'react-icons/fa6';

const SECTION_CONTENT = {
  sectionId: "services",
  subtitle: "Our Services",
  title: "Explore Our Main Service Categories",
};
const CATEGORY_ICONS = {
  farmers: FaSeedling,
  agrodealers: FaStore,
  investors: FaChartLine,
  partners: FaHandshake,
};

// Proper TypeScript Interface for Service Card
interface ServiceCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  features?: string[];
  bgColor?: string;
}

// Enhanced ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: IconComponent, 
  title, 
  description, 
  href, 
  features 
}) => {
  const [isHovered, setIsHovered] = useState(false);

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

const ServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger card animations
          Object.keys(SERVICE_CATEGORIES).forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={SECTION_CONTENT.sectionId}
      className="relative py-20 overflow-hidden"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-services-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-green-50/90 to-white/95" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/25 rounded-full animate-ping duration-4000" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              <span className="text-green-600 uppercase font-semibold text-sm tracking-wide">
                {SECTION_CONTENT.subtitle}
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Explore Our Main</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Service Categories
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive services tailored to every aspect of the agricultural value chain. 
              From empowering farmers with modern tools to connecting agribusinesses with opportunities, 
              we&apos;re here to support your agricultural journey.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(SERVICE_CATEGORIES).map(([key, category], index) => (
            <div
              key={key}
              className={`transform transition-all duration-700 animate-delay-${index} ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <ServiceCard
                title={category.title}
                description={category.tagline}
                icon={CATEGORY_ICONS[key as keyof typeof CATEGORY_ICONS]}
                href={`/services/${key}`}
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServiceSection;
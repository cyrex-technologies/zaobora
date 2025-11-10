// src/app/services/page.tsx
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  FaFilter,   
  FaList,
  FaArrowRight,
} from "react-icons/fa6";
import { FaThLarge} from "react-icons/fa";
import { ICONS } from "@/lib/constants/icons";

import { SERVICES_CONTENT } from "@/lib/constants/service-list";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const heroRef = useRef<HTMLElement>(null);

  // Get unique categories
  const categories = ['all', ...new Set(SERVICES_CONTENT.cards.map(service => service.category))];

  // Filter services based on selected category
  const filteredServices = useMemo(() => {
  return selectedCategory === 'all'
    ? SERVICES_CONTENT.cards
    : SERVICES_CONTENT.cards.filter(service => service.category === selectedCategory);
}, [selectedCategory]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );

  if (heroRef.current) {
    observer.observe(heroRef.current);
  }

  return () => observer.disconnect();
}, []); // <-- Only run once

  useEffect(() => {
  if (!isVisible) return;

  setVisibleCards([]);
  filteredServices.forEach((_, index) => {
    setTimeout(() => {
      setVisibleCards(prev => [...prev, index]);
    }, index * 100);
  });
}, [isVisible, filteredServices]);

  return (
    
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 md:top-20 left-4 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-200/30 rounded-full animate-bounce" 
               style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-green-300/25 rounded-full animate-ping" 
               style={{ animationDuration: "4s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb */}
            <nav className={`flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-green-600 font-medium">Services</span>
            </nav>

            {/* Title */}
            <div className={`mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                <span className="text-green-600 uppercase font-semibold text-sm tracking-wide">
                  {SERVICES_CONTENT.subtitle}
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">{SERVICES_CONTENT.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {SERVICES_CONTENT.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {SERVICES_CONTENT.description}
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">{SERVICES_CONTENT.cards.length}</div>
                <div className="text-sm md:text-base text-gray-600">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">5,000+</div>
                <div className="text-sm md:text-base text-gray-600">Farmers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">5+</div>
                <div className="text-sm md:text-base text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-white border-b border-gray-200 top-16 md:top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <FaFilter className="text-gray-500 w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-100 text-green-700 border-2 border-green-300'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaThLarge className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                title="List View"
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-green-600">{filteredServices.length}</span> 
              {selectedCategory === 'all' ? ' services' : ` services in ${selectedCategory}`}
            </p>
          </div>

          {/* Services Display */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8' 
              : 'space-y-6'
          }`}>
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {viewMode === 'grid' ? (
                  // Grid Card View
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 
                             hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 p-6 md:p-8">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="relative w-16 h-16 mx-auto">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgColor} 
                                         flex items-center justify-center shadow-lg transform 
                                         group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                            {service.icon && ICONS[service.icon as keyof typeof ICONS] ? (
                              React.createElement(ICONS[service.icon as keyof typeof ICONS], { className: "w-8 h-8 text-white" })
                            ) : (
                              <span className="text-2xl">{service.emoji}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="text-center mb-3">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {service.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 
                                   transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-center mb-6 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <ul className="space-y-1 mb-6">
                          {service.features.slice(0, 2).map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <div className="text-center">
                        <span className="inline-flex items-center gap-2 text-green-600 font-semibold 
                                       transition-all duration-300 group-hover:gap-3">
                          <span>Learn More</span>
                          <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.bgColor} 
                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </Link>
                ) : (
                  // List View
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 
                             hover:border-green-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        
                        {/* Icon & Category */}
                        <div className="text-center md:text-left">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgColor} 
                                         flex items-center justify-center shadow-lg mx-auto md:mx-0 mb-3 
                                         transform group-hover:scale-110 transition-all duration-500`}>
                            {service.icon && ICONS[service.icon as keyof typeof ICONS] ? (
                              React.createElement(ICONS[service.icon as keyof typeof ICONS], { className: "w-8 h-8 text-white" })
                            ) : (
                              <span className="text-2xl">{service.emoji}</span>
                            )}
                          </div>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {service.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 
                                       transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed line-clamp-2">
                            {service.shortDescription}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="text-center md:text-right">
                          <span className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 
                                         font-semibold transition-all duration-300 group-hover:gap-3">
                            <span>Learn More</span>
                            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFilter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Services Found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category or view all services.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>


    </div>
  );
};

export default ServicesPage;
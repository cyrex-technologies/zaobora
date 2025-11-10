"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaQuoteRight, FaMapMarkerAlt, FaChartLine, FaArrowRight } from "react-icons/fa";
import type { SuccessStory, SuccessStoryCardProps, SuccessStoriesSectionProps } from "@/types/success-story";

// Reusable Success Story Card Component
const SuccessStoryCard = ({ story, index }: SuccessStoryCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        ${index === 0 ? 'delay-0' : index === 1 ? 'delay-150' : index === 2 ? 'delay-300' : 'delay-450'}`}
    >
      {/* Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" />
      
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <FaQuoteRight className="w-16 h-16 text-green-600" />
      </div>

      <div className="p-8 relative z-10">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{story.location}</span>
        </div>

        {/* Story Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {story.content}
        </p>

        {/* Impact Metric */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <FaChartLine className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-green-700">{story.impact}</div>
            <div className="text-sm text-gray-600">{story.metric}</div>
          </div>
        </div>

        {/* Farmer Info */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {story.farmer.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{story.farmer}</div>
              <div className="text-sm text-gray-500">{story.crop} Farmer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// Main Success Stories Section Component
const SuccessStories = ({ 
  title = "Real Stories, Real Impact",
  subtitle = "See how we've helped farmers across Tanzania transform their agricultural practices and boost their livelihoods.",
  stories = defaultStories,
  showAll = false 
}: SuccessStoriesSectionProps) => {
  const displayedStories = showAll ? stories : stories.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-6" />
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story, index) => (
            <SuccessStoryCard key={index} story={story} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {/* {!showAll && stories.length > 3 && (
          <div className="text-center mt-12">
            <Link 
              href="/services/farmers"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>View All Success Stories</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )} */}
      </div>
    </section>
  );
};

// Default stories data
const defaultStories: SuccessStory[] = [
  {
    farmer: "John Mwamba",
    location: "Songwe Region",
    crop: "Maize",
    content: "With Zaobora's expert guidance on soil management and fertilizer application, I increased my maize yield significantly. Their training on modern farming techniques was a game-changer for my family.",
    impact: "+65%",
    metric: "Yield Increase"
  },
  {
    farmer: "Grace Kilima",
    location: "Mbeya Region",
    crop: "Coffee",
    content: "Zaobora helped our cooperative secure credit from a local bank and connected us with premium buyers. Our coffee now fetches better prices, and we've expanded our farming operations.",
    impact: "TZS 15M",
    metric: "Additional Income"
  },
  {
    farmer: "Daniel Ngowi",
    location: "Arusha Region",
    crop: "Vegetables",
    content: "Through Zaobora's sustainable farming program, I learned water conservation techniques and organic pest control. My production costs dropped while my harvest quality improved dramatically.",
    impact: "-40%",
    metric: "Cost Reduction"
  },
  {
    farmer: "Amina Hassan",
    location: "Morogoro Region",
    crop: "Rice",
    content: "The market linkage program connected me directly with wholesalers. No more middlemen taking huge cuts. My profits have tripled, and I'm now training other women farmers.",
    impact: "+200%",
    metric: "Profit Growth"
  },
  {
    farmer: "Peter Komba",
    location: "Kilimanjaro Region",
    crop: "Bananas",
    content: "Zaobora's agronomists helped me diagnose a persistent disease affecting my banana plantation. With their recommended treatments and practices, I recovered 80% of my crops.",
    impact: "80%",
    metric: "Crop Recovery"
  },
  {
    farmer: "Neema Mollel",
    location: "Tanga Region",
    crop: "Cashew Nuts",
    content: "After joining Zaobora's training program, I adopted modern pruning and grafting techniques. My cashew trees are now more productive, and the quality commands premium prices.",
    impact: "+90%",
    metric: "Quality Premium"
  }
];

export default SuccessStories;
export { SuccessStoryCard };
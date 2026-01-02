"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaChartLine, FaUsers, FaAward } from "react-icons/fa6";
import { HERO_CONTENT } from "@/lib/constants/hero";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-Screen Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-[url('/img/hero/zaobora-hero.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 ${
            mounted ? `translate-y-[${Math.floor(scrollY * 0.5)}px]` : ''
          }`}
        />
        {/* Multi-layer Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-32">
        <div className="max-w-4xl">
          
          {/* Badge */}
          {/* <div className={`inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-green-400/30 shadow-lg mb-8 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Empowering Farmers Since 2020</span>
          </div> */}

          {/* Main Heading */}
          <div className={`space-y-6 mb-8 transform transition-all duration-1000 delay-200 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl text-green-400 md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {HERO_CONTENT.title}
            </h1>
            
            <div className="w-24 h-1.5 bg-linear-to-r from-green-400 to-emerald-400 rounded-full" />
          </div>

          {/* Description */}
          < p className={`text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mb-12 transform transition-all duration-1000 delay-300 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {HERO_CONTENT.description}
          </p>

          {/* Statistics */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 transform transition-all duration-1000 delay-500 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{HERO_CONTENT.statistics.farmersServed}+</div>
                  <div className="text-sm text-gray-300">{HERO_CONTENT.statistics.farmersServedlabel}</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-300">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaAward className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-gray-300">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16 transform transition-all duration-1000 delay-400 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 
                       text-white px-8  py-4 rounded-xl font-semibold shadow-2xl hover:shadow-green-500/50 
                       transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-lg">Join Us Today</span>
              <FaArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                           transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <a 
              href={HERO_CONTENT.cta.href}
              className="group inline-flex items-center gap-2 text-white hover:text-green-400 
                       font-semibold text-lg px-6 py-4 rounded-xl backdrop-blur-sm bg-white/10 
                       border border-white/20 hover:border-green-400/50 transition-all duration-300"
            >
              <span>{HERO_CONTENT.cta.label}</span>
              {<HERO_CONTENT.cta.icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
            </a>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}

      {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Lead Capture Modal - Rendered at root level */}
      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
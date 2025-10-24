"use client";

import Image from "next/image";
// import Link from "next/link";
import { useState, useEffect } from "react";
import { HERO_CONTENT } from "@/lib/constants/hero";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-200/20 rounded-full animate-bounce" 
             style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-green-300/40 rounded-full animate-pulse" 
             style={{ animationDelay: "2s" }} />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Empowering Farmers Since 2020</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Empowering</span>
                <span className="block">
                  Farmers to enhance 
                </span>
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" >livelihoods</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {HERO_CONTENT.description}
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">Farmers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
             {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={HERO_CONTENT.cta.href}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                         text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{HERO_CONTENT.cta.label}</span>
                <HERO_CONTENT.cta.icon className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
               
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gray-700 hover:text-green-600 
                         font-medium transition-colors duration-300"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div> */}

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sustainable Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div> */}
          </div>

          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Image Container with Parallax */}
            <div className="relative" 
                 style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={HERO_CONTENT.image.src}
                  alt={HERO_CONTENT.image.alt}
                  width={HERO_CONTENT.image.width}
                  height={HERO_CONTENT.image.height}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-green-100 
                            transform hover:scale-105 transition-all duration-300 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Success Rate</div>
                    <div className="text-sm text-gray-600">98% Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-emerald-100 
                            transform hover:scale-105 transition-all duration-300 animate-float" 
                   style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Revenue</div>
                    <div className="text-sm text-gray-600">+150% Boost</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 
                            rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 
                            rounded-full opacity-30 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};


// const styles = `
//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-10px); }
//   }
  
//   .animate-float {
//     animation: float 3s ease-in-out infinite;
//   }
// `;

export default HeroSection;
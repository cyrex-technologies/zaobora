"use client";

import Image from "next/image";
// import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ABOUT_CONTENT } from "@/lib/constants/about";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={ABOUT_CONTENT.sectionId} 
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-40 h-40 bg-green-100 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-32 h-32 bg-emerald-100 rounded-full opacity-40 animate-bounce" 
             style={{ animationDelay: "1s" }} />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2334d399' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-green-100 to-emerald-100">
                <Image
                  src={ABOUT_CONTENT.image.src}
                  alt={ABOUT_CONTENT.image.alt}
                  width={ABOUT_CONTENT.image.width}
                  height={ABOUT_CONTENT.image.height}
                  className={`w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 via-transparent to-emerald-600/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-green-100 
                            transform rotate-3 hover:rotate-0 transition-transform duration-300 group-hover:scale-110">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2020</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white 
                            rounded-xl shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300 
                            group-hover:scale-110">
                <div className="text-center">
                  <div className="text-xl font-bold">5000+</div>
                  <div className="text-xs opacity-90">Farmers Empowered</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-green-200/30 rounded-full animate-ping" 
                   style={{ animationDuration: "3s" }} />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-300/40 rounded-full animate-pulse" 
                   style={{ animationDelay: "1.5s" }} />
            </div>
          </div>

          {/* Content Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Section Header */}
            <div className="mb-8">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                <span className="text-green-600 uppercase font-semibold text-sm tracking-wide">
                  {ABOUT_CONTENT.subtitle}
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                <span className="block">{ABOUT_CONTENT.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {ABOUT_CONTENT.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {ABOUT_CONTENT.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 
                              hover:bg-green-100 hover:border-green-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sustainable</div>
                    <div className="text-sm text-gray-600">Farming Methods</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 
                              hover:bg-emerald-100 hover:border-emerald-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Community</div>
                    <div className="text-sm text-gray-600">Focused Support</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 
                              hover:bg-green-100 hover:border-green-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Expert</div>
                    <div className="text-sm text-gray-600">Guidance</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 
                              hover:bg-emerald-100 hover:border-emerald-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Proven</div>
                    <div className="text-sm text-gray-600">Results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {/* <Link
              href={ABOUT_CONTENT.cta.href}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                       text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">{ABOUT_CONTENT.cta.label}</span>
              <ABOUT_CONTENT.cta.icon className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link> */}

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Building sustainable agricultural value chains that uplift rural communities while promoting 
                    environmental stewardship and climate-smart farming practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
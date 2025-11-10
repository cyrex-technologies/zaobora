"use client";

import { useState, useEffect, useRef } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa6';


const ContactInfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Visit Our Office",
      subtitle: "Address",
      content: "Mbeya, Tanzania",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      href: "https://maps.google.com/?q=Mbeya,Tanzania"
    },
    {
      icon: FaPhone,
      title: "Call Us Anytime",
      subtitle: "Talk to Us",
      content: "(+255) 752 563 361",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
      href: "tel:+255752563361"
    },
    {
      icon: FaEnvelope,
      title: "Send Email",
      subtitle: "Email Address",
      content: "info@zaobora.co.tz",
      color: "from-green-600 to-emerald-400",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      href: "mailto:info@zaobora.co.tz"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          contactInfo.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <section 
      ref={sectionRef}
      id="contact-us" 
      className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-emerald-200/30 rounded-full animate-bounce" 
             style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            <span className="text-green-600 uppercase font-semibold text-sm tracking-wide">
              Contact Information
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your farming? Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group block ${info.bgColor} ${info.hoverColor} rounded-2xl shadow-lg hover:shadow-2xl 
                          border border-gray-100 hover:border-green-200 transition-all duration-500 
                          transform hover:-translate-y-2 p-8 h-full`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} 
                                 flex items-center justify-center shadow-lg transform 
                                 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 
                               transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  <p className="text-sm text-green-600 font-medium uppercase tracking-wide">
                    {info.subtitle}
                  </p>
                  
                  <p className="text-gray-700 font-medium">
                    {info.content}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-green-600 opacity-0 group-hover:opacity-100 
                              transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-medium">Connect now</span>
                  <FaArrowRight className="w-4 h-4" />
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                              rounded-b-2xl`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactInfoSection;
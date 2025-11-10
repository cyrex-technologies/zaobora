// src/components/services/ServicePage.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ChevronRight, 
  Send, 
  Phone, 
  Mail,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import * as FaIcons from "react-icons/fa6";
import * as FaIconsOld from "react-icons/fa";
import type { IconType } from "react-icons";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";
import ContactInquiryModal from "@/components/ui/ContactInquiryModal";

const ICONS: Record<string, IconType> = { ...FaIcons, ...FaIconsOld };

interface ServiceData {
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription?: string;
  keyBenefits?: string[];
  detailedServices?: { title: string; description: string; icon: string }[];
  processSteps?: { step: number; title: string; description: string }[];
}

export default function ServicePage({ serviceData }: { serviceData: ServiceData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLElement>(null);

  // Hero reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true), 
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Section reveal animations
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

    const sections = ['overview', 'services', 'process', 'benefits'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getIcon = (name: string): IconType | null => ICONS[name] ?? null;

  const handlePrimaryCTA = () => setLeadModalOpen(true);
  const handleInquiryCTA = () => setInquiryModalOpen(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-green-50 via-emerald-50 to-white overflow-hidden"
      >
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                <Link 
                  href="/" 
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link 
                  href="/services" 
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-green-600 font-semibold">{serviceData.title}</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{serviceData.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {serviceData.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {serviceData.shortDescription}
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleInquiryCTA}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-green-500/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </button>
                
                <a
                  href="tel:+255752563361"
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-600 border-2 border-green-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={serviceData.image || "/img/placeholders/service-placeholder.jpg"}
                  alt={serviceData.title}
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* LEFT: MAIN CONTENT (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16 lg:space-y-20">

            {/* Overview Section */}
            {serviceData.fullDescription && (
              <div
                id="overview"
                className={`transform transition-all duration-1000 ${
                  visibleSections.has('overview') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Overview
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {serviceData.fullDescription}
                </p>
              </div>
            )}

            {/* What We Do Section */}
            {serviceData.detailedServices && serviceData.detailedServices.length > 0 && (
              <div
                id="services"
                className={`transform transition-all duration-1000 ${
                  visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    What We Do
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                
                <div className="grid gap-6 md:gap-8">
                  {serviceData.detailedServices.map((item, idx) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <div 
                        key={idx} 
                        className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {Icon && <Icon className="text-white text-2xl md:text-3xl" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Process Section */}
            {serviceData.processSteps && serviceData.processSteps.length > 0 && (
              <div
                id="process"
                className={`transform transition-all duration-1000 ${
                  visibleSections.has('process') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    How It Works
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {serviceData.processSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="relative p-6 border-2 border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-xl hover:border-green-500 transition-all duration-300 group"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      
                      <div className="pt-4">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Connection Line (except last item) */}
                      {idx < serviceData.processSteps!.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {serviceData.keyBenefits && serviceData.keyBenefits.length > 0 && (
              <div
                id="benefits"
                className={`transform transition-all duration-1000 ${
                  visibleSections.has('benefits') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Key Benefits
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {serviceData.keyBenefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CTA SIDEBAR (1/3 width on large, full width on mobile) */}
          <aside className="lg:col-span-1">
            {/* Sticky container for desktop */}
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* Primary CTA Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white shadow-2xl">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Need This Service?
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Speak with our team for support, quotation, or collaboration opportunities.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleInquiryCTA}
                    className="w-full py-3 md:py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-yellow-300 hover:scale-105 transform transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </button>

                  <a
                    href="tel:+255752563361"
                    className="w-full py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>

                <p className="text-sm text-white/80 mt-6 pt-6 border-t border-white/20">
                  ⏱️ Response time: within 24 hours
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Quick Contact</h4>
                <div className="space-y-3 text-sm">
                  <a 
                    href="tel:+255752563361" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+255 752 563 361</span>
                  </a>
                  <a 
                    href="mailto:info@zaobora.com" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@zaobora.com</span>
                  </a>
                </div>
              </div>

              {/* Related Services Link */}
              <Link
                href="/services"
                className="block p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-200">
                      Explore More Services
                    </h4>
                    <p className="text-sm text-gray-600">
                      View our full service catalog
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Modals */}
      <LeadCaptureModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
      <ContactInquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
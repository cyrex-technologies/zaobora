// src/components/services/ServicePage.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import * as FaIcons from "react-icons/fa6";
import * as FaIconsOld from "react-icons/fa";
import { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  ...FaIcons,
  ...FaIconsOld, 
};

interface ServiceData {
  title: string;
  emoji?: string;
  icon?: string;
  category: string;
  shortDescription: string;
  description: string;
  fullDescription?: string;
  keyBenefits?: string[];
  detailedServices?: { title: string; description: string; icon: string }[];
  processSteps?: { step: number; title: string; description: string }[];
  bgColor?: string;
}

export default function ServicePage({ serviceData }: { serviceData: ServiceData }) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-green-600 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-green-600 transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-green-600 font-medium">{serviceData.title}</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-xl">{serviceData.emoji}</span>
                <span>{serviceData.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {serviceData.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {serviceData.shortDescription}
              </p>
            </div>

            {/* Hero Image */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                src="/img/service/farmer-training.jpg"
                alt={serviceData.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-20 container mx-auto px-4 lg:px-6">

        {/* Overview */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{serviceData.fullDescription}</p>
        </div>

        {/* What We Do */}
        {serviceData.detailedServices?.length ? (
          <div className="mb-16 max-w-4xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What We Do</h3>
            <div className="space-y-6">
              {serviceData.detailedServices.map((item, idx) => {
                const IconComponent = ICONS[item.icon];
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                      {IconComponent && <IconComponent className="text-green-600 text-2xl" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Process Steps */}
        {serviceData.processSteps?.length ? (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Process</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {serviceData.processSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold mb-4">{step.step}</div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Key Benefits */}
        {serviceData.keyBenefits?.length ? (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceData.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <FaCheck className="text-green-600 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

      </section>
    </div>
  );
}

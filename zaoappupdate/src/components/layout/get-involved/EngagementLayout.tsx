"use client";

import { ReactNode } from "react";
import Link from "next/link";


interface EngagementLayoutProps {
  breadcrumbLabel: string;   // e.g. "Volunteer"
  breadcrumbColor?: string;  // Tailwind color e.g. "yellow-600"
  gradientFrom?: string;     // gradient start color
  gradientTo?: string;       // gradient end color
  title: string;             // main hero title
  highlight: string;         // highlighted word
  children: ReactNode;       // the body content (form, listings, etc.)
}

export default function EngagementLayout({
  breadcrumbLabel,
  breadcrumbColor = "green-600",
  gradientFrom = "green-50",
  gradientTo = "emerald-100",
  title,
  highlight,
  children,
}: EngagementLayoutProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section
        className={`relative pt-20 md:pt-24 pb-12 text-center md:pb-16 bg-gradient-to-br from-${gradientFrom} via-white to-${gradientTo}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-${breadcrumbColor}">Home</Link>
            <span>/</span>
            <span className={`text-${breadcrumbColor} font-medium`}>{breadcrumbLabel}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}{" "}
            <span
              className={`bg-gradient-to-r from-${breadcrumbColor} to-${gradientTo.replace(
                "-100",
                "-600"
              )} bg-clip-text text-transparent`}
            >
              {highlight}
            </span>
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <main>{children}</main>

    </div>
  );
}

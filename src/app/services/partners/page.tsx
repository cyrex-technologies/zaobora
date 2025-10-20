// src/app/partners/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa6";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";

export default function PartnersPage() {
  const category = SERVICE_CATEGORIES.partners;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-200/20 rounded-full animate-ping" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <FaHandshake className="w-4 h-4" />
                <span>{category.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Collaborate for</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Lasting Impact
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {category.hero.headline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={category.hero.cta[0].href}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                           text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                           transform hover:scale-105 transition-all duration-300"
                >
                  <span>{category.hero.cta[0].label}</span>
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/assets/img/partners/partnership.jpg"
                  alt="Partnership collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Active Partnerships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from meaningful partnerships across southern Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {category.sections[0].stats!.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl 
                                        border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={category.sections[0].cta!.href}
              className="inline-flex items-center gap-3 text-green-600 hover:text-emerald-700 font-semibold 
                       border-2 border-emerald-200 hover:border-emerald-300 px-8 py-4 rounded-xl transition-all duration-300"
            >
              <span>{category.sections[0].cta!.label}</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring field expertise, community trust, and data-driven results to every partnership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {category.sections[1].reasons!.map((reason, index) => {
              const icons = [FaChartLine, FaUsers, FaHandshake];
              const IconComponent = icons[index];
              
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                                          transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl 
                                flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href={category.sections[1].cta!.href}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                       text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300"
            >
              <span>{category.sections[1].cta!.label}</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600">
                We work with diverse organizations to maximize impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">NGOs & Development Organizations</h3>
                <ul className="space-y-3">
                  {[
                    "Joint training programs for farmers",
                    "Research and demonstration projects",
                    "Community-based extension services",
                    "Impact monitoring and evaluation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Institutions</h3>
                <ul className="space-y-3">
                  {[
                    "Field trials and data collection",
                    "Technology validation and scaling",
                    "Farmer feedback and adoption studies",
                    "Knowledge sharing and publications"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cooperatives & Farmer Groups</h3>
                <ul className="space-y-3">
                  {[
                    "Member training and capacity building",
                    "Input supply chain coordination",
                    "Market linkage support",
                    "Group management advisory"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government & Local Authorities</h3>
                <ul className="space-y-3">
                  {[
                    "Extension service enhancement",
                    "Policy implementation support",
                    "Community mobilization",
                    "Sustainable development initiatives"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.sections[2].title}
              </h2>
              <p className="text-xl text-gray-600">
                {category.sections[2].description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Organization name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@organization.org"
                  />
                </div>

                <div>
                  <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="areaOfInterest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select an option</option>
                    <option value="training">Training Programs</option>
                    <option value="research">Research Collaboration</option>
                    <option value="extension">Extension Services</option>
                    <option value="funding">Funding Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    placeholder="Tell us about your organization and how you'd like to collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold 
                           py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                           transition-all duration-300"
                >
                  {category.sections[2].cta!.label}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Lasting Impact Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in empowering farmers and building sustainable agricultural systems across Tanzania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 
                       rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <span>Schedule a Meeting</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="mailto:info@zaobora.co.tz"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 
                       border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 
                       transition-all duration-300"
            >
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
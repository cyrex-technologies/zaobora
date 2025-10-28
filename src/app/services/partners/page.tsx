// src/app/partners/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa6";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";

export default function PartnersPage() {
  const category = SERVICE_CATEGORIES.partners;

  return (
    <>
      {/* Hero Section with Full Background */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={category.hero.image}
            alt="Partnership collaboration"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-emerald-900/60 to-black/70" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400/20 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-400/15 rounded-full animate-ping" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Content */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <FaHandshake className="w-4 h-4" />
              <span>{category.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="block">Collaborate for</span>
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Lasting Impact
              </span>
            </h1>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              {category.hero.headline}
            </p>

            {/* Partnership Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-xs md:text-sm text-white/80">Active Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-xs md:text-sm text-white/80">Farmers Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-xs md:text-sm text-white/80">Projects</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={category.hero.cta[0].href}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 
                         text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300"
              >
                <span>{category.hero.cta[0].label}</span>
                <FaArrowRight className="w-5 h-5" />
              </Link>

              {/* <Link
                href="/partners/opportunities"
                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm 
                         text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold 
                         hover:bg-white/30 transition-all duration-300"
              >
                <span>View Opportunities</span>
              </Link> */}
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

          {/* <div className="text-center">
            <Link
              href={category.sections[0].cta!.href}
              className="inline-flex items-center gap-3 text-green-600 hover:text-emerald-700 font-semibold 
                       border-2 border-emerald-200 hover:border-emerald-300 px-8 py-4 rounded-xl transition-all duration-300"
            >
              <span>{category.sections[0].cta!.label}</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div> */}
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
      {/* <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
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
      </section> */}
    </>
  );
}
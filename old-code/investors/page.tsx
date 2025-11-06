// src/app/investors/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaDownload, FaLeaf } from "react-icons/fa6";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";
// Header and Footer moved to route layout

export default function InvestorsPage() {

  return (
    <>

      {/* Hero Section with Full Background */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_CATEGORIES.investors.hero.image}
            alt="Sustainable Agriculture Investment"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better form readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-green-900/70" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-400/15 rounded-full animate-ping" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Investment Opportunities
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
                Invest in Africa&apos;s Agricultural Future
              </h1>
              
              <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
                Partner with us to scale regenerative farming practices across Tanzania, creating sustainable value for farmers, communities, and the environment.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-2xl">🌱</span>
                  <span className="text-sm font-medium">10,000+ Farmers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-2xl">📊</span>
                  <span className="text-sm font-medium">Proven Impact</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm font-medium">SDG Aligned</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Investor Information</h3>
              <p className="text-gray-600 mb-6">Let&apos;s explore how we can work together</p>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                                 focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interest *
                  </label>
                  <select
                    id="investmentInterest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                             focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value="">Select your interest</option>
                    <option value="program-funding">Program Funding</option>
                    <option value="operational-support">Operational Support</option>
                    <option value="research-partnership">Research Partnership</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                             focus:ring-2 focus:ring-green-500 resize-none bg-white"
                    placeholder="Tell us about your investment goals and how you'd like to support our mission..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold 
                           py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                           transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Request a Meeting</span>
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Invest in Sustainable Agriculture?
            </h2>
            <p className="text-xl text-white/90">
              Your investment creates ripple effects across communities, ecosystems, and generations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🌍",
                title: "Environmental Impact",
                description: "Restore degraded soils, increase carbon sequestration, and promote biodiversity"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Social Impact",
                description: "Improve food security, increase rural incomes, and strengthen communities"
              },
              {
                icon: "📈",
                title: "Economic Impact",
                description: "Build sustainable value chains, create jobs, and foster rural prosperity"
              }
            ].map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{impact.icon}</div>
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="text-white/80 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <FaLeaf className="w-5 h-5 text-emerald-400" />
              <span className="text-white/90">Aligned with UN Sustainable Development Goals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Lasting Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in building resilient farming systems that restore soils and strengthen rural livelihoods across Tanzania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/investors/brief.pdf"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 
                       rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <FaDownload className="w-5 h-5" />
              <span>Download Investor Brief</span>
            </Link>
            
            <Link
              href="/investors/meeting"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 
                       border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 
                       transition-all duration-300"
            >
              <span>Schedule a Meeting</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section> */}

      </>
  );
}
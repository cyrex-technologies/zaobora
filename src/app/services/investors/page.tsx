// src/app/investors/page.tsx
import Link from "next/link";
import { FaArrowRight, FaDownload, FaLeaf } from "react-icons/fa6";
// Header and Footer moved to route layout

export default function InvestorsPage() {

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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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
                             focus:ring-2 focus:ring-indigo-500 bg-white"
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
                    rows={5}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
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
      </section>

      </>
  );
}
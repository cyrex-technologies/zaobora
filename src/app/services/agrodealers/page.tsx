// src/app/agrodealers/page.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaStore, FaChartLine, FaHandshake, FaUsers, FaSeedling } from "react-icons/fa6";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function AgroDealersPage() {
  const category = SERVICE_CATEGORIES.agrodealers;
    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      {/* Hero Section with Full Background */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_CATEGORIES.agrodealers.hero.image}
            alt="Agro-dealer business"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-green-900/70" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400/15 rounded-full animate-ping" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Content */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <FaStore className="w-4 h-4" />
              <span>{category.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="block">Grow Your Business</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                with Zao Bora
              </span>
            </h1>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-2xl">
              {category.hero.headline}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/90 rounded-lg flex items-center justify-center">
                    <FaUsers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-xs text-white/80">Farmers</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/90 rounded-lg flex items-center justify-center">
                    <FaChartLine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">+35%</div>
                    <div className="text-xs text-white/80">Sales Growth</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 col-span-2 md:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/90 rounded-lg flex items-center justify-center">
                    <FaHandshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">250+</div>
                    <div className="text-xs text-white/80">Partner Dealers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                // href={category.hero.cta[0].href}
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                         text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300"
              >
                <span>{category.hero.cta[0].label}</span>
                <FaArrowRight className="w-5 h-5" />
              </button>

              {/* <Link
                href="/agrodealers/benefits"
                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm 
                         text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold 
                         hover:bg-white/30 transition-all duration-300"
              >
                <span>Learn More</span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/*  Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Zao Bora
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network and unlock new opportunities for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
                {
                icon: FaUsers,
                title: "Large Farmer Network",
                description: "Connect with thousands of verified farmers through our field teams",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaSeedling,
                title: "Product Promotion",
                description: "Showcase your fertilizers, seeds, and crop protection products",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaChartLine,
                title: "Market Insights",
                description: "Get data on farmer demand trends and seasonal needs",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaHandshake,
                title: "Training & Events",
                description: "Participate in training sessions and field demonstration days",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                                        border border-gray-100 transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl 
                              flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            {/* <Link
              href="/agrodealers/register"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                       text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300"
            >
              <span>Register as a Partner Dealer</span>
              <FaArrowRight className="w-5 h-5" />
            </Link> */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process to join our dealer network
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 via-emerald-300 to-emerald-300" />
              
              {[
                {
                  step: "1",
                  title: "Register & Verify",
                  description: "Submit your business details and complete our simple verification process",
                  icon: "📝"
                },
                {
                  step: "2",
                  title: "Get Connected",
                  description: "We introduce you to farmers in your area looking for quality inputs",
                  icon: "🤝"
                },
                {
                  step: "3",
                  title: "Grow Together",
                  description: "Build relationships, grow sales, and support sustainable agriculture",
                  icon: "📈"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 
                                border-2 border-green-100 hover:border-green-300 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full 
                                  flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto 
                                  shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4 text-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            {/* <Link
              href="/agrodealers/join"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                       text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300"
            >
              <span>Join Today</span>
              <FaArrowRight className="w-5 h-5" />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Dealers
            </h2>
            <p className="text-xl text-gray-600">
              Real results from agro-dealers in our network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl text-green-500">&ldquo;</div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  Since joining Zao Bora&apos;s network, my sales have increased by 40%. The farmers they connect me with 
                  are serious buyers who trust the recommendations.
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">– John Mwamba</p>
                <p className="text-gray-600">Agro-dealer, Mbeya</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl text-green-500">&ldquo;</div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  The training sessions helped me understand what farmers really need. Now I stock the right products 
                  at the right time, and my inventory moves faster.
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">– Grace Msigwa</p>
                <p className="text-gray-600">Agro-dealer, Iringa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What You Get as a Partner Dealer
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Direct Farmer Connections",
                  description: "Access to our database of verified farmers actively seeking quality inputs for their farms",
                  features: ["Pre-qualified buyers", "Location-based matching", "Regular farmer referrals"]
                },
                {
                  title: "Business Development Support",
                  description: "Training and resources to help you better serve farmers and grow your business",
                  features: ["Product knowledge workshops", "Sales technique training", "Seasonal planning guidance"]
                },
                {
                  title: "Market Intelligence",
                  description: "Stay ahead with data-driven insights on farmer needs and market trends",
                  features: ["Demand forecasting", "Crop calendar insights", "Competitive analysis"]
                },
                {
                  title: "Co-Marketing Opportunities",
                  description: "Participate in field days and demonstrations to showcase your products",
                  features: ["Joint field events", "Product demonstrations", "Farmer testimonials"]
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl 
                                    flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.features.map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 
                                                   text-green-700 rounded-full text-sm">
                            <FaCheck className="w-3 h-3" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s Talk
              </h2>
              <p className="text-xl text-gray-600">
                Ready to expand your agro-input business? Get in touch with our team.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                               focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                             focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="City, Region"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Products You Sell
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
                             focus:ring-2 focus:ring-green-500 resize-none bg-white"
                    placeholder="Tell us about the agricultural inputs you currently stock..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold 
                           py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                           transition-all duration-300"
                >
                  Submit Application
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
            Ready to Grow Your Agro-Input Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join other agro-dealers benefiting from our network, training, and market connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agrodealers/register"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 
                       rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <span>Register Now</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+255752563361"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 
                       border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 
                       transition-all duration-300"
            >
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
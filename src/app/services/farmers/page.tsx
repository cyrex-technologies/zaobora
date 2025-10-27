import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa6";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";

export default function FarmersPage() {
  const category = SERVICE_CATEGORIES.farmers;

  return (
    <>
      {/* Hero Section with Full Background Image */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={category.hero.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Content */}
            <div className="inline-block px-4 py-2 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              {category.title}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {category.tagline}
            </h1>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
              {category.hero.headline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {category.hero.cta.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${index === 0 ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' : 'bg-white text-green-600 border-2 border-white hover:bg-gray-50'}`}
                >
                  <span>{cta.label}</span>
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {category.sections.map((section, index) => (
        <section key={section.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {section.id === 'learn' && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{section.description}</p>
                <p className="text-gray-700 mb-8 leading-relaxed">{section.content}</p>
                <Link
                  href={section.cta!.href}
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl 
                           font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>{section.cta!.label}</span>
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}

            {section.id === 'stories' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="text-5xl mb-6">{section.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {section.title}
                  </h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl text-green-500">&ldquo;</div>
                    <p className="text-xl italic text-gray-700 leading-relaxed">
                      {section.testimonial!.quote}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">– {section.testimonial!.author}</p>
                    <p className="text-gray-600">{section.testimonial!.location}</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href={section.cta!.href}
                    className="inline-flex items-center gap-3 text-green-600 hover:text-green-700 
                             font-semibold border-2 border-green-200 hover:border-green-300 
                             px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    <span>{section.cta!.label}</span>
                    <FaArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )}

            {section.id === 'network' && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">{section.description}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {section.benefits!.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-left p-4 bg-white rounded-xl shadow-sm">
                      <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={section.cta!.href}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                           text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                           transform hover:scale-105 transition-all duration-300"
                >
                  <span>{section.cta!.label}</span>
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}

            {section.id === 'ask' && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{section.description}</p>
                <p className="text-gray-700 mb-8">{section.content}</p>
                <a
                  href={section.cta!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl 
                           font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>{section.cta!.label}</span>
                </a>
              </div>
            )}
          </div>
        </section>
      ))} 

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow More with Zao Bora?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already benefiting from our expert guidance and proven methods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 
                       rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <span>Get Started Today</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="tel:+255752563361"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 
                       border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 
                       transition-all duration-300"
            >
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaCheck, FaSpinner } from 'react-icons/fa6';

const GetInTouchSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });
   const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const validTLDs = [
        "com", "org", "net", "edu", "gov", "mil", "int", "co", "io", "ai", "biz", "info", "me", "us", "uk", "ca", "de", "fr", "jp", "au", "in", "za", "ng", "tz"
      ];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      } else {
        const domain = formData.email.split('@')[1];
        const tld = domain.split('.').pop();
        if (!tld || !validTLDs.includes(tld.toLowerCase())) {
          newErrors.email = "Please enter an email with a valid domain.";
        }
        if (/^(test|example|email|localhost)\./i.test(domain)) {
          newErrors.email = "Please enter an email with a valid domain.";
        }
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdkoebpr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="getintouch" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce" 
             style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping" 
             style={{ animationDuration: "3s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className={`bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl 
                       p-8 md:p-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <div className="text-white">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-yellow-400 rounded-full" />
                  <span className="text-yellow-400 uppercase font-semibold text-sm tracking-wide">
                    Get In Touch
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Have a Question? Send Us a{" "}
                  <span className="text-yellow-400">Message</span>
                </h2>
                
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  We&apos;re here to help you grow your agricultural business. Reach out to us for 
                  consultation, support, or any questions about our services.
                </p>
              </div>

              {/* Quick Contact Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">&lt;2hrs</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3 text-green-800">
                    <FaCheck className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 text-red-800">
                    <span className="font-medium">Failed to send message. Please try again or contact us directly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className={`w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 
                               placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                               focus:border-green-500 transition-all duration-300
                               ${errors.firstName ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className={`w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 
                               placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                               focus:border-green-500 transition-all duration-300
                                ${errors.email ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 
                             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                             focus:border-green-500 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    required
                    rows={5}
                    className={`w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 
                             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                             focus:border-green-500 transition-all duration-300 resize-none
                             ${errors.message ? "border-red-500 focus:ring-red-500" : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white 
                           font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl 
                           transform hover:scale-[1.02] transition-all duration-300 
                           disabled:opacity-50 disabled:cursor-not-allowed 
                           disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By sending this message, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
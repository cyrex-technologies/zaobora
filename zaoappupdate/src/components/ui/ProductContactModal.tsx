"use client";

import { useState } from 'react';
import { FaArrowRight, FaCheck, FaSpinner } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

interface ProductContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const ProductContactModal = ({ isOpen, onClose, productName }: ProductContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
    product: productName || ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const validTLDs = [
        "com", "org", "net", "edu", "gov", "mil", "int", "co", "io", "ai", "biz", "info", 
        "me", "us", "uk", "ca", "de", "fr", "jp", "au", "in", "za", "ng", "tz"
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

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Handle form submission
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
        body: JSON.stringify({
          ...formData,
          _subject: `Product Inquiry: ${formData.product || 'General'}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', phone: '', message: '', product: productName || '' });
        
        // Close modal after 3 seconds on success
        setTimeout(() => {
          setSubmitStatus('idle');
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal and reset form
  const handleClose = () => {
    setFormData({ firstName: '', email: '', phone: '', message: '', product: productName || '' });
    setErrors({});
    setSubmitStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 
                       hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 pt-8 pb-6 rounded-t-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-yellow-400 rounded-full" />
                <span className="text-yellow-400 uppercase font-semibold text-sm tracking-wide">
                  Product Inquiry
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Get Product Information
              </h2>
              <p className="text-white/90">
                {productName 
                  ? `Interested in ${productName}? Fill out the form below and we'll get back to you.`
                  : "Fill out the form below and we'll provide detailed information about our products."
                }
              </p>
            </div>

            {/* Form Section */}
            <div className="px-8 py-6">
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                  <div className="flex items-center gap-3 text-green-800">
                    <FaCheck className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                  <div className="flex items-start gap-3 text-red-800">
                    <span className="font-medium">Failed to send message. Please try again or contact us directly at info@zaobora.co.tz</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Product (if provided) */}
                {productName && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product of Interest
                    </label>
                    <input
                      type="text"
                      value={productName}
                      disabled
                      className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 font-medium"
                    />
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className={`w-full p-3 rounded-xl border text-gray-800 
                               placeholder-gray-400 focus:outline-none focus:ring-2 
                               transition-all duration-300
                               ${errors.firstName 
                                 ? "border-red-500 focus:ring-red-500 bg-red-50" 
                                 : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
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
                      placeholder="your@email.com"
                      required
                      className={`w-full p-3 rounded-xl border text-gray-800 
                               placeholder-gray-400 focus:outline-none focus:ring-2 
                               transition-all duration-300
                               ${errors.email 
                                 ? "border-red-500 focus:ring-red-500 bg-red-50" 
                                 : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+255 XXX XXX XXX"
                    className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 
                             focus:border-green-500 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you'd like to know about this product..."
                    required
                    rows={4}
                    className={`w-full p-3 rounded-xl border text-gray-800 
                             placeholder-gray-400 focus:outline-none focus:ring-2 
                             transition-all duration-300 resize-none
                             ${errors.message 
                               ? "border-red-500 focus:ring-red-500 bg-red-50" 
                               : "bg-gray-50 border-gray-200 focus:ring-green-500 focus:border-green-500"}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="flex-1 group bg-gradient-to-r from-green-600 to-emerald-600 text-white 
                             font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl 
                             transform hover:scale-[1.02] transition-all duration-300 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold 
                             rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContactModal;
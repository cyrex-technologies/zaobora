"use client";

import { useState, useEffect, useCallback, FormEvent, ChangeEvent } from "react";
import { X, CheckCircle, Loader2, Send, Mail, User, MessageSquare, FileText } from "lucide-react";
import toast from "react-hot-toast";

interface ContactInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactInquiryModal = ({ isOpen, onClose }: ContactInquiryModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>("");

  const handleClose = useCallback(() => {
    setFormData({ firstName: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setFocusedField("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => handleClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, handleClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your full name";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdkoebpr", {
        method: "POST",
        headers: { 
          "Accept": "application/json", 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          icon: "✅",
          style: {
            background: "#10b981",
            color: "#fff",
          },
        });
        setIsSuccess(true);
      } else {
        toast.error("Failed to send message. Please try again.", {
          icon: "❌",
        });
      }
    } catch (error) { 
      toast.error("Network error. Please check your connection.", {
        icon: "⚠️",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden z-[1000] animate-slideUp">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg group"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="mx-auto mb-6 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-scaleIn">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for reaching out to us.
            </p>
            <p className="text-gray-500">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Icon */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="relative text-3xl md:text-4xl font-bold mb-2">Send Us a Message</h2>
              <p className="relative text-green-100 text-lg">
                We&apos;re here to help. Let us know how we can assist you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    focusedField === 'firstName' ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInput}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter your full name"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none ${
                      errors.firstName 
                        ? "border-red-500 bg-red-50 focus:border-red-500" 
                        : focusedField === 'firstName'
                        ? "border-green-500 bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.firstName}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInput}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="your.email@example.com"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none ${
                      errors.email 
                        ? "border-red-500 bg-red-50 focus:border-red-500" 
                        : focusedField === 'email'
                        ? "border-green-500 bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                    focusedField === 'subject' ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInput}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    placeholder="What is this about?"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none ${
                      focusedField === 'subject'
                        ? "border-green-500 bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInput}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Tell us how we can help you..."
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none resize-none ${
                    errors.message 
                      ? "border-red-500 bg-red-50 focus:border-red-500" 
                      : focusedField === 'message'
                      ? "border-green-500 bg-white"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.message}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  Minimum 10 characters
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-center text-gray-500 pt-2">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                We&apos;ll respond within 24 hours.
              </p>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.5);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactInquiryModal;
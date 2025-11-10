"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import {
  FaTimes,
  FaUser,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import type { LeadCaptureModalProps, FormData, UserType } from "@/types/lead-capture";

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    mobile: "",
    email: "",
  });
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = useCallback(() => {
    setStep(1);
    setUserType("");
    setFormData({ name: "", organization: "", mobile: "", email: "" });
    onClose();
  }, [onClose]);

  // When submission succeeds
  useEffect(() => {
    if (isSuccess) {
      setStep(3);
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, handleClose]);

  const handleUserTypeSelect = (type: UserType["id"]) => {
    setUserType(type);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdkpnyna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userType,
        }),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setIsSuccess(true);
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Form submission error");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setStep(1);
    setUserType("");
  };

  if (!isOpen) return null;

  const userTypes: UserType[] = [
    {
      id: "farmer",
      label: "Farmer",
      icon: FaUser,
      description:
        "Individual farmers looking to improve yields, access markets, or learn modern farming techniques.",
    },
    {
      id: "agribusiness",
      label: "Agri-Business",
      icon: FaBriefcase,
      description:
        "Agricultural enterprises, cooperatives, or businesses seeking consultation, market linkages, or supply chain solutions.",
    },
    {
      id: "investor",
      label: "Investor",
      icon: FaChartLine,
      description:
        "Investment partners interested in supporting agricultural development and sustainable farming initiatives.",
    },
    {
      id: "partner",
      label: "Partner",
      icon: FaHandshake,
      description:
        "Organizations, NGOs, or institutions looking to collaborate on agricultural empowerment programs.",
    },
  ];

  const selectedType = userTypes.find((t) => t.id === userType);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/40">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
        onClick={handleClose}
      />

      {/* Toast */}
      {showError && toast.error("Something went wrong. Please try again.")}

      {/* Modal */}
      <div className="relative z-[1000] bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <FaTimes className="w-5 h-5 text-gray-600" />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 opacity-0 scale-50 animate-[scaleIn_0.5s_ease-out_forwards]">
              <FaCheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-600 mb-2">
              We&apos;ve received your information.
            </p>
            <p className="text-gray-500">
              Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Join Us Today</h2>
              <p className="text-green-100">
                {step === 1
                  ? "Select your role to get started"
                  : "Tell us more about yourself"}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mt-6">
                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    step >= 1 ? "bg-white" : "bg-white/30"
                  }`}
                />
                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    step >= 2 ? "bg-white" : "bg-white/30"
                  }`}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Step 1: User Type Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Choose the option that best describes you:
                  </p>

                  {userTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => handleUserTypeSelect(type.id)}
                        className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                              {type.label}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Step 2: Contact Form */}
              {step === 2 && (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Selected Type */}
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    {selectedType && (
                      <>
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                          <selectedType.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">Selected as:</p>
                          <p className="font-semibold text-gray-900">
                            {selectedType.label}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleBack}
                          className="text-sm text-green-600 hover:text-green-700 font-medium"
                        >
                          Change
                        </button>
                      </>
                    )}
                  </div>

                  {/* Inputs */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization{" "}
                        {userType === "farmer" ? "(Optional)" : (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required={userType !== "farmer"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder={
                          userType === "farmer"
                            ? "Your farm name (if any)"
                            : "Your organization name"
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="+255 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center pt-4">
                    By submitting, you agree to our Terms of Service and Privacy
                    Policy. We&apos;ll contact you within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;

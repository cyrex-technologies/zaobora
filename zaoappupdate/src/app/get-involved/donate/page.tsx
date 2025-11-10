"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSpinner, FaCheck } from "react-icons/fa6";



const DonatePage = () => {
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedPurpose, setSelectedPurpose] = useState("Planting trees");
  const [donationAmount, setDonationAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const currencies = [
    { symbol: "$", label: "USD" },
    { symbol: "€", label: "Euro" },
    { symbol: "Tsh", label: "Tsh" }
  ];

  const donationPurposes = [
    { 
      id: "trees", 
      label: "Planting trees",
      description: "For every dollar you donate, a tree is planted and nurtured, fueling our impactful tree-planting initiatives.",
      icon: "/assets/img/donate/icon-for-tree-nurturing-donation.png"
    },
    { 
      id: "farmers", 
      label: "Farmer service delivery",
      description: "For every $5 donation, you support the delivery of tailored services to one farmer in remote areas.",
      icon: "/assets/img/donate/icon-for-farmer-lifestyle-improve.png"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Email validation
    const validTLDs = [
      "com", "org", "net", "edu", "gov", "mil", "int", "co", "io", "ai", "biz", "info", "me", "us", "uk", "ca", "de", "fr", "jp", "au", "in", "za", "ng", "tz"
    ];
    let emailError = "";
    if (!formData.email.trim()) {
      emailError = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        emailError = "Please enter a valid email address.";
      } else {
        const domain = formData.email.split('@')[1];
        const tld = domain.split('.').pop();
        if (!tld || !validTLDs.includes(tld.toLowerCase())) {
          emailError = "Please enter an email with a valid domain.";
        }
        if (/^(test|example|email|localhost)\./i.test(domain)) {
          emailError = "Please enter an email with a valid domain.";
        }
      }
    }
    if (emailError) {
      setErrors({ email: emailError });
      return;
    } else {
      setErrors({});
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const donationData = {
      ...formData,
      amount: donationAmount,
      currency: selectedCurrency,
      donationPurpose: selectedPurpose
    };

    try {
      const response = await fetch('https://formspree.io/f/xwpklkgl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowModal(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setDonationAmount("");
        // Hide success message after 5 seconds
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
    
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce" 
               style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-green-600 font-medium">Donate</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your donation creates a{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                lasting change
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Tree Planting Impact */}
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10 rounded-[2rem] md:rounded-[4rem]" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src="/img/donate/icon-for-tree-nurturing-donation.png"
                      alt="Tree planting"
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-28 md:h-28"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Tree Planting Initiative</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  For every dollar you donate, a tree is planted and nurtured, fueling our impactful tree-planting initiatives. 
                  This improves the environment and secures sustainable livelihoods for farmers. We empower local farmers 
                  with tools and knowledge to plant and nurture trees suited to their environments, enriching soil, preventing 
                  erosion, and absorbing carbon emissions.
                </p>
              </div>
            </div>

            {/* Farmer Support Impact */}
            <div className="relative bg-gradient-to-br from-emerald-600 to-green-600 rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10 rounded-[2rem] md:rounded-[4rem]" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src="/img/donate/icon-for-farmer-lifestyle-improve.png"
                      alt="Farmer support"
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-28 md:h-28"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Farmer Service Delivery</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  For every $5 donation, you support the delivery of tailored services to one farmer in remote areas, 
                  including inputs and expert advice on best practices. These services enhance small farm productivity 
                  and resilience, empowering farmers to achieve sustainable success in their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Form Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fill out the donation form and join us in planting the seeds for a{" "}
                <span className="text-green-600">sustainable Future</span>
              </h2>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3 text-green-800">
                  <FaCheck className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Thank you for your donation! We&apos;ll process it shortly.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="text-red-800">
                  <span className="font-medium">There was an error processing your donation. Please try again.</span>
                </div>
              </div>
            )}

            {/* Donation Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Amount Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  How Much Would You Like To Donate?
                </h3>
                
                {/* Currency Buttons */}
                <div className="flex gap-3 mb-4">
                  {currencies.map((currency) => (
                    <button
                      key={currency.symbol}
                      type="button"
                      onClick={() => setSelectedCurrency(currency.symbol)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all  duration-300 ${
                        selectedCurrency === currency.symbol
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {currency.label}
                    </button>
                  ))}
                </div>

                {/* Amount Input */}
                <div className="flex">
                  <span className="inline-flex items-center px-4 text-gray-600 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Amount"
                    required
                    min="1"
                    className="flex-1 px-4 py-3 border text-gray-600  border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Purpose Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  Choose where you&apos;d like your donation to go
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {donationPurposes.map((purpose) => (
                    <button
                      key={purpose.id}
                      type="button"
                      onClick={() => setSelectedPurpose(purpose.label)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedPurpose === purpose.label
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{purpose.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Personal Info</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your First Name"
                    className="px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your Last Name"
                    className="px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  className={`w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              
              </div>

              {/* Message */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Message</h3>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Leave a message (optional)"
                  rows={4}
                  className="w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !donationAmount}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-5 h-5 animate-spin" />
                    <span>Processing Donation...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <FaArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Sections */}
      
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your donation has been submitted. Thank you for supporting our mission! 
                Our team will get back to you shortly with next steps.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DonatePage;
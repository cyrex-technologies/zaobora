
"use client"
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants/socials";
import { FOOTER_QUICK_LINKS, FOOTER_CONTACT } from "@/lib/constants/footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="group">
                <Link href="/" className="inline-block mb-6 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/img/logo/footer-logo.png"
                    alt="Zao Bora - Empowering Farmers"
                    width={180}
                    height={60}
                    className="brightness-0 invert"
                  />
                </Link>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Empowering farmers through innovative agricultural solutions, sustainable practices, 
                and comprehensive support services. Whether you need consultation, market linkage, 
                or agroforestry expertise, we&#39;re here to help you grow.
              </p>

              {/* Social Media */}
              <div>
                <h5 className="text-lg font-semibold mb-4 text-green-400">Connect With Us</h5>
                <div className="flex space-x-3">
                  {SOCIAL_LINKS.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center 
                               hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <social.icon className="text-lg group-hover:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-100 
                                    transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-400 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {FOOTER_QUICK_LINKS.map((link, i) => (
                  <li key={i} className="group">
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 
                               flex items-center space-x-2 group-hover:translate-x-1"
                    >
                      <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400 relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-400 rounded-full" />
              </h4>
              <ul className="space-y-4">
                <li className="group">
                  <div className="flex items-start space-x-3 text-gray-300 hover:text-green-400 
                                transition-colors duration-300">
                    <FaEnvelope className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 
                                        transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href={`mailto:${FOOTER_CONTACT.email}`} className="hover:underline">
                        {FOOTER_CONTACT.email}
                      </a>
                    </div>
                  </div>
                </li>
                
                <li className="group">
                  <div className="flex items-start space-x-3 text-gray-300 hover:text-green-400 
                                transition-colors duration-300">
                    <FaPhone className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 
                                     transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href={`tel:${FOOTER_CONTACT.phone}`} className="hover:underline">
                        {FOOTER_CONTACT.phone}
                      </a>
                    </div>
                  </div>
                </li>
                
                <li className="group">
                  <div className="flex items-start space-x-3 text-gray-300 hover:text-green-400 
                                transition-colors duration-300">
                    <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 
                                            transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p>{FOOTER_CONTACT.address}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest agricultural insights, tips, and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-green-400 
                           focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 
                                 text-white rounded-lg font-semibold hover:from-green-700 
                                 hover:to-emerald-700 transform hover:scale-105 transition-all 
                                 duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Zao Bora. All Rights Reserved. 
                <span className="mx-2">•</span>
                Empowering farmers, nurturing growth.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-green-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-green-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-green-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 
                   text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 
                   flex items-center justify-center group ${
                     showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                   }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-100 
                      transition-transform duration-300" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full -translate-x-16 translate-y-16" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/5 rounded-full translate-x-24 -translate-y-24" />
    </footer>
  );
};

export default Footer;
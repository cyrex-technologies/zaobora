"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<number>>(new Set());

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Toggle mobile dropdown
  const toggleMobileMenu = (index: number) => {
    setExpandedMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Close mobile menu and reset expanded menus
  const closeMobileMenu = () => {
    setIsOpen(false);
    setExpandedMenus(new Set());
  };

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="logo group relative overflow-hidden rounded-lg"
              onClick={() => closeMobileMenu()}
            >
              <div className="transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/img/logo/logo_2.png"
                  alt="Zao Bora - Empowering Farmers"
                  width={isScrolled ? 130 : 150}
                  height={isScrolled ? 40 : 50}
                  className="transition-all duration-300"
                  priority
                  style={{ height: "auto"}}
                />
              </div>
              {/* Subtle green glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-1">
                {NAV_LINKS.map((link, i) => (
                  <li key={i} className="relative group">
                    {!link.children ? (
                      <Link
                        href={link.href}
                        className={`
                          relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                          hover:bg-green-50 hover:shadow-sm
                          ${pathname === link.href
                            ? "text-green-700 bg-green-50 shadow-sm" 
                            : "text-gray-700 hover:text-green-600"
                          }
                        `}
                      >
                        <span className="relative z-10">{link.label}</span>
                        {/* Active indicator */}
                        {pathname === link.href && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full" />
                        )}
                      </Link>
                    ) : (
                      <>
                        <span 
                          className="px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-green-600 
                                   hover:bg-green-50 rounded-lg transition-all duration-300 flex items-center space-x-1"
                        >
                          <span>{link.label}</span>
                          <FaChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                        </span>
                        
                        {/* Desktop Dropdown Menu */}
                        <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-100 
                                      rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                      transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                          <div className="py-2">
                            {link.children.map((child, j) => (
                              <Link
                                key={j}
                                href={child.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:text-green-600 
                                         hover:bg-green-50/80 transition-colors duration-200 
                                         border-l-2 border-transparent hover:border-green-400"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                                  <span>{child.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden menu-toggle relative p-2 rounded-lg hover:bg-gray-100 
                       transition-colors duration-200 group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <FaBars 
                  className={`text-xl text-gray-700 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <FaTimes 
                  className={`text-xl text-gray-700 absolute transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => closeMobileMenu()}
      />

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 xl:hidden 
                   transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center justify-between">
            <Image
              src="/img/logo/logo_2.png"
              alt="Zao Bora"
              width={120}
              height={40}
              style={{ height: "auto" }}
            />
            <button
              onClick={() => closeMobileMenu()}
              className="p-2 rounded-full hover:bg-white/80 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="p-6 overflow-y-auto h-[calc(100vh-140px)]">
          <ul className="space-y-2">
            {NAV_LINKS.map((link, i) => (
              <li key={i}>
                {!link.children ? (
                  // Simple link without children
                  <Link
                    href={link.href}
                    onClick={() => closeMobileMenu()}
                    className={`
                      block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                      ${pathname === link.href
                        ? "text-green-700 bg-green-50 shadow-sm" 
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50/50"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ) : (
                  // Dropdown menu with children
                  <div className="space-y-1">
                    {/* Dropdown trigger */}
                    <button
                      onClick={() => toggleMobileMenu(i)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 rounded-xl text-base 
                        font-medium transition-all duration-200
                        ${expandedMenus.has(i)
                          ? "text-green-700 bg-green-50 shadow-sm"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50/50"
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      <FaChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedMenus.has(i) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown content */}
                    <div 
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${expandedMenus.has(i) 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                        }
                      `}
                    >
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-green-100">
                        {link.children.map((child, j) => (
                          <li key={j}>
                            <Link
                              href={child.href}
                              onClick={() => closeMobileMenu()}
                              className={`
                                block px-4 py-2.5 text-sm rounded-lg transition-all duration-200
                                border-l-2 -ml-[2px]
                                ${pathname === child.href
                                  ? "text-green-700 bg-green-50 border-green-500 font-medium"
                                  : "text-gray-600 hover:text-green-600 hover:bg-green-50/50 border-transparent hover:border-green-300"
                                }
                              `}
                            >
                              <div className="flex items-center space-x-2">
                                <div className={`
                                  w-1.5 h-1.5 rounded-full transition-colors duration-200
                                  ${pathname === child.href 
                                    ? 'bg-green-500' 
                                    : 'bg-gray-300'
                                  }
                                `} />
                                <span>{child.label}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFilter, FaList, FaLeaf, FaSeedling } from "react-icons/fa6";
import { FaThLarge } from "react-icons/fa";
import { PRODUCTS, getUniqueCategories } from "@/lib/constants/products";
import Header from "@/components/layout/header/Header";

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  // Get unique categories from products
  const categories = useMemo(() => getUniqueCategories(), []);

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Hero visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate card reveal when filteredProducts changes
  useEffect(() => {
    setVisibleCards([]);

    const timeouts: NodeJS.Timeout[] = [];
    filteredProducts.forEach((_, index) => {
      const t = setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 100);
      timeouts.push(t);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 md:top-20 left-4 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div
            className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-200/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 bg-green-300/25 rounded-full animate-ping"
            style={{ animationDuration: "4s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav
              className={`flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-green-600 font-medium">Products</span>
            </nav>

            {/* Title */}
            <div
              className={`mb-8 transform transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaLeaf className="w-6 h-6 text-green-500" />
                <span className="text-green-600 uppercase font-semibold text-sm tracking-wide">
                  Farm Fresh Products
                </span>
                <FaSeedling className="w-6 h-6 text-emerald-500" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our wide range of premium agricultural products — from specialty cash crops 
                to quality inputs and modern machinery. Every product reflects our commitment to 
                quality, sustainability, and farmer success.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">{PRODUCTS.length}</div>
                <div className="text-sm md:text-base text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">{categories.length - 1}</div>
                <div className="text-sm md:text-base text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">Quality</div>
                <div className="text-sm md:text-base text-gray-600">Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 py-6 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <FaFilter className="text-gray-500 w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaThLarge className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-green-600">{filteredProducts.length}</span> 
              {selectedCategory === 'All Products' ? ' products' : ` ${selectedCategory.toLowerCase()}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Products Display */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8' 
              : 'space-y-6'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transform transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {viewMode === 'grid' ? (
                  // Grid Card View
                  <Link
                    href={`/products/${product.id}`}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 
                             hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full"
                  >
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 
                                   transition-colors duration-300 line-clamp-2">
                        {product.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 text-green-600 font-semibold 
                                       transition-all duration-300 group-hover:gap-3">
                          <span>Learn More</span>
                          <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 
                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Link>
                ) : (
                  // List View
                  <Link
                    href={`/products/${product.id}`}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 
                             hover:border-green-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        
                        {/* Image & Category */}
                        <div className="text-center md:text-left">
                          <div className="relative">
                            <Image
                              src={product.image}
                              alt={product.title}
                              width={200}
                              height={150}
                              className="w-full h-32 object-cover rounded-xl mx-auto md:mx-0 mb-3 
                                       transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {product.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 
                                       transition-colors duration-300">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="text-center md:text-right">
                          <span className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 
                                         font-semibold transition-all duration-300 group-hover:gap-3">
                            <span>Learn More</span>
                            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFilter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No products found matching "${searchTerm}". Try a different search term.`
                  : 'Try selecting a different category or search for specific products.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    Clear Search
                  </button>
                )}
                <button
                  onClick={() => setSelectedCategory('All Products')}
                  className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-300"
                >
                  View All Products
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn more about our products and how we can meet your agricultural needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Contact Us</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
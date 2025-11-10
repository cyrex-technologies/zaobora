"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { PRODUCTS } from "@/lib/constants/products";
import Header from "@/components/layout/header/Header";
import ProductContactModal from "@/components/ui/ProductContactModal";


// Page Props
interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);
    const [isModalOpen, setIsModalOpen] = useState(false);
  

  if (!product) return notFound();

  // Get related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-green-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-green-600 font-medium">{product.title}</span>
          </nav>

          {/* Title and Category */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Image */}
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaCheck className="w-6 h-6 text-green-600" />
                  About {product.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.detail}
                  </p>
                </div>
              </div>

              {/* Key Features (for specific categories) */}
              {(product.category === "Pembejeo" || product.category === "Machinery") && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.category === "Pembejeo" && (
                      <>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Quality assured and certified</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Suitable for various soil types</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Expert guidance on application</span>
                        </li>
                      </>
                    )}
                    {product.category === "Machinery" && (
                      <>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Durable and reliable</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Suitable for various farm sizes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Training and support available</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  
                  
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 
                           text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                           transform hover:scale-105 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <FaArrowRight className="w-5 h-5" />
                </button>
                
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-600 border-2 
                           border-green-200 hover:border-green-300 px-8 py-4 rounded-xl font-semibold 
                           transition-all duration-300"
                >
                  <FaArrowLeft className="w-5 h-5" />
                  <span>Back to Products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Modal Component */}
      <ProductContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Products
              </h2>
              <p className="text-xl text-gray-600">
                More products from {product.category}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 
                           hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        {relatedProduct.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 
                                 transition-colors duration-300 line-clamp-2">
                      {relatedProduct.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {relatedProduct.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold 
                                   transition-all duration-300 group-hover:gap-3">
                      <span>View Details</span>
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 text-green-600 hover:text-emerald-700 font-semibold 
                         border-2 border-green-200 hover:border-green-300 px-8 py-4 rounded-xl transition-all duration-300"
              >
                <span>View All Products</span>
                <FaArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Interested in {product.title}?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about pricing, availability, and how we can support your agricultural needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 
                       rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <span>Contact Us</span>
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
    </div>
  );
}
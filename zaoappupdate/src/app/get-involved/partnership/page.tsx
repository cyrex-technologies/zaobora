"use client";

import EngagementLayout from "@/components/layout/get-involved/EngagementLayout";

const PartnerPage = () => {
  return (
    <EngagementLayout
      breadcrumbLabel="Partner"
      breadcrumbColor="green-600"
      gradientFrom="green-50"
      gradientTo="emerald-100"
      title="Become Our"
      highlight="Partner"
    >
      {/* Partner Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Partner With Us
          </h2>
          <p className="text-gray-600 text-lg text-center mb-10">
            Partnering with us amplifies impact, drives innovation, and
            strengthens sustainable farming communities across Tanzania.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800">Resource Sharing</h3>
              <p className="text-gray-600 mt-2">Share expertise, funding, and tools for collective progress.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800">Innovation Support</h3>
              <p className="text-gray-600 mt-2">Drive agricultural innovation through joint projects and pilots.</p>
            </div>
          </div>
        </div>
      </section>
    </EngagementLayout>
  );
};

export default PartnerPage;

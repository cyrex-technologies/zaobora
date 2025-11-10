// src/app/services/[category]/[slug]/page.tsx
import { notFound } from "next/navigation";
import { SERVICE_PAGES } from "@/lib/constants/service-page";
import ServicePage from "@/components/pages/services/ServicePage";

interface Params {
  category: string;
  slug: string;
}

export default async function ServiceDetailsPage({ params }: { params: Params }) {
  const { category, slug } = await Promise.resolve(params);

  // Retrieve the service data by slug
  const serviceData = SERVICE_PAGES[slug];
  if (!serviceData || serviceData.category !== category) {
    return notFound();
  }

  const adaptedServiceData = {
    ...serviceData,
    fullDescription: serviceData.description || '', // Use description as fallback
    description: serviceData.description || serviceData.shortDescription, // Ensure description is available
    image: serviceData.image || '/default-service-image.jpg', // Fallback image
  };

  return <ServicePage serviceData={adaptedServiceData} />;
}

// Generate static paths for pre-rendering (optional but good for SEO)
export async function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((slug) => ({
    category: SERVICE_PAGES[slug].categoryGroup || "farmers",
    slug,
  }));
}

// src/app/services/[category]/page.tsx
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";
import { SERVICES_CONTENT } from "@/lib/constants/service-list";
import { ServiceCardType } from "@/types/service";
import {
  FarmersTemplate,
  AgroDealersTemplate,
  PartnersTemplate,
  InvestorsTemplate,
} from "@/components/ui/CategoryTemplates";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; // ✅ must await in Next.js 15+

  const categoryKey = category as keyof typeof SERVICE_CATEGORIES;
  const categoryData = SERVICE_CATEGORIES[categoryKey];

  if (!categoryData) return notFound();

  const relatedServices = SERVICES_CONTENT.cards.filter(
    (service: ServiceCardType) => service.category === categoryKey
  );

  switch (categoryKey) {
    case "farmers":
      return <FarmersTemplate category={categoryData} services={relatedServices} />;
    case "agrodealers":
      return <AgroDealersTemplate category={categoryData} services={relatedServices} />;
    case "partners":
      return <PartnersTemplate category={categoryData} services={relatedServices} />;
    case "investors":
      return <InvestorsTemplate category={categoryData} services={relatedServices} />;
    default:
      return notFound();
  }
}

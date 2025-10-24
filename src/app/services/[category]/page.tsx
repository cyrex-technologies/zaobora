// src/app/services/[category]/page.tsx
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES } from "@/lib/constants/service-categories";
import { SERVICES_CONTENT } from "@/lib/constants/service-list";
import {
  FarmersTemplate,
  AgroDealersTemplate,
  PartnersTemplate,
  InvestorsTemplate,
} from "@/components/ui/CategoryTemplates";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryKey = params.category as keyof typeof SERVICE_CATEGORIES;
  const category = SERVICE_CATEGORIES[categoryKey];

  if (!category) return notFound();

  const relatedServices = SERVICES_CONTENT.cards.filter(
    (service) => (service as any).categoryGroup === categoryKey
  );

  switch (categoryKey) {
    case "farmers":
      return (
        <FarmersTemplate category={category} services={relatedServices} />
      );
    case "agrodealers":
      return (
        <AgroDealersTemplate category={category} services={relatedServices} />
      );
    case "partners":
      return <PartnersTemplate category={category} services={relatedServices} />;
    case "investors":
      return <InvestorsTemplate category={category} services={relatedServices} />;
    default:
      return notFound();
  }
}

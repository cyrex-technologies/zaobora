import { notFound } from "next/navigation";
import { SERVICE_PAGES } from "@/lib/constants/service-page";
import ServicePage from "@/components/pages/services/ServicePage";

type ServiceSlug = keyof typeof SERVICE_PAGES;

export default async function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  if (!(slug in SERVICE_PAGES)) {
    return notFound();
  }
  const serviceData = SERVICE_PAGES[slug as ServiceSlug];
  return (
    <>
      <ServicePage serviceData={serviceData} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map(slug => ({ slug }));
}

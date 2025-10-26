import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServiceSection from "@/components/section/ServiceSection";
import SuccessStories from "@/components/section/SucessStories";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SuccessStories />
        <AboutSection />
        <ServiceSection />
      </main>
    </>
  );
}
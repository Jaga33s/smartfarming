import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AITechnologySection from "@/components/AITechnologySection";
import WeatherWidget from "@/components/WeatherWidget";
import VoiceAssistantSection from "@/components/VoiceAssistantSection";
import DashboardPreviewSection from "@/components/DashboardPreviewSection";
import TestimonialsFAQContact from "@/components/TestimonialsFAQContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <AITechnologySection />
      <WeatherWidget />
      <VoiceAssistantSection />
      <DashboardPreviewSection />
      <TestimonialsFAQContact />
      <Footer />
    </main>
  );
}

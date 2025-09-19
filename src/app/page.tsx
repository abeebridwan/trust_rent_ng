import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/HeroSection";
import StatsSection from "@/components/homepage/StatsSection";
import ValueProposition from "@/components/homepage/ValueProposition";
import FeaturedListings from "@/components/homepage/FeaturedListings";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import FAQSection from "@/components/homepage/FAQSection";
import Footer from "@/components/homepage/Footer";
import CTASection from "@/components/homepage/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background !min-w-[365px] overflow-x-auto">
      <Header />
      <HeroSection />
      <CTASection />
      <StatsSection />
      <ValueProposition />
      <FeaturedListings />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
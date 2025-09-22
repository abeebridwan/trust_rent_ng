import HeroSection from "@/components/homepage/HeroSection";
import StatsSection from "@/components/homepage/StatsSection";
import ValueProposition from "@/components/homepage/ValueProposition";
import FeaturedListings from "@/components/homepage/FeaturedListings";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import FAQSection from "@/components/homepage/FAQSection";
import CTASection from "@/components/homepage/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
     {/*  <CTASection /> */}
      <StatsSection />
      <ValueProposition />
      <FeaturedListings />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};
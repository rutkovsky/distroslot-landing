import Header from "@/components/Header";
import TaxBanner from "@/components/TaxBanner";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TelegramFloat from "@/components/TelegramFloat";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <TaxBanner />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <HowItWorks />
        <ROICalculator />
        <TestimonialsSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <TelegramFloat />
      <MobileStickyBar />
    </>
  );
}

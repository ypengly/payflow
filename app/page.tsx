import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { TrustSection } from "@/components/marketing/trust-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { DashboardPreviewSection } from "@/components/marketing/dashboard-preview-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { DeveloperSection } from "@/components/marketing/developer-section";
import { AnalyticsSection } from "@/components/marketing/analytics-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <TrustSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <SecuritySection />
      <DeveloperSection />
      <AnalyticsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

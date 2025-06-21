import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { FeatureShowcase } from "@/components/feature";
import { PricingSection } from "@/components/pricing";
import { AboutUsSection } from "@/components/about";
import { FaqSection } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureShowcase />
        <PricingSection />
        <AboutUsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AppShowcaseSection />
        <WorkSection />
        <AboutSection />
        <StackSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

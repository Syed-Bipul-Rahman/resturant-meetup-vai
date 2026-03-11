import CustomerFeedbackSection from "@/src/components/customer-feedback";
import FAQSection from "@/src/components/faq";
import HeroSection from "@/src/components/hero-section";
import HowWorkSection from "@/src/components/how-work";
import MenuSection from "@/src/components/menu-section";
import ServicesSection from "@/src/components/services";
import LenisProvider from "@/src/components/animations/lenis-provider";
import ScrollReveal from "@/src/components/animations/scroll-reveal";

export default function Home() {
  return (
    <LenisProvider>
      <main className="">
        <HeroSection />
        <ScrollReveal>
          <MenuSection />
        </ScrollReveal>
        <ServicesSection />
        <HowWorkSection />
        <CustomerFeedbackSection />
        <FAQSection />
      </main>
    </LenisProvider>
  );
}

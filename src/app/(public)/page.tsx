import CustomerFeedbackSection from "@/src/components/customer-feedback";
import FAQSection from "@/src/components/faq";
import HeroSection from "@/src/components/hero-section";
import HowWorkSection from "@/src/components/how-work";
import MenuSection from "@/src/components/menu-section";
import ServicesSection from "@/src/components/services";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MenuSection />
      <ServicesSection />
      <HowWorkSection />
      <CustomerFeedbackSection />
      <FAQSection />
    </main>
  );
}

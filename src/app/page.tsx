import CustomerFeedbackSection from "../components/customer-feedback";
import FAQSection from "../components/faq";
import HeroSection from "../components/hero-section";
import HowWorkSection from "../components/how-work";
import MenuSection from "../components/menu-section";
import ServicesSection from "../components/services";

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

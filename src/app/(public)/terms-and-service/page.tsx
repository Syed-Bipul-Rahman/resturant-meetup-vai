import Title from "@/src/components/reuseable/title";
import TermsAndServiceContent from "@/src/components/terms-and-service";

export default function TermsAndServicePage() {
    return (
        <section className="px-4 pt-32 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white py-24">
                <Title
                    title="Terms and Service"
                    className="text-center mt-16"
                    description="Read our terms and service to understand the rules and regulations of our platform."
                    descriptionClass="text-center max-w-3xl mx-auto text-lg"
                />
            </div>
            <TermsAndServiceContent />
        </section>
    );
}
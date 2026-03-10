import Title from "@/src/components/reuseable/title";

export default function PrivacyPolicyPage() {
    return (
        <section className="container mx-auto px-4 py-20">
            <Title
                title="Terms and Service"
                className="text-center mt-16"
                description="Read our terms and service to understand the rules and regulations of our platform."
                descriptionClass="text-center max-w-3xl mx-auto text-lg"
            />
            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
                <p className="mb-6">
                    By accessing or using our platform, you agree to comply with these Terms and Conditions. If you do not agree to these terms, please refrain from using our services.
                </p>

                <h2 className="text-2xl font-bold mb-6">2. Eligibility</h2>
                <p className="mb-6">
                    Our platform is open to all users who are 18 years of age or older. By using our services, you confirm that you are at least 18 years old.
                </p>

                <h2 className="text-2xl font-bold mb-6">3. User Conduct</h2>
                <p className="mb-6">
                    You are solely responsible for your conduct while using our platform. We reserve the right to monitor and enforce our terms of service. If you engage in any behavior that violates these terms, we may take appropriate action, including suspending or terminating your access to our platform.
                </p>

                <h2 className="text-2xl font-bold mb-6">4. Intellectual Property</h2>
                <p className="mb-6">
                    All content, including text, images, and logos, on our platform is protected by intellectual property rights. You may not use our content without our express written consent.
                </p>

                <h2 className="text-2xl font-bold mb-6">5. Limitation of Liability</h2>
                <p className="mb-6">
                    We are not liable for any damages arising from your use of our platform. Our liability is limited to the extent permitted by law.
                </p>

                <h2 className="text-2xl font-bold mb-6">6. Termination</h2>
                <p className="mb-6">
                    We reserve the right to terminate your access to our platform at any time, without prior notice, for any reason.
                </p>

                <h2 className="text-2xl font-bold mb-6">7. Governing Law</h2>
                <p className="mb-6">
                    These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal action arising out of or related to these terms shall be brought in the courts of [Your Jurisdiction].
                </p>
            </div>
        </section>
    );
}
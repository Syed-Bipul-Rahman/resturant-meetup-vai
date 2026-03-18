import Title from "@/src/components/reuseable/title";
import TermsAndServiceContent from "@/src/components/terms-and-service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Glicen",
    description:
        "Read the Glicen Terms of Service to understand the rules, responsibilities, and conditions for using the Glicen app, website, and related services including social features, dating features, reservations, invitations, and payment tools.",
    keywords: [
        "Glicen terms of service",
        "Glicen terms and conditions",
        "Glicen user agreement",
        "app terms of use",
        "platform service terms"
    ],
    openGraph: {
        title: "Terms of Service | Glicen",
        description:
            "Understand the terms and conditions that govern the use of the Glicen platform and its services.",
        url: "https://yourdomain.com/terms-and-service",
        siteName: "Glicen",
        images: [
            {
                url: "/images/og-terms.jpg",
                width: 1200,
                height: 630,
                alt: "Glicen Terms of Service",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Glicen",
        description:
            "Review the terms and conditions for using the Glicen platform and services.",
        images: ["/images/og-terms.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsAndServicePage() {
    return (
        <section className="pt-20 lg:pt-24 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white px-4 pt-24">
                <Title
                    title="Terms and Service"
                    className="text-center lg:w-[55%] mx-auto"
                />
            </div>
            <TermsAndServiceContent />
        </section>
    );
}
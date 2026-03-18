import SafetyAndGuidelinesContent from "@/src/components/safety-and-guidelines";
import Title from "@/src/components/reuseable/title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Community & Safety Guidelines | Glicen",
    description:
        "Read the Glicen Community & Safety Guidelines to understand how we keep our platform safe, respectful, and welcoming for everyone. These rules apply to profiles, messages, invitations, reservations, and in-person meetups.",
    keywords: [
        "Glicen safety guidelines",
        "Glicen community rules",
        "community standards",
        "safe meetups",
        "user guidelines",
        "platform safety policy"
    ],
    openGraph: {
        title: "Glicen Community & Safety Guidelines",
        description:
            "Learn the rules and standards that help keep the Glicen community safe, respectful, and enjoyable for everyone.",
        url: "https://yourdomain.com/safety-and-guidelines",
        siteName: "Glicen",
        images: [
            {
                url: "/images/og-guidelines.jpg",
                width: 1200,
                height: 630,
                alt: "Glicen Community & Safety Guidelines",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Community & Safety Guidelines | Glicen",
        description:
            "Understand the rules that help keep the Glicen community safe and respectful.",
        images: ["/images/og-guidelines.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SafetyAndGuidelinesPage() {
    return (
        <section className="pt-20 lg:pt-24 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white px-4 pt-24">
                <Title
                    title="Glicen Community & Safety Guidelines"
                    className="text-center lg:w-[40%] mx-auto"
                />
            </div>
            <SafetyAndGuidelinesContent />
        </section>
    );
}
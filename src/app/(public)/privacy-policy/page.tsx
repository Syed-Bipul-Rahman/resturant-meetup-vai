import PrivacyPolicyContent from "@/src/components/privacy-policy";
import Title from "@/src/components/reuseable/title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Glicen",
    description:
        "Read Glicen's Privacy Policy to understand how we collect, use, and protect your information while helping you create meaningful real-world connections.",
    keywords: [
        "Glicen",
        "privacy policy",
        "data protection",
        "user privacy",
        "safe meetups",
        "community platform"
    ],
    openGraph: {
        title: "Privacy Policy | Glicen",
        description:
            "Understand how Glicen protects your privacy while you connect with others through real-world experiences.",
        url: "https://yourdomain.com/privacy-policy",
        siteName: "Glicen",
        images: [
            {
                url: "/images/og-privacy.jpg",
                width: 1200,
                height: 630,
                alt: "Glicen Privacy Policy",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Glicen",
        description:
            "Learn how Glicen protects your privacy and keeps your information safe.",
        images: ["/images/og-privacy.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <section className="pt-20 lg:pt-24 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white px-4 pt-24">
                <Title
                    title="Glicen Privacy Policy"
                    className="text-center lg:w-[55%] mx-auto"
                />
            </div>
            <PrivacyPolicyContent />
        </section >
    );
}
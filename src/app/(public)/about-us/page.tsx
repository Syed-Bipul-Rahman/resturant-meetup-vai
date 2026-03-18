import AboutUsContent from "@/src/components/about-us";
import Title from "@/src/components/reuseable/title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Glicen",
    description:
        "Glicen is a modern social, dating, and reservation platform founded in 2026 with one mission: to make meeting people and going out feel effortless, safe, and genuinely enjoyable. Built for a world where connection and convenience matter equally, Glicen brings every step of the social experience into one seamless app.",
    keywords: [
        "Glicen",
        "community platform",
        "social dining",
        "meet people",
        "safe meetups",
        "real-world experiences"
    ],
    openGraph: {
        title: "About Us | Glicen",
        description:
            "Discover Glicen's mission to create safe, meaningful real-world connections through community and shared experiences.",
        url: "https://yourdomain.com/about-us",
        siteName: "Glicen",
        images: [
            {
                url: "/images/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "About Glicen",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Glicen",
        description:
            "Learn about Glicen and how we help people connect safely through real-world experiences.",
        images: ["/images/og-about.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutUsPage() {


    return (
        <section className="pt-20 lg:pt-24 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white px-4 pt-24">
                <Title
                    title="About Us"
                    className="text-center"
                // description="Redefining the social fabric of dining through connection, community, and curated culinary experiences."
                // descriptionClass="text-center max-w-3xl mx-auto text-lg"
                />
            </div>
            <AboutUsContent />
        </section >
    )
}


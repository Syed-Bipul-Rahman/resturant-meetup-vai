import AboutUsSection from "@/src/components/about-us";
import Title from "@/src/components/reuseable/title";

export default function AboutUsPage() {


    return (
        <main className="px-4 pt-32">
            <section className="bg-gradient-to-b from-gray-50 to-white py-24">
                <div className="container mx-auto px-4">
                    <Title
                        title="About Restaurant Meetup"
                        className="text-center"
                        description="Redefining the social fabric of dining through connection, community, and curated culinary experiences."
                        descriptionClass="text-center max-w-3xl mx-auto text-lg"
                    />
                </div>
            </section>

            <AboutUsSection />
        </main>
    )
}


import AboutUsContent from "@/src/components/about-us";
import Title from "@/src/components/reuseable/title";

export default function AboutUsPage() {


    return (
        <section className="px-4 pt-32 pb-16">
            <div className="bg-gradient-to-b from-primary/10 to-white py-24">
                <Title
                    title="About Restaurant Meetup"
                    className="text-center"
                    description="Redefining the social fabric of dining through connection, community, and curated culinary experiences."
                    descriptionClass="text-center max-w-3xl mx-auto text-lg"
                />
            </div>
            <AboutUsContent />
        </section >
    )
}


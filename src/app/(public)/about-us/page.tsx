import Title from "@/src/components/reuseable/title";
import { FaBullseye, FaHistory, FaHeart, FaUsers, FaUtensils, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function AboutUsPage() {
    const stats = [
        { label: "Successful Meetups", value: "500+", icon: <FaUtensils size={24} /> },
        { label: "Active Members", value: "10k+", icon: <FaUsers size={24} /> },
        { label: "Partner Restaurants", value: "50+", icon: <FaGlobe size={24} /> },
    ];

    const values = [
        {
            icon: <FaBullseye className="text-primary" size={32} />,
            title: "Our Mission",
            description: "To connect foodies and restaurant enthusiasts through meaningful, curated dining experiences that celebrate culinary diversity."
        },
        {
            icon: <FaHistory className="text-primary" size={32} />,
            title: "Our Story",
            description: "Founded in 2024, Restaurant Meetup began with a simple idea: that the best connections happen over a shared meal. We've grown from a local meetup group into a platform that empowers people to discover new flavors and friends."
        },
        {
            icon: <FaHeart className="text-primary" size={32} />,
            title: "Our Values",
            description: "We believe in community, authenticity, and the transformative power of food. Our platform is built on trust, inclusivity, and a passion for exceptional service."
        }
    ];

    const team = [
        {
            name: "Alexander Reed",
            role: "Founder & CEO",
            image: "/team_ceo.png",
            bio: "A food tech visionary with 15+ years of experience in building community-driven platforms."
        },
        {
            name: "Sarah Chen",
            role: "CTO",
            image: "/team_cto.png",
            bio: "Passionate about leveraging technology to create seamless social experiences."
        },
        {
            name: "Marcus Thorne",
            role: "Head of Culinary Relations",
            image: "/team_culinary.png",
            bio: "Former Michelin-star chef dedicated to curating the world's finest restaurant partnerships."
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
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

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center p-6 border border-gray-100 rounded-2xl bg-gray-50/50">
                                <div className="text-primary mb-4">{stat.icon}</div>
                                <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision for the Future</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We believe that in an increasingly digital world, the need for genuine human connection has never been greater. Restaurant Meetup isn't just an app; it's a movement aimed at bringing people back to the table.
                                </p>
                            </div>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                <p className="text-primary font-semibold italic text-xl text-center">
                                    "The best stories are told, and the best friendships are forged, over a plate of incredible food."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Core Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <div className="mb-6 p-4 bg-primary/5 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <Title
                        title="Our Leadership"
                        className="text-center"
                        description="Meet the passionate team behind the Restaurant Meetup experience."
                        descriptionClass="text-center mb-16"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {team.map((member, index) => (
                            <div key={index} className="group">
                                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                <p className="text-primary font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <h2 className="text-4xl font-extrabold">Ready to Join the Table?</h2>
                    <p className="text-primary-foreground/90 text-xl leading-relaxed">
                        Become part of our global community and start discovering extraordinary flavors and connections today.
                    </p>
                    <div className="flex justify-center pt-6">
                        <button className="px-12 py-5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Discover Local Meetups
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

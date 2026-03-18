import Title from "../reuseable/title";
import Image from "next/image";
import left_image from "../../assets/overview-3.png";
import right_image from "../../assets/overview-2.png";
import { FaCheck } from "react-icons/fa";
import ScrollReveal from "../animations/scroll-reveal";


export default function HowWorkSection() {
    return (
        <section id="howitworks" className="py-10">
            <div className="container mx-auto px-4">
                <Title
                    title="How Glicen Works"
                    className="text-center lg:w-[55%] mx-auto"
                    description="From discovering people to reserving a table, Glicen makes planning a real-world meetup simple and seamless."
                    descriptionClass="text-center lg:w-[55%] mx-auto"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
                    <ScrollReveal direction="fade-right">
                        <div className="relative group">
                            <div className="overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src={left_image}
                                    alt="Discover people and plan meetups on Glicen"
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="fade-left">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                                Turn Conversations Into Real Meetups
                            </h2>

                            <p className="text-[#646f79] text-md lg:text-lg leading-relaxed">
                                Discover new people, start conversations, and plan a night out without switching between multiple apps.
                                Glicen connects social discovery with restaurant reservations so you can easily move from chatting online to meeting in person.
                            </p>

                            <button className="px-10 py-3 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-20 items-center">
                    <ScrollReveal>
                        <div className="order-2 lg:order-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                                Plan, Book, and Meet With Confidence
                            </h2>

                            <p className="text-[#646f79] text-md lg:text-lg leading-relaxed">
                                Glicen simplifies the entire social dining experience. Send invitations, schedule meetups, reserve restaurant tables, and complete payments securely — all within one platform designed for real-world connections.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Discover restaurants and available tables instantly",
                                    "Send invites and coordinate meetups in real time",
                                    "Reserve tables and manage bookings easily"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
                                            <FaCheck className="text-white text-[10px]" />
                                        </div>
                                        <span className="text-[#646f79]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="px-10 py-3 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="fade-down">
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <Image
                                    src={right_image}
                                    alt="Glicen app booking table and enjoying dinner"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

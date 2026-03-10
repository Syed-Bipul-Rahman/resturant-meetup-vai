import Title from "../reuseable/title";
import Image from "next/image";
import left_image from "../../assets/overview-1.png";
import right_image from "../../assets/overview-2.png";
import { FaCheck } from "react-icons/fa";

export default function HowWorkSection() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <Title
                    title="How It Works"
                    className="text-center"
                    description="Everything you need to know about RestoMeet."
                    descriptionClass="text-center"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
                    <div className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={left_image}
                                alt="Delicious healthy bowl"
                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                            We even give you more solutions to grow your business.
                        </h2>
                        <p className="text-[#646f79] text-lg leading-relaxed">
                            From smart tools to seamless integrations, we help your business scale faster and reach new heights effortlessly.
                        </p>
                        <button className="px-10 py-3 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Part 2: Text Left, Image Collage Right */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-20 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                            We even give you more solutions to grow your business.
                        </h2>
                        <p className="text-[#646f79] text-lg leading-relaxed">
                            From powerful analytics to seamless integrations, we provide smart tools that help your business scale efficiently. Whether you're launching new products or expanding to wider markets, our platform grows with you every step of the way. Built for modern teams, it adapts to your workflow and delivers results that matter most.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Smart analytics to track your growth",
                                "Seamless integrations with your tools",
                                "Scalable plans that fit every business"
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
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <Image
                                src={right_image}
                                alt="Food collage"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Title from '../reuseable/title'
import Image from 'next/image'
import ScrollReveal from "../animations/scroll-reveal"
import slider_image_1 from "../../assets/slide-1.png"
import slider_image_2 from "../../assets/slide-2.png"
import slider_image_3 from "../../assets/slide-3.png"
import slider_image_4 from "../../assets/slide-4.png"
import slider_image_5 from "../../assets/slide-5.png"
import slider_image_6 from "../../assets/slide-6.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppStoreCard from "../reuseable/app-store-card";
import apple_icon from "../../assets/apple.png";
import playstore from "../../assets/playstore.png";

export default function FeaturesSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: (dots: any) => (
            <div style={{ bottom: "-40px" }}>
                <ul className="!m-0 flex items-center justify-center gap-2 [&>li]:!m-0 [&>li]:!w-auto [&>li]:!h-auto [&>li.slick-active_.custom-dot]:!w-6 [&>li.slick-active_.custom-dot]:bg-primary">
                    {dots}
                </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 transition-all duration-300 custom-dot cursor-pointer"></div>
        )
    };

    const sliderImages = [
        slider_image_1,
        slider_image_2,
        slider_image_3,
        slider_image_4,
        slider_image_5,
        slider_image_6
    ];

    const features = [
        {
            title: "Seamless Integration",
            description: "Connect all your creative tools in one unified, powerful workspace designed for professionals.",
            icon: (
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Real-Time Collaboration",
            description: "Work together with your team anywhere in the world with zero latency and instant syncing.",
            icon: (
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Advanced Security",
            description: "Enterprise-grade encryption keeps your masterpieces safe, secure, and entirely yours.",
            icon: (
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <div id='features' className="p-4 overflow-hidden">
            <Title
                title="Discover the Power Within"
                className='text-[#171717] text-center'
                description="Our platform is engineered to supercharge your workflow. Enjoy features that adapt to your unique style, providing the perfect balance of simplicity and advanced functionality."
                descriptionClass="text-center w-full lg:w-1/2 mx-auto"
            />
            <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-between lg:gap-20 lg:pt-20 py-16 lg:pb-[120px]">
                <div className="absolute right-0 w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                {/* Left side content */}
                <div className="flex-1 w-full lg:max-w-xl order-2 lg:order-1 mt-16 lg:mt-0">
                    <ScrollReveal direction="fade-right">
                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-5 p-5 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/50 [transition:0.3s] group cursor-pointer">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 [transition:0.3s]">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Experience it on mobile</h4>
                            <div className="flex flex-wrap gap-4">
                                <AppStoreCard title="App Store" src={apple_icon} />
                                <AppStoreCard title="Google Play" src={playstore} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right side image slider */}
                <div className="flex-1 w-full p-2 order-1 lg:order-2 flex justify-center lg:justify-end">
                    <ScrollReveal direction="fade-left">
                        <div className="w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[390px] pb-12 mx-auto lg:mr-0">
                            <Slider {...settings} className="rounded-[40px] overflow-hidden">
                                {sliderImages.map((img, idx) => (
                                    <div key={idx} className="outline-none">
                                        <Image
                                            src={img}
                                            alt={`slider image ${idx + 1}`}
                                            className="object-cover w-full h-auto"
                                            layout="responsive"
                                            height={0}
                                            width={0}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
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

    return (
        <div id='features' className="container mx-auto p-4">
            <Title
                title="Where Imagination Meets Mastery!"
                className='text-[#171717] text-center'
                description="Step into a world of boundless creativity with Artifiex. Empowering artists, visionaries, and creators to craft extraordinary experiences, we provide the ultimate canvas for your ideas to shine. Let your masterpiece begin here."
                descriptionClass="text-center w-2/3 mx-auto"
            />
            <div className=" flex items-center flex-col lg:flex-row justify-center lg:gap-20 lg:pt-28 py-20 lg:pb-[156px] ">
                <div className="flex-1 w-full"></div>
                <div className="flex-1 w-full p-2">
                    {/* right side image slider */}
                    <ScrollReveal direction="fade-left">
                        <div className="relative top-10 pb-12 w-[390px]">
                            <Slider {...settings}>
                                {sliderImages.map((img, idx) => (
                                    <div key={idx} className="outline-none">
                                        <Image
                                            src={img}
                                            alt={`slider image ${idx + 1}`}
                                            className="object-cover"
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
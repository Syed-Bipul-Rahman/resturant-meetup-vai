import Title from '../reuseable/title'
import Image from 'next/image'
import ScrollReveal from "../animations/scroll-reveal"
import AppStoreCard from "../reuseable/app-store-card"
import apple_icon from "../../assets/apple.png";
import playstore from "../../assets/playstore.png";
import slider_image_1 from "../../assets/mobile-photo.png";
import slider_image_2 from "../../assets/header-1.png";
import slider_image_3 from "../../assets/header-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center h-auto lg:h-[90vh] flex-col lg:flex-row justify-center lg:gap-20 lg:pt-28 pt-20  ">
                <div className="flex flex-1 items-start justify-start flex-col relative xl:w-166.5 lg:w-auto pt-16 lg:pt-0">
                    <Title
                        title="Meet People. Plan the Moment. Go Out Together."
                        className="text-[#171717]"
                        visible={false}
                        description="Glicen is a modern social, dating, and reservation platform that brings real-world connections to life. Meet new people, start conversations, choose the perfect restaurant, make a reservation, and pay securely — all in one seamless experience."
                    />
                    <button className='text-sm bg-primary hover:bg-primary/90 [transition:0.3s] text-white px-5 py-2 rounded-md cursor-pointer lg:text-base w-max mt-5 lg:mt-[60px]'>GET STARTED</button>
                    <div className="mt-5">
                        <h2 className="text-base font-medium text-[#171717]">or, download the app</h2>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <AppStoreCard
                            title="App Store"
                            iconStyle='w-7 h-7'
                            titleStyle='text-xs md:text-base lg:text-lg'
                            src={apple_icon}
                        />
                        <AppStoreCard
                            title="Google Play"
                            iconStyle='w-7 h-7'
                            titleStyle='text-xs md:text-base lg:text-lg'
                            src={playstore}
                        />
                    </div>
                </div>
                <div className="flex-1 w-full p-2 my-16 lg:my-0">
                    <ScrollReveal direction="fade-left">
                        <div className="relative rounded-2xl lg:w-115 lg:h-120 w-full mr-0 animate-[float_6s_ease-in-out_infinite]">
                            <Image
                                src={slider_image_3}
                                alt={`slide 1`}
                                className="w-full h-full object-contain drop-shadow-none lg:drop-shadow-2xl"
                                height={0}
                                width={0}
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}} />
        </div >
    )
}
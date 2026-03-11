import background from "@/assets/banner.webp"
import Title from '../reuseable/title'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="container mx-auto p-4">
            <div className=" flex items-center flex-col lg:flex-row justify-center lg:gap-20 lg:pt-28 py-20 lg:pb-[156px] ">
                <div className="flex items-start justify-start flex-col relative xl:w-[666px] lg:w-auto">
                    <Title
                        title="Where Imagination Meets Mastery!"
                        className='text-[#171717]'
                        visible={false}
                        description="Step into a world of boundless creativity with Artifiex. Empowering artists, visionaries, and creators to craft extraordinary experiences, we provide the ultimate canvas for your ideas to shine. Let your masterpiece begin here."
                    />
                    <button className='text-sm bg-primary hover:bg-primary/90 [transition:0.3s] text-white px-5 py-2 rounded-md cursor-pointer lg:text-base w-max mt-5 lg:mt-[60px]'>GET STARTED</button>
                </div>
                <div className="flex-1 w-full p-2">
                    <div className="relative top-10 overflow-hidden">
                        <Image
                            src='https://img.freepik.com/premium-psd/mobile-app-screen-mockup_772836-1135.jpg'
                            alt="hero image"
                            className="object-cover"
                            layout="responsive"
                            height={0}
                            width={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
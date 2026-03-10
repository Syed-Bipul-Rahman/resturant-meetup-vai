import Image from "next/image"
import logoImage from "../../../assets/logo.png"

export default function Logo({ isScroll = false }) {
    return (
        <div className={`transition-all duration-300 ${isScroll ? "lg:w-[160px]" : "lg:w-[220px]"
            } w-32`}>
            <Image
                src={logoImage}
                width={0}
                height={0}
                alt="Logo"
                className={`transition-all duration-300 ${isScroll ? "lg:w-[100px] h-11" : " h-10 lg:w-[80px]"
                    } w-32`}
            />
        </div>
    )
}
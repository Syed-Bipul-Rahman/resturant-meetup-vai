import Image from "next/image"
import logoImage from "../../../assets/logo.png"

export default function Logo({ className = "w-32", isScroll = false }: { className?: string, isScroll?: boolean }) {
    return (
        <div className={`${className}transition-all duration-300 ${isScroll ? "lg:w-[160px]" : ""
            }`}>
            <Image
                src={logoImage}
                width={0}
                height={0}
                alt="Logo"
                className={`transition-all duration-300 ${isScroll ? "lg:w-10 h-10" : " lg:w-12 h-12 "
                    }`}
            />
        </div>
    )
}
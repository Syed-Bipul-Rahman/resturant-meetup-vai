import Image from "next/image";
import menu_image from "../../assets/dishes-hero.png"

export default function MenuSection() {
    return (
        <div className="w-full h-72">
            <Image
                src={menu_image}
                alt="menu image"
                width={0}
                height={0}
                className="w-full h-full object-cover"
            />
        </div>
    )
}
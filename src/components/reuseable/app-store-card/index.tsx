import { IStoreCardProps } from "@/src/interface";
import Image from "next/image";

export default function AppStoreCard({
    title = "Google Play",
    src = "",
    textStyle = "text-black",
    iconStyle = "w-10 h-10",
    titleStyle = "text-[22px]"
}: IStoreCardProps) {
    return (
        <div className="flex items-center gap-2 px-[14px] py-[10px] border border-primary/60 hover:border-primary [transition:0.3s] rounded cursor-pointer md:w-max">
            <div className={`${iconStyle}`}>
                <Image src={src} alt="apple-store" className="w-full h-full" />
            </div>
            <div className={`${textStyle}`}>
                <h4 className="text-[10px]">Download on the</h4>
                <h2 className={`font-medium ${titleStyle}`}>{title}</h2>
            </div>
        </div>
    );
}
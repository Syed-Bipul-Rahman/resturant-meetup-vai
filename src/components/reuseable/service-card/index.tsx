"use client"
import { IServiceCardProps } from "@/src/interface";
import { JSX, useState } from "react";


export default function ServiceCard({ title, description, image }: IServiceCardProps): JSX.Element {
    const [hovered, setHovered] = useState<boolean>(false);
    return (
        <div
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col w-full max-w-sm cursor-pointer "
        >
            <div className="w-full h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"
                        }`}
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-xl mb-3 tracking-tight font-serif">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {description}
                </p>

                <button
                    className="px-5 py-2 rounded-md cursor-pointer text-white text-sm bg-[#2571ff] hover:bg-[#2571ff]/90 [transition:0.3s] w-max">
                    Read More
                    <span className="text-base">→</span>
                </button>
            </div>
        </div>
    )
}
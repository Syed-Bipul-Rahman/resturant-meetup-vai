"use client"
import { IServiceCardProps } from "@/src/interface";
import { JSX, useState } from "react";


export default function ServiceCard({ title, description, image }: IServiceCardProps): JSX.Element {
    const [hovered, setHovered] = useState<boolean>(false);
    return (
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col w-full cursor-pointer ">
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
                    className="px-5 py-2 flex items-center gap-2 group rounded-md cursor-pointer text-white text-sm bg-primary hover:bg-primary/90 [transition:0.3s] w-max">
                    Read More
                    <span className="text-base group-hover:!translate-x-2 transition-transform duration-300">→</span>
                </button>
            </div>
        </div>
    )
}
"use client";

import { FaUsers, FaUtensils, FaGlobe } from "react-icons/fa";
import { useAboutUsService } from "@/src/hooks/use-common";


export default function AboutUsContent() {
    const stats = [
        { label: "Successful Meetups", value: "500+", icon: <FaUtensils size={24} /> },
        { label: "Active Members", value: "10k+", icon: <FaUsers size={24} /> },
        { label: "Partner Restaurants", value: "50+", icon: <FaGlobe size={24} /> },
    ];

    const { abouts, loading } = useAboutUsService();

    return (
        <div className="lg:w-[55%] mx-auto py-6 lg:py-12 bg-white px-4">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center p-6 border border-gray-100 rounded-md bg-gray-50/50">
                        <div className="text-primary mb-4">{stat.icon}</div>
                        <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                        <div className="text-gray-500 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div> */}
            <div>
                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className='about-content' dangerouslySetInnerHTML={{ __html: abouts[0]?.description ?? "" }} />
                )}
            </div>
        </div>
    )
}
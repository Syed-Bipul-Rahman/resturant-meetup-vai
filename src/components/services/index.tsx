import { IService } from "@/src/interface";
import Title from "../reuseable/title";
import ServiceCard from "../reuseable/service-card";
import ScrollReveal from "../animations/scroll-reveal";

export default function ServicesSection() {
    const services: IService[] = [
        {
            id: 1,
            title: "Buffet Service",
            description:
                "Navigate effortlessly with our intuitive design, optimized for all devices. Enjoy a seamless experience whether you're on a computer or mobile device.",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        },
        {
            id: 2,
            title: "Food Delivery",
            description:
                "Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.",
            image:
                "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80",
        },
        {
            id: 3,
            title: "Cafeteria",
            description:
                "Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.",
            image:
                "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
        },
    ];
    return (
        <section
            id='services'
            className="py-20 container mx-auto px-4">
            <Title title="Crafting Moments, Serving You"
                className="text-center"
                description="From unforgettable flavors to seamless service, we’re here to make every meal feel special. Whether you dine in, take out, or order online we’ve got your cravings covered."
                descriptionClass="text-center lg:w-[55%] mx-auto"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {services.map((service: IService, index: number) => (
                    <ScrollReveal
                        key={service.id}
                        direction="fade-up"
                        delay={index * 0.15}
                    >
                        <ServiceCard {...service} />
                    </ScrollReveal>
                ))}
            </div>
        </section >
    )
}
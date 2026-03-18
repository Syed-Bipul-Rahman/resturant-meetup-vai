import { IService } from "@/src/interface";
import Title from "../reuseable/title";
import ServiceCard from "../reuseable/service-card";
import ScrollReveal from "../animations/scroll-reveal";
import service_image_4 from "../../assets/service-4.png";

export default function ServicesSection() {
    const services: IService[] = [
        {
            id: 1,
            title: "Restaurant Booking & Reservations",
            description:
                "Discover restaurants, explore menus, and reserve tables instantly. Manage upcoming bookings and dining schedules with a simple and intuitive reservation system.",
            image:
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        },
        {
            id: 2,
            title: "Invites & Dining Offers",
            description:
                "Create and send dining invitations or special offers to friends and matches. Plan meetups, coordinate schedules, and make social dining effortless.",
            image: service_image_4.src,
        },
        {
            id: 3,
            title: "Restaurant Management",
            description:
                "Restaurants can create profiles, manage bookings, publish offers, and connect directly with customers looking to dine out on Glicen in their local area.",
            image:
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
        },
        {
            id: 4,
            title: "Secure Payments",
            description:
                "Complete reservations and dining payments securely within the app. Enjoy a smooth and trusted payment experience for every outing.",
            image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80",
        },
        {
            id: 5,
            title: "Real-Time Messaging",
            description:
                "Chat instantly with matches, friends, or restaurant hosts to coordinate meetups, confirm bookings, and plan your outing in real time.",
            image:
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80",
        },
        {
            id: 6,
            title: "Booking & Appointment History",
            description:
                "Keep track of your dining experiences with a complete history of restaurant bookings, invitations, and appointments across the platform.",
            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
        },
    ];
    return (
        <section
            id='services'
            className="py-20 container mx-auto px-4">
            <Title
                title="Everything You Need to Plan the Perfect Outing"
                className="text-center lg:w-[55%] mx-auto"
                description="Glicen brings together restaurant discovery, reservations, invitations, payments, and real-time communication in one seamless platform. Plan your dining experience from start to finish without switching between apps."
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
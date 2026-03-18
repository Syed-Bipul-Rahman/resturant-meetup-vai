import { FaCheck } from "react-icons/fa";
import ScrollReveal from "../animations/scroll-reveal";
import Title from "../reuseable/title";
import Image from "next/image";
import restaurant_image from "../../assets/restaurants.png";


const restaurantFeatures = [
    {
        title: "Create Your Profile",
        description:
            "Showcase your restaurant with photos, menus, and unique details so diners can find you easily.",
    },
    {
        title: "Manage Bookings",
        description:
            "Accept reservations, manage table availability, and track upcoming bookings effortlessly.",
    },
    {
        title: "Publish Offers & Invitations",
        description:
            "Promote special offers, discounts, or events to attract more diners and increase engagement.",
    },
    {
        title: "Connect With Diners",
        description:
            "Directly interact with users planning meetups, confirming reservations, and building loyal customers.",
    },
];

export default function RestaurantsSection() {
    return (
        <section id="restaurants" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <Title
                    title="For Restaurants"
                    className="text-center"
                    description="Glicen helps restaurants attract new diners, manage bookings, and connect with people ready to enjoy their meals."
                    descriptionClass="text-center lg:w-[55%] mx-auto"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
                    {/* Text / Features */}
                    <div className="space-y-8">
                        {restaurantFeatures.map((feature, index) => (
                            <ScrollReveal key={index} direction="fade-up" delay={index * 0.15}>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                        <FaCheck className="text-white text-sm" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                                        <p className="text-gray-600 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}

                        <ScrollReveal direction="fade-right">
                            <button className="mt-6 px-10 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 [transition:0.3s] cursor-pointer">
                                Join Glicen
                            </button>
                        </ScrollReveal>
                    </div>

                    {/* Image / Illustration */}
                    <ScrollReveal direction="fade-left">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl h-[380px] lg:h-[470px]">
                            <Image
                                src={restaurant_image}
                                alt="Restaurants dashboard and happy diners"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
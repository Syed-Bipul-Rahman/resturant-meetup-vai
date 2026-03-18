"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from "react-icons/fi";
import Title from '../reuseable/title';
import ScrollReveal from '../animations/scroll-reveal';
const faqs = [
    {
        question: "How do I meet new people on Glicen?",
        answer: "Explore profiles, start chats, and send invites to connect. You can plan a meetup at a restaurant directly within the app.",
    },
    {
        question: "Can I make restaurant reservations through the app?",
        answer: "Yes! You can discover restaurants, check availability, reserve tables instantly, and manage all your bookings in one place.",
    },
    {
        question: "How do I send invites or offers?",
        answer: "Use the app to create invitations or special dining offers, send them to friends or matches, and track responses in real time.",
    },
    {
        question: "Is payment secure on Glicen?",
        answer: "Absolutely. All payments are encrypted and handled through trusted payment gateways, giving you a safe and seamless checkout experience.",
    },
    {
        question: "Can restaurants use Glicen to manage bookings?",
        answer: "Yes! Restaurants can create profiles, publish offers, manage reservations, and connect directly with customers looking to dine out.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id='faq' className="relative overflow-hidden">
            <div className="py-24 max-w-3xl mx-auto px-6">

                <div className="absolute w-[520px] h-[720px] -bottom-40 -right-82 hero-gradient -z-10"></div>

                <div className="absolute w-[520px] h-[720px] top-0 -left-82 purple-gradient -z-10"></div>

                <ScrollReveal>
                    <Title
                        title="Frequently Asked Questions"
                        description="Everything you need to know about Glicen."
                        className="text-center"
                        descriptionClass="text-center"
                    />
                </ScrollReveal>
                <div className="space-y-4 mt-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-md overflow-hidden bg-white hover:border-primary/50 ![transition:0.3s]">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors cursor-pointer"
                            >
                                <span className="font-bold text-md lg:text-lg">{faq.question}</span>
                                <FiChevronDown
                                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

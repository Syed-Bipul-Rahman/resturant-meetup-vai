"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from "react-icons/fi";
import Title from '../reuseable/title';
const faqs = [
    {
        question: 'How do I join a meetup?',
        answer: 'Browse the upcoming meetups on our platform, select one you like, and click "Join Meetup". You will be guided through the reservation and payment process.',
    },
    {
        question: 'Are there any membership fees?',
        answer: 'Basic membership is free! You only pay for the specific meetups or events you choose to attend.',
    },
    {
        question: 'Can I host my own meetup?',
        answer: 'Yes! Certified foodies and restaurant owners can apply to host events through our "Host" dashboard.',
    },
    {
        question: 'What is the refund policy?',
        answer: 'Refunds are available up to 48 hours before the event starts. After that, we can help you transfer your ticket to someone else.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative overflow-hidden">
            <div className="py-24 max-w-3xl mx-auto px-6">
                <div className="absolute w-[520px] h-[720px] -bottom-40 -right-82 hero-gradient -z-10"></div>

                <div className="absolute w-[520px] h-[720px] top-0 -left-82 purple-gradient -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }}
                    className="text-center mb-16"
                >
                    <Title
                        title="Frequently Asked Questions"
                        description="Everything you need to know about RestoMeet."
                    />
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-md overflow-hidden bg-primary/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/10 transition-colors cursor-pointer"
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
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

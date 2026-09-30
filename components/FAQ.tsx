"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time through your App Store (iOS) or Google Play Store (Android) account settings, or directly within the app's subscription module. Your access will remain active until the end of your current billing period.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption protocols (SSL/TLS) for all data transfers. We only process your movie searches, spoiler settings, and ratings to deliver tailored AI recommendations and summaries, and we protect your location and profile data securely.",
    },
    {
        question: "Do you offer a free trial?",
        answer: "Absolutely! We offer a 3-day free trial that lets you explore the full potential of Stream Flix. You can try all our advanced AI movie recommendation features and custom selective-spoiler summaries during this trial period before your subscription starts.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-bold text-[#131118] dark:text-white mb-6">
                Frequently Asked Questions
            </h3>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-5 cursor-pointer focus:outline-none text-left"
                        >
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="material-symbols-outlined text-gray-400"
                            >
                                expand_more
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

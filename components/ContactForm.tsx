"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const nameParts = formData.firstName.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : " ";

        try {
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName || firstName,
                    lastName: formData.lastName || lastName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setSubmitStatus({
                type: "success",
                message: "Your message has been sent successfully!",
            });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            setSubmitStatus({
                type: "error",
                message: error.message || "An error occurred. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                            Your Name
                        </label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all disabled:opacity-50"
                            placeholder="John Doe"
                            required
                            type="text"
                            disabled={isSubmitting}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                    >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                            Email Address
                        </label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all disabled:opacity-50"
                            placeholder="john@example.com"
                            required
                            type="email"
                            disabled={isSubmitting}
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                        Subject
                    </label>
                    <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all disabled:opacity-50"
                        placeholder="How can we help?"
                        required
                        type="text"
                        disabled={isSubmitting}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all disabled:opacity-50"
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                        disabled={isSubmitting}
                    ></textarea>
                </motion.div>

                {submitStatus.type && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === "success"
                                ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            }`}
                    >
                        {submitStatus.message}
                    </motion.div>
                )}

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    className={`w-full brand-gradient text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-primary/20"
                        }`}
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
            </form>
        </motion.div>
    );
}

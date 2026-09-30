"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DeleteAccount() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [customReason, setCustomReason] = useState("");
    const [confirmed2, setConfirmed2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerificationSent, setIsVerificationSent] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    const finalReason = reason === "other" ? customReason : reason;
    const isFormValid = email && reason && (reason !== "other" || customReason) && confirmed2;

    const handleDeleteClick = () => {
        if (!isFormValid) {
            showToast("Please fill all fields and confirm the terms.", "error");
            return;
        }
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        setIsLoading(true);
        setIsModalOpen(false);

        try {
            const response = await fetch(`/api/delete-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, reason: finalReason }),
            });

            const data = await response.json();

            if (response.ok && (data.success || !data.error)) {
                showToast(data.message || "Verification email dispatched.", "success");
                setIsVerificationSent(true);
            } else {
                showToast(data.message || data.error || "Failed to initiate deletion request.", "error");
            }
        } catch (error) {
            console.log("error", error);
            showToast("An error occurred. Please try again later.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex flex-1 justify-center py-12 px-4 shadow-sm relative min-h-[70vh] items-center">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border ${toast.type === "success"
                                ? "bg-emerald-500 border-emerald-400 text-white"
                                : "bg-red-500 border-red-400 text-white"
                            }`}
                    >
                        <span className="material-symbols-outlined">
                            {toast.type === "success" ? "check_circle" : "error"}
                        </span>
                        <p className="font-medium">{toast.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                        >
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-3xl">
                                        warning
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Initiate Account Deletion
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Are you sure you want to request account deletion? We will send a confirmation link and code to your registered email to verify your identity.
                                </p>
                            </div>
                            <div className="flex border-t border-gray-100 dark:border-gray-800">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="flex-1 px-6 py-4 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-l border-gray-100 dark:border-gray-800"
                                >
                                    Send Verification
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-[640px] w-full flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    {!isVerificationSent ? (
                        <motion.div
                            key="request-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-[#131118] dark:text-white text-4xl mt-8 font-black leading-tight tracking-[-0.033em]">
                                    Delete Your Account
                                </h1>
                                <p className="text-[#6b608a] dark:text-gray-400 text-lg font-normal leading-normal">
                                    We&apos;re sorry to see you go. This process is secure and permanent.
                                </p>
                            </div>

                            <div className="p-1 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
                                <div className="flex flex-col items-stretch justify-start bg-white dark:bg-gray-900">
                                    <div className="flex w-full grow flex-col items-stretch justify-center gap-3 py-6 px-6">
                                        <p className="text-[#131118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                                            This action is irreversible
                                        </p>
                                        <label className="flex gap-x-3 py-2 flex-row cursor-pointer group">
                                            <input
                                                checked={confirmed2}
                                                onChange={(e) => setConfirmed2(e.target.checked)}
                                                className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors"
                                                type="checkbox"
                                            />
                                            <p className="text-[#131118] dark:text-gray-300 text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                                                I understand my active pro subscriptions will be cancelled without refund
                                            </p>
                                        </label>
                                    </div>
                                </div>

                                <div className="px-6 pb-8 space-y-4">
                                    <div className="flex flex-col gap-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                                Your Email Address
                                            </p>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                                placeholder="Enter your account email"
                                                type="email"
                                                required
                                            />
                                        </label>

                                        <label className="flex flex-col w-full">
                                            <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                                Reason for leaving
                                            </p>
                                            <select
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                                className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 appearance-none px-4 text-sm font-normal leading-normal"
                                                required
                                            >
                                                <option value="">Select a reason</option>
                                                <option value="Pricing is too high">Pricing is too high</option>
                                                <option value="Missing specific features">Missing specific features</option>
                                                <option value="Switching to a competitor">Switching to a competitor</option>
                                                <option value="I no longer need the service">I no longer need the service</option>
                                                <option value="Platform is too difficult to use">Platform is too difficult to use</option>
                                                <option value="other">Other (Please specify)</option>
                                            </select>
                                        </label>

                                        {reason === "other" && (
                                            <motion.label
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="flex flex-col w-full"
                                            >
                                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                                    Specify your reason
                                                </p>
                                                <input
                                                    value={customReason}
                                                    onChange={(e) => setCustomReason(e.target.value)}
                                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                                    placeholder="Let us know how we can improve"
                                                    type="text"
                                                    required
                                                />
                                            </motion.label>
                                        )}


                                    </div>

                                    <div className="flex flex-col gap-3 pt-6">
                                        <button
                                            onClick={handleDeleteClick}
                                            disabled={isLoading || !isFormValid}
                                            className={`w-full flex items-center justify-center rounded-xl h-14 px-8 bg-red-600 text-white hover:bg-red-700 text-base font-bold leading-normal transition-all shadow-lg shadow-red-600/20 active:scale-[0.98] ${isLoading || !isFormValid ? "opacity-50 cursor-not-allowed shadow-none" : ""
                                                }`}
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Requesting...</span>
                                                </div>
                                            ) : (
                                                "Request Account Deletion"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-[#6b608a] dark:text-gray-500 text-sm">
                                Having trouble?{" "}
                                <a className="text-primary hover:underline font-medium" href="#">
                                    Contact our support team
                                </a>{" "}
                                for help instead of leaving.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="verification-sent"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-2xl text-center space-y-6 max-w-lg mx-auto"
                        >
                            <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/40 text-primary rounded-full flex items-center justify-center mx-auto relative">
                                <span className="material-symbols-outlined text-4xl animate-bounce">
                                    mail
                                </span>
                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                    Verification Sent!
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    We have dispatched a verification email to
                                </p>
                                <p className="text-primary dark:text-indigo-400 font-semibold text-lg select-all">
                                    {email}
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-850/60 p-5 rounded-xl text-left border border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 space-y-3">
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-emerald-500 font-bold">link</span>
                                    <p><strong>Option 1:</strong> Click the secure <strong>"Permanently Delete My Account"</strong> magic link inside the email to navigate automatically.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-indigo-500 font-bold">pin</span>
                                    <p><strong>Option 2:</strong> Copy the 6-digit verification code and paste it on our verification portal.</p>
                                </div>
                            </div>

                            <p className="text-xs text-red-500 dark:text-red-400 font-medium">
                                * The link and code are valid for exactly 15 minutes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                                <Link
                                    href="/delete-account/confirm"
                                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Enter Code Manually</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                                <button
                                    onClick={() => setIsVerificationSent(false)}
                                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-750 transition-all text-sm"
                                >
                                    Back to Form
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

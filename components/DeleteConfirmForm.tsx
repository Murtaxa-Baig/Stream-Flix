"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function DeleteConfirmFormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // States
    const [token, setToken] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isTokenManual, setIsTokenManual] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    // Refs for OTP boxes
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    // Load token from URL search parameters
    useEffect(() => {
        const urlToken = searchParams.get("token");
        if (urlToken) {
            setToken(urlToken);
            setIsTokenManual(false);
        } else {
            setIsTokenManual(true);
        }
    }, [searchParams]);

    // Countdown logic after success
    useEffect(() => {
        if (isSuccess && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (isSuccess && countdown === 0) {
            router.push("/");
        }
    }, [isSuccess, countdown, router]);

    // Handle OTP character change
    const handleOtpChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return; // Allow only single digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input on typing
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspaces in OTP boxes
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    // Handle pasting the entire 6-digit OTP
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();
        if (!/^\d{6}$/.test(pastedData)) {
            showToast("Please paste a valid 6-digit confirmation code.", "error");
            return;
        }

        const digits = pastedData.split("");
        setOtp(digits);
        inputRefs.current[5]?.focus();
    };

    const isCodeComplete = otp.every((digit) => digit !== "");
    const canSubmit = token && isCodeComplete && !isLoading;

    const handleConfirmDelete = async () => {
        if (!canSubmit) return;

        setIsLoading(true);
        const secretCode = otp.join("");

        try {
            const response = await fetch(`/api/delete-account/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, secretCode }),
            });

            const data = await response.json();

            if (response.ok && (data.success || !data.error)) {
                showToast(data.message || "Account permanently deleted.", "success");
                setIsSuccess(true);
            } else {
                showToast(data.message || data.error || "Invalid code or token. Please try again.", "error");
            }
        } catch (error) {
            console.error("Confirm delete error:", error);
            showToast("An error occurred. Please try again later.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[580px] mx-auto px-4 py-16 flex flex-col items-stretch justify-center relative min-h-[60vh]">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border ${
                            toast.type === "success" 
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

            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <motion.div
                        key="confirm-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                                Confirm Your Account Deletion
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base">
                                Verify your identity to permanently remove your Stream Flix profile.
                            </p>
                        </div>

                        {/* Warnings block */}
                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-150 dark:border-red-900/30 p-5 rounded-2xl flex gap-4 items-start shadow-sm">
                            <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl shrink-0 mt-0.5 animate-pulse">
                                warning
                            </span>
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-red-800 dark:text-red-300">
                                    CRITICAL WARNING
                                </h3>
                                <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed">
                                    This action is permanent and completely irreversible. All your custom movie recommendations, search history, saved movie lists, profile settings, and active subscriptions will be deleted immediately.
                                </p>
                            </div>
                        </div>

                        <div className="p-1 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="p-6 sm:p-8 space-y-6">
                                {/* Token status / Manual selection */}
                                {token && !isTokenManual ? (
                                    <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 px-4 py-3 rounded-xl">
                                        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                                            <span className="material-symbols-outlined text-sm">lock</span>
                                            <span>Secure Token Loaded</span>
                                        </div>
                                        <button 
                                            onClick={() => setIsTokenManual(true)}
                                            className="text-xs text-primary hover:underline font-bold transition-all"
                                        >
                                            Change Token
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-900 dark:text-white">
                                            Security Deletion Token
                                        </label>
                                        <input
                                            value={token}
                                            onChange={(e) => setToken(e.target.value)}
                                            className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-xs font-mono leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                            placeholder="Paste security token from email link (if not pre-filled)"
                                            type="text"
                                        />
                                    </div>
                                )}

                                {/* OTP Section */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-gray-900 dark:text-white text-center">
                                        Enter 6-Digit Verification Code
                                    </label>
                                    
                                    <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
                                        {otp.map((digit, idx) => (
                                            <input
                                                key={idx}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                ref={(el) => { inputRefs.current[idx] = el; }}
                                                onChange={(e) => handleOtpChange(e.target.value, idx)}
                                                onKeyDown={(e) => handleKeyDown(e, idx)}
                                                className="w-11 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-black rounded-xl border-2 border-gray-300 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all shadow-inner focus:outline-none"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                                        Type or paste the verification code sent to your email.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={handleConfirmDelete}
                                        disabled={!canSubmit}
                                        className={`w-full flex items-center justify-center rounded-xl h-14 px-8 bg-red-600 text-white hover:bg-red-700 text-base font-bold leading-normal transition-all shadow-lg shadow-red-600/20 active:scale-[0.98] ${
                                            !canSubmit ? "opacity-50 cursor-not-allowed shadow-none" : ""
                                        }`}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Deleting Permanently...</span>
                                            </div>
                                        ) : (
                                            "Delete permanently"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/delete-account"
                                className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-all flex items-center gap-1 justify-center"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                <span>Back to Account Deletion Request</span>
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-2xl text-center space-y-6 max-w-md mx-auto"
                    >
                        <div className="w-20 h-20 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto">
                            <span className="material-symbols-outlined text-4xl animate-ping absolute duration-1000 opacity-25">
                                check_circle
                            </span>
                            <span className="material-symbols-outlined text-4xl relative">
                                check_circle
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                Account Deleted Successfully
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Your account and all associated data have been permanently removed. We are sorry to see you go.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-850/60 py-3 px-4 rounded-xl inline-block border border-gray-100 dark:border-gray-800">
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                Redirecting you back to the home page in <strong className="text-primary font-bold text-sm">{countdown}</strong> seconds...
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function DeleteConfirmForm() {
    return (
        <Suspense fallback={
            <div className="flex-grow flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-primary/35 border-t-primary rounded-full animate-spin" />
            </div>
        }>
            <DeleteConfirmFormContent />
        </Suspense>
    );
}

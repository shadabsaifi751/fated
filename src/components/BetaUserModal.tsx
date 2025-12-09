"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type BetaUserPayload = {
    phone: string;
    email: string;
    name: string;
};

type BetaUserModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    ctaLabel?: string;
};

const API_URL = "https://xfcy5ocgsl.execute-api.ap-south-1.amazonaws.com/staging/betaUser";
const initialPayload: BetaUserPayload = { phone: "", email: "", name: "" };

export default function BetaUserModal({
    open,
    onClose,
    title = "Join the waitlist",
    ctaLabel = "Submit",
}: BetaUserModalProps) {
    const [form, setForm] = useState<BetaUserPayload>(initialPayload);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!open) {
            setForm(initialPayload);
            setStatus("idle");
            setMessage(null);
            return;
        }

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onClose]);

    const handleChange = (field: keyof BetaUserPayload) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const validate = () => {
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
            setMessage("Please fill name, email, and phone.");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(form.email.trim())) {
            setMessage("Enter a valid email address.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === "submitting") return;
        if (!validate()) return;

        setStatus("submitting");
        setMessage(null);

        const payload: BetaUserPayload = {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            setStatus("success");
            setMessage("Thanks for joining! We'll reach out soon.");
            setForm(initialPayload);
        } catch (error) {
            console.error("betaUser submission failed", error);
            setStatus("error");
            setMessage("Unable to submit right now. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                >
                    <motion.div
                        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
                        initial={{ scale: 0.85, opacity: 0, y: 16 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0, y: 16 }}
                        transition={{ type: "spring", stiffness: 320, damping: 24, bounce: 0.25 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="lobster-font text-2xl text-[#4B164C] flex items-center gap-1">
                                    {title}
                                    <Image src="/images/heart.png" className=" w-[30px] h-[25px]" alt="heart" width={100} height={80} />
                                </h3>
                                <p className="inter-font text-sm text-[#4B164C]/80">Tell us how to reach you.</p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#4B164C]/10 text-[#4B164C] transition hover:bg-[#4B164C]/20"
                                aria-label="Close"
                            >
                                &#10005;
                            </button>
                        </div>

                        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                            <label className="block">
                                <span className="inter-font text-sm font-semibold text-[#4B164C]">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange("name")}
                                    className="mt-1 w-full rounded-lg border border-[#4B164C]/20 px-3 py-2 inter-font text-[#4B164C] focus:border-[#4B164C] focus:outline-none focus:ring-2 focus:ring-[#4B164C]/30"
                                    placeholder="Your name"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="inter-font text-sm font-semibold text-[#4B164C]">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange("email")}
                                    className="mt-1 w-full rounded-lg border border-[#4B164C]/20 px-3 py-2 inter-font text-[#4B164C] focus:border-[#4B164C] focus:outline-none focus:ring-2 focus:ring-[#4B164C]/30"
                                    placeholder="you@example.com"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="inter-font text-sm font-semibold text-[#4B164C]">Phone</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange("phone")}
                                    className="mt-1 w-full rounded-lg border border-[#4B164C]/20 px-3 py-2 inter-font text-[#4B164C] focus:border-[#4B164C] focus:outline-none focus:ring-2 focus:ring-[#4B164C]/30"
                                    placeholder="+91-XXXXXXX"
                                    required
                                />
                            </label>

                            {message && (
                                <p
                                    className={`inter-font text-sm ${status === "success" ? "text-green-700" : "text-red-600"
                                        }`}
                                >
                                    {message}
                                </p>
                            )}

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="w-full rounded-lg border border-[#4B164C]/30 px-4 py-2 inter-font font-semibold text-[#4B164C] transition hover:bg-[#4B164C]/5 sm:w-auto"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full rounded-lg bg-[#4B164C] px-4 py-2 inter-font font-semibold text-white shadow-md transition hover:bg-[#3a0f3b] disabled:cursor-not-allowed disabled:bg-[#4B164C]/70 sm:w-auto"
                                >
                                    {status === "submitting" ? "Submitting..." : ctaLabel}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


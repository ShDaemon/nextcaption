"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { StatefulButton } from "@/app/components/ui/StatefulButton";
import { joinWaitlist } from "@/app/actions";
import { toast } from "sonner";

export default function Waitlist() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus("loading");

        const result = await joinWaitlist(email);

        if (result.success) {
            setStatus("success");
            setEmail("");
            toast.success("You're on the list! Welcome to the club.", {
                icon: <CheckCircle2 className="w-5 h-5 text-[#cfff5e]" />,
                style: {
                    background: "#232221",
                    color: "#f7f7f7",
                    border: "1px solid #cfff5e",
                }
            });
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("error");
            const isDuplicate = result.error?.includes("already on the waitlist");

            if (isDuplicate) {
                toast.error("You've already joined, maybe refer us to a friend?", {
                    icon: <CheckCircle2 className="w-5 h-5 text-[#FAD328]" />,
                    style: {
                        background: "#232221",
                        color: "#f7f7f7",
                        border: "1px solid #FAD328",
                    }
                });
            } else {
                toast.error(result.error || "Something went wrong", {
                    icon: <XCircle className="w-5 h-5 text-[#F46060]" />,
                    style: {
                        background: "#232221",
                        color: "#f7f7f7",
                        border: "1px solid #F46060",
                    }
                });
            }
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    // Shared class for inputs to fix autofill and ensure consistency
    const inputClasses = `
        w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 
        text-white placeholder:text-gray-600 
        focus:outline-none focus:border-[#FAD328] transition-colors
        [appearance:none] 
        [&:-webkit-autofill]:transition-colors 
        [&:-webkit-autofill]:duration-[99999s] 
        [&:-webkit-autofill]:ease-in-out 
        [&:-webkit-autofill]:[background-color:transparent]
    `;

    return (
        <section className="py-32 px-4 w-full relative">
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-uncial leading-none mb-6"
                >
                    YOUR VIDEOS <br/>
                    DESERVE TO <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">BE HEARD</span>
                </motion.h2>

                <p className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.2em] pb-7 font-sans">
                    no language should stop your message. no barriers should limit your reach.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-lg mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-bold mb-2 font-uncial text-white tracking-wide">
                            JOIN THE WAITLIST
                        </h3>
                        <p className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase font-sans">
                            AI Powered Subtitles For Creators
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="YOUR NAME"
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium"
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER YOUR EMAIL"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium"
                        />

                        {/* Dropdown / Select */}
                        <div className="relative group">
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium appearance-none cursor-pointer invalid:text-gray-500"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled hidden className="text-gray-500">PRIMARY LANGUAGE</option>
                                <option value="hi" className="bg-[#111] text-white">Hindi</option>
                                <option value="ta" className="bg-[#111] text-white">Tamil</option>
                                <option value="te" className="bg-[#111] text-white">Telugu</option>
                                <option value="mr" className="bg-[#111] text-white">Marathi</option>
                                <option value="en" className="bg-[#111] text-white">English</option>
                            </select>
                            {/* Custom Arrow Icon */}
                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none rotate-90 group-focus-within:text-[#FAD328] transition-colors" />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <StatefulButton
                                status={status}
                                type="submit"
                            >
                                {status === 'idle' && (
                                    <>CONTINUE</>
                                )}
                            </StatefulButton>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-[12px] text-gray-500 font-bold font-mono lowercase opacity-60">
                        i promise i&#39;ll keep listening. keep improving. keep building.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
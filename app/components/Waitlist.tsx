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
            toast.success("You're on the list!", {
                icon: <CheckCircle2 className="w-5 h-5 text-[#cfff5e]" />,
                style: { background: "#232221", color: "#f7f7f7", border: "1px solid #cfff5e" }
            });
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("error");
            toast.error(result.error || "Something went wrong", {
                icon: <XCircle className="w-5 h-5 text-[#F46060]" />,
                style: { background: "#232221", color: "#f7f7f7", border: "1px solid #F46060" }
            });
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section className="py-20 px-4 w-full relative">
            <div className="max-w-lg mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-4xl md:text-5xl font-bold mb-3 font-uncial text-white tracking-wide">
                            JOIN THE WAITLIST
                        </h3>
                        <p className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase font-sans">
                            AI Powered Subtitles For Creators
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="YOUR NAME"
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium"
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER YOUR EMAIL"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium"
                        />

                        <div className="relative group">
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#FAD328] focus:bg-white/10 transition-all uppercase text-sm font-medium appearance-none cursor-pointer"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled hidden>PRIMARY LANGUAGE</option>
                                <option value="hi" className="bg-[#111]">Hindi</option>
                                <option value="ta" className="bg-[#111]">Tamil</option>
                                <option value="te" className="bg-[#111]">Telugu</option>
                                <option value="mr" className="bg-[#111]">Marathi</option>
                                <option value="en" className="bg-[#111]">English</option>
                            </select>
                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none rotate-90 group-focus-within:text-[#FAD328] transition-colors" />
                        </div>

                        <div className="pt-2">
                            <StatefulButton status={status} type="submit">
                                {status === 'idle' && <>CONTINUE</>}
                            </StatefulButton>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-[10px] text-gray-600 font-bold font-mono lowercase opacity-60 px-4">
                        i promise i&#39;ll keep listening. keep improving. keep building.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
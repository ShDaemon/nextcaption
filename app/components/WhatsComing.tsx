"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import MiniLabel from "./ui/miniLabel";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const WhatsComing = () => {
    return (
        // Removed bg-[#0a0a0a] and the noise div to make background transparent
        <section className="py-16 px-4 relative overflow-hidden">

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-10 space-y-3">
                    <MiniLabel text="JUST THE BEGINNING" color="#FAD328" />

                    {/* Added font-uncial here */}
                    <h2 className="text-3xl md:text-5xl font-uncial font-bold tracking-tight text-white leading-tight">
                        What&#39;s here now. <span className="text-[#F46060ff]">What&#39;s coming.</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {/* Card 1: Launched Now (Light Theme) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="p-6 md:p-8 rounded-[1.5rem] bg-gray-200 text-black shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute -right-20 -top-20 w-48 h-48 bg-white rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-60">Launched Now</span>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Auto captions",
                                    "Indian language support",
                                    "Clean formatting",
                                    "Social-ready exports",
                                    "Simple dashboard"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                        <div className="p-1 rounded-full bg-black/5">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 2: Coming Soon (Dark Theme) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="p-6 md:p-8 rounded-[1.5rem] bg-white/5 border border-white/10 text-white relative overflow-hidden backdrop-blur-sm group"
                    >
                        <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[#FAD328] rounded-full blur-[80px] opacity-5 group-hover:opacity-10 transition-opacity" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#FAD328] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAD328]">Coming Soon</span>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Custom styles",
                                    "Creator presets",
                                    "Brand captions",
                                    "Multi-platform optimization",
                                    "Analytics dashboard",
                                    "More languages"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-base md:text-lg font-medium text-white/40 group-hover:text-white/70 transition-colors">
                                        <div className="p-1 rounded-full bg-white/5">
                                            <Clock className="w-4 h-4 text-white/40" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </motion.div>

                <div className="mt-8 text-center">
                    <p className="text-white/30 text-xs font-mono lowercase">
                        this isn&#39;t a massive company launch. just a small team & big belief.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatsComing;
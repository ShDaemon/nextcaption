"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Background Glows (matching your brand colors) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7E5FAA] opacity-20 blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-[#E62C74] opacity-10 blur-[100px]" />

            <div className="relative flex flex-col items-center gap-8">
                {/* Animated Geometric Logo Placeholder */}
                <div className="relative">
                    <motion.div
                        className="w-20 h-20 border-2 border-[#FAD328] rounded-xl"
                        animate={{
                            rotate: [0, 90, 180, 270, 360],
                            borderRadius: ["20%", "50%", "50%", "20%"],
                            borderColor: ["#FAD328", "#7E5FAA", "#F46060", "#FAD328"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    {/* Inner pulse */}
                    <motion.div
                        className="absolute inset-0 w-20 h-20 bg-[#FAD328] rounded-xl opacity-20"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white font-medium tracking-[0.2em] text-sm uppercase"
                    >
                        Initializing Experience
                    </motion.span>

                    {/* Loading Bar Container */}
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7E5FAA] via-[#FAD328] to-[#F46060]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Noise Texture Overlay (Consistency with your background) */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
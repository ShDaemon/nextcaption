"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBackground from "@/app/components/ui/AnimatedBackground";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden selection:bg-[#FAD328] selection:text-black">
            {/* Re-use your animated background for visual consistency */}
            <AnimatedBackground />

            <div className="relative z-10 text-center px-4">
                {/* Animated 404 Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[12rem] md:text-[15rem] font-bold leading-none tracking-tighter text-white/10"
                    style={{
                        textShadow: "0 0 20px rgba(126, 95, 170, 0.3)",
                    }}
                >
                    404
                </motion.h1>

                {/* Message Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-[-4rem] md:mt-[-6rem]"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Lost in the <span className="text-[#FAD328]">void?</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm md:text-base leading-relaxed">
                        The page you're looking for has drifted out of orbit.
                        It might have been moved, deleted, or never existed in this dimension.
                    </p>

                    {/* Action Button */}
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#FAD328] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Back to Reality
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Decorative Glitch Lines */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F46060]/50 to-transparent pointer-events-none"
                    animate={{
                        top: ["40%", "60%", "40%"],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Retro scanline effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-20" />
        </div>
    );
}
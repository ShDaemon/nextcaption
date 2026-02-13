"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check, X, ArrowRight } from "lucide-react";

interface StatefulButtonProps {
    status: "idle" | "loading" | "success" | "error";
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export function StatefulButton({
                                   status,
                                   onClick,
                                   children,
                                   className = "",
                                   type = "button",
                               }: StatefulButtonProps) {
    return (
        <div className={`relative group w-full ${className}`}>
            {/* 1. Animated Glow AnimatedBackground */}
            <div
                className={`absolute -inset-1 bg-gradient-to-r from-[#FAD328] via-[#F46060] to-[#E62C74] rounded-full blur opacity-50 transition duration-500 ${
                    status === 'idle' ? 'group-hover:opacity-75' : 'opacity-0'
                }`}
            />

            <button
                onClick={onClick}
                disabled={status !== "idle"}
                type={type}
                className={`
          relative w-full flex items-center justify-center rounded-full px-8 py-4 
          border border-[#FAD328]/30 shadow-2xl 
          transition-all duration-300
          ${status === "idle" ? "cursor-pointer hover:border-[#FAD328]/60 hover:scale-[1.02] active:scale-[0.98]" : "cursor-default"}
          ${status === "error" ? "border-[#F46060]" : ""}
          ${status === "success" ? "border-[#cfff5e]" : ""}
        `}
            >
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 font-bold text-white group-hover:text-[#FAD328] transition-colors"
                        >
                            {children}
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    )}

                    {status === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Loader2 className="w-5 h-5 text-[#FAD328] animate-spin" />
                        </motion.div>
                    )}

                    {status === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center gap-2 font-bold text-[#cfff5e]"
                        >
                            <Check className="w-5 h-5" />
                            <span>Joined!</span>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center gap-2 font-bold text-[#F46060]"
                        >
                            <X className="w-5 h-5" />
                            <span>Failed</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
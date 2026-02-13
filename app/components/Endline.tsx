"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Endline() {
    return (
        <section className="py-24 px-4 w-full relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-uncial leading-tight mb-8"
                >
                    YOUR VIDEOS <br/>
                    DESERVE TO <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        BE HEARD
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.3em] uppercase font-sans max-w-xl mx-auto leading-relaxed"
                >
                    no language should stop your message. <br className="hidden md:block"/>
                    no barriers should limit your reach.
                </motion.p>
            </div>
        </section>
    );
}
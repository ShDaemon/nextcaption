import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/lib/constants";
import { Play } from "lucide-react";
import DesiButton from "./ui/DesiButton";

const Hero = () => {
    return (
        <section className="py-10 flex flex-col justify-center items-center text-center px-4 relative">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-5xl mx-auto space-y-6"
            >
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-6xl lg:text-7xl font-uncial tracking-tighter leading-[0.9]"
                >
                    <span className="text-white block">AUTO</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F46060] to-[#E62C74]">
                        CAPTIONS
                    </span>
                    <span className="text-[#5A79B1] block text-3xl md:text-5xl lg:text-6xl mt-2 opacity-80">
                        FOR EVERY
                    </span>
                    <span className="text-white block">CREATOR</span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-geistSans mt-8"
                >
                    Upload your video. Get captions in <span className="text-[#FAD328]">Hindi, Tamil, Telugu, Marathi & English</span>.
                    Reach 10x more people. In seconds.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12"
                >
                    {/* Your new styled button */}
                    <DesiButton text="JOIN THE WAITLIST" />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-8 py-4 border border-white/20 rounded-full font-medium text-lg text-white hover:bg-white/10 flex items-center gap-2 transition-colors"
                    >
                        <Play fill="currentColor" className="w-4 h-4" /> WATCH DEMO
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
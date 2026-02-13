"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
    // Increased Opacity (0.4 - 0.6) for better visibility on black
    const colors = {
        lilac: "rgba(126, 95, 170, 0.6)",
        coral: "rgba(244, 96, 96, 0.5)",
        gold: "rgba(250, 211, 40, 0.4)",
        razzmatazz: "rgba(230, 44, 116, 0.5)",
        glaucous: "rgba(90, 121, 177, 0.5)",
    };

    return (
        // Ensure this container has a background but doesn't block content
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">

            {/* 1. Deep Lilac - Top Left */}
            <motion.div
                className="absolute top-[5%] left-[5%] w-[300px] h-[300px] rounded-full blur-[80px]"
                style={{ backgroundColor: colors.lilac }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                    x: [0, 30, 0],
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />

            {/* 2. Vibrant Coral - Middle Right */}
            <motion.div
                className="absolute top-[25%] -right-[5%] w-[350px] h-[350px] rounded-full blur-[90px]"
                style={{ backgroundColor: colors.coral }}
                animate={{
                    opacity: [0, 0.8, 0.8, 0],
                    y: [0, 100, 0],
                    rotate: 90,
                }}
                transition={{ repeat: Infinity, duration: 12, delay: 1 }}
            />

            {/* 3. Gold - Center Left */}
            <motion.div
                className="absolute top-[45%] left-[15%] w-[250px] h-[250px] rounded-full blur-[70px]"
                style={{ backgroundColor: colors.gold }}
                animate={{
                    opacity: [0, 0.7, 0.7, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{ repeat: Infinity, duration: 8, delay: 4 }}
            />

            {/* 4. Razzmatazz - Bottom Right */}
            <motion.div
                className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{ backgroundColor: colors.razzmatazz }}
                animate={{
                    opacity: [0, 0.9, 0.9, 0],
                    x: [0, -50, 0],
                    rotate: -45,
                }}
                transition={{ repeat: Infinity, duration: 15 }}
            />

            {/* 5. Glaucous - Bottom Left */}
            <motion.div
                className="absolute bottom-[5%] -left-[10%] w-[450px] h-[450px] rounded-full blur-[110px]"
                style={{ backgroundColor: colors.glaucous }}
                animate={{
                    opacity: [0, 0.8, 0.8, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{ repeat: Infinity, duration: 18, delay: 2 }}
            />

            {/* 6. Gold Accent - Top Right */}
            <motion.div
                className="absolute top-[10%] right-[20%] w-[150px] h-[150px] rounded-full blur-[50px]"
                style={{ backgroundColor: colors.gold }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [0, 50, 0],
                }}
                transition={{ repeat: Infinity, duration: 7, delay: 5 }}
            />

            {/* 7. Lilac - Center Right */}
            <motion.div
                className="absolute top-[60%] right-[15%] w-[280px] h-[280px] rounded-full blur-[85px]"
                style={{ backgroundColor: colors.lilac }}
                animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 14, delay: 3 }}
            />

            {/* 8. Glaucous Drift - Top Center */}
            <motion.div
                className="absolute top-[-5%] left-[50%] w-[300px] h-[300px] rounded-full blur-[90px]"
                style={{ backgroundColor: colors.glaucous }}
                animate={{
                    opacity: [0, 0.6, 0],
                    x: [-100, 100, -100],
                }}
                transition={{ repeat: Infinity, duration: 20 }}
            />
        </div>
    );
};

export default AnimatedBackground;
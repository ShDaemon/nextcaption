"use client";

import React from 'react';
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const RevealLinks = () => {
    return (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white">
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Linkedin</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
        </div>
    );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-5xl md:text-6xl"
            style={{ lineHeight: 0.85 }}
        >
            <div className="py-1">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 py-1">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block text-[#FAD328]"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
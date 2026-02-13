"use client";

import React from "react";
import { motion } from "framer-motion";

const CautionTape = () => {
    return (
        <div className="w-full h-[20px] overflow-hidden border-y border-black/10 bg-[#FAD328]">
            <motion.div
                className="w-full h-full"
                // We animate the background position by exactly one tile width (30px)
                // This creates a seamless infinite loop.
                animate={{ backgroundPosition: ["0px 0", "-30px 0"] }}
                transition={{
                    duration: 1, // Adjust speed: lower = faster
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    // This specific gradient pattern creates the 45-degree stripes
                    // using percentages ensures hard stops (no blur)
                    backgroundImage: `linear-gradient(
            -45deg, 
            #000 25%, 
            transparent 25%, 
            transparent 50%, 
            #000 50%, 
            #000 75%, 
            transparent 75%, 
            transparent 100%
          )`,
                    // 30px tile size results in stripes approx 10.6px wide (close to your 10px target)
                    // Using an integer here (30px) prevents sub-pixel rendering jitter
                    backgroundSize: "30px 30px",
                }}
            />
        </div>
    );
};

export default CautionTape;
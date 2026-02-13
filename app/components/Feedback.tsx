"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import MiniLabel from "./ui/miniLabel";

const testimonials = [
    {
        quote: "Finally, a tool that understands Hindi. My reels reach so many more people now.",
        name: "Priya",
        role: "Content Creator",
        avatarColor: "bg-[#F46060]"
    },
    {
        quote: "No more spending hours on captions. I can focus on creating better content.",
        name: "Arjun",
        role: "Small Business Owner",
        avatarColor: "bg-[#FAD328]"
    },
    {
        quote: "The ease of use is insane. Upload, wait, done. That's it.",
        name: "Meera",
        role: "Student Creator",
        avatarColor: "bg-[#E62C74]"
    }
];

const Feedback = () => {
    return (
        // Removed bg-[#0a0a0a] to make background transparent
        <section className="py-16 px-4 relative overflow-hidden">

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-10 space-y-3">
                    <MiniLabel text="CREATORS ARE ALREADY LOVING IT" color="#F46060" />

                    {/* Added font-uncial here */}
                    <h2 className="text-3xl md:text-5xl font-uncial font-bold tracking-tight text-white">
                        Real feedback from <span className="text-transparent bg-clip-text bg-[#5A79B1ff]">early testers</span>
                    </h2>
                </div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 relative group hover:border-white/10 transition-colors flex flex-col"
                        >
                            {/* Subtle Gradient Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b ${item.avatarColor} to-transparent rounded-[1.5rem] pointer-events-none`} />

                            <Quote className="w-6 h-6 text-white/20 mb-4 group-hover:text-white/40 transition-colors" />

                            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed mb-6 flex-grow">
                                &#34;{item.quote}&#34;
                            </p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className={`w-8 h-8 rounded-full ${item.avatarColor} flex items-center justify-center text-black text-xs font-bold shadow-lg`}>
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-xs">{item.name}</h4>
                                    <p className="text-white/40 text-[10px] font-mono">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
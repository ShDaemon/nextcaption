"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import MiniLabel from "@/app/components/ui/miniLabel";

// It's fine to keep static data outside the component
const languages = [
    { id: "hindi", label: "HINDI (हिंदी)", sub: "Natural, conversational Hindi", text: "नमस्ते! यह एक नमूना वीडियो कैप्शन है।" },
    { id: "tamil", label: "TAMIL (தமிழ்)", sub: "Accurate Tamil language support", text: "வணக்கம்! இது ஒரு மாதிரி வீடியோ தலைப்பு." },
    { id: "telugu", label: "TELUGU (తెలుగు)", sub: "Fluent Telugu caption generation", text: "హలో! ఇది నమూనా వీడియో శీర్షిక." },
];

const Demo = () => {
    const [activeTab, setActiveTab] = useState("hindi");

    return (
        <section className="py-24 px-4 w-full">
            <div className="max-w-6xl mx-auto">
                <MiniLabel className={"text-center pb-1.5"}
                    text="See it in action"
                />
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-uncial text-center mb-16"
                >
                    Explore how nextcaption <br/>
                    <span className="text-[#7E5FAA]">handles different languages</span>
                </motion.h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Buttons */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.id}
                                onClick={() => setActiveTab(lang.id)}
                                className={`p-6 rounded-xl text-left transition-all duration-300 border ${
                                    activeTab === lang.id
                                        ? "bg-white text-black border-white scale-105"
                                        : "bg-transparent text-gray-400 border-white/10 hover:bg-white/5"
                                }`}
                            >
                                <h4 className="font-bold text-lg font-uncial">{lang.label}</h4>
                                <p className={`text-sm mt-1 ${activeTab === lang.id ? "text-gray-600" : "text-gray-500"}`}>
                                    {lang.sub}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Preview Area */}
                    <div className="lg:col-span-8 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7E5FAA] to-[#E62C74] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative h-full min-h-[400px] bg-black/80 border border-white/10 rounded-3xl flex flex-col justify-center items-center p-12 text-center overflow-hidden">
                            <span className="absolute top-8 left-8 text-xs font-mono text-gray-500 tracking-widest uppercase">Caption Preview</span>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-6"
                                >
                                    <p className="text-3xl md:text-5xl font-medium leading-relaxed text-white">
                                        {languages.find(l => l.id === activeTab)?.text}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                                <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                                    <Play className="w-3 h-3 fill-black" /> PLAY
                                </button>
                                <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors border border-white/10">
                                    <Download className="w-3 h-3" /> EXPORT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
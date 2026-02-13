import React from 'react';
import {motion} from "framer-motion";
import {Check, Sparkles} from "lucide-react";
import MiniLabel from "@/app/components/ui/miniLabel";

const languages = [
    { name: "ENGLISH", native: "English", count: "1.5B+ SPEAKERS" },
    { name: "HINDI", native: "हिंदी", count: "340M+ SPEAKERS" },
    { name: "TAMIL", native: "தமிழ்", count: "80M+ SPEAKERS" },
    { name: "TELUGU", native: "తెలుగు", count: "85M+ SPEAKERS" },
    { name: "MARATHI", native: "मराठी", count: "83M+ SPEAKERS" },
];

const LangSupportGrid = () => {
    return (
        <>
            <section className="py-24 px-4 bg-white/5 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <MiniLabel className={"text-center pb-3"}
                                   text="your language, your way"
                        />
                        <h3 className="text-4xl md:text-5xl font-uncial">Supports Indian languages <br/><span className="text-gray-600">that creators actually use</span></h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {languages.map((lang, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-2 group hover:border-[#FAD328]/50 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2">
                                    <Check className="w-5 h-5 text-black" />
                                </div>
                                <h4 className="font-bold text-lg">{lang.name}</h4>
                                <p className="text-2xl font-uncial text-[#FAD328]">{lang.native}</p>
                                <p className="text-xs text-gray-500 font-mono mt-2">{lang.count}</p>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-transparent border border-dashed border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                        >
                            <Sparkles className="w-8 h-8 text-[#5A79B1] mb-2" />
                            <h4 className="font-bold text-lg">MORE COMING</h4>
                            <p className="text-xl font-uncial">আপনার ভাষা শীঘ্রই</p>
                            <p className="text-xs text-gray-500 font-mono mt-2">SOON</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LangSupportGrid;
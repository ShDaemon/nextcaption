import React from 'react';
import {motion} from "framer-motion";
import {Check} from "lucide-react";

const Roadmap = () => {
    return (
        <>
            <section className="py-24 px-4 w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Just the Beginning</p>
                        <h2 className="text-4xl md:text-6xl font-uncial">
                            What's here now. <span className="text-gray-600">What's coming.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-[#D9D9D9] text-black rounded-3xl p-10 md:p-14"
                        >
                            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 opacity-60">LAUNCHED NOW</h3>
                            <ul className="space-y-6">
                                {["Auto captions", "Indian language support", "Clean formatting", "Social-ready exports", "Simple dashboard"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl md:text-2xl font-bold">
                                        <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="bg-black border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7E5FAA]/10 to-transparent pointer-events-none" />
                            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 text-[#7E5FAA]">COMING SOON</h3>
                            <ul className="space-y-6 text-gray-500">
                                {["Custom styles", "Creator presets", "Brand captions", "Multi-platform optimization", "Analytics dashboard", "More languages"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl md:text-2xl">
                                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Roadmap;
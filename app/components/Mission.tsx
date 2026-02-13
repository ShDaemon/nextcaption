import React from 'react';
import {motion} from "framer-motion";

const Mission = () => {
    return (
        <>
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-left relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 text-[#FAD328] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105 select-none mb-4">
                            <span className="w-8 h-[1px] bg-[#FAD328]"></span>
                            Why Tarun Built This
                        </div>

                        <h2 className="text-5xl md:text-7xl font-uncial leading-none">
                            A mission to empower <br/>
                            <span className="text-gray-600">every creator, no matter their</span> <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46060] to-[#E62C74]">language</span>
                        </h2>

                        <div className="space-y-6 text-xl md:text-2xl text-gray-400 font-geistSans max-w-3xl border-l-2 border-[#5A79B1] pl-8">
                            <p className="italic text-white">this thing has been living in my head for a long time.</p>
                            <p>late nights scrolling through reels, shorts, videos. thinking: "this is amazing content, but what if more people could understand it?"</p>
                            <p>i see creators in small towns, different states, different languages, making incredible stuff. and it not reaching people because of one small thing: captions.</p>
                            <p className="text-white">there has to be something better.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Mission;
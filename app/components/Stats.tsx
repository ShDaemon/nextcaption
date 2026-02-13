import { motion } from 'framer-motion';
import React from 'react';
import MiniLabel from "@/app/components/ui/miniLabel";
const stats = [
    { val: "4.2B", label: "creators using mobile video globally" },
    { val: "85%", label: "watch videos without sound initially" },
    { val: "5x", label: "more reach with captions" },
    { val: "92%", label: "of indian creators want multilingual support" },
];

const Stats = () => {
    return (
        <>
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <MiniLabel className={"text-center pb-3"}
                               text="why this matters"
                    />
                    <h3 className="text-3xl md:text-5xl font-uncial mb-12">
                        Captions aren&#39;t nice-to-have. <br/>
                        <span className="text-[#5A79B1] opacity-60">They&#39;re a game changer.</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5"
                            >
                                <div className="text-4xl md:text-6xl font-uncial text-white mb-2">{stat.val}</div>
                                <p className="text-sm md:text-base text-gray-400 font-geistSans">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Stats;
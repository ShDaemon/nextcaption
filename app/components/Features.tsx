import React from 'react';
import {Brain, Download, Globe, Sparkles, TrendingUp, Zap} from "lucide-react";
import {COLORS} from "@/app/lib/constants";
import {motion} from "framer-motion";
import MiniLabel from "@/app/components/ui/miniLabel";

const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Upload your video. Get captions in seconds. Not minutes.", color: COLORS.gold },
    { icon: Globe, title: "Multi-Language Support", desc: "Hindi, Tamil, Telugu, Marathi, English. Your language, your voice.", color: COLORS.glaucous },
    { icon: Brain, title: "Natural & Accurate", desc: "Understands context, slang, code-mixing. Sounds like you.", color: COLORS.deepLilac },
    { icon: Download, title: "Social-Ready Export", desc: "Optimized for Reels, Shorts, YouTube. Download and post.", color: COLORS.vibrantCoral },
    { icon: Sparkles, title: "Zero Setup Required", desc: "No technical skills needed. Just upload and done.", color: COLORS.razzmatazz },
    { icon: TrendingUp, title: "Reach More Creators", desc: "5x more engagement. Captions work. Facts don't lie.", color: COLORS.gold },
];

const Features = () => {
    return (
        <>
            <section className="py-24 px-4 w-full">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <MiniLabel
                            text="what you get"
                            color="#FAD328ff"
                        />
                        <h3 className="text-4xl md:text-6xl font-uncial text-white max-w-4xl mx-auto leading-tight">
                            Built for creators who want <br/>
                            <span className="text-gray-500">to grow without the headaches</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, borderColor: f.color }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group transition-colors duration-300"
                            >
                                <div className="mb-6 p-3 rounded-lg inline-block bg-white/5" style={{ color: f.color }}>
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold font-uncial mb-3">{f.title}</h4>
                                <p className="text-gray-400 leading-relaxed font-geistSans">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
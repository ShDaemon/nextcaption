"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import ScrollToTop from "@/app/components/ScrollToTop";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Mission from "@/app/components/Mission";
import LangSupportGrid from "@/app/components/LangSupportGrid";
import Stats from "@/app/components/Stats";
import Waitlist from "@/app/components/Waitlist";
import Footer from "@/app/components/Footer";
import Demo from "@/app/components/Demo";
import Feedback from "@/app/components/Feedback";
import WhatsComing from "@/app/components/WhatsComing";
import AnimatedBackground from "@/app/components/ui/AnimatedBackground";

export default function Home() {
    return (
        <div className="min-h-screen w-full relative selection:bg-[#FAD328] selection:text-black">

            <AnimatedBackground />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col w-full">
                <Navbar />

                <main className="pt-2">
                    <div id="hero"><Hero/></div>
                    <div id="features"><Features/></div>
                    <div id="demo"><Demo/></div>
                    <div id="feedback"><Feedback/></div>
                    <div id="mission"><Mission/></div>
                    <div id="languages"><LangSupportGrid/></div>
                    <div id="stats"><Stats/></div>
                    <div id="whatscoming"><WhatsComing/></div>
                    <div id="waitlist"><Waitlist/></div>
                </main>

                <Footer/>
            </div>

            <ScrollToTop />
        </div>
    );
}
"use client";

import React from 'react';
import { RevealLinks } from "./ui/RevealLinks";
import MiniLabel from "@/app/components/ui/miniLabel";

const Footer = () => {
    return (
        <footer className="relative w-full py-20 px-8 mt-20">
            <MiniLabel className={"text-center pb-3"}
                       text="get to us on"
            />
            <div className="flex flex-col items-center justify-center gap-6 mb-16">
                <RevealLinks />
            </div>
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
                <div className="flex space-x-6 font-mono text-gray-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-[#FAD328] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#FAD328] transition-colors">Terms</a>
                </div>

                <div className="text-center">
                    <p className=" font-uncial text-gray-500 lowercase tracking-tighter">
                        thank you for being here
                    </p>
                    <p className="text-[#5A79B1] font-mono text-xs mt-1 uppercase tracking-[0.2em]">
                        &mdash; Tarun
                    </p>
                </div>

                <div className="font-mono text-gray-500 uppercase">
                    © 2026 All Rights Reserved
                </div>
            </div>

        </footer>
    );
};

export default Footer;
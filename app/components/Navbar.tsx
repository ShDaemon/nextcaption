"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DesiButton from "./ui/DesiButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="w-full px-6 py-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* 1. Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl font-uncial font-bold tracking-tight text-white hover:opacity-90 transition-opacity cursor-pointer"
                >
                    Next<span className="text-[#FAD328]">Caption</span>
                </button>

                {/* 2. Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAD328] transition-all duration-300 ease-out group-hover:w-full" />
                        </button>

                        <button
                            onClick={() => scrollToSection('demo')}
                            className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Demo
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAD328] transition-all duration-300 ease-out group-hover:w-full" />
                        </button>

                        <button
                            onClick={() => scrollToSection('mission')}
                            className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Mission
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAD328] transition-all duration-300 ease-out group-hover:w-full" />
                        </button>
                    </div>

                    {/* Desktop Desi Button */}
                    <DesiButton
                        text="Join Waitlist"
                        onClick={() => scrollToSection('waitlist')}
                        className="is-navbar"
                    />
                </div>

                {/* 3. Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* 4. Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-white/10 overflow-hidden absolute left-0 right-0 top-full z-[100]"
                    >
                        <div className="flex flex-col items-center gap-6 p-8 text-center text-gray-400">
                            <button onClick={() => scrollToSection('features')} className="text-lg hover:text-white transition-colors cursor-pointer">Features</button>
                            <button onClick={() => scrollToSection('demo')} className="text-lg hover:text-white transition-colors cursor-pointer">Demo</button>
                            <button onClick={() => scrollToSection('mission')} className="text-lg hover:text-white transition-colors cursor-pointer">Mission</button>

                            {/* Mobile Desi Button */}
                            <div className="pt-2">
                                <DesiButton
                                    text="Join Waitlist"
                                    onClick={() => scrollToSection('waitlist')}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
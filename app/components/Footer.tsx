import React from 'react';
import {RevealLinks} from "@/app/components/ui/RevealLinks";

const Footer = () => {
    return (
        <>
            <footer className="py-12 text-center text-gray-600 text-sm font-mono border-t border-white/5 w-full">
                <p>thank you for being here</p>
                <p className="mt-2 text-[#5A79B1]"> &mdash; Tarun</p>
            </footer>
            <RevealLinks/>
        </>
    );
};

export default Footer;
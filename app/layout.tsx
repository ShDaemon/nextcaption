import type { Metadata } from "next";
import { Geist, Geist_Mono, Uncial_Antiqua } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const uncialAntiqua = Uncial_Antiqua({
    weight: "400",
    variable: "--font-uncial",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NextCaption.in",
    description: "AI Powered subtitles for creators in Indian languages.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${uncialAntiqua.variable} antialiased bg-black text-white`}
        >
        {children}
        <Toaster position="bottom-center" />
        </body>
        </html>
    );
}
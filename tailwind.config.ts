import type { Config } from "tailwindcss";

const config: Config = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                // This is the magic line. It connects 'font-uncial' to your layout variable
                uncial: ["var(--font-uncial)", "cursive"],
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;
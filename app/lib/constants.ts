import { Variants } from "framer-motion";

// --- Color Palette ---
export const COLORS = {
    deepLilac: "#7E5FAA",
    vibrantCoral: "#F46060",
    gold: "#FAD328",
    razzmatazz: "#E62C74",
    glaucous: "#5A79B1",
};

// --- Animations (Fixed Types) ---
// We explicitly type this as 'Variants' so 'easeOut' is recognized as an Easing type, not just a string.
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};
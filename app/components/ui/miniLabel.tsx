import React from "react";

interface MiniLabelProps {
    text: string;
    className?: string;
    color?: string;
}

const MiniLabel = ({
                       text,
                       className = "",
                       color = "#FAD328"
                   }: MiniLabelProps) => {

    return (
        <div
            className={`
                text-center
                text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]
                transition-transform hover:scale-105 select-none
                ${className}
            `}
            style={{ color: color }}
        >
            {text}
        </div>
    );
};

export default MiniLabel;
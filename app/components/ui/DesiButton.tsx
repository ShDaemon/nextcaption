import React from 'react';
import { ArrowRight } from "lucide-react";

interface DesiButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const DesiButton = ({ text, onClick, className = "" }: DesiButtonProps) => {
    return (
        <button className={`uiverse-button ${className}`} onClick={onClick}>
            <div>
                <span>
                    {text} <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </button>
    );
};

export default DesiButton;
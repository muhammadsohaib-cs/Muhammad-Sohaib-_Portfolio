"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollPx / winHeightPx) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
            <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"
                style={{ width: `${scrollProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
            />
        </div>
    );
}

"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen py-20 px-6 md:px-20 relative z-20 overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    staggerChildren: 0.2
                }}
                viewport={{ once: false, amount: 0.3 }}
            >
                {title && (
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        {title}
                    </motion.h2>
                )}
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { portfolioData } from "../data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <Section id="education" title="Education">
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[20px] top-4 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent md:left-[30px]" />

                <div className="space-y-12">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-16 md:pl-24 group"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[14px] top-6 w-3.5 h-3.5 rounded-full bg-black border-[3px] border-purple-500 z-10 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 md:left-[24px]" />

                            {/* Card */}
                            <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 shadow-xl group-hover:shadow-purple-500/10">

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                                        {edu.period}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-purple-400 mb-6 font-medium">
                                    <MapPin className="w-4 h-4" />
                                    <span>{edu.institution}</span>
                                    <span className="text-gray-500 text-sm font-normal">• Karachi, PK</span>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

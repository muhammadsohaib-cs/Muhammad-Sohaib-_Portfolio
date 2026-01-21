"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 pl-12 md:pl-0">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="relative md:flex gap-10 items-start group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ 
                            duration: 0.7, 
                            delay: index * 0.2,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >

                        {/* Timeline Dot */}
                        <div className="absolute -left-[53px] md:left-auto md:relative md:w-48 md:text-right shrink-0 mt-1">
                            <span className="text-cyan-400 font-mono text-sm">{exp.period}</span>
                            <div className="absolute top-2 -right-[27px] w-3 h-3 bg-cyan-500 rounded-full md:hidden"></div>
                        </div>

                        {/* Content */}
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors flex-1 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                            <div className="text-gray-400 mb-4">{exp.company}</div>
                            <p className="text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>

                        {/* Desktop Timeline Dot */}
                        <motion.div 
                            className="hidden md:block absolute left-48 top-6 w-3 h-3 bg-cyan-500 rounded-full border-4 border-black box-content z-10 -ml-1.5 transform -translate-x-1/2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

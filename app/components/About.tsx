"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Section from "./Section";
import { portfolioData } from "../data/portfolio";

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image - Left Side */}
                <motion.div
                    className="relative w-full rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 flex items-center justify-center order-1" // Added order-1 for clarity, though default grid order works if placed first
                    initial={{ opacity: 0, x: -50 }} // Changed animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.5)" }}
                >
                    <Image
                        src="/profile-pixel.jpg"
                        alt="Muhammad Sohaib - Profile"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </motion.div>

                {/* Text Content - Right Side */}
                <motion.div
                    className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 order-2"
                    initial={{ opacity: 0, x: 50 }} // Changed animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
                            Creative Developer & Designer
                        </h3>
                        <p>{portfolioData.personalInfo.description}</p>
                    </div>

                    <p>
                        I specialize in React ecosystem and 3D web technologies, constantly exploring new ways to make the web more immersive.
                    </p>

                    <div className="flex gap-4 pt-6">
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-medium rounded-full">
                            GitHub
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                            className="px-8 py-3 border border-white text-white hover:bg-white/10 transition-colors font-medium rounded-full">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

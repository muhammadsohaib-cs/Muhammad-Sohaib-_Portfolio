"use client";

import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Overlay() {
    return (
        <div className="absolute inset-0 z-10 flex flex-col pointer-events-none h-screen">
            {/* Hero Text */}
            <motion.div
                className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-10 md:mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="relative z-20 flex flex-col items-center">
                    <motion.p
                        className="text-lg md:text-xl font-medium text-white mb-4 tracking-wider uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Hi, I am
                    </motion.p>
                    <motion.h1
                        className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600"
                        initial={{ opacity: 0, scale: 0.9, letterSpacing: "-0.05em" }}
                        animate={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        MUHAMMAD SOHAIB
                    </motion.h1>
                </div>

                <motion.div
                    className="mt-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
                        Crafting Exceptional Digital Experiences
                    </p>
                </motion.div>

                {/* Buttons & Socials */}
                <motion.div
                    className="mt-10 flex flex-col items-center gap-6 pointer-events-auto z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group relative px-8 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            View My Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                            href="/cv.pdf" // TO DO: Replace with actual CV path
                            download
                            className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                            Download CV
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                    <div className="flex gap-6 mt-4">
                        {[
                            { icon: Github, href: "https://github.com/muhammadsohaib-cs", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-sohaib-897058328", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:muhammadsohaib.19477@gmail.com", label: "Email" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="p-6 flex flex-col justify-center items-center pb-10 text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <span className="text-xs uppercase tracking-widest mb-2 font-light">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1"
                >
                    <motion.div
                        animate={{ height: ["20%", "50%", "20%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-0.5 bg-white/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

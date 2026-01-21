"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
    return (
        <Section id="contact" title="Get in Touch">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Contact Info */}
                <div className="space-y-8">
                    <motion.p
                        className="text-gray-400 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    <div className="space-y-6">
                        <motion.a
                            href="mailto:contact@muhammadsohaib.dev"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                                <Mail className="w-5 h-5 text-purple-400" />
                            </div>
                            <span className="text-lg">contact@muhammadsohaib.dev</span>
                        </motion.a>

                        <motion.a
                            href="tel:+923172903943"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                                <Phone className="w-5 h-5 text-green-400" />
                            </div>
                            <span className="text-lg">+92 3172903943</span>
                        </motion.a>

                        <motion.div
                            className="flex items-center gap-4 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                <MapPin className="w-5 h-5 text-cyan-400" />
                            </div>
                            <span className="text-lg">Karachi, PK</span>
                        </motion.div>
                    </div>

                    <div className="pt-8 space-y-4">
                        <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                        <div className="flex gap-4">
                            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all border border-white/10 group">
                                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all border border-white/10 group">
                                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.form
                    className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                        Send Message
                    </h3>

                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-gray-400 ml-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all resize-none"
                            placeholder="How can I help you?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                    >
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </Section>
    );
}

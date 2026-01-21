"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { portfolioData } from "../data/portfolio";
import { Github, ExternalLink, Code2, MonitorPlay } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    // Ensure we have data before rendering
    const featuredProjects = portfolioData?.projects?.filter(p => p.isFeatured) || [];
    const otherProjects = portfolioData?.projects?.filter(p => !p.isFeatured) || [];

    return (
        <Section id="projects" className="py-20">
            <div className="space-y-4 mb-16 text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
                    My Projects
                </h2>
                <p className="text-gray-400">A showcase of innovative solutions and creative implementations</p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-32 mb-32">
                <h3 className="text-2xl font-bold text-purple-400 mb-8">Featured Projects</h3>
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // Fix: Set once: true and lower amount to trigger sooner
                        viewport={{ once: true, amount: 0.1 }} 
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* ... existing project content ... */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-4">
                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-white">
                                    <Code2 size={20} />
                                    <span>Private Code</span>
                                </a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors text-white">
                                    <MonitorPlay size={20} />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src={project.image || "/api/placeholder/800/600"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* More Projects */}
            <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-12">More Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // Fix: Set once: true
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* ... existing card content ... */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <Image
                                    src={project.image || "/api/placeholder/400/300"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <h4 className="text-xl font-bold text-white mb-1 line-clamp-1">{project.title}</h4>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                {/* ... rest of content ... */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="px-2 py-1 rounded text-xs bg-black/30 border border-white/10 text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 rounded text-xs bg-black/30 border border-white/10 text-gray-400">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex gap-4">
                                        <a href={project.codeUrl} className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.liveUrl} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
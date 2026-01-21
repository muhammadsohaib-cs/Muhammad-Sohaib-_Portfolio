"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "skills", "projects", "education", "contact"];
            // Trigger point: 1/3 down the screen.
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            // Default to "about" to cover the Hero section
            let currentSection = "about";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // Calculate absolute position relative to document, independent of offset parents
                    const absoluteTop = element.getBoundingClientRect().top + window.scrollY;

                    if (scrollPosition >= absoluteTop) {
                        currentSection = section;
                    }
                }
            }

            // Special case for reaching the bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                currentSection = "contact";
            }

            setActiveSection(currentSection);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        // Experience hidden for now
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            // Calculate position with offset for the fixed navbar (approx 80px)
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none md:pointer-events-auto flex justify-center pt-4`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full border transition-all duration-300 ${isScrolled
                    ? "bg-black/40 border-white/10 backdrop-blur-xl shadow-lg shadow-purple-500/5"
                    : "bg-transparent border-transparent"
                    } pointer-events-auto`}>

                    {!isScrolled && (
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-xl font-bold tracking-tighter mix-blend-difference text-white opacity-0 animate-fade-in md:opacity-100 transition-opacity">
                            MS
                        </div>
                    )}

                    <div className={`flex gap-1 p-1 rounded-full ${!isScrolled ? "bg-white/5 border border-white/10 backdrop-blur-md" : ""}`}>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${isActive ? "text-black" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 bg-white rounded-full shadow-sm"
                                            layoutId="activeSection"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Header (Hamburger) */}
                <div className="md:hidden fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 pointer-events-auto bg-gradient-to-b from-black/50 to-transparent">
                    <span className="text-xl font-bold tracking-tighter text-white mix-blend-difference">MS</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white active:scale-95 transition-all"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="text-2xl font-light tracking-wide text-white/80 hover:text-white transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

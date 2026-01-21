import Hero3D from "./components/Hero3D";
import Overlay from "./components/Overlay";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ScrollProgress from "./components/ScrollProgress";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-purple-500/30">
      <ScrollProgress />
      <Navbar />

      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Hero3D />
        <Overlay />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />

        {/* Footer */}
        <footer className="py-20 text-center text-gray-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Muhammad Sohaib. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

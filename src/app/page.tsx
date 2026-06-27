"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visitorCount, setVisitorCount] = useState(1284);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Simulate visitor count bump
    const baseCount = 1248 + Math.floor(Math.random() * 50);
    setVisitorCount(baseCount);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col font-sans select-none selection:bg-cyan-500/30 selection:text-white">
      
      {/* Interactive mouse-following cursor glow */}
      <div
        className="pointer-events-none fixed z-30 w-[450px] h-[450px] rounded-full bg-cyan-500/[0.03] blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-all duration-[200ms] ease-out hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Sleek Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505] relative z-10 text-center font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-xs text-white/50">
              Designed & built by Shivesh Anand · 2026
            </p>
            <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">
              Next.js · React · Tailwind CSS · Framer Motion · Three.js
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-right">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs text-white/40">{visitorCount} site metrics processed</span>
          </div>
        </div>
      </footer>

      {/* Floating scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

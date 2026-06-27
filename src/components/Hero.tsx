"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

// Dynamically import ThreeCanvas to prevent SSR/WebGL execution errors
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

const ROLES = [
  "Data Analyst",
  "AI Engineer",
  "Predictive Modeller",
  "GenAI Architect",
  "Machine Learning Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden pt-20"
    >
      {/* 3D Hologram Avatar Layer */}
      <ThreeCanvas />

      {/* Decorative Aurora Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-500/10 blur-[130px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-pink-500/10 blur-[110px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.06),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* Large Watermark Year */}
      <div className="absolute top-[10%] left-[-5%] text-[20vw] font-black font-sans text-white/[0.015] select-none pointer-events-none tracking-tighter leading-none z-0">
        2026
      </div>

      {/* Huge Portfolio Background Text */}
      <div className="absolute bottom-[5%] right-[-3%] text-[15vw] font-black font-sans text-white/[0.015] select-none pointer-events-none tracking-tighter leading-none z-0 uppercase">
        Portfolio
      </div>

      {/* Hero Layout Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 items-center gap-12 z-10 py-12">
        {/* Left copy column */}
        <div className="md:col-span-7 flex flex-col items-start justify-center text-left">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-semibold text-white/90">
              Product Support Analyst, Associate at Infor
            </span>
          </div>

          {/* Big Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            Shivesh{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Anand
            </span>
            <span className="text-cyan-400">.</span>
          </h1>

          {/* Typewriter role */}
          <p className="text-2xl sm:text-3xl font-mono text-white/90 mb-6 flex items-center min-h-[40px]">
            <span>{currentText}</span>
            <span className="w-1.5 h-7 bg-cyan-400 ml-1.5 animate-pulse" />
          </p>

          {/* Short introduction bio */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
            I engineer pipelines to ingest raw information, construct predictive models, and shape executive dashboard metrics to convert complex business data into automated operations insight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-white/35 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shiveshanand09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shiveshanand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column placeholder just to offset space for the 3D hologram core */}
        <div className="md:col-span-5 hidden md:block h-[500px]" />
      </div>

      {/* Bottom Left Scroll Indicator */}
      <div className="absolute bottom-10 left-8 hidden sm:flex flex-col items-center gap-2 pointer-events-none z-10 animate-bounce">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest vertical-text">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-400 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}

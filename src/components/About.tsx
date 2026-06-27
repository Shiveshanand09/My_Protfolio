"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: "35%", label: "Fewer downstream errors", sub: "Via structured validation & QA standards" },
    { value: "30%", label: "Less manual processing time", sub: "Through automated Python & ETL ingestion" },
    { value: "20+", label: "Power BI DAX measures", sub: "Dynamic charts tracking KPIs across units" },
    { value: "7.54", label: "B.Tech CGPA", sub: "Computer Science (AI & Data Science)" },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background neon blob */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
              // 01 · ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              I like <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">finishing</span> what most people only prototype.
            </h2>
            <div className="space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
              <p>
                I'm a Product Support Analyst at Infor, specializing in AI/ML engineering, data science, and analytical models. I graduated with a B.Tech in Computer Science (focusing on AI & Data Science) from MIT World Peace University. Over my career and internships, I've built pipeline engines that process live streams, OCR automation models, and retrieval-augmented systems.
              </p>
              <p>
                I work across the full stack of a data problem — Python and SQL for the plumbing, Scikit-Learn for the predictive modeling, LangChain and vector embeddings for the generative AI layer, and Power BI for the story I tell about the results. My main focus: take messy inputs in, ship measurable output decisions.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white/80 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 leading-snug">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Profile Picture Frame */}
          <div className="lg:col-span-5 flex justify-center items-center lg:pt-10">
            <div className="relative group w-full max-w-[360px]">
              
              {/* Animated outer border glow */}
              <div className="absolute inset-0 -m-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-60 blur-lg transition-opacity duration-500 pointer-events-none" />
              
              {/* Glass container */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-xl overflow-hidden">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#0c0c0f]">
                  <Image
                    src="/assets/img/profile.jpg"
                    alt="Portrait of Shivesh Anand"
                    fill
                    sizes="(max-w-7xl) 360px, 300px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Scanner lines overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-[200%] w-full -translate-y-full group-hover:translate-y-full transition-transform duration-[2500ms] ease-in-out" />
                </div>
                
                {/* Tech details panel */}
                <div className="flex items-center justify-between mt-3 px-2 font-mono text-[10px] text-white/40">
                  <span>shivesh_anand.jpg</span>
                  <span className="text-cyan-400">conf 0.99</span>
                </div>
              </div>

              {/* Futuristic Crosshairs */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

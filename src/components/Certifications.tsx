"use client";
import React from "react";
import { Award, ShieldCheck, Cpu, Brain, Database, Trophy, AwardIcon } from "lucide-react";

export default function Certifications() {
  const certificationsList = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      year: "2025",
      icon: <Database className="text-cyan-400" size={18} />,
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      year: "2025",
      icon: <Award className="text-purple-400" size={18} />,
    },
    {
      title: "IBM: Generative AI in Action | AI Fundamentals",
      issuer: "IBM",
      year: "2024",
      icon: <Cpu className="text-pink-400" size={18} />,
    },
    {
      title: "Microsoft Copilot for Security",
      issuer: "Microsoft",
      year: "2024",
      icon: <ShieldCheck className="text-cyan-400" size={18} />,
    },
    {
      title: "Deloitte Australia: Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      year: "2024",
      icon: <AwardIcon className="text-purple-400" size={18} />,
    },
    {
      title: "NAIP: Machine Learning",
      issuer: "IIT Jodhpur - TISC",
      year: "2023",
      icon: <Brain className="text-pink-400" size={18} />,
    },
    {
      title: "Smart India Hackathon (SIH) — National Winner",
      issuer: "Delivered data-driven ML product selected among top solutions",
      year: "2023",
      icon: <Trophy className="text-cyan-400" size={18} />,
    },
    {
      title: "Codegoda 2022 — National Programming Competition",
      issuer: "Participant / Agoda",
      year: "2022",
      icon: <Award className="text-purple-400" size={18} />,
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background neon light flare */}
      <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
            // 05 · CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keeping <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">current</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4">
            Professional certifications, programming competitions, and national hackathon achievements.
          </p>
        </div>

        {/* Certificate Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certificationsList.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-xl transition-all duration-300 group"
            >
              {/* Badge Icon container */}
              <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-colors shrink-0">
                {cert.icon}
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 font-mono text-[11px] text-white/50">
                  <span>{cert.issuer}</span>
                  <span>·</span>
                  <span className="text-cyan-400 font-bold">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

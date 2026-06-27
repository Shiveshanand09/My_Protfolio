"use client";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Product Support Analyst, Associate",
      company: "Infor",
      location: "Hyderabad, India (Hybrid)",
      date: "July 2026 – Present",
      type: "Full-time",
      stages: ["INGEST", "DEPLOY", "DECIDE"],
      bullets: [
        "Provide tier-2 technical support and diagnostics for Infor's enterprise software suite, resolving complex systems, integration, and data issues.",
        "Collaborate closely with engineering and product development teams to troubleshoot defects, investigate code behavior, and deploy configuration patches.",
        "Analyze application database schemas, optimize queries, and monitor ingestion workflows to maintain system reliability across hybrid environments.",
        "Develop custom scripts and internal SQL tools to automate diagnostic reporting, improving response times and operations efficiency.",
      ],
      logo: (
        <svg className="w-8 h-8 rounded-lg overflow-hidden shrink-0" viewBox="0 0 26.682461 26.68232" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Infor logo">
          <g transform="translate(-106.32738,-160.4386)">
            <path fill="#d71e25" d="M 133.00984,187.12092 H 106.32738 V 160.4386 h 26.68246 z" />
            <path fill="#ffffff" d="m 108.70896,171.45534 h 1.68815 v 5.46967 h -1.68815 z" />
            <path fill="#ffffff" d="m 111.29813,171.45524 h 1.62058 v 0.50248 c 0,0 0.28151,-0.63734 1.62061,-0.63753 1.71054,-1e-4 2.02579,1.12534 2.02579,2.58865 v 3.01599 h -1.688 v -2.67848 c 0,-0.63034 -0.0113,-1.44051 -0.87794,-1.44051 -0.87792,0 -1.01289,0.68642 -1.01289,1.39555 v 2.72344 h -1.68815 z" />
            <path fill="#ffffff" d="m 117.46624,170.4874 c 0,-1.1931 0.30376,-2.20582 2.13814,-2.20582 0.33751,0 0.67548,0.0224 0.99047,0.10132 l -0.0789,1.4292 c -0.19142,-0.0676 -0.34882,-0.11253 -0.55146,-0.11253 -0.54015,0 -0.81016,0.16889 -0.81016,0.88915 v 0.86652 h 1.24908 v 1.3506 h -1.24908 v 4.11899 h -1.68811 z" />
            <path fill="#ffffff" d="m 123.66187,171.32038 c 1.68781,0 3.0386,1.12524 3.0386,2.8697 0,1.74437 -1.35079,2.86971 -3.0386,2.86971 -1.6884,0 -3.03879,-1.12534 -3.03879,-2.86971 0,-1.74446 1.35039,-2.8697 3.03879,-2.8697 m 0,4.25403 c 0.84399,0 1.35059,-0.56285 1.35059,-1.38433 0,-0.82167 -0.5066,-1.38424 -1.35059,-1.38424 -0.84439,0 -1.35041,0.56257 -1.35041,1.38424 0,0.82148 0.50602,1.38433 1.35041,1.38433" />
            <path fill="#ffffff" d="m 127.36184,171.45524 h 1.68801 v 0.47808 c 0,0 0.44041,-0.69089 2.16095,-0.61697 v 1.48182 c -0.23648,-0.0675 -0.47275,-0.11244 -0.72026,-0.11244 -1.28293,0 -1.44069,0.92308 -1.44069,2.01449 v 2.22461 h -1.68801 z" />
            <path fill="#ffffff" d="m 108.70896,169.65274 1.68811,-1.15665 v 2.05823 h -1.68811 z" />
          </g>
        </svg>
      ),
    },
    {
      title: "Data Analyst Intern",
      company: "eSparse Matrix Solutions Pvt. Ltd.",
      location: "Pune, India (Remote)",
      date: "Nov 2025 – Apr 2026",
      type: "Internship",
      stages: ["INGEST", "ENGINEER", "DECIDE"],
      bullets: [
        "Built multi-page Power BI dashboards with 20+ DAX measures and dynamic filters to track performance KPIs across units.",
        "Designed and maintained Python and SQL ETL pipelines processing weekly operations data; findings shaped quarterly leadership planning.",
        "Introduced structured data validation and automated cleaning steps, cutting downstream errors by 35%.",
        "Presented analytical insights and pipeline metrics to non-technical stakeholders, directly shaping product roadmap features.",
      ],
      logo: (
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xs font-bold font-mono shrink-0">
          ES
        </div>
      ),
    },
    {
      title: "Data Analyst Intern",
      company: "Geeky Vision",
      location: "Remote",
      date: "Apr 2025 – Sep 2025",
      type: "Internship",
      stages: ["INGEST", "ENGINEER", "DECIDE"],
      bullets: [
        "Automated repetitive data extraction and preprocessing scripts using Python, reducing manual effort by 30%.",
        "Developed Power BI and Tableau dashboards tracking real-time KPIs to enable cross-department self-service reporting.",
        "Defined a standardized dataset QA validation checklist adopted across analytics teams to secure audit-ready consistency.",
      ],
      logo: (
        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-xs font-bold font-mono shrink-0">
          GV
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
            // 04 · WORK HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where I've <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">shipped</span> this
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Glassmorphic timeline card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-xl transition-all duration-300">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {exp.logo}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-white/70 mt-1">
                        {exp.company} <span className="text-white/30 font-light">|</span> {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {exp.date}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/50 w-max sm:mt-1">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Pipeline tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {exp.stages.map((stage) => (
                    <span
                      key={stage}
                      className="px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/10"
                    >
                      {stage}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-xs sm:text-sm text-white/60 list-disc pl-4 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-white/90 transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

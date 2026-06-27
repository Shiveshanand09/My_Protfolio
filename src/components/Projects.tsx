"use client";
import React from "react";


export default function Projects() {
  const projectsList = [
    {
      title: "Autonomous AI Data Analyst (Antigravity Agent)",
      description: "An intelligent agent designed to automate end-to-end data analysis workflows. Ingests tabular datasets, runs code to clean data, performs EDA, and produces visual dashboards on demand.",
      tags: ["Python", "LangChain", "LLMs", "Pandas", "Streamlit", "Data Analysis"],
      github: "https://github.com/shiveshanand09/Antigravity-Agent",
      // Custom SVG Visual Header for AI Data Analyst
      visual: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0c0b10" />
          <line x1="20" y1="20" x2="380" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="35" cy="40" r="10" fill="url(#blueGrad)" opacity="0.8" />
          <path d="M60 35H120M60 45H100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
          
          <rect x="20" y="70" width="360" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(0,240,255,0.1)" strokeWidth="1" />
          <circle cx="50" cy="110" r="15" fill="none" stroke="#00f0ff" strokeWidth="2" />
          <line x1="50" y1="95" x2="50" y2="125" stroke="#00f0ff" strokeWidth="1" />
          <line x1="35" y1="110" x2="65" y2="110" stroke="#00f0ff" strokeWidth="1" />
          
          {/* Mock Graph */}
          <path d="M120 150 L160 110 L200 130 L240 90 L280 120 L320 80 L350 100" fill="none" stroke="url(#cyanPinkGrad)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="110" r="4" fill="#00f0ff" />
          <circle cx="240" cy="90" r="4" fill="#bd00ff" />
          <circle cx="320" cy="80" r="4" fill="#ff007a" />
          <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#bd00ff" />
            </linearGradient>
            <linearGradient id="cyanPinkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#bd00ff" />
              <stop offset="100%" stopColor="#ff007a" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "RAG-Based Document Intelligence System",
      description: "A retrieval-augmented generation engine for querying corporate document collections in plain language. Orchestrates document chunking, semantic vector search, and context-aware responses.",
      tags: ["Python", "NLP", "LLMs", "RAG", "Embeddings", "Vector Databases"],
      github: "https://github.com/shiveshanand09/RAG-Document-Intelligence",
      // Custom SVG Visual Header for RAG Document Intelligence
      visual: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0b0b0e" />
          <rect x="25" y="25" width="90" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <line x1="35" y1="45" x2="85" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="35" y1="60" x2="75" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <line x1="35" y1="75" x2="90" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <line x1="35" y1="90" x2="80" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

          {/* Connectors & Embedding Vector Nodes */}
          <path d="M115 100 C150 100, 160 50, 200 50 C240 50, 260 120, 300 120 C340 120, 350 75, 370 75" stroke="#bd00ff" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="50" r="6" fill="#00f0ff" />
          <circle cx="300" cy="120" r="6" fill="#ff007a" />
          <circle cx="370" cy="75" r="8" fill="#bd00ff" />

          <text x="180" y="35" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">Semantic Node</text>
          <text x="270" y="145" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">Query Vector</text>
        </svg>
      ),
    },
    {
      title: "Credit Risk Prediction System",
      description: "A binary classification machine learning pipeline predicting customer defaults based on banking logs. Prioritizes evaluation calibration metrics like ROC-AUC, Recall, and Precision curves.",
      tags: ["Python", "SQL", "Scikit-Learn", "Feature Engineering", "Data Modeling"],
      github: "https://github.com/shiveshanand09/Credit-Risk-Prediction",
      // Custom SVG Visual Header for Credit Risk System
      visual: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0d090d" />
          {/* Gauge meter */}
          <path d="M130 140 A80 80 0 0 1 270 140" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16" strokeLinecap="round" />
          <path d="M130 140 A80 80 0 0 1 230 70" fill="none" stroke="url(#cyanPinkGrad2)" strokeWidth="16" strokeLinecap="round" />
          
          {/* Needle */}
          <line x1="200" y1="140" x2="220" y2="85" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="200" cy="140" r="10" fill="#050505" stroke="#ffffff" strokeWidth="3" />

          <text x="200" y="170" fill="#ff007a" fontSize="14" fontWeight="bold" fontFamily="monospace" textAnchor="middle">Risk index: 62%</text>
          <defs>
            <linearGradient id="cyanPinkGrad2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#ff007a" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Shipment Optimisation & Logistics Model",
      description: "Clustering algorithms that optimize shipping routes and reduce delivery latency. Provides predictive analytics that cut shipment delays by 20% along with responsive monitoring dashboards.",
      tags: ["Python", "SQL", "Machine Learning", "Clustering", "Route Optimization"],
      github: "https://github.com/shiveshanand09/Shipment-Optimisation",
      // Custom SVG Visual Header for Shipment Optimisation
      visual: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#090c0b" />
          {/* Network path map */}
          <circle cx="80" cy="120" r="8" fill="#00f0ff" opacity="0.3" />
          <circle cx="80" cy="120" r="4" fill="#00f0ff" />

          <circle cx="200" cy="70" r="8" fill="#bd00ff" opacity="0.3" />
          <circle cx="200" cy="70" r="4" fill="#bd00ff" />

          <circle cx="320" cy="130" r="8" fill="#ff007a" opacity="0.3" />
          <circle cx="320" cy="130" r="4" fill="#ff007a" />

          <path d="M80 120 L200 70 L320 130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          {/* Animated line route segments */}
          <path d="M80 120 L140 95" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
          <path d="M200 70 L260 100" stroke="#ff007a" strokeWidth="3" strokeLinecap="round" />
          
          <text x="80" y="150" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">Hub A</text>
          <text x="200" y="50" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">Hub B</text>
          <text x="320" y="160" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">Destination</text>
        </svg>
      ),
    },
    {
      title: "Retail Sales & KPI Analytics Dashboard",
      description: "An interactive Power BI metrics workspace analyzing multi-store revenue, inventory cycles, and customer retention. Includes dynamic KPI forecasting and automated query refreshes.",
      tags: ["Power BI (DAX)", "SQL", "Data Wrangling", "Dashboard Development"],
      github: "https://github.com/shiveshanand09/Retail-Sales-Dashboard",
      // Custom SVG Visual Header for Power BI Dashboard
      visual: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0d0d0f" />
          {/* Columns */}
          <rect x="50" y="60" width="30" height="90" rx="3" fill="#00f0ff" opacity="0.8" />
          <rect x="110" y="30" width="30" height="120" rx="3" fill="#bd00ff" opacity="0.8" />
          <rect x="170" y="80" width="30" height="70" rx="3" fill="#ff007a" opacity="0.8" />
          <rect x="230" y="45" width="30" height="105" rx="3" fill="#00f0ff" opacity="0.8" />
          <rect x="290" y="95" width="30" height="55" rx="3" fill="#bd00ff" opacity="0.8" />
          
          <line x1="30" y1="150" x2="370" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          
          <text x="65" y="170" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" textAnchor="middle">Q1</text>
          <text x="125" y="170" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" textAnchor="middle">Q2</text>
          <text x="185" y="170" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" textAnchor="middle">Q3</text>
          <text x="245" y="170" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" textAnchor="middle">Q4</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-pink-500/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
            // 02 · SELECTED BUILDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">projects</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4">
            A curated portfolio of predictive models, automation agents, semantic document queries, and data workflows.
          </p>
        </div>

        {/* Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 group overflow-hidden flex flex-col justify-between"
            >
              {/* Animated hover gradient border overlay */}
              <div className="absolute inset-0 -m-[1px] rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-sm pointer-events-none transition-opacity duration-500" />
              
              <div>
                {/* Visual Header */}
                <div className="w-full aspect-[2/1] rounded-t-2xl overflow-hidden border-b border-white/5 relative bg-[#09090b]">
                  <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    {project.visual}
                  </div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/50 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag block & links */}
              <div className="p-6 pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium font-mono bg-white/5 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card footer links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

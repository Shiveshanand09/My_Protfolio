"use client";
import React from "react";
import { Code, Database, Brain, Cpu, BarChart3, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Dev",
      icon: <Code className="text-cyan-400" size={20} />,
      skills: ["Python", "SQL (CTEs, Window Functions)", "Flask", "REST APIs", "Git & Version Control"],
    },
    {
      title: "Data Science & Engineering",
      icon: <Database className="text-purple-400" size={20} />,
      skills: ["Pandas", "NumPy", "EDA", "Data Cleaning", "Data Validation", "ETL Pipelines", "PostgreSQL", "MySQL", "MongoDB", "PySpark (Basic)"],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-pink-400" size={20} />,
      skills: ["Regression", "Classification", "Clustering", "Predictive Modelling", "Feature Engineering", "Model Evaluation (ROC-AUC, F1)", "Scikit-Learn"],
    },
    {
      title: "Generative AI & NLP",
      icon: <Cpu className="text-cyan-400" size={20} />,
      skills: ["LLMs", "RAG Systems", "Vector Embeddings", "Semantic Search", "Prompt Engineering", "LangChain", "OpenAI APIs", "Natural Language Processing"],
    },
    {
      title: "MLOps & Deployments",
      icon: <Settings className="text-purple-400" size={20} />,
      skills: ["MLflow", "Model Deployment", "Model Monitoring", "CI/CD Workflows", "Reproducible Pipelines"],
    },
    {
      title: "Analytics & Visualisation",
      icon: <BarChart3 className="text-pink-400" size={20} />,
      skills: ["Power BI (DAX)", "Tableau", "Excel (VBA & Macros)", "A/B Testing", "KPI Analysis", "Executive Dashboard Reporting", "Data Wrangling"],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
            // 03 · TECHNICAL STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools of the <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">trade</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4">
            My stack spanning data engineering pipeline architecture, machine learning models, semantic search engines, and analytics.
          </p>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium font-mono bg-white/[0.03] text-white/70 border border-white/5 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-500/[0.02] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent glow strip */}
              <div className="w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 mt-6 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

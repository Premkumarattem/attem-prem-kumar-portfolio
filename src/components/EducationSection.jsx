import React from 'react';
import { GraduationCap, Award, CheckCircle, Sparkles, BookOpen, ShieldCheck, BarChart3 } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" /> 06 — EDUCATION & CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Academic Degree & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Computer science degree, Sketch Brains Data Analytics specialization, and SAP industry certification.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: B.Tech Degree */}
          <div className="glass-panel rounded-3xl p-8 glass-panel-hover border-cyan-500/30 space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-cyan-500/30 text-cyan-300">
                  GRADUATE DEGREE
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  B.Tech in Computer Science
                </h3>
                <p className="text-xs text-cyan-300 font-mono font-semibold">
                  CSE — Computer Science & Engineering
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans mt-3">
                Rigorous computer science curriculum covering Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Python/Java programming.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Core Coursework:</span>
              <div className="flex flex-wrap gap-1.5">
                {['DSA', 'OOPs Java/C++', 'DBMS', 'Networks', 'OS', 'Web Systems'].map(c => (
                  <span key={c} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Sketch Brains Data Analytics */}
          <div className="glass-panel rounded-3xl p-8 glass-panel-hover border-blue-500/30 space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-blue-950 border border-blue-500/40 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-blue-500/30 text-blue-300">
                  DATA ANALYTICS
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Sketch Brains Certification
                </h3>
                <p className="text-xs text-blue-300 font-mono font-semibold">
                  Data Analytics & Data Visualization Skills
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans mt-3">
                Specialized data analytics training program by Sketch Brains focusing on Python data stack (Pandas, NumPy, Matplotlib), SQL database querying, exploratory data analysis (EDA), and reporting dashboards.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Analytics Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Python Pandas', 'Exploratory Analytics', 'SQL Queries', 'Data Cleaning', 'Data Dashboards'].map(c => (
                  <span key={c} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                    ⚡ {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Code Unnati / SAP Certification */}
          <div className="glass-panel rounded-3xl p-8 glass-panel-hover border-purple-500/30 space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-purple-950 border border-purple-500/40 text-purple-400 shadow-[0_0_20px_rgba(127,0,255,0.2)]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-purple-500/30 text-purple-300">
                  SAP CERTIFICATION
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Code Unnati / SAP
                </h3>
                <p className="text-xs text-purple-300 font-mono font-semibold">
                  Digital Skills & Enterprise Software
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans mt-3">
                Industry program sponsored by SAP / Code Unnati covering enterprise software concepts, cloud computing fundamentals, digital technology trends, and modern software development practices.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">Enterprise Training:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Enterprise Software', 'Cloud Solutions', 'Digital Technologies', 'Process Logic'].map(c => (
                  <span key={c} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                    ★ {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

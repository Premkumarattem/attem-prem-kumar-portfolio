import React from 'react';
import { GraduationCap, Award, CheckCircle, Sparkles, BookOpen, ShieldCheck, BarChart3, Cloud } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" /> 06 &bull; EDUCATION & CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Academic Degree & <span className="gradient-red-white">Industry Credentials</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Degrees and official corporate training programs directly from my resume.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: B.Tech Degree */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-red-500/50 space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-rose-600"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-[#14141c] border border-red-500/40 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-red-950/80 border border-red-500/40 text-red-300">
                  4TH YEAR CURRENT
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white font-sans">
                  B.Tech, Computer Science and Engineering
                </h3>
                <p className="text-xs text-red-400 font-mono font-semibold">
                  Kommuri Pratap Reddy Institute of Technology (KPRIT), Hyderabad
                </p>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans mt-3">
                Focus on Computer Science and Engineering, core data structures, algorithms, cloud systems, and software architectures.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <span className="text-[11px] font-mono text-white uppercase tracking-wider block font-bold">
                Prior Academic Milestone:
              </span>
              <div className="p-3 rounded-xl bg-[#14141c] border border-zinc-800 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-white">Diploma in Engineering</p>
                  <p className="text-[11px] text-zinc-400 font-mono">State Board of Technical Education and Training</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950 text-red-300 border border-red-500/30 font-bold">
                    First Class &bull; 2021 – 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Certifications and Training from Resume */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-red-500/50 space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-800"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-[#14141c] border border-red-500/40 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-red-950/80 border border-red-500/40 text-red-300">
                  VERIFIED CERTIFICATIONS
                </span>
              </div>

              <div className="space-y-4">
                {/* Certification 1 */}
                <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/30 transition-all space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-white">
                      AnalytIQ Data Analytics Program
                    </h4>
                    <span className="text-[10px] font-mono text-red-400 font-bold">SketchBrains</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    Mastered Power BI visualization, Advanced Excel (dynamic dashboards, pivot tables), SQL, and Data Modeling.
                  </p>
                </div>

                {/* Certification 2 */}
                <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/30 transition-all space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-white">
                      Code Unnati Program
                    </h4>
                    <span className="text-[10px] font-mono text-red-400 font-bold">SAP (CSR Initiative)</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    SAP ABAP on BTP, AI and Machine Learning, Edge Computing, SAP Analytics Cloud.
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400 pt-0.5">
                    Certification ID: <span className="text-white font-bold">CU26_35422</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-red-400">
                <CheckCircle className="w-3.5 h-3.5" /> Industry Verified Credentials
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

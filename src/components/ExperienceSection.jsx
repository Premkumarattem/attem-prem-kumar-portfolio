import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle, ArrowRight, Award, Zap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> 05 — INDUSTRIAL EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Practical Industry <span className="gradient-text">Exposure</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            6 Months of hands-on industrial internship experience at Rane Madras Industries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Timeline Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden glass-panel-hover border-cyan-500/30 shadow-[0_0_40px_rgba(0,242,254,0.15)]">
            {/* Glowing Corner Badge */}
            <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-gradient-to-l from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs shadow-lg">
              6 MONTHS INDUSTRIAL INTERNSHIP
            </div>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                  <Building2 className="w-4 h-4" />
                  <span className="font-bold tracking-wide">Rane Madras Industries</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Software & Industrial Operations Intern
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Calendar className="w-4 h-4 text-purple-400" /> Duration: 6 Months
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-cyan-400" /> Industrial Sector, India
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-800"></div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" /> Key Internship Responsibilities & Impact
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-cyan-400" /> Workflow Automation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Assisted in developing automated software tools and scripts to collect operational data and streamline production reporting.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-purple-400" /> Code Optimization
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Analyzed system logs and diagnostic outputs to identify software bottlenecks and optimize internal execution times.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-blue-400" /> Cross-Functional Teamwork
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Collaborated closely with industrial engineers, data analysts, and IT support teams to ensure software reliability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-emerald-400" /> Industrial Best Practices
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Gained strict operational discipline in version control, software testing, and documentation standards in an enterprise setting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-mono text-slate-400">Tools & Technologies Applied:</span>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'SQL Databases', 'Data Analytics', 'Software Testing'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

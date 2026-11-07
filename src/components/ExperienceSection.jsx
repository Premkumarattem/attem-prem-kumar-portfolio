import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle, ArrowRight, Award, Zap, Shield, Database } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> 05 &bull; WORK EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Industry Experience & <span className="gradient-red-white">Engineering Roles</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Active professional role as stated in my official resume.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-red-600 text-white font-mono font-bold text-xs shadow-lg">
              ACTIVE ROLE &bull; SEPT 2026 – PRESENT
            </div>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-mono text-sm font-semibold">
                  <Building2 className="w-4 h-4 text-red-500" />
                  <span className="tracking-wide text-white">JP IT Staffing LLC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  API Web Developer Intern
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5 text-red-400 font-bold">
                    <Calendar className="w-4 h-4 text-red-500" /> Sept 2026 – Present
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <MapPin className="w-4 h-4 text-red-400" /> Professional Internship
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-800"></div>

              {/* Responsibilities & Achievements from Resume */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-red-500" /> Key Responsibilities & Contributions
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 transition-all space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-red-500" /> RESTful API Engineering
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      Develop, integrate, maintain and document RESTful APIs, with a rigorous focus on security, performance and clean coding standards.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 transition-all space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
                      <CheckCircle className="w-4 h-4 text-red-500" /> Teamwork & Milestones
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      Work with cross-functional development teams, manage databases, write clean code and debug issues to meet project milestones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Technologies Used */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-mono text-zinc-400">Core Technologies Applied:</span>
                <div className="flex flex-wrap gap-2">
                  {['REST APIs', 'Node.js', 'Express.js', 'Python (FastAPI)', 'Database Management', 'API Security'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-[#14141c] border border-red-500/30 text-white">
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

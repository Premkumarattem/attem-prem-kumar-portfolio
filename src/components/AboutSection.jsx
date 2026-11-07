import React from 'react';
import { User, GraduationCap, Briefcase, Cpu, Code, Sparkles, CheckCircle2, Award, Database, Cloud } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" /> 02 &bull; PROFESSIONAL SUMMARY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineering Web Systems & <span className="gradient-red-white">Data Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-red-500/20">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-400">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-mono">About Attem Prem Kumar</h3>
                <p className="text-xs text-red-400 font-mono">API Web Developer &bull; Full-Stack &bull; Data Analytics</p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-sans">
              I am a final-year <span className="text-white font-semibold">Computer Science and Engineering</span> student with hands-on work in full-stack web applications, AWS cloud, SAP ABAP, and data analytics.
            </p>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-sans">
              I like building web applications and Power BI dashboards, and I use SQL and data modeling to make messy data easy to understand. I have completed the <span className="text-red-400 font-semibold">SketchBrains AnalytIQ Data Analytics Program</span> and the <span className="text-red-400 font-semibold">SAP Code Unnati Program</span> in Emerging Technologies, and I am looking to grow as a developer by working on real business problems.
            </p>

            {/* Core Capability Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121218] border border-red-500/20 flex items-start gap-3 hover:border-red-500/50 transition-all">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Full-Stack & REST APIs</h4>
                  <p className="text-xs text-zinc-400 mt-1">Python FastAPI, React.js, Node.js, Express, MongoDB, WebSockets & WebRTC.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121218] border border-red-500/20 flex items-start gap-3 hover:border-red-500/50 transition-all">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Data Analytics & BI</h4>
                  <p className="text-xs text-zinc-400 mt-1">Power BI dashboards, Advanced Excel, SQL modeling, and exploratory analytics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education Quick Highlight */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Experience Card */}
            <div className="glass-panel rounded-2xl p-6 border-red-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Current Work Experience</h4>
                  <p className="text-xs text-red-400 font-mono">API Web Developer Intern &bull; JP IT Staffing LLC</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Developing, integrating, and documenting secure RESTful APIs. Managing databases, writing clean code, and working with cross-functional teams to meet project milestones.
              </p>
            </div>

            {/* Education Quick Card */}
            <div className="glass-panel rounded-2xl p-6 border-zinc-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic Journey</h4>
                  <p className="text-xs text-zinc-400 font-mono">B.Tech CSE &bull; KPRIT Hyderabad</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                4th Year CSE at Kommuri Pratap Reddy Institute of Technology (KPRIT), Hyderabad. Prior Diploma in Engineering with First Class.
              </p>
            </div>

            {/* Cloud & SAP */}
            <div className="glass-panel rounded-2xl p-6 border-zinc-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/20 text-red-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Cloud & Enterprise Tools</h4>
                  <p className="text-xs text-red-400 font-mono">AWS Cloud &bull; SAP ABAP on BTP</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['AWS Cloud Computing', 'SAP ABAP (BTP)', 'SAP Analytics Cloud', 'Groq LLM APIs', 'MongoDB Atlas'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#14141c] border border-zinc-800 text-zinc-300"
                  >
                    &bull; {tool}
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

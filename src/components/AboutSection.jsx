import React from 'react';
import { User, GraduationCap, Briefcase, Cpu, Code, Sparkles, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#050e18] border border-[#00ff41]/40 text-matrix-green text-xs">
            <Terminal className="w-3.5 h-3.5" /> // 02 — ABOUT_DEV_ENGINEER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            System Architecture & <span className="gradient-hacker-text">Problem Solving</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] via-[#00f2fe] to-[#ff007f] rounded-full"></div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary Cyber Card */}
          <div className="lg:col-span-7 cyber-panel rounded-2xl p-6 sm:p-8 space-y-6 cyber-corner">
            <div className="flex items-center gap-3 border-b border-[#00ff41]/20 pb-4">
              <div className="p-2.5 rounded-xl bg-[#050e18] border border-[#00ff41]/40 text-matrix-green">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-mono">[ EXECUTIVE SUMMARY ]</h3>
                <p className="text-xs text-matrix-green font-mono">Full-Stack, Python AI & Data Analytics Specialist</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-mono">
              Software Engineer pursuing B.Tech in Computer Science and Engineering with hands-on expertise in building high-concurrency real-time AI platforms (FastAPI, WebSockets, WebRTC, Groq API), full-stack MERN web systems, and data analytics pipelines.
            </p>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-mono">
              Completed a 6-month industrial internship at <span className="text-matrix-green font-bold">Rane Madras Industries</span>, gaining deep exposure to industrial automation software, production logs, and code performance optimization.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#050e18] border border-[#00ff41]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-matrix-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">&gt; Real-Time AI Systems</h4>
                  <p className="text-[11px] text-slate-400">Speech-to-text, 3-language translation & Groq LLM summarization.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#050e18] border border-[#00f2fe]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">&gt; Full-Stack MERN Architecture</h4>
                  <p className="text-[11px] text-slate-400">JWT security, Razorpay gateway integration, responsive Vercel/Render hosting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education, Internship & Tech Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="cyber-panel rounded-2xl p-6 cyber-panel-hover space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#050e18] border border-[#00f2fe]/40 text-cyber-cyan">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">[ EDUCATION DEGREE ]</h4>
                  <p className="text-xs text-cyber-cyan font-mono">B.Tech — Computer Science (CSE)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Engineering.
              </p>
            </div>

            {/* Internship Quick Highlight */}
            <div className="cyber-panel rounded-2xl p-6 cyber-panel-hover space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#050e18] border border-[#00ff41]/40 text-matrix-green">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">[ INDUSTRIAL INTERNSHIP ]</h4>
                  <p className="text-xs text-matrix-green font-mono">6 Months @ Rane Madras Industries</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Gained practical experience in industrial operational software, internal reporting tools, code diagnostic logging, and system optimization.
              </p>
            </div>

            {/* Technology Interests */}
            <div className="cyber-panel rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#050e18] border border-[#ff007f]/40 text-cyber-purple">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">[ SPECIALIZED DOMAINS ]</h4>
                  <p className="text-xs text-cyber-purple font-mono">Engineering Focus</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Real-Time AI / Groq LLMs',
                  'WebSockets & WebRTC Streaming',
                  'Sketch Brains Data Analytics',
                  'MERN Stack & JWT Security',
                  'PostgreSQL & MongoDB Atlas'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded bg-[#050e18] border border-[#00ff41]/20 text-slate-300 text-xs font-mono"
                  >
                    ⚡ {interest}
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

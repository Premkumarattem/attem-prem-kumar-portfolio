import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Terminal, Cpu, Code2, Globe, CheckCircle2, Award } from 'lucide-react';

export default function HeroSection({ onOpenResumeModal }) {
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Real-Time AI Engineer',
    'Data Analytics Specialist'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(targetText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            Available for Software Engineering & Full-Stack Roles
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              ATTEM <br className="hidden sm:block" />
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                PREM KUMAR
              </span>
            </h1>
            <div className="h-10 text-xl sm:text-2xl font-mono text-cyan-300 font-semibold flex items-center justify-center lg:justify-start gap-1">
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse"></span>
            </div>
          </div>

          {/* Intro Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Crafting real-time AI platforms, high-performance MERN web applications, and data analytics pipelines. <span className="text-amber-300 font-bold">Capgemini X Synchrony Tech 4 Future Finalist</span> & Smart India Hackathon participant.
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 font-mono">
            {['Python', 'FastAPI', 'React.js', 'WebSockets', 'Groq AI', 'Sketch Brains Analytics', 'MongoDB', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs bg-slate-900/80 border border-cyan-500/20 text-cyan-300 backdrop-blur-sm"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-mono font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:scale-105 transition-all"
            >
              Explore Live Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-mono font-semibold text-sm bg-slate-900/80 border border-cyan-500/40 text-cyan-300 hover:bg-slate-800 hover:border-cyan-400 hover:text-white transition-all backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Column: User Profile Image Card */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative group max-w-sm w-full">
            {/* Outer Subtle Glowing Frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-60 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse-slow"></div>

            {/* Profile Card Container */}
            <div className="relative rounded-3xl bg-[#0b0f19]/90 border border-cyan-500/30 p-4 shadow-2xl backdrop-blur-xl">
              {/* Profile Image with Cyan Vignette */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-cyan-500/30">
                <img
                  src="/profile.png"
                  alt="Attem Prem Kumar"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Developer Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs font-bold text-white">Attem Prem Kumar</p>
                    <p className="text-[10px] text-cyan-400 font-mono">premkumaryadavat71@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-[10px] font-mono">
                    <Terminal className="w-3 h-3" /> 2026
                  </div>
                </div>
              </div>

              {/* Bottom Card Tech Bar */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Hackathon</p>
                  <p className="font-mono text-xs font-bold text-amber-300">Capgemini Finalist</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Analytics</p>
                  <p className="font-mono text-xs font-bold text-cyan-300">Sketch Brains</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Internship</p>
                  <p className="font-mono text-xs font-bold text-indigo-300">Rane Madras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

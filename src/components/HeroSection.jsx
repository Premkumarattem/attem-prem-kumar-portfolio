import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Terminal, Mail, Phone, MapPin, Copy, Check, ExternalLink, Code2, Linkedin, Github, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection({ onOpenResumeModal }) {
  const roles = [
    'Full-Stack Developer',
    'Data Analytics Specialist',
    'API Web Developer Intern',
    'AI Web & Dashboard Builder'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('premkumaryadavat71@gmail.com');
    setCopiedEmail(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+916302871761');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          {/* Active Job Status Badge with pulse animation */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121218] border border-red-500/30 text-white text-xs font-mono shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-500/60 transition-all">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-semibold text-red-400">Current Role:</span>
            <span>API Web Developer Intern @ JP IT Staffing LLC</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              Full-Stack Developer &bull; Data Analytics
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-none">
              ATTEM <br className="hidden sm:block" />
              <span className="gradient-red-white drop-shadow-[0_0_35px_rgba(239,68,68,0.35)]">
                PREM KUMAR
              </span>
            </h1>
            <div className="h-10 text-xl sm:text-2xl font-mono text-zinc-200 font-semibold flex items-center justify-center lg:justify-start gap-1.5 pt-1">
              <span className="text-red-500">&gt;</span>
              <span className="text-white">{displayText}</span>
              <span className="w-2.5 h-6 bg-red-500 animate-pulse"></span>
            </div>
          </div>

          {/* Intro Description from Resume */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Final-year Computer Science student with hands-on work in full-stack web applications, AWS cloud, SAP ABAP, and data analytics. Experienced in building responsive web applications, Power BI dashboards, and using SQL and data modeling to turn complex data into clear insights.
          </p>

          {/* Quick Contact Chips & Direct Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            {/* Direct LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/premkumarattem/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#14141c] border border-red-500/40 hover:border-red-500 hover:bg-red-600/10 text-white text-xs font-mono transition-all btn-click-effect shadow-sm group"
            >
              <Linkedin className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-red-400" />
            </a>

            {/* Direct GitHub Button */}
            <a
              href="https://github.com/Premkumarattem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#14141c] border border-zinc-800 hover:border-red-500 text-zinc-300 hover:text-white text-xs font-mono transition-all btn-click-effect group"
            >
              <Github className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141c] border border-zinc-800 hover:border-red-500 text-zinc-300 hover:text-white text-xs font-mono transition-all btn-click-effect group"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-red-400" />
              <span>premkumaryadavat71@gmail.com</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3 h-3 text-zinc-500 group-hover:text-red-400" />}
            </button>

            {/* Copy Phone Button */}
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14141c] border border-zinc-800 hover:border-red-500 text-zinc-300 hover:text-white text-xs font-mono transition-all btn-click-effect group"
              title="Click to copy phone"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>+91 6302871761</span>
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3 h-3 text-zinc-500 group-hover:text-red-400" />}
            </button>
          </div>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            {[
              'JavaScript',
              'React.js',
              'Node.js',
              'Python (FastAPI)',
              'REST APIs',
              'PostgreSQL',
              'MongoDB',
              'Power BI',
              'SQL',
              'AWS Cloud',
              'SAP ABAP',
              'Groq LLM',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono badge-red cursor-default"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Action CTAs: View Projects, Resume, and Hire Me */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-sm bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:bg-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.65)] hover:scale-105 transition-all btn-click-effect shimmer-btn"
            >
              <Code2 className="w-4 h-4" />
              View Projects
            </a>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-semibold text-sm bg-[#121218] border border-red-500/40 text-white hover:bg-red-600/10 hover:border-red-500 transition-all shadow-md btn-click-effect hover:scale-105"
            >
              <FileText className="w-4 h-4 text-red-400" />
              Resume
            </button>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-semibold text-sm bg-[#121218] border border-zinc-700 text-zinc-200 hover:text-white hover:border-red-500 hover:bg-red-600/10 transition-all shadow-md btn-click-effect hover:scale-105"
            >
              <Mail className="w-4 h-4 text-red-400" />
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Column: User Profile Image Card in Black & Red with Gentle Float */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative group max-w-sm w-full animate-float-gentle">
            {/* Outer Subtle Crimson Glow Frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-800 opacity-60 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse-slow"></div>

            {/* Profile Card Container */}
            <div className="relative rounded-3xl bg-[#0c0c10] border border-red-500/30 p-4 shadow-2xl backdrop-blur-xl">
              {/* Profile Image with Red/Black Vignette */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-red-500/40">
                <img
                  src="/profile.png"
                  alt="Attem Prem Kumar"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80"></div>

                {/* Floating Developer Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#121218]/90 backdrop-blur-md border border-red-500/30 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs font-bold text-white">Attem Prem Kumar</p>
                    <p className="text-[10px] text-red-400 font-mono">B.Tech CSE &bull; Full-Stack & AI</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-950/80 border border-red-500/40 text-red-300 text-[10px] font-mono font-bold">
                    <Terminal className="w-3 h-3" /> 2026
                  </div>
                </div>
              </div>

              {/* Bottom Card Highlights: high contrast, readable labels & exact resume claims */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[#14141e] border border-zinc-700 hover:border-red-500/50 transition-all shadow-md">
                  <p className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">CURRENT</p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-white mt-1">JP IT Staffing</p>
                </div>
                <div className="p-3 rounded-xl bg-[#14141e] border border-zinc-700 hover:border-red-500/50 transition-all shadow-md">
                  <p className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">HACKATHON</p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-red-400 mt-1">Capgemini Semi-Finalist</p>
                </div>
                <div className="p-3 rounded-xl bg-[#14141e] border border-zinc-700 hover:border-red-500/50 transition-all shadow-md">
                  <p className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">ANALYTICS</p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-white mt-1">SketchBrains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

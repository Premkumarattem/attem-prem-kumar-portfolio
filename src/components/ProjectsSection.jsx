import React, { useState } from 'react';
import { Layers, ExternalLink, Github, Sparkles, CheckCircle2, Shield, CreditCard, ArrowUpRight, X, Radio, BrainCircuit, Globe, Utensils, Zap, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectsSection() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Exactly two projects as requested by the user from resume
  const projects = [
    {
      id: 'eduaccess',
      title: 'EduAccess',
      subtitle: 'Real-Time Inclusive Smart Classroom Platform',
      badge: 'Python &bull; FastAPI &bull; Groq AI',
      category: 'AI & Real-Time Multilingual Platform',
      icon: <BrainCircuit className="w-7 h-7 text-red-500" />,
      accent: 'from-red-600 via-rose-600 to-red-800',
      glow: 'shadow-[0_0_35px_rgba(239,68,68,0.25)]',
      shortDesc: 'Built an inclusive, real-time smart classroom platform with live multilingual speech-to-text, caption translation across 3 languages and automated AI lecture summaries.',
      fullDesc: 'EduAccess is an award-winning real-time inclusive smart classroom platform pitched at Capgemini Tech4Positive Futures Challenge (Semi-Finalist). It features live multilingual audio streaming via WebSockets and WebRTC, instant speech-to-text transcription, simultaneous translation across 3 languages, and automated AI lecture summarization powered by Groq LLM APIs.',
      techStack: ['Python', 'FastAPI', 'WebSockets', 'WebRTC', 'PostgreSQL', 'Groq API', 'Render'],
      features: [
        'Live multilingual speech-to-text audio streaming powered by WebSockets & WebRTC',
        'Real-time live caption translation across 3 languages simultaneously',
        'Automated AI lecture summarization and bulleted takeaways using Groq LLMs',
        'PostgreSQL database for structured lecture transcripts & user sessions',
        'Deployed on Render with low-latency streaming and high concurrent handling'
      ],
      githubUrl: 'https://github.com/Premkumarattem/smart-classroom-assistant',
      demoUrl: 'https://smart-classroom-assistant-qmps.onrender.com/'
    },
    {
      id: 'restaurant-reservation',
      title: 'Restaurant Reservation System',
      subtitle: 'Full-Stack MERN Platform with JWT & Razorpay',
      badge: 'React &bull; Node &bull; Razorpay',
      category: 'Full-Stack MERN Application',
      icon: <Utensils className="w-7 h-7 text-red-500" />,
      accent: 'from-red-600 via-amber-600 to-red-700',
      glow: 'shadow-[0_0_35px_rgba(239,68,68,0.25)]',
      shortDesc: 'Developed a MERN-based reservation platform with secure login, online booking and a responsive interface, which cut booking time by 60%.',
      fullDesc: 'A complete end-to-end dining table reservation platform allowing users to view menus, check real-time table availability, select preferred seating slots, and make instant online payments. Designed with robust JWT authentication, bcrypt password encryption, and Razorpay integration, cutting customer reservation time by 60%.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Vercel', 'Render'],
      features: [
        'Cut customer reservation time by 60% with instant digital booking workflows',
        'Secure token-based JWT authentication and protected REST API endpoints',
        'Integrated Razorpay payment gateway with instant booking confirmation receipts',
        'Frontend deployed on Vercel and backend services hosted on Render',
        'Admin dashboard for managing tables, slot schedules, and real-time orders'
      ],
      githubUrl: 'https://github.com/Premkumarattem/restaurant-reservation',
      demoUrl: 'https://restaurant-reservation-brown-psi.vercel.app/'
    }
  ];

  const handleOpenDemo = (project) => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    setActiveProjectModal(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" /> 04 &bull; FEATURED PROJECTS (RESUME)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Core Production <span className="gradient-red-white">Engineering Works</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Two key live-deployed software platforms featured in my official resume.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* 2-Column Projects Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group border border-white/10 hover:border-red-500/60 ${project.glow}`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`}></div>

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#121218] border border-red-500/30 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block font-semibold">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950/80 border border-red-500/30 text-red-300">
                    Project 0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 font-mono italic">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#14141c] border border-zinc-800 text-zinc-300 group-hover:border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-8 mt-6 border-t border-zinc-800 flex items-center justify-between gap-3 flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-white bg-[#14141c] border border-zinc-700 hover:border-red-500 hover:bg-white/5 transition-all btn-click-effect"
                >
                  <Github className="w-4 h-4 text-red-400" /> GitHub Repo
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenDemo(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-transparent hover:text-white hover:bg-white/5 transition-all btn-click-effect"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-red-600 text-white hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)] btn-click-effect"
                  >
                    <Globe className="w-3.5 h-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0c0c10] border border-red-500/40 rounded-3xl p-7 shadow-[0_0_60px_rgba(239,68,68,0.3)] space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#14141c] border border-red-500/30">
                  {activeProjectModal.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-sans">{activeProjectModal.title}</h3>
                  <span className="text-xs text-red-400 font-mono">{activeProjectModal.category}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {activeProjectModal.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
                Key Architectural Highlights
              </h4>
              <div className="space-y-2">
                {activeProjectModal.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Technologies Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono bg-[#14141c] border border-red-500/30 text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3 flex-wrap">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#14141c] border border-zinc-700 text-white hover:border-red-500 transition-all btn-click-effect"
              >
                <Github className="w-4 h-4 text-red-400" /> GitHub Repo
              </a>
              <a
                href={activeProjectModal.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold bg-red-600 text-white hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] btn-click-effect"
              >
                <Globe className="w-4 h-4" /> Open Live Application
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

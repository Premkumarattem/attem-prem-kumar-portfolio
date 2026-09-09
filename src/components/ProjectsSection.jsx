import React, { useState } from 'react';
import { Layers, ExternalLink, Github, Sparkles, CheckCircle2, Shield, CreditCard, Network, Sprout, Utensils, ArrowUpRight, X, Radio, BrainCircuit, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectsSection() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = [
    {
      id: 'smart-classroom-assistant',
      title: 'Smart Classroom Assistant',
      badge: 'Python + FastAPI + Groq AI',
      category: 'Real-Time AI & Audio Platform',
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      accent: 'from-cyan-400 via-blue-500 to-purple-600',
      glow: 'shadow-[0_0_30px_rgba(0,242,254,0.35)]',
      shortDesc: 'Inclusive real-time smart classroom platform featuring live multilingual speech-to-text, 3-language translation, and automated AI lecture summarization.',
      fullDesc: 'Built an inclusive real-time smart classroom platform featuring live multilingual speech-to-text, real-time caption translation across 3 languages, and automated AI lecture summarization powered by Groq API and WebSockets/WebRTC.',
      techStack: ['Python', 'FastAPI', 'WebSockets', 'WebRTC', 'PostgreSQL', 'Groq API', 'Render'],
      features: [
        'Live multilingual speech-to-text audio streaming via WebSockets & WebRTC',
        'Real-time caption translation across 3 different languages simultaneously',
        'Automated AI lecture summarization & key takeaway generation powered by Groq API',
        'PostgreSQL database for storing structured lecture logs & session transcriptions',
        'Full cloud deployment on Render for high concurrency & low-latency streaming'
      ],
      githubUrl: 'https://github.com/Premkumarattem/smart-classroom-assistant',
      demoUrl: 'https://smart-classroom-assistant-qmps.onrender.com/'
    },
    {
      id: 'restaurant-system',
      title: 'Restaurant Reservation System',
      badge: 'MERN + JWT + Razorpay',
      category: 'Full-Stack Web App',
      icon: <Utensils className="w-6 h-6 text-purple-400" />,
      accent: 'from-purple-500 via-indigo-500 to-blue-500',
      glow: 'shadow-[0_0_30px_rgba(127,0,255,0.35)]',
      shortDesc: 'MERN-based restaurant reservation platform with secure authentication, online booking, and responsive UI, reducing booking time by 60%.',
      fullDesc: 'Developed a MERN-based restaurant reservation platform with secure authentication, online booking, and responsive UI, reducing booking time by 60%. Integrates JWT authentication and Razorpay payment processing.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Vercel', 'Render'],
      features: [
        'Reduced customer table reservation time by 60% with instant digital booking',
        'Secure JWT token-based authentication and user session management',
        'Integrated Razorpay payment gateway for instant online booking payments',
        'Responsive frontend deployed on Vercel and backend services on Render',
        'Admin control panel for managing real-time table availability & orders'
      ],
      githubUrl: 'https://github.com/Premkumarattem/restaurant-reservation',
      demoUrl: 'https://restaurant-reservation-brown-psi.vercel.app/'
    },
    {
      id: 'agri-farm-management',
      title: 'Agri-Farm Management System',
      badge: 'React + Node + MongoDB Atlas',
      category: 'Agricultural Tech Platform',
      icon: <Sprout className="w-6 h-6 text-emerald-400" />,
      accent: 'from-emerald-400 via-teal-500 to-cyan-500',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
      shortDesc: 'Full-stack agricultural management platform with secure user authentication, streamlining crop tracking and marketplace inventory workflows by 40%.',
      fullDesc: 'Developed a full-stack agricultural management platform with secure user authentication, streamlining crop tracking and marketplace inventory workflows by 40%. Hosted on MongoDB Atlas.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST API'],
      features: [
        'Streamlined crop tracking and farm inventory management workflows by 40%',
        'Secure user authentication and role-based marketplace access',
        'Cloud database integration using MongoDB Atlas for high availability',
        'Interactive dashboard for monitoring crop health cycles & produce listings',
        'RESTful API architecture built with Node.js & Express.js'
      ],
      githubUrl: 'https://github.com/Premkumarattem/agri-farm.git',
      demoUrl: 'https://github.com/Premkumarattem/agri-farm.git'
    }
  ];

  const handleOpenDemo = (project) => {
    confetti({ particleCount: 60, spread: 70 });
    setActiveProjectModal(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" /> 04 — FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineering Solutions & <span className="gradient-text">Live Work</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Production-deployed web applications, real-time AI platforms, and full-stack software solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl p-6 glass-panel-hover flex flex-col justify-between relative overflow-hidden group ${project.glow}`}
            >
              {/* Top Gradient Header */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`}></div>

              <div className="space-y-5">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>

                {project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}

                <button
                  onClick={() => handleOpenDemo(project)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all"
                >
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-cyan-500/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,242,254,0.3)] space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {activeProjectModal.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{activeProjectModal.title}</h3>
                  <span className="text-xs text-cyan-400 font-mono">{activeProjectModal.badge}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {activeProjectModal.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">Key Project Achievements & Features</h4>
              <div className="space-y-2">
                {activeProjectModal.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3 flex-wrap">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950 transition-all"
              >
                <Github className="w-4 h-4" /> GitHub Code
              </a>
              {activeProjectModal.demoUrl !== '#' && (
                <a
                  href={activeProjectModal.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:opacity-90 transition-all"
                >
                  <Globe className="w-4 h-4" /> Launch Live App
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

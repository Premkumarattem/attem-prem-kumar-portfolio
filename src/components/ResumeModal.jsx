import React from 'react';
import { X, Download, ExternalLink, CheckCircle, FileText, Briefcase, GraduationCap, Award, Globe, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const resumeText = `====================================================
ATTEM PREM KUMAR
Software Engineer | Full-Stack Developer | AI Enthusiast
Email: premkumaryadavat71@gmail.com
GitHub: https://github.com/Premkumarattem
====================================================

SUMMARY:
Highly motivated Software Engineer and Full-Stack Developer skilled in Python, FastAPI, React.js, Node.js, WebSockets, Groq AI, PostgreSQL, MongoDB, and Data Analytics. Experienced in building real-time AI smart applications, MERN platforms, and industrial software automation.

TECH STACK & ANALYTICS:
- Languages: Python, Java, JavaScript, C, SQL
- Real-Time AI: FastAPI, WebSockets, WebRTC, Groq API, AI Speech Summarization
- Frontend & UI: React.js, Tailwind CSS, Three.js, HTML5/CSS3
- Backend & DB: Node.js, Express.js, MongoDB, MongoDB Atlas, PostgreSQL
- Tools & Cloud: AWS, Render, Vercel, Git/GitHub, JWT, Razorpay
- Analytics: Sketch Brains Data Analytics, Pandas, Exploratory Analysis

FEATURED PROJECTS:
1. Smart Classroom Assistant (Python | FastAPI | WebSockets | WebRTC | PostgreSQL | Groq API | Render)
   - Built an inclusive real-time smart classroom platform featuring live multilingual speech-to-text, real-time caption translation across 3 languages, and automated AI lecture summarization.
   - Code: https://github.com/Premkumarattem/smart-classroom-assistant
   - Live Demo: https://smart-classroom-assistant-qmps.onrender.com/

2. Restaurant Reservation System (React.js | Node.js | Express.js | MongoDB | JWT | Razorpay | Vercel | Render)
   - Developed a MERN-based restaurant reservation platform with secure authentication, online booking, and responsive UI, reducing booking time by 60%.
   - Code: https://github.com/Premkumarattem/restaurant-reservation
   - Live Demo: https://restaurant-reservation-brown-psi.vercel.app/

3. Agri-Farm Management System (React.js | Node.js | Express.js | MongoDB | MongoDB Atlas)
   - Developed a full-stack agricultural management platform with secure user authentication, streamlining crop tracking and marketplace inventory workflows by 40%.
   - Code: https://github.com/Premkumarattem/agri-farm.git

ACHIEVEMENTS & CERTIFICATIONS:
- Capgemini X Synchrony Tech 4 Future: Positively selected as Semifinalist & Participated in National Finals
- Smart India Hackathon (SIH) Participant
- Sketch Brains Data Analytics Skillset & Certification
- B.Tech CSE (Computer Science & Engineering)
- Code Unnati / SAP Certification
- 6-Month Industrial Internship @ Rane Madras Industries

====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ATTEM_PREM_KUMAR_RESUME.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white">ATTEM PREM KUMAR — RESUME</h3>
              <p className="text-xs text-cyan-400 font-mono">premkumaryadavat71@gmail.com</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans text-slate-300 text-sm">
          {/* Quick Info Box */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400 uppercase font-mono">Degree</p>
              <p className="font-semibold text-white">B.Tech Computer Science (CSE)</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-mono">Hackathon Honor</p>
              <p className="font-semibold text-amber-300 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" /> Capgemini Tech 4 Future Finalist
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-mono">Specialization</p>
              <p className="font-semibold text-cyan-300">Sketch Brains Data Analytics</p>
            </div>
          </div>

          {/* Section: Core Skills */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" /> Technical Skills & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'WebSockets', 'Groq AI', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Data Analytics', 'Java', 'C', 'AWS', 'Render', 'Vercel'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" /> Key Live Projects
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-bold text-white text-xs">1. Smart Classroom Assistant</span>
                  <a href="https://smart-classroom-assistant-qmps.onrender.com/" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1">
                    Live Demo <Globe className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[11px] text-purple-300 font-mono">Python | FastAPI | WebSockets | WebRTC | PostgreSQL | Groq API | Render</p>
                <p className="text-xs text-slate-300">Real-time smart classroom platform featuring live speech-to-text, 3-language caption translation, and AI lecture summarization.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-bold text-white text-xs">2. Restaurant Reservation System</span>
                  <a href="https://restaurant-reservation-brown-psi.vercel.app/" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1">
                    Live Demo <Globe className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[11px] text-purple-300 font-mono">React.js | Node.js | Express.js | MongoDB | JWT | Razorpay | Vercel</p>
                <p className="text-xs text-slate-300">MERN platform with JWT authentication, online table reservation, and Razorpay payment gateway, reducing booking time by 60%.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-xs">3. Agri-Farm Management System</span>
                  <span className="text-[11px] font-mono text-cyan-400">GitHub Repo</span>
                </div>
                <p className="text-[11px] text-purple-300 font-mono">React.js | Node.js | Express.js | MongoDB | MongoDB Atlas</p>
                <p className="text-xs text-slate-300">Full-stack agricultural management platform streamlining crop tracking and inventory workflows by 40%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-900/90 border-t border-cyan-500/20 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-mono hidden sm:block">Format: Plain Text Official Resume File</p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:opacity-90 shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

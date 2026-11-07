import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, CheckCircle, Briefcase, GraduationCap, Award, Globe, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `========================================================================
ATTEM PREM KUMAR
Telangana, India | +91 6302871761 | premkumaryadavat71@gmail.com
LinkedIn: https://www.linkedin.com/in/premkumarattem/
GitHub: https://github.com/Premkumarattem
========================================================================

PROFESSIONAL SUMMARY
Final-year Computer Science and Engineering student with hands-on work in full-stack web apps, AWS cloud, SAP ABAP and data analytics. I like building web applications and Power BI dashboards, and I use SQL and data modeling to make messy data easy to understand. I have completed the SketchBrains AnalytIQ Data Analytics Program and the SAP Code Unnati Program in Emerging Technologies, and I am looking to grow as a developer by working on real business problems.

TECHNICAL SKILLS
• Data Analytics and BI: Power BI, Advanced Excel (dynamic dashboards, pivot tables), SQL (MySQL, MongoDB), Python, Data Cleaning, Data Modeling
• Cloud and SAP: AWS Cloud Computing, SAP ABAP (BTP development)
• Full-Stack and Web: Python (FastAPI), React.js, Node.js, Express.js, JavaScript, MERN Stack, HTML5, CSS3, REST APIs
• AI and Generative AI: LLM APIs (Groq), Speech-to-Text, Real-Time Translation, AI Summarization
• Tools and Platforms: Git, GitHub, Vercel, Render, MongoDB Atlas

WORK EXPERIENCE
API Web Developer Intern | JP IT Staffing LLC | Sept 2026 – Present
• Develop, integrate, maintain and document RESTful APIs, with a focus on security, performance and coding standards.
• Work with cross-functional development teams, manage databases, write clean code and debug issues to meet project milestones.

PROJECTS
1. EduAccess | GitHub: https://github.com/Premkumarattem/smart-classroom-assistant | Live: https://smart-classroom-assistant-qmps.onrender.com/
Technologies: Python, FastAPI, WebSockets, WebRTC, PostgreSQL, Groq API, Render
• Built an inclusive, real-time smart classroom platform with live multilingual speech-to-text, caption translation across 3 languages and automated AI lecture summaries.

2. Restaurant Reservation System | GitHub: https://github.com/Premkumarattem/restaurant-reservation | Live: https://restaurant-reservation-brown-psi.vercel.app/
Technologies: React.js, Node.js, Express.js, MongoDB, JWT, Razorpay, Vercel, Render
• Developed a MERN-based reservation platform with secure login, online booking and a responsive interface, which cut booking time by 60%.

EDUCATION
• B.Tech, Computer Science and Engineering – Kommuri Pratap Reddy Institute of Technology (KPRIT), Hyderabad | 4th Year (Current)
• Diploma in Engineering – State Board of Technical Education and Training | 2021 – 2024 | First Class

CERTIFICATIONS AND TRAINING
• AnalytIQ Data Analytics Program, SketchBrains: Power BI visualization, Advanced Excel, SQL, Data Modeling
• Code Unnati Program, SAP (CSR Initiative): SAP ABAP on BTP, AI and Machine Learning, Edge Computing, SAP Analytics Cloud (Cert ID: CU26_35422)

ACHIEVEMENTS
• Semi-Finalist, Capgemini Tech4Positive Futures Challenge: Pitched and demonstrated EduAccess, an AI-driven inclusive classroom platform, judged on social impact and technical scalability.
• Participant, Smart India Hackathon (SIH) 2025 and 2026: Worked in a team on a technology solution for real-world governance and accessibility challenges.
========================================================================`;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const link = document.createElement('a');
    link.href = '/Prem_Kumar_Attem_Resume.pdf';
    link.download = 'Prem_Kumar_Attem_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0c0c10] border border-red-500/40 rounded-3xl shadow-[0_0_60px_rgba(239,68,68,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121218] border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white">ATTEM PREM KUMAR &bull; RESUME</h3>
              <p className="text-xs text-red-400 font-mono">premkumaryadavat71@gmail.com &bull; +91 6302871761</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans text-zinc-300 text-sm">
          {/* Quick Header Box */}
          <div className="p-4 rounded-xl bg-[#14141c] border border-red-500/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">Current Education</p>
              <p className="font-semibold text-white">B.Tech CSE &bull; KPRIT Hyderabad (4th Year)</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">Current Job</p>
              <p className="font-semibold text-red-400">API Web Developer Intern @ JP IT Staffing</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">LinkedIn Profile</p>
              <a
                href="https://www.linkedin.com/in/premkumarattem/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-red-400 hover:underline flex items-center gap-1"
              >
                premkumarattem <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Section: Summary */}
          <div>
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider mb-1.5">
              Professional Summary
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Final-year Computer Science and Engineering student with hands-on work in full-stack web apps, AWS cloud, SAP ABAP and data analytics. I like building web applications and Power BI dashboards, and I use SQL and data modeling to make messy data easy to understand. Completed the SketchBrains AnalytIQ Data Analytics Program and the SAP Code Unnati Program.
            </p>
          </div>

          {/* Section: Work Experience */}
          <div className="space-y-1.5">
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-red-500" /> Work Experience
            </h4>
            <div className="p-3.5 rounded-xl bg-[#121218] border border-zinc-800 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-xs">API Web Developer Intern &bull; JP IT Staffing LLC</span>
                <span className="text-[11px] font-mono text-red-400 font-bold">Sept 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 pt-1">
                <li>Develop, integrate, maintain and document RESTful APIs, with a focus on security, performance and coding standards.</li>
                <li>Work with cross-functional development teams, manage databases, write clean code and debug issues to meet project milestones.</li>
              </ul>
            </div>
          </div>

          {/* Section: 2 Projects */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-red-500" /> 2 Featured Projects
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#121218] border border-zinc-800 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-white text-xs">1. EduAccess</p>
                  <a href="https://smart-classroom-assistant-qmps.onrender.com/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-red-400 hover:underline">
                    Live Demo &rarr;
                  </a>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">Python &bull; FastAPI &bull; WebSockets &bull; Groq AI &bull; Render</p>
                <p className="text-xs text-zinc-300">Live multilingual speech-to-text, 3-language translation and AI lecture summarization.</p>
              </div>

              <div className="p-3 rounded-xl bg-[#121218] border border-zinc-800 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-white text-xs">2. Restaurant Reservation</p>
                  <a href="https://restaurant-reservation-brown-psi.vercel.app/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-red-400 hover:underline">
                    Live Demo &rarr;
                  </a>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">React &bull; Node &bull; MongoDB &bull; JWT &bull; Razorpay</p>
                <p className="text-xs text-zinc-300">Full-stack reservation platform reducing customer table booking time by 60%.</p>
              </div>
            </div>
          </div>

          {/* Section: Certifications & Training */}
          <div className="space-y-1.5">
            <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-red-500" /> Certifications & Achievements
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <p className="font-bold text-white">AnalytIQ Data Analytics Program</p>
                <p className="text-zinc-400 font-mono text-[11px]">SketchBrains &bull; Power BI & SQL</p>
              </div>
              <div className="p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <p className="font-bold text-white">Code Unnati Program</p>
                <p className="text-zinc-400 font-mono text-[11px]">SAP (CSR Initiative) &bull; Cert ID: CU26_35422</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#121218] border-t border-zinc-800 flex items-center justify-between gap-4">
          <button
            onClick={handleCopyText}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied to clipboard!' : 'Copy Resume Text'}
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-red-600 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all btn-click-effect"
            >
              <Download className="w-4 h-4" /> Download Resume Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

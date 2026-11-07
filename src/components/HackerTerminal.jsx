import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Trash2, ShieldAlert, Cpu, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HackerTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'CYBER-OS v4.0.2 [SYSTEM READY]' },
    { type: 'sys', text: 'Type "help" or click quick commands below.' },
    { type: 'user', text: 'fetch info' },
    { type: 'output', text: 'ATTEM PREM KUMAR | Software Engineer | Full-Stack & Real-Time AI | premkumaryadavat71@gmail.com' }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRunCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let newOutput = [];

    if (cleanCmd === 'help') {
      newOutput = [
        'AVAILABLE COMMANDS:',
        '  about     - Output professional overview & education',
        '  projects  - List live projects & tech stacks',
        '  skills    - List core technical stack & Python AI skills',
        '  contact   - Display email & direct profile links',
        '  hire      - Launch celebratory offer confirmation',
        '  clear     - Clear terminal screen history'
      ];
    } else if (cleanCmd === 'about') {
      newOutput = [
        '--- USER PROFILE: ATTEM PREM KUMAR ---',
        'Role: Software Engineer | Full-Stack Developer | AI & Real-Time Systems',
        'Degree: B.Tech Computer Science & Engineering (CSE)',
        'Internship: 6 Months Industrial Internship @ Rane Madras Industries',
        'Hackathon Honor: Capgemini Tech4Positive Futures Challenge Semi-Finalist',
        'Certifications: Sketch Brains Data Analytics, Code Unnati / SAP'
      ];
    } else if (cleanCmd === 'projects' || cleanCmd === 'ls projects') {
      newOutput = [
        '--- LIVE PROJECTS REPOSITORY (FEATURED) ---',
        '[1] Smart Classroom Assistant (EduAccess)',
        '    Tech: Python | FastAPI | WebSockets | WebRTC | PostgreSQL | Groq API | Render',
        '    Live: https://smart-classroom-assistant-qmps.onrender.com/',
        '[2] Restaurant Reservation System',
        '    Tech: React.js | Node.js | Express.js | MongoDB | JWT | Razorpay | Vercel',
        '    Live: https://restaurant-reservation-brown-psi.vercel.app/'
      ];
    } else if (cleanCmd === 'skills' || cleanCmd === 'fetch skills') {
      newOutput = [
        '--- TECHNICAL SKILLS MATRIX ---',
        'Languages: Python, Java, C, JavaScript, SQL',
        'Real-Time AI: FastAPI, WebSockets, WebRTC, Groq API, Speech-to-Text',
        'Frontend: React.js, Tailwind CSS, HTML5, CSS3',
        'Backend & DB: Node.js, Express, MongoDB, MongoDB Atlas, PostgreSQL',
        'Analytics: Sketch Brains Data Analytics, Pandas, Exploratory Analysis'
      ];
    } else if (cleanCmd === 'contact' || cleanCmd === 'view contact') {
      newOutput = [
        '--- DIRECT CONTACT DATA ---',
        'Email: premkumaryadavat71@gmail.com',
        'GitHub: https://github.com/Premkumarattem',
        'LinkedIn: https://www.linkedin.com/in/premkumarattem/',
        'Status: Available for Full-Time Software Engineering Roles'
      ];
    } else if (cleanCmd === 'hire' || cleanCmd === 'sudo hire') {
      confetti({ particleCount: 100, spread: 80 });
      newOutput = [
        '>>> ACCESS GRANTED: HIRE REQUEST INITIATED! <<<',
        'Thank you! Please send a direct email to premkumaryadavat71@gmail.com'
      ];
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newOutput = [`Command not recognized: "${cleanCmd}". Type "help" for valid commands.`];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: cmdStr },
      ...newOutput.map((text) => ({ type: 'output', text }))
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  return (
    <div className="w-full max-w-4xl mx-auto cyber-panel rounded-2xl border-matrix-green/40 overflow-hidden shadow-[0_0_35px_rgba(0,255,65,0.15)] font-mono text-xs my-8">
      {/* Terminal Header Bar */}
      <div className="bg-[#050e18] px-4 py-2.5 border-b border-[#00ff41]/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-[11px] text-matrix-green font-bold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5" /> premkumar@cyber-core:~$ (bash)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-[#02040a] border border-[#00ff41]/30 text-matrix-green">
            [ AES-256 ENCRYPTED ]
          </span>
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-matrix-green transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output History */}
      <div className="p-4 bg-[#02040a]/90 space-y-2 max-h-72 overflow-y-auto font-mono text-slate-300">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed">
            {item.type === 'sys' && (
              <span className="text-purple-400 font-bold">{`[SYS] ${item.text}`}</span>
            )}
            {item.type === 'user' && (
              <div className="flex items-center gap-1.5 text-matrix-green">
                <span>premkumar@cyber-core:~$</span>
                <span className="text-white font-bold">{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <div className="pl-4 text-cyan-300 whitespace-pre-wrap">{item.text}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Commands */}
      <div className="px-4 py-2 bg-[#050e18] border-t border-[#00ff41]/20 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-slate-400 font-bold uppercase">Quick Commands:</span>
        {[
          { label: 'cat about.txt', cmd: 'about' },
          { label: 'ls projects', cmd: 'projects' },
          { label: 'fetch skills', cmd: 'skills' },
          { label: 'view contact', cmd: 'contact' },
          { label: 'sudo hire', cmd: 'hire' },
          { label: 'clear', cmd: 'clear' }
        ].map((btn) => (
          <button
            key={btn.cmd}
            onClick={() => handleRunCommand(btn.cmd)}
            className="px-2.5 py-1 rounded bg-[#02040a] border border-[#00ff41]/30 text-[10px] font-mono text-matrix-green hover:bg-[#00ff41] hover:text-black transition-all"
          >
            &gt; {btn.label}
          </button>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleSubmit} className="px-4 py-3 bg-[#02040a] border-t border-[#00ff41]/30 flex items-center gap-2">
        <span className="text-matrix-green font-bold">premkumar@cyber-core:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. help, projects, skills)..."
          className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
        />
        <button
          type="submit"
          className="p-1 rounded text-matrix-green hover:text-white transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-matrix-green" />
        </button>
      </form>
    </div>
  );
}

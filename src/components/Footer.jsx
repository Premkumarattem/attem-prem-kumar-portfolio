import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#03050c]/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-sm font-bold text-white tracking-wider">
              ATTEM PREM KUMAR
            </p>
            <p className="text-[11px] text-cyan-400 font-mono">
              Software Engineer | Real-Time AI & Full-Stack
            </p>
          </div>
        </div>

        {/* Center Minimal Copyright */}
        <p className="text-xs text-slate-400 font-mono text-center">
          &copy; {new Date().getFullYear()} Attem Prem Kumar. All rights reserved.
        </p>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.2)]"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

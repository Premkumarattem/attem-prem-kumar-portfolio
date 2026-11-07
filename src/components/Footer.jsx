import React from 'react';
import { Terminal, ArrowUp, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-red-500/20 bg-[#060608]/95 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-2">
              ATTEM PREM KUMAR
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            </p>
            <p className="text-[11px] text-zinc-400 font-mono">
              API Web Developer &bull; Full-Stack &bull; Data Analytics
            </p>
          </div>
        </div>

        {/* Center Minimal Copyright */}
        <p className="text-xs text-zinc-400 font-mono text-center">
          &copy; {new Date().getFullYear()} Attem Prem Kumar. All rights reserved.
        </p>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-[#14141c] border border-red-500/30 text-white hover:bg-red-600 hover:border-red-500 transition-all shadow-[0_0_15px_rgba(239,68,68,0.25)] btn-click-effect"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5 text-red-400" />
        </button>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sparkles, Download, Mail, Code2 } from 'lucide-react';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: '01 Home', href: '#home' },
    { name: '02 About', href: '#about' },
    { name: '03 Tech Stack', href: '#tech-stack' },
    { name: '04 Projects', href: '#projects' },
    { name: '05 Experience', href: '#experience' },
    { name: '06 Education', href: '#education' },
    { name: '07 Achievements', href: '#achievements' },
    { name: '08 Universe', href: '#coding-universe' },
    { name: '09 Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070f]/80 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="p-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1">
              ATTEM PREM KUMAR
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-tight">
              Software Engineer | Real-Time AI
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-500/15">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/80 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white hover:opacity-95 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070f]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-4 pb-6 mt-2 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/40 transition-all border border-transparent hover:border-cyan-500/20"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-cyan-400 border border-cyan-500/40"
              >
                <Download className="w-4 h-4" /> Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

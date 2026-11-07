import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sparkles, Download, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const link of navLinks.slice().reverse()) {
        const sectionId = link.href.replace('#', '');
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
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
          ? 'bg-[#060608]/90 backdrop-blur-xl border-b border-red-500/20 py-3 shadow-xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="p-2 rounded-xl bg-[#121218] border border-red-500/30 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all">
            <Terminal className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1.5">
              ATTEM PREM KUMAR
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-tight flex items-center gap-1">
              API Web Developer <span className="text-red-500">&bull;</span> Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121218]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all duration-200 btn-click-effect ${
                  isActive
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
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
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-[#121218] text-white border border-red-500/40 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all shadow-md btn-click-effect"
          >
            <Download className="w-3.5 h-3.5 text-red-400" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold bg-red-600 text-white hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] btn-click-effect"
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#121218] border border-red-500/30 text-white hover:text-red-400"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-red-500/20 px-4 pt-4 pb-6 mt-2 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono text-zinc-200 hover:text-white hover:bg-red-600/20 transition-all border border-transparent hover:border-red-500/30"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#121218] text-white border border-red-500/40"
              >
                <Download className="w-4 h-4 text-red-400" /> Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-red-600 text-white"
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

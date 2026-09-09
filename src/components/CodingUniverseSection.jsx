import React from 'react';
import { Globe, Github, Code2, Terminal, ExternalLink, Sparkles, Award } from 'lucide-react';

export default function CodingUniverseSection() {
  const platforms = [
    {
      name: 'GitHub',
      role: 'Repositories & Open Source',
      handle: '@Premkumarattem',
      link: 'https://github.com/Premkumarattem',
      icon: <Github className="w-8 h-8 text-white" />,
      accent: 'from-slate-700 to-slate-900',
      borderColor: 'border-slate-600/40',
      badge: 'Code Repositories',
      stats: 'Smart Classroom, MERN & Python'
    },
    {
      name: 'LeetCode',
      role: 'DSA & Problem Solving',
      handle: 'Attem Prem Kumar',
      link: 'https://leetcode.com',
      icon: <Code2 className="w-8 h-8 text-amber-400" />,
      accent: 'from-amber-600/20 to-amber-950/40',
      borderColor: 'border-amber-500/40',
      badge: 'Algorithms',
      stats: 'Data Structures Practice'
    },
    {
      name: 'HackerRank',
      role: 'Skill Badges & Competitions',
      handle: 'Attem Prem Kumar',
      link: 'https://hackerrank.com',
      icon: <Terminal className="w-8 h-8 text-emerald-400" />,
      accent: 'from-emerald-600/20 to-emerald-950/40',
      borderColor: 'border-emerald-500/40',
      badge: 'Certified Badges',
      stats: 'Problem Solving & Java'
    },
    {
      name: 'GeeksforGeeks',
      role: 'Core CS Concepts & Analytics',
      handle: 'Attem Prem Kumar',
      link: 'https://geeksforgeeks.org',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      accent: 'from-green-600/20 to-green-950/40',
      borderColor: 'border-green-500/40',
      badge: 'Technical Practice',
      stats: 'CS Fundamentals & Data'
    }
  ];

  return (
    <section id="coding-universe" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" /> 08 — CODING UNIVERSE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Developer Profiles & <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Interactive gateways to code repositories, competitive programming platforms, and online coding profiles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-panel rounded-3xl p-6 glass-panel-hover border ${platform.borderColor} flex flex-col justify-between space-y-6 relative overflow-hidden`}
            >
              {/* Top Glow Accent */}
              <div className={`absolute inset-0 bg-gradient-to-b ${platform.accent} opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`}></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {platform.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    {platform.name}
                    <ExternalLink className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">{platform.role}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-cyan-400">
                  {platform.stats}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
                <span>{platform.handle}</span>
                <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">Visit &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

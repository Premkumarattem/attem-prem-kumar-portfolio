import React from 'react';
import { Globe, Github, Code2, Terminal, ExternalLink, Sparkles, Award, Linkedin } from 'lucide-react';

export default function CodingUniverseSection() {
  const platforms = [
    {
      name: 'LinkedIn',
      role: 'Professional Network & Experience',
      handle: 'premkumarattem',
      link: 'https://www.linkedin.com/in/premkumarattem/',
      icon: <Linkedin className="w-7 h-7 text-red-500" />,
      badge: 'Professional',
      stats: 'Connect & Endorsements'
    },
    {
      name: 'GitHub',
      role: 'Repositories & Open Source',
      handle: '@Premkumarattem',
      link: 'https://github.com/Premkumarattem',
      icon: <Github className="w-7 h-7 text-white" />,
      badge: 'Code Repositories',
      stats: 'EduAccess & MERN Apps'
    },
    {
      name: 'LeetCode',
      role: 'DSA & Algorithmic Problem Solving',
      handle: 'Attem Prem Kumar',
      link: 'https://leetcode.com',
      icon: <Code2 className="w-7 h-7 text-red-400" />,
      badge: 'Data Structures',
      stats: 'Problem Solving Practice'
    },
    {
      name: 'HackerRank',
      role: 'Skill Badges & Problem Solving',
      handle: 'Attem Prem Kumar',
      link: 'https://hackerrank.com',
      icon: <Terminal className="w-7 h-7 text-white" />,
      badge: 'Skill Badges',
      stats: 'Problem Solving & Python'
    }
  ];

  return (
    <section id="coding-universe" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" /> 08 &bull; CODING & PROFESSIONAL PLATFORMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Developer Profiles & <span className="gradient-red-white">Network</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Direct gateways to my LinkedIn professional profile, GitHub code repositories, and coding handles.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-panel rounded-3xl p-6 border border-white/5 hover:border-red-500/60 flex flex-col justify-between space-y-6 relative overflow-hidden btn-click-effect"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#14141c] border border-zinc-800 group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-red-950/80 border border-red-500/30 text-red-300 font-bold">
                    {platform.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                    {platform.name}
                    <ExternalLink className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{platform.role}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-[#121218] border border-zinc-800 text-xs font-mono text-zinc-300">
                  {platform.stats}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{platform.handle}</span>
                <span className="text-red-400 font-bold group-hover:translate-x-1 transition-transform">Visit &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

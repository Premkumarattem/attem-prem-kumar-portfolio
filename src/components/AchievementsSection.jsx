import React from 'react';
import { Trophy, Flame, Code2, Star, Target, CheckCircle2, Zap, Award, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'Capgemini X Synchrony Tech 4 Future',
      category: 'Prestigious Hackathon & Innovation',
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      glow: 'border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      badge: 'Semifinalist & Finalist',
      desc: 'Selected as Semifinalist and advanced to participate in the National Finals of Capgemini X Synchrony Tech 4 Future, showcasing high-impact tech innovations and engineering solutions.'
    },
    {
      title: 'Smart India Hackathon (SIH) Participant',
      category: 'National Level Hackathon',
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      glow: 'border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.25)]',
      badge: 'National Participant',
      desc: 'Participated in Smart India Hackathon, tackling real-world problem statements under high-pressure time limits with team collaboration and prototype deployment.'
    },
    {
      title: 'Sketch Brains Data Analytics Mastery',
      category: 'Data Science & Analytics',
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      glow: 'border-purple-500/40 shadow-[0_0_25px_rgba(127,0,255,0.25)]',
      badge: 'Analytics Certified',
      desc: 'Completed specialized training in Data Analytics skills with Sketch Brains, mastering SQL, Python data libraries, data visualization, and statistical insights generation.'
    },
    {
      title: 'Technical & Algorithmic Problem Solving',
      category: 'Competitive Coding',
      icon: <Flame className="w-6 h-6 text-emerald-400" />,
      glow: 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      badge: 'DSA & Systems',
      desc: 'Rigorous practice on LeetCode, HackerRank, and GeeksforGeeks. Solved complex algorithmic challenges spanning graphs, dynamic programming, and system design.'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" /> 07 — ACHIEVEMENTS & RECOGNITIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Hackathons & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Key competition achievements, hackathon finalist recognitions, and technical certifications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 glass-panel-hover border ${item.glow} space-y-4 flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Achievement
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

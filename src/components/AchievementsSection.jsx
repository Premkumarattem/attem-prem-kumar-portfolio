import React from 'react';
import { Trophy, Flame, Code2, Star, Target, CheckCircle2, Zap, Award, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'Capgemini Tech4Positive Futures Challenge',
      category: 'Prestigious Global Innovation Challenge',
      badge: 'Semi-Finalist',
      icon: <Trophy className="w-6 h-6 text-red-500" />,
      glow: 'border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.2)]',
      desc: 'Pitched and demonstrated EduAccess, an AI-driven inclusive classroom platform, judged on social impact and technical scalability.'
    },
    {
      title: 'Smart India Hackathon (SIH) 2025 & 2026',
      category: 'National Level Hackathon',
      badge: 'Participant',
      icon: <Award className="w-6 h-6 text-red-400" />,
      glow: 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]',
      desc: 'Worked in a team on a technology solution for real-world governance and accessibility challenges under time-critical prototype execution.'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" /> 07 &bull; HONORS & ACHIEVEMENTS (RESUME)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Hackathons & <span className="gradient-red-white">Recognition</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Key honors and national hackathon achievements directly from my resume.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-3xl p-7 border ${item.glow} space-y-5 flex flex-col justify-between hover:border-red-500/60 transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#14141c] border border-red-500/30">
                    {item.icon}
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-sans">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs font-mono text-red-400">
                <CheckCircle2 className="w-4 h-4 text-red-500" /> Verified Resume Achievement
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

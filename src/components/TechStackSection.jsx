import React, { useState } from 'react';
import { Cpu, Code2, Database, Layers, Cloud, Sparkles, Terminal, Check, BarChart3 } from 'lucide-react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const techSkills = [
    { name: 'Python', category: 'Languages & Analytics', level: 'Advanced', glow: 'from-blue-500 to-cyan-400', icon: '🐍', desc: 'FastAPI, WebSockets, WebRTC, Data Analytics, AI Scripting' },
    { name: 'Java', category: 'Languages & Analytics', level: 'Advanced', glow: 'from-orange-500 to-amber-500', icon: '☕', desc: 'Core Java, Object-Oriented Programming, Networking Algorithms' },
    { name: 'JavaScript', category: 'Languages & Analytics', level: 'Advanced', glow: 'from-yellow-400 to-amber-500', icon: '📜', desc: 'ES6+, Async/Await, WebSockets, Promises & DOM APIs' },
    { name: 'C', category: 'Languages & Analytics', level: 'Intermediate', glow: 'from-slate-400 to-blue-400', icon: '⚡', desc: 'Low-level memory pointers & system fundamentals' },
    { name: 'React.js', category: 'Frontend', level: 'Advanced', glow: 'from-cyan-400 to-blue-500', icon: '⚛️', desc: 'Hooks, Component Architecture, Tailwind CSS, Vercel Deployments' },
    { name: 'Node.js & Express', category: 'Backend', level: 'Advanced', glow: 'from-emerald-400 to-teal-500', icon: '🟢', desc: 'REST APIs, JWT Auth, Microservices, Real-time WebSockets' },
    { name: 'FastAPI & Groq AI', category: 'Backend', level: 'Advanced', glow: 'from-purple-500 to-indigo-500', icon: '🚀', desc: 'Low-latency Python async APIs, Groq AI Summarization & STT' },
    { name: 'Data Analytics', category: 'Specialized', level: 'Advanced', glow: 'from-sky-400 to-indigo-500', icon: '📊', desc: 'Sketch Brains analytics, Exploratory Analysis, Pandas, Data Pipelines' },
    { name: 'MongoDB & Atlas', category: 'Databases', level: 'Advanced', glow: 'from-green-500 to-emerald-400', icon: '🍃', desc: 'NoSQL Schema Design, Atlas Cloud Hosting, Aggregations' },
    { name: 'PostgreSQL & MySQL', category: 'Databases', level: 'Advanced', glow: 'from-blue-400 to-indigo-500', icon: '🐘', desc: 'Relational DBs, Complex Queries, Joins, Indexing' },
    { name: 'Git/GitHub & AWS', category: 'Tools & DevOps', level: 'Advanced', glow: 'from-orange-400 to-rose-500', icon: '🐙', desc: 'Version control, Render & Vercel deployments, Cloud hosting' },
    { name: 'AI / ML & Speech', category: 'Specialized', level: 'Advanced', glow: 'from-pink-500 to-purple-600', icon: '🤖', desc: 'Real-Time Speech-to-Text, Multilingual Translation, Groq LLMs' }
  ];

  const categories = ['All', 'Languages & Analytics', 'Frontend', 'Backend', 'Databases', 'Tools & DevOps', 'Specialized'];

  const filteredSkills = activeCategory === 'All'
    ? techSkills
    : techSkills.filter(s => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> 03 — TECH STACK & ANALYTICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Core Technical <span className="gradient-text">Toolkit & Skills</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Technical skills covering Full-Stack Development, Python AI/FastAPI, Data Analytics, and Cloud Databases.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-105'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group glass-panel rounded-2xl p-6 glass-panel-hover flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.glow}`}></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{skill.category}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                  <Check className="w-3 h-3 text-cyan-400" /> Verified Skill
                </span>
                <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.glow} w-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Cpu, Code2, Database, Layers, Cloud, Sparkles, Terminal, Check, BarChart3, Bot, Wrench } from 'lucide-react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Exact skills from resume grouped into categories
  const techSkills = [
    // Data Analytics and BI
    { name: 'Power BI', category: 'Data Analytics & BI', level: 'Advanced', icon: '📊', desc: 'Interactive business dashboards, report generation & KPI modeling' },
    { name: 'Advanced Excel', category: 'Data Analytics & BI', level: 'Advanced', icon: '📈', desc: 'Dynamic dashboards, pivot tables, data formulas & lookup queries' },
    { name: 'SQL (MySQL & MongoDB)', category: 'Data Analytics & BI', level: 'Advanced', icon: '🗄️', desc: 'Complex joins, aggregations, schema design & query optimization' },
    { name: 'Python for Data', category: 'Data Analytics & BI', level: 'Advanced', icon: '🐍', desc: 'Data cleaning, data modeling, pandas analysis & exploratory workflows' },

    // Cloud and SAP
    { name: 'AWS Cloud Computing', category: 'Cloud & SAP', level: 'Proficient', icon: '☁️', desc: 'Cloud infrastructure, EC2, S3 bucket storage & hosting basics' },
    { name: 'SAP ABAP (BTP)', category: 'Cloud & SAP', level: 'Certified', icon: '💼', desc: 'SAP BTP development, enterprise logic & SAP Code Unnati credentials' },

    // Full-Stack and Web
    { name: 'Python (FastAPI)', category: 'Full-Stack & Web', level: 'Advanced', icon: '⚡', desc: 'High-performance asynchronous REST APIs, WebSockets & WebRTC' },
    { name: 'React.js', category: 'Full-Stack & Web', level: 'Advanced', icon: '⚛️', desc: 'Component architecture, custom hooks, reactive state & Tailwind CSS' },
    { name: 'Node.js & Express.js', category: 'Full-Stack & Web', level: 'Advanced', icon: '🟢', desc: 'Scalable backend server development, middleware & REST APIs' },
    { name: 'JavaScript & MERN', category: 'Full-Stack & Web', level: 'Advanced', icon: '📜', desc: 'Modern ES6+, async/await, full-stack MERN ecosystem development' },
    { name: 'HTML5 & CSS3', category: 'Full-Stack & Web', level: 'Expert', icon: '🎨', desc: 'Responsive layouts, modern semantic markup & mobile-first UI' },

    // AI and Generative AI
    { name: 'LLM APIs (Groq)', category: 'AI & Generative AI', level: 'Advanced', icon: '🤖', desc: 'Fast LLM inference integration, lecture summarization & reasoning' },
    { name: 'Speech-to-Text & Translation', category: 'AI & Generative AI', level: 'Advanced', icon: '🎙️', desc: 'Real-time multilingual audio transcription & 3-language translation' },

    // Tools and Platforms
    { name: 'Git & GitHub', category: 'Tools & Platforms', level: 'Advanced', icon: '🐙', desc: 'Version control, branch management, pull requests & code collaboration' },
    { name: 'Vercel & Render', category: 'Tools & Platforms', level: 'Advanced', icon: '🚀', desc: 'Cloud production deployments, CI/CD pipelines & live hosting' },
    { name: 'MongoDB Atlas', category: 'Tools & Platforms', level: 'Advanced', icon: '🍃', desc: 'Cloud NoSQL database hosting, cluster configuration & security' },
  ];

  const categories = [
    'All',
    'Data Analytics & BI',
    'Full-Stack & Web',
    'AI & Generative AI',
    'Cloud & SAP',
    'Tools & Platforms',
  ];

  const filteredSkills = activeCategory === 'All'
    ? techSkills
    : techSkills.filter(s => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> 03 &bull; TECHNICAL SKILLS (RESUME)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Technical Arsenal & <span className="gradient-red-white">Specializations</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Data Analytics & BI, Full-Stack Web, AI/GenAI, and Cloud/SAP technologies.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Category Filters with Interactive Click Animation */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 btn-click-effect ${
                activeCategory === cat
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)] scale-105'
                  : 'bg-[#121218] border border-zinc-800 text-zinc-300 hover:border-red-500/40 hover:text-white'
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
              className="group glass-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border border-white/5 hover:border-red-500/50"
            >
              {/* Subtle Red Top Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-red-950/80 border border-red-500/40 text-red-300">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">{skill.category}</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                  <Check className="w-3 h-3 text-red-500" /> Verified Skill
                </span>
                <div className="w-16 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-rose-500 w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

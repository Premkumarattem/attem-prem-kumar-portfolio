import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, MapPin, Phone, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /> 09 — GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Available for full-time software engineering roles, project development, and technical collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 space-y-6 border-cyan-500/30 shadow-[0_0_30px_rgba(0,242,254,0.15)]">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-mono">Contact Information</h3>
                <p className="text-xs text-slate-400">Feel free to reach out directly via email, LinkedIn, or GitHub.</p>
              </div>

              {/* Direct Info Links */}
              <div className="space-y-4">
                <a
                  href="mailto:premkumaryadavat71@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Email Address</p>
                    <p className="font-mono text-sm font-semibold text-white group-hover:text-cyan-300">
                      premkumaryadavat71@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-blue-950/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">LinkedIn Profile</p>
                    <p className="font-mono text-sm font-semibold text-white group-hover:text-blue-300">
                      linkedin.com/in/attem-prem-kumar
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Premkumarattem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-400 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">GitHub Profile</p>
                    <p className="font-mono text-sm font-semibold text-white group-hover:text-purple-300">
                      github.com/Premkumarattem
                    </p>
                  </div>
                </a>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                </span>
                <p className="text-xs text-slate-300 font-mono">
                  Usually responds within 24 hours. Open to full-time remote or onsite opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 space-y-6 border-cyan-500/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" /> Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400">Fill out the form below to send an instant message.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4 animate-fadeIn">
                <div className="inline-flex p-4 rounded-full bg-cyan-500/20 text-cyan-400 mb-2">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold text-white font-mono">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-cyan-300 font-bold">{formData.name}</span>. I have received your message and will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white font-sans transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white font-sans transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white font-sans transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Attem Prem Kumar, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white font-sans transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-mono font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(127,0,255,0.6)] hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, MapPin, Phone, Sparkles, MessageSquare, Copy, Check } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /> 09 &bull; GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Discuss <span className="gradient-red-white">Opportunities</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-mono">
            Available for Software Engineering, Full-Stack, and Data Analytics roles.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 space-y-6 border border-white/10 hover:border-red-500/40">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white font-sans">Contact Details</h3>
                <p className="text-xs text-zinc-400">Feel free to call, email, or connect via LinkedIn.</p>
              </div>

              {/* Direct Info Links with Copy Buttons */}
              <div className="space-y-3.5">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-red-400 uppercase tracking-wider">Email Address</p>
                      <a href="mailto:premkumaryadavat71@gmail.com" className="font-mono text-xs sm:text-sm font-semibold text-white hover:text-red-400 transition-colors">
                        premkumaryadavat71@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('premkumaryadavat71@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-[#1a1a24] text-zinc-400 hover:text-white hover:bg-red-600/20 transition-all btn-click-effect"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-red-400 uppercase tracking-wider">Phone</p>
                      <a href="tel:+916302871761" className="font-mono text-sm font-semibold text-white hover:text-red-400 transition-colors">
                        +91 6302871761
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+916302871761', 'phone')}
                    className="p-2 rounded-lg bg-[#1a1a24] text-zinc-400 hover:text-white hover:bg-red-600/20 transition-all btn-click-effect"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#121218] border border-zinc-800 flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-red-400 uppercase tracking-wider">Location</p>
                    <p className="font-mono text-sm font-semibold text-white">
                      Telangana, India
                    </p>
                  </div>
                </div>

                {/* Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://linkedin.com/in/attem-prem-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 text-center flex items-center justify-center gap-2 text-xs font-mono text-white hover:text-red-400 transition-all btn-click-effect"
                  >
                    <Linkedin className="w-4 h-4 text-red-500" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Premkumarattem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#121218] border border-zinc-800 hover:border-red-500/40 text-center flex items-center justify-center gap-2 text-xs font-mono text-white hover:text-red-400 transition-all btn-click-effect"
                  >
                    <Github className="w-4 h-4 text-red-500" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 space-y-6 border border-white/10 hover:border-red-500/40">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-500" /> Send a Message
              </h3>
              <p className="text-xs text-zinc-400">Leave your inquiry or opportunity details below.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-red-950/30 border border-red-500/40 text-center space-y-4 animate-fadeIn">
                <div className="inline-flex p-4 rounded-full bg-red-600/20 text-red-400 mb-2">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold text-white font-sans">Message Dispatched!</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-red-400 font-bold">{formData.name}</span>. I have received your message and will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-red-600 text-white hover:bg-red-500 transition-all btn-click-effect shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex"
                      className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white font-sans transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white font-sans transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering / Interview Invitation"
                    className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white font-sans transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Attem Prem Kumar, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-zinc-800 focus:border-red-500 focus:outline-none text-sm text-white font-sans transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono font-bold text-sm bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:bg-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] transition-all disabled:opacity-50 btn-click-effect"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Direct Message
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

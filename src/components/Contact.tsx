"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Check, Copy } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedText, setCopiedText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[35vw] h-[35vw] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 inline-block">
              // 06 · CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Let's build something<br />
              that <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">ships</span>.
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
              Currently working at Infor. Open to interesting software engineer collaborations, data analytics consulting, or general knowledge sharing. Drop me a note!
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Copier */}
              <button
                onClick={() => handleCopy("shiveshanand8742@gmail.com", "email")}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-400/20 hover:bg-white/[0.03] transition-all group font-mono text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors">
                  <Mail size={16} className="text-cyan-400" />
                  <span>shiveshanand8742@gmail.com</span>
                </div>
                <div className="text-cyan-400 flex items-center gap-1 font-semibold">
                  {copiedText === "email" ? (
                    <>
                      <Check size={14} />
                      <span className="text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Phone Copier */}
              <button
                onClick={() => handleCopy("+91-8210544643", "phone")}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-400/20 hover:bg-white/[0.03] transition-all group font-mono text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors">
                  <Phone size={16} className="text-purple-400" />
                  <span>+91 82105 44643</span>
                </div>
                <div className="text-cyan-400 flex items-center gap-1 font-semibold">
                  {copiedText === "phone" ? (
                    <>
                      <Check size={14} />
                      <span className="text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Location display */}
              <div className="w-full flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] text-white/60 font-mono text-xs sm:text-sm select-none">
                <MapPin size={16} className="text-pink-400" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://linkedin.com/in/shiveshanand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/5 text-white/70 hover:text-white transition-all text-xs font-semibold"
              >
                <svg className="w-3.5 h-3.5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/shiveshanand09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/5 text-white/70 hover:text-white transition-all text-xs font-semibold"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <div className="lg:col-span-7">
            <div className="relative group">
              
              {/* Outer border glow effect */}
              <div className="absolute inset-0 -m-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-5 group-hover:opacity-15 blur-lg transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.01] p-6 sm:p-10 backdrop-blur-2xl">
                <h3 className="text-lg font-bold text-white mb-8 tracking-tight">
                  Direct Inquiries
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-white/40 uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] focus:bg-white/[0.04] text-white placeholder-white/20 focus:border-cyan-400/50 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-white/40 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] focus:bg-white/[0.04] text-white placeholder-white/20 focus:border-cyan-400/50 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-white/40 uppercase mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or scope of inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] focus:bg-white/[0.04] text-white placeholder-white/20 focus:border-cyan-400/50 focus:outline-none transition-all text-sm font-medium resize-none"
                    />
                  </div>

                  {/* Action button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Success notification */}
                  {success && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm text-center">
                      Thank you! Your message was received successfully.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

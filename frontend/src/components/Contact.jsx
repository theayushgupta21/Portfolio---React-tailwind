import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Globe, User, Camera, Monitor } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border-white/5 shadow-2xl">
        
        {/* Left: Info */}
        <div className="flex-1 p-12 lg:p-20 bg-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
          
          <h2 className="text-5xl font-bold mb-8 relative z-10">Let's build something <span className="text-gradient">legendary.</span></h2>
          <p className="text-text-muted mb-12 text-lg max-w-sm relative z-10">
            Currently open to new projects and collaborations. Drop a message and let's discuss your vision.
          </p>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Email me</p>
                <p className="text-lg font-semibold">ayushgupta9510@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Call me</p>
                <p className="text-lg font-semibold">+91 9045073154</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Location</p>
                <p className="text-lg font-semibold">Greater Noida, India</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex gap-4 relative z-10">
            {[
              { Icon: Globe, url: "https://github.com/theayushgupta21", title: "GitHub" },
              { Icon: User, url: "https://linkedin.com/in/theayushgupta21", title: "LinkedIn" },
              { Icon: Camera, url: "https://www.instagram.com/portraitwalagallery", title: "Instagram" },
              { Icon: Monitor, url: "https://leetcode.com/u/ayush_Gupta21/", title: "LeetCode" }
            ].map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" title={social.title} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-[1.2] p-12 lg:p-20 relative">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-text group-hover:text-primary transition-colors opacity-70">Your Name</label>
                <input type="text" className="w-full bg-slate-500/5 dark:bg-white/5 border-subtle rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all focus:ring-1 focus:ring-primary/20" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-text opacity-70">Email Address</label>
                <input type="email" className="w-full bg-slate-500/5 dark:bg-white/5 border-subtle rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all focus:ring-1 focus:ring-primary/20" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-text opacity-70">Subject</label>
              <input type="text" className="w-full bg-slate-500/5 dark:bg-white/5 border-subtle rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all focus:ring-1 focus:ring-primary/20" placeholder="Collaboration / Job Inquiry" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-text opacity-70">Message</label>
              <textarea rows="4" className="w-full bg-slate-500/5 dark:bg-white/5 border-subtle rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all focus:ring-1 focus:ring-primary/20 resize-none" placeholder="How can I help you?" />
            </div>

            <button type="submit" className="w-full bg-primary py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

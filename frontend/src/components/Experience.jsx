import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Search,
  Globe,
  BarChart3,
  Link as LinkIcon,
  FileText,
  CheckCircle,
  Layout,
  Video,
  Palette,
  Camera
} from "lucide-react";

const nodes = [
  { id: 1, label: "SEO Specialist", x: 400, y: 250, color: "#6366f1", icon: Globe },
  { id: 2, label: "Frontend", x: 550, y: 150, color: "#a855f7", icon: Layout },
  { id: 3, label: "Video Editor", x: 250, y: 350, color: "#ec4899", icon: Video },
  { id: 4, label: "Creative", x: 650, y: 250, color: "#8b5cf6", icon: Camera },
  { id: 5, label: "UI / UX", x: 500, y: 380, color: "#4f46e5", icon: Palette },
  { id: 6, label: "Backlinks", x: 200, y: 220, color: "#06b6d4", icon: LinkIcon },
  { id: 7, label: "Analytics", x: 300, y: 120, color: "#f97316", icon: BarChart3 },
  { id: 8, label: "Keywords", x: 180, y: 100, color: "#10b981", icon: Search },
  { id: 9, label: "Blogs", x: 120, y: 300, color: "#f43f5e", icon: FileText },
  { id: 10, label: "Site Audit", x: 400, y: 80, color: "#fbbf24", icon: CheckCircle },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 6 },
  { from: 1, to: 7 },
  { from: 1, to: 8 },
  { from: 1, to: 9 },
  { from: 1, to: 10 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 4 },
  { from: 5, to: 3 },
  { from: 8, to: 9 },
  { from: 10, to: 7 },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20">

        {/* Left Side: Text Experience */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-12">Journey & <span className="text-gradient">Experience</span></h2>

          <div className="space-y-12">
            {[
              {
                title: "SEO Intern",
                company: "Robral Technologies",
                date: "Nov 2025 – Feb 2026",
                desc: "Optimized Next.js apps with schema markup & sitemaps. Managed keyword research for 250+ terms and improved Core Web Vitals.",
              },
              {
                title: "Full-Stack Developer",
                company: "Independent Projects",
                date: "2023 - Present",
                desc: "Building scalable web apps using MERN stack with a focus on real-world impact and AI integrations.",
              },
              {
                title: "Content Creator",
                company: "Portraitwala",
                date: "2021 - Present",
                desc: "Achieved 100K+ reach as a visual storyteller. Blending technical skills with artistic vision.",
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-2">
                  <Calendar size={14} /> {exp.date}
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-text-muted mb-4 font-medium flex items-center gap-2">
                  <Briefcase size={14} /> {exp.company}
                </p>
                <p className="text-text-muted leading-relaxed max-w-md">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Modern Skill Network Graph */}
        <div className="hidden lg:block flex-[1.2] relative min-h-[600px] bg-surface/30 rounded-[3rem] border-subtle overflow-hidden shadow-2xl group/graph">
          {/* Scientific Grid Backdrop */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(var(--border) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

          <div className="absolute inset-0 p-8 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 500">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {connections.map((conn, i) => {
                const from = nodes.find(n => n.id === conn.from);
                const to = nodes.find(n => n.id === conn.to);
                return (
                  <React.Fragment key={i}>
                    {/* Base Static Link */}
                    <line
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke="var(--primary)"
                      strokeWidth="1"
                      strokeOpacity="0.1"
                    />
                    {/* Animated Energy Pulse */}
                    <motion.line
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeDasharray="10 200"
                      initial={{ strokeDashoffset: 100, opacity: 0 }}
                      animate={{ strokeDashoffset: -200, opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    />
                  </React.Fragment>
                );
              })}
            </svg>
          </div>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute group/node cursor-pointer z-10"
              style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              whileHover={{ scale: 1.15, zIndex: 20 }}
            >
              {/* Concentric Glow Rings */}
              <div className="absolute inset-0 -m-8 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="absolute w-16 h-16 rounded-full border border-primary/10"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute w-12 h-12 rounded-full border border-primary/20"
                  animate={{ scale: [1, 1.3], opacity: [0.7, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              {/* Main Node Content */}
              <div className="relative glass p-4 rounded-full border-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover/node:bg-primary group-hover/node:border-primary transition-all duration-300">
                 <node.icon size={20} className="text-primary group-hover/node:text-white transition-colors" />
                 
                 {/* Floating Label */}
                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-surface/80 backdrop-blur-md rounded-lg border-subtle text-[10px] font-bold uppercase tracking-widest text-text opacity-0 group-hover/node:opacity-100 group-hover/node:-bottom-12 transition-all">
                   {node.label}
                 </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.2em] font-black opacity-20 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-primary animate-ping" /> SYSTEM: STABLE // NODES: {nodes.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

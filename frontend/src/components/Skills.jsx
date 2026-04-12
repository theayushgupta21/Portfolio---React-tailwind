import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../useStore/store";
import { cn } from "../utils/cn";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Palette, 
  Smartphone, 
  Terminal, 
  Video 
} from "lucide-react";

const skills = [
  { id: 1, name: "React / Next.js", icon: <Layout />, category: "frontend", color: "text-blue-400", desc: "Expert in building scalable, SEO-friendly web apps." },
  { id: 2, name: "Node / Express", icon: <Terminal />, category: "backend", color: "text-green-400", desc: "Fast and secure server-side logic & REST APIs." },
  { id: 3, name: "MongoDB Atlas", icon: <Database />, category: "database", color: "text-emerald-400", desc: "Scalable NoSQL database management." },
  { id: 4, name: "Zustand", icon: <Layers />, category: "state", color: "text-amber-400", desc: "Simplifying global state management." },
  { id: 5, name: "Tailwind CSS", icon: <Palette />, category: "frontend", color: "text-cyan-400", desc: "Utility-first CSS for modern, responsive UIs." },
  { id: 6, name: "Socket.io", icon: <Globe />, category: "backend", color: "text-indigo-400", desc: "Real-time, bidirectional communication." },
  { id: 7, name: "OpenAI / Stripe", icon: <Smartphone />, category: "integration", color: "text-fuchsia-400", desc: "Integrating AI and secure payment systems." },
  { id: 8, name: "Photography", icon: <Video />, category: "creative", color: "text-red-400", desc: "Visual storytelling through a creative lens." },
];

const Skills = () => {
  const { selectedSkill, setSelectedSkill } = useStore();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="min-h-screen py-32 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square rounded-full border border-white/5 opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square rounded-full border border-white/5 opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square rounded-full border border-white/5 opacity-20 pointer-events-none" />

      <div className="text-center z-10 mb-12 md:mb-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-sm md:text-base text-text-muted">Explore the technologies I use to build digital magic.</p>
      </div>

      <div className="relative w-full max-w-[600px] h-[400px] md:h-[600px] flex items-center justify-center scale-[0.7] md:scale-100">
        {/* Central Hub */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass border-primary/20 flex items-center justify-center text-primary z-20">
          <Code2 size={selectedSkill ? 30 : 40} />
        </div>

        {/* Orbital Skills */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2;
          const radius = 220; // Base radius
          
          return (
            <motion.div
              key={skill.id}
              className={cn(
                "absolute cursor-pointer flex items-center justify-center group",
                selectedSkill?.id === skill.id ? "z-30" : "z-10"
              )}
              initial={{ 
                x: Math.cos(angle) * radius, 
                y: Math.sin(angle) * radius,
                opacity: 0,
                scale: 0.5
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedSkill(skill)}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              animate={{
                x: Math.cos(angle + (Date.now() / 10000)) * radius,
                y: Math.sin(angle + (Date.now() / 10000)) * radius,
              }}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all duration-300",
                selectedSkill?.id === skill.id ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.3)]" : "border-white/10 hover:border-primary/50",
                skill.color
              )}>
                {skill.icon}
              </div>
              
              {/* Tooltip */}
              <AnimatePresence>
                {(hoveredSkill?.id === skill.id || selectedSkill?.id === skill.id) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface px-3 py-1 rounded-md border border-white/10 text-xs font-semibold"
                  >
                    {skill.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Detail Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-lg glass p-6 rounded-3xl border-primary/20 z-50 flex items-center gap-6"
          >
            <div className={cn("w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-3xl", selectedSkill.color)}>
              {selectedSkill.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{selectedSkill.name}</h3>
              <p className="text-sm text-text-muted">{selectedSkill.desc}</p>
            </div>
            <button 
              onClick={() => setSelectedSkill(null)}
              className="text-text-muted hover:text-white transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;

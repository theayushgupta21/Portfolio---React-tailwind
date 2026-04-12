import React from "react";
import { motion } from "framer-motion";
import { Camera, Code, Sparkles, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass border-white/10 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          <Sparkles size={14} /> Available for freelance
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {`I am `}<span className="text-gradient">Ayush.</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Full-Stack MERN Developer & Visual Storyteller. Building <span className="text-primary">scalable web apps</span> with code, creativity, and <span className="text-secondary">real-world impact</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2 cursor-pointer text-sm md:text-base">
            <Code size={20} /> View Projects
          </button>
          <button className="px-6 md:px-8 py-3 md:py-4 glass border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer text-sm md:text-base">
            <Camera size={20} /> Photography
          </button>
          <a href="https://drive.google.com/file/d/1RpQA1DpLNcUcoh7HaxtGm_62RhcncLEA/view?usp=drive_link" download className="px-6 md:px-8 py-3 md:py-4 glass border-primary/20 text-primary rounded-full font-bold hover:bg-primary/10 transition-all flex items-center gap-2 cursor-pointer text-sm md:text-base">
            <Download size={20} /> Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-40">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

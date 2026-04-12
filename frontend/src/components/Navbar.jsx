import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../useStore/store";
import { Sun, Moon, Globe, User, Camera } from "lucide-react";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  const navItems = ["Home", "Skills", "Projects", "Experience", "Photography", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 backdrop-blur-md bg-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg md:text-2xl font-bold tracking-tighter"
      >
        <span className="text-primary tracking-[0.1em]">PORTRAITWALA</span>
      </motion.div>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest opacity-70 hover:opacity-100"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full glass hover:bg-white/10 transition-all"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="https://github.com/theayushgupta21" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-white/10 transition-all" title="GitHub"><Globe size={20} /></a>
        <a href="https://linkedin.com/in/theayushgupta21" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-white/10 transition-all" title="LinkedIn"><User size={20} /></a>
        <a href="https://www.instagram.com/portraitwalagallery" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-white/10 transition-all" title="Instagram"><Camera size={20} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
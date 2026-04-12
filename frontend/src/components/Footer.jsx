import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-text-muted mb-4 italic">
          "The best way to predict the future is to create it."
        </p>
        <div className="text-2xl font-bold tracking-tighter mb-6">
          <span className="text-primary">AYUSH</span>
          <span className="text-sm ml-2 font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--footer-secondary)' }}>GUPTA</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-xs font-bold uppercase tracking-[0.2em] opacity-40">
          <a href="https://github.com/theayushgupta21" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Github</a>
          <a href="https://linkedin.com/in/theayushgupta21" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/portraitwalagallery" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
        </div>
        <p className="text-[10px] uppercase tracking-widest opacity-20">
          © {new Date().getFullYear()} Ayush Portraitwala. All Rights Reserved. Crafted with passion & Three.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

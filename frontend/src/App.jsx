import React, { Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "./useStore/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Photography from "./components/Photography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scene from "./components/Three/Scene";

const MemoizedScene = React.memo(Scene);

const ThemeManager = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return null;
};

function App() {
  // App no longer re-renders when isDarkMode changes
  return (
    <div className="relative min-h-screen bg-transparent">
      <ThemeManager />
      {/* Background 3D Scene - Fixed */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <MemoizedScene />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Photography />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
